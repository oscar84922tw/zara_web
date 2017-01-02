# -*- coding:utf-8 -*-
from __future__ import division
import math
import csv
import re
import random
import sqlite3
import jieba
import csv
import re
import glob
from collections import Counter
from random import shuffle

# dict
path = '../jieba_dict/*.txt'
files = glob.glob(path)
for f in files:
    jieba.load_userdict(f)

# stopwords list
stopwords = [u'造型', u'設計']
class JiebaCounter():
    @staticmethod
    def countFrequence(data):
        data = re.sub(
            "[A-Za-z0-9\[\`\~\!\@\#\$\^\&\*\(\)\=\|\{\}\'\:\;\'\,\[\]\.\<\>\/\?\~\！\@\#\\\&\*\%]", "", data).replace('\n', '')
        tt = jieba.cut(data, cut_all=True)
        return tt

file = open('../new0.csv', 'r')
data = list(csv.reader(file))
shuffle(data)

for _, row in enumerate(data):
    # if _ < 500:
    #     _product_id = '000' + str(_)
    #     _type = row[0]
    #     _price = re.sub("[^0-9]", "", row[1])
    #     _name = row[2]
    #     _invetory = random.randint(10000, 30000)
    #     _sales = random.randint(90000, 120000)
    #     _orderQuntity = random.randint(400, 1300)
    #     _weight = random.randint(60, 500)
    #     conn = sqlite3.connect('../db.sqlite3')
    #     conn.text_factory = str
    #     c = conn.cursor()
    #     c.execute("""
    #         INSERT INTO branch_request(Product_ID, Name, Price, Weight, Type, Productivity, Sales_quantity, Inventory) values(?,?,?,?,?,?,?,?)
    #         """, ( _product_id, _name, _price, _weight, _type, _sales + _invetory, _sales, _invetory))
    #     conn.commit()
    # elif 500 <= _ < 700:
    #     _product_id = '000' + str(_)
    #     _type = row[0]
    #     _price = re.sub("[^0-9]", "", row[1])
    #     _name = row[2]
    #     _invetory = random.randint(10000, 30000)
    #     _sales = random.randint(90000, 120000)
    #     _orderQuntity = random.randint(400, 1300)
    #     _weight = random.randint(60, 500)
    #     _url = row[3]
    #     _publish_date = '2017' + '0' + \
    #         str(random.randint(2, 9)) + str(random.randint(10, 28))
    #     conn = sqlite3.connect('../db.sqlite3')
    #     conn.text_factory = str
    #     c = conn.cursor()
    #     c.execute("""
    #         INSERT INTO design_under_production(product_ID, Name, recommend_price, weight, Type, Productivity, publish_date, img_url) values(?,?,?,?,?,?,?,?)
    #         """, ( _product_id, _name, _price, _weight, _type, _sales + _invetory, _publish_date, _url))
    #     conn.commit()
    if 700 <= _:
        print('============================' + row[2] + '========================')
        _product_id = '000' + str(_)
        _type = row[0]
        _price = re.sub("[^0-9]", "", row[1])
        _name = row[2]
        _url = row[3]
        keywords = JiebaCounter.countFrequence(_name)
        con_all_num = sqlite3.connect('../db.sqlite3')
        con_all_num.text_factory = str
        cc = con_all_num.cursor()
        all_frequences = 0
        all_keyword_frequence = cc.execute("""
                   SELECT frequence FROM keyword_counter
                   """)
        for fq in all_keyword_frequence:
            all_frequences += fq[0]
        con_all_num.close()
        for keyword in keywords:
            if len(keyword) > 1:
                print(keyword)
                con1 = sqlite3.connect('../db.sqlite3')
                con1.text_factory = str
                c1 = con1.cursor()
                c1_result = c1.execute(("""
                           SELECT frequence FROM keyword_counter WHERE keyword='%s'
                           """) % (keyword))
                keyword_self = 0
                for j in c1_result:
                    keyword_self += j[0]
                c1.close()
                conn = sqlite3.connect('../db.sqlite3')
                conn.text_factory = str
                c = conn.cursor()
                keyword_weight = float(keyword_self / all_frequences) * 1000
                c.execute("""
                    INSERT INTO keyword_relations(product_id, product_name, keyword, keyword_weight, price, img_url) values(?,?,?,?,?,?)
                    """, (_product_id, _name, keyword, keyword_weight , _price, _url))
                conn.commit()
                conn.close()
        print('=============================================================================')
