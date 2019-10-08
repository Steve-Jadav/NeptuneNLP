
from prep import Preprocess
from lstm_model import Classifier_LSTM
import multiprocessing
import shutil
import pickle

def predictAndVisualize():
    # get the file name and save it somewhere
    # use the prev functions and predict
    # merge with raw text inp file
    pass


class Views(object):

    def __init__(self):
        pass

    def get_context(self, file_path):

        p = Preprocess(path=file_path)
        p.process_raw()
        p.get_test_data()

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

        for x in classes:
            classes[x] = classes[x] * 100 / total

        context = {'data': data, 'classes': classes}
        filehandler = open('context.pkl', 'wb')
        pickle.dump(context, filehandler)
        filehandler.close()

        """
        p = multiprocessing.Process(target=getContext)
        p.start()
        filehandler = open('context.pkl', 'rb')
        context = pickle.load(filehandler)
        return context
        # context = getContext()
        return render(request, "textViewer.html", context)
        print("asdasd ajksdh kajshd kjas h")
        return render(request, 'home.html')
        """

    def get_file_content(self, file_path=None)->str:

        ''' Returns the content of the input file.
    	------------------
    	:param File path:
    	:return: File content
    	'''

        if file_path is None:
            return None

        with open(file_path, 'r', encoding='utf-8', errors='ignore') as input_file:
            data = input_file.read()
            input_file.close()

        return data
