#! -*- coding:utf-8 -*-
import sqlite3
import random
from random import shuffle


import jieba
import csv
import re
from collections import Counter
import glob
path = '../jieba_dict/*.txt'
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
        return (result)
        # return sorted(hash.items(), key=operator.itemgetter(1), reverse=True)

f = open('../new0.csv')
data = ''
for i in csv.DictReader(f):
    data += i['product_name']

    # hash += data
    # print(hash)
count = dict(JiebaCounter.countFrequence(data))
for key, value in count.iteritems():
    print(u''.join(key).encode('utf-8'))
    print(value)
# shortage_q = random.randint(300, 500)
# sql = """
# SELECT branch_ID from branch_list
# """
# conn = sqlite3.connect('../db.sqlite3')
# result = conn.execute(sql)
# branch = []
# for i in result:
#     branch.append(i[0])
# shuffle(branch)
# for i in range(10000):
#     conn = sqlite3.connect('../db.sqlite3')
#     _shortage_id = '000' + str(i)
#     _product_id = '000' + str(random.randint(1, 500))
#     c = conn.cursor()
#     c.execute("""
#         INSERT INTO Shortage(shortage_id, branch_id, product_id, quantity) values(?,?,?,?)
#         """, (_shortage_id , branch[random.randint(1,2241)], _product_id, random.randint(10,300)))
#     conn.commit()
