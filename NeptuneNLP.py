"""
This is the root Python file used to launch the application.
"""

# Required libraries
from flask import Flask, render_template, request, redirect, url_for
from werkzeug import secure_filename
import os

# Custom Python code
from test import get_file_content
from views import Views

# Instantiate flask app
app = Flask(__name__)

# Load the configuration file
app.config.from_object('config.Config')



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
	return render_template('summarization.html', title='Summarization')


@app.route("/classification", methods=["GET", "POST"])
def classification_html():

	if request.method == "POST":

		if request.files:

			input_file = request.files["fileInput"]
			file_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(input_file.filename))
			input_file.save(file_path)
			data = get_file_content(file_path = file_path)

			# Call the IR_Text_viz related methods at this point.
			Views.get_context(file_path)

			return render_template('classification.html', title='Classification',
									message='File processed', data=data)
			#return redirect(url_for('classification_html', data=data))

	return render_template('classification.html', title='Classification', message=None, data=None)


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


if __name__ == "__main__":
	app.run(debug=app.config['DEBUG'], port=app.config['PORT'])
