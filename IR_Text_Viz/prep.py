import os
import pandas as pd
import numpy as np
from IR_Text_Viz.class_prim import *
import matplotlib.pyplot as plt
from nltk import sent_tokenize
#from lstm_model import *

pd.set_option('display.expand_frame_repr', False)

class Preprocess:

    def __init__(self, path):
        self.path = path

    def remove_short_sentences(self, row):
        if len(row) > 20:
            return row
        else:
            return

    def get_class(self,row):
        for key, vals in error_map.items():
            for v in vals:
                if v in row:
                    return key
        return None

    def process_raw(self):

        main_df = pd.DataFrame()

        f = open(self.path, encoding="windows-1252")
        df = pd.DataFrame()
        sent = []
        lines = []
        pos = []
        end_pos = []

        for line_no, line in enumerate(f.readlines()):
            p = 0
            sent_array = sent_tokenize(line)
            for s in sent_array:
                lines.append(line_no)
                sent.append(s)
                pos.append(p)
                p += len(s)
                end_pos.append(p)

        df['text'] = sent
        df['line'] = lines
        df['start_pos'] = pos
        df['end_pos'] = end_pos
        df['file'] = self.path
        main_df = main_df.append(df)
        f.close()

        main_df.to_hdf('raw_data.h5',key='raw',min_itemsize={'text': 4096})


    def get_training_data(self):
        df = pd.read_hdf('raw_data_bkp.h5', key='raw')
        df['text'] = df['text'].apply(self.remove_short_sentences)
        df.dropna(subset=['text'],inplace=True)
        df['class'] = df['text'].apply(self.get_class)
        df.dropna(subset=['class'], inplace=True)
        df.to_hdf('training_data.h5', key='key', format='t')

    def get_test_data(self):
        df = pd.read_hdf('raw_data.h5', key='raw')
        df['text'] = df['text'].apply(self.remove_short_sentences)
        df.dropna(subset=['text'], inplace=True)
        df['class'] = df['text'].apply(self.get_class)
        df = df[df['class'].isnull()]
        df.to_hdf('test_data.h5', key='key', format='t')
