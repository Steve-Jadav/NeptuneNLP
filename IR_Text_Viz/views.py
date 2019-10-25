
from IR_Text_Viz.prep import Preprocess
from IR_Text_Viz.lstm_model import Classifier_LSTM
import multiprocessing
import shutil
import pickle

class Views(object):

    def __init__(self, file_path):
        self.path = file_path


    def get_context(self):

        p = Preprocess(path=self.path)
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

        # Todo: Cap the values for classes[x] somewhere in this range [1, 27]
        for x in classes:
            print ('classes[x]: ', classes[x])
            classes[x] = classes[x] * 100 / total
            print (classes[x])

        context = {'data': data, 'classes': classes}
        filehandler = open('context.pkl', 'wb')
        pickle.dump(context, filehandler)
        filehandler.close()
        #print ('Starting multiprocess')
        #p = multiprocessing.Process(target=self.get_context)
        #p.start()

        filehandler = open('context.pkl', 'rb')
        context = pickle.load(filehandler)
        filehandler.close()
        return context
        #return render(request, "textViewer.html", context)


    def get_file_content(self)->str:

        ''' Returns the content of the input file.
    	------------------
    	:param File self.path:
    	:return: File content
    	'''

        if self.path is None:
            return None

        with open(self.path, 'r', encoding='utf-8', errors='ignore') as input_file:
            data = input_file.read()
            input_file.close()

        return data
