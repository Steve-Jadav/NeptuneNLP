"""
This is the root python file used to launch the application.
"""

# Required libraries
from flask import Flask, render_template, request, redirect, url_for
from werkzeug import secure_filename
import os

# Custom Python code
from test import getContent

UPLOAD_FOLDER = "static/uploads"

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


"""
Each of the following routes redirect you to the 'summarization.html' page.
Multiple routes are assigned to this page, because it is supposed to
be the home page of the application.
"""

@app.route("/")
@app.route("/neptunenlp")
@app.route("/home")
@app.route("/summarization")
def summarization_html():
	return render_template('summarization.html', title='Summarization')


@app.route("/classification", methods=["GET", "POST"])
def classification_html():

	if request.method == "POST":

		if request.files:

			inputFile = request.files["fileInput"]
			filePath = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(inputFile.filename))
			inputFile.save(filePath)
			data = getContent(filePath)

			# Call the IR_Text_viz related methods at this point.

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
	app.run(debug=True) 	# To run the application in debug mode.
