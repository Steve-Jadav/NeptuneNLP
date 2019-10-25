"""
This is the root Python file used to launch the application.
"""

# Required libraries
from flask import Flask, render_template, request, redirect, url_for
from flask_socketio import SocketIO, emit, send
from persistqueue import Queue
import time, threading
from threading import Lock
from werkzeug import secure_filename
import os

# Custom Python classes
from IR_Text_Viz.views import Views
from Summarization.summary_models import summarize_tf, summarize_page_rank
#from Summarization.qna import get_response

task_queue = Queue('./queue')

# Instantiate flask app
app = Flask(__name__)

# Load the configuration file
app.config.from_object('config.Config')


socketio = SocketIO(app, async_mode='threading')
thread = None
thread_lock = Lock()
clients = set()



"""
Each of the following routes redirect you to the 'summarization.html' page.
Multiple routes are assigned to this page, because it is supposed to
be the home page of the application.
"""

@app.route("/")
@app.route("/neptune")
@app.route("/home")
@app.route("/summarization")
def summarization_html():
	t1 = threading.Thread(target=request_thread_reader)
	t1.start()
	return render_template('summarization.html', title='Summarization')


@app.route("/classification", methods=["GET", "POST"])
def classification_html():

	if request.method == "POST":

		if request.files:

			input_file = request.files["fileInput"]
			file_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(input_file.filename))
			input_file.save(file_path)

			views = Views(file_path=file_path)
			data: dict = views.get_context()

			""" data is a dictionary and it has 2 keys: 'data' and 'classes'
			'data' is a list of dictionaries
			'classes' is a pure dictionary """

			return render_template('classification.html', title='Classification',
									message='File processed', data=data)

	return render_template('classification.html', title='Classification')


@app.route("/networkanalysis")
def network_analysis_html():
	return render_template('networkanalysis.html', title='Network Analysis')


@app.route("/qna")
def qna_html():
	return render_template('qna.html', title='QnA')


# This route is used to redirect the user in case a page requested is not found on the server.
@app.errorhandler(404)
def page_not_found(e):
	return render_template('pagenotfound.html')


@socketio.on('connected')
def connected():
    print('Connected')


@socketio.on('request')
def handle_request(data):
    data['sid'] = request.sid
    clients.add(request.sid)
    task_queue.put(data)


@socketio.on('disconnect')
def disconnect():
    if request.sid in clients:
        clients.remove(request.sid)
    print('Disconnected')


def request_thread_reader():

    while True:
        if task_queue.qsize():
            task = task_queue.get()
            if task['sid'] in clients:
                if task['type'] == 'summarize':
                    if task['summary_type'] == 'page_rank':
                        task['summary'] = summarize_page_rank(task['text'],
                                                              keywords=task['keywords'] if 'keywords' in task else [],
                                                              n=task['n'])
                    else:
                        task['summary'] = summarize_tf(task['text'],
                                                       keywords=task['keywords'] if 'keywords' in task else [],
                                                       count=task['n'])
                    del task['text']
                elif task['type'] == 'QnA':
                    task['answer'] = get_response(task['text'], task['question'])

                sid = task['sid']
                del task['sid']
                socketio.emit('message', task, room=sid)
            task_queue.task_done()

        else:
            time.sleep(1)



if __name__ == "__main__":
	socketio.run(app, debug = app.config['DEBUG'], port = app.config['PORT'])
