'''from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.conf import settings
from django.core.files.storage import FileSystemStorage'''

from prep import Preprocess
from lstm_model import Classifier_LSTM
import multiprocessing
import shutil

def predictAndVisualize():
    # get the file name and save it somewhere
    # use the prev functions and predict
    # merge with raw text inp file
    pass


class Views(object):

    def __init__(self):
        pass

    def get_context(file_path):

        '''Most recent'''

        print (file_path)
        p = Preprocess(file_path)
        p.process_raw()
        p.getTestData()

        # Prediction
        testbob = Classifier_LSTM('test_data.h5')
        df = testbob.predict()
        grouped = df.groupby(['line'])
        data = []
        for l, group in grouped:
            line = {}
            for i, row in group.iterrows():
                line[i] = {
                    "class": row['predict'],
                    "text": row['text_x']
                }
            data.append(line)
        grouped = df.groupby('predict')

        classes = {}
        total = 0
        for key, group in grouped:
            total += len(group)
            classes[key] = len(group)

        print(total)

        for x in classes:
            classes[x] = classes[x] * 100 / total

        context = {'data': data, 'classes': classes}
        filehandler = open('context.pkl', 'wb')
        pickle.dump(context, filehandler)


def upload(request):

    if request.method == 'POST' and request.FILES['myfile']:
        shutil.rmtree('input')  # Removes the directory
        os.mkdir('input')   # Recreates the directory
        myfile = request.FILES['myfile']   # Get the file from the web-app
        fs = FileSystemStorage(location = 'input')
        filename = fs.save(myfile.name, myfile) # Save it in the 'input' directory.
        uploaded_file_url = fs.url(filename)

        def getContext():
            folder = 'input/'
            p = preprocess('input')
            p.process_raw()
            p.getTestData()

            # predict
            testob = Classifier_LSTM('test_data.h5')
            df = testob.predict()
            grouped = df.groupby(['line'])
            data = []
            for l, group in grouped:
                line = {}
                for i, row in group.iterrows():
                    line[i] = {
                        "class": row['predict'],
                        "text": row['text_x']
                    }
                data.append(line)
            grouped = df.groupby('predict')

            classes = {}
            total = 0
            for key, group in grouped:
                total += len(group)
                classes[key] = len(group)

            print(total)

            for x in classes:
                classes[x] = classes[x] * 100 / total

            context = {'data': data, 'classes': classes}
            filehandler = open('context.pkl', 'wb')
            pickle.dump(context, filehandler)

        # getContext()
        p = multiprocessing.Process(target=getContext)
        p.start()
        filehandler = open('context.pkl', 'rb')
        context = pickle.load(filehandler)
        # context = getContext()
        return render(request, "textViewer.html", context)
    print("asdasd ajksdh kajshd kjas h")
    return render(request, 'home.html')
