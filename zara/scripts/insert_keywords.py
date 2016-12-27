#! -*- coding:utf-8 -*-
import sqlite3
import random
import operator
import jieba
import csv
import re
import glob

from random import shuffle
from collections import Counter

# dict
path = '../jieba_dict/*.txt'
files = glob.glob(path)
for f in files:
    jieba.load_userdict(f)

# stopwords list
stopwords = [u'造型', u'設計']


class JiebaCounter():

    @staticmethod
    def countFrequence(data, hash):
        data = re.sub(
            "[A-Za-z0-9\[\`\~\!\@\#\$\^\&\*\(\)\=\|\{\}\'\:\;\'\,\[\]\.\<\>\/\?\~\！\@\#\\\&\*\%]", "", data).replace('\n', '').replace(' ', '')
        tt = jieba.cut(data, cut_all=True)

        for item in tt:
            # print(len(item))
            if item in hash and len(item) > 1 and item not in stopwords:
                hash[item] += 1
            else:
                hash[item] = 1

        return sorted(hash.items(), key=operator.itemgetter(1), reverse=True)

f = open('../zara_female.csv')
hash = {}
for i in csv.DictReader(f):
    JiebaCounter.countFrequence(i['product_name'], hash)

for key, value in hash.iteritems():
    keyword = (u''.join(key).encode('utf-8'))
    if len(keyword.decode("utf-8")) > 1:
        conn = sqlite3.connect('../db.sqlite3')
        conn.text_factory = str
        c = conn.cursor()
        c.execute("""
            INSERT INTO keyword_counter(keyword, frequence) values(?,?)
            """, (keyword, value))
        conn.commit()
