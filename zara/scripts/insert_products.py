import csv
import re
import random
import sqlite3
import jieba
from random import shuffle
import csv
import re
from collections import Counter


class JiebaCounter():

    @staticmethod
    def countFrequence(data):
        data = re.sub(
            "[A-Za-z0-9\[\`\~\!\@\#\$\^\&\*\(\)\=\|\{\}\'\:\;\'\,\[\]\.\<\>\/\?\~\！\@\#\\\&\*\%]", "", data).replace('\n', '')
        tt = jieba.cut(data, cut_all=True)
        # hash = {}
        # result = Counter(tt)
        # for item in tt:
        #     if item in hash and len(item) > 1:
        #         hash[item] += 1
        #     else:
        #         hash[item] = 1
        return tt
        # return sorted(hash.items(), key=operator.itemgetter(1), reverse=True)

file = open('../new0.csv', 'r')
data = list(csv.reader(file))
shuffle(data)

for _, row in enumerate(data):
    # print(row)
    if _ < 500:
        _product_id = '000' + str(_)
        _type = row[0]
        _price = re.sub("[^0-9]", "", row[1])
        _name = row[2]
        _invetory = random.randint(300, 1200)
        _sales = random.randint(1000, 3000)
        _orderQuntity = random.randint(400, 1300)
        _weight = random.randint(60, 500)
        conn = sqlite3.connect('../db.sqlite3')
        conn.text_factory = str
        c = conn.cursor()
        c.execute("""
            INSERT INTO branch_request(Product_ID, Name, Price, Weight, Type, Productivity, Sales_quantity, Inventory) values(?,?,?,?,?,?,?,?)
            """, ( _product_id, _name, _price, _weight, _type, _sales + _invetory, _sales, _invetory))
        conn.commit()
    elif 500 <= _ < 800:
        _product_id = '000' + str(_)
        _type = row[0]
        _price = re.sub("[^0-9]", "", row[1])
        _name = row[2]
        _invetory = random.randint(300, 1200)
        _sales = random.randint(1000, 3000)
        _orderQuntity = random.randint(400, 1300)
        _weight = random.randint(60, 500)
        _url = row[3]
        _publish_date = '2017' + '0' + \
            str(random.randint(2, 9)) + str(random.randint(10, 28))
        conn = sqlite3.connect('../db.sqlite3')
        conn.text_factory = str
        c = conn.cursor()
        c.execute("""
            INSERT INTO design_under_production(product_ID, Name, recommend_price, weight, Type, Productivity, publish_date, img_url) values(?,?,?,?,?,?,?,?)
            """, ( _product_id, _name, _price, _weight, _type, _sales + _invetory, _publish_date, _url))
        conn.commit()
    else:
        _product_id = '000' + str(_)
        _type = row[0]
        _price = re.sub("[^0-9]", "", row[1])
        _name = row[2]
        keywords = JiebaCounter.countFrequence(_name)
        for keyword in keywords:
            print(keyword)
        _weight = random.randint(60, 500)

        conn = sqlite3.connect('../db.sqlite3')
        conn.text_factory = str
        c = conn.cursor()
        c.execute("""
            INSERT INTO design_under_production(product_ID, Name, recommend_price, weight, Type, Productivity, publish_date, img_url) values(?,?,?,?,?,?,?,?)
            """, ( _product_id, _name, _price, _weight, _type, _sales + _invetory, _publish_date, _url))
        conn.commit()
