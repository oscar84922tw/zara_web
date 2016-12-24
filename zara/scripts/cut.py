#! -*- coding:utf-8 -*-
import jieba
import csv
import re
from collections import Counter
import glob
path = '../../jieba_dict/*.txt'
files = glob.glob(path)
for f in files:
     jieba.load_userdict(f)

class JiebaCounter():

    @staticmethod
    def countFrequence(data):
        data = re.sub(
            "[A-Za-z0-9\[\`\~\!\@\#\$\^\&\*\(\)\=\|\{\}\'\:\;\'\,\[\]\.\<\>\/\?\~\！\@\#\\\&\*\%]", "", data).replace('\n', '')
        tt = jieba.cut(data, cut_all=True)
        # hash = {}
        result = Counter(tt)
        # for item in tt:
        #     if item in hash and len(item) > 1:
        #         hash[item] += 1
        #     else:
        #         hash[item] = 1
        print(result)
        # return sorted(hash.items(), key=operator.itemgetter(1), reverse=True)

f = open('../new.csv')
data = ''
for i in csv.DictReader(f):
    data += i['product_name']

    # hash += data
    # print(hash)
print(JiebaCounter.countFrequence(data))
