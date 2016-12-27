import sqlite3
import random
from random import shuffle

shortage_q = random.randint(300, 500)
sql = """
SELECT branch_ID from branch_list
"""
conn = sqlite3.connect('../db.sqlite3')
result = conn.execute(sql)
branch = []
for i in result:
    branch.append(i[0])
shuffle(branch)
for i in range(10000):
    conn = sqlite3.connect('../db.sqlite3')
    _shortage_id = '000' + str(i)
    _product_id = '000' + str(random.randint(1, 500))
    c = conn.cursor()
    c.execute("""
        INSERT INTO Shortage(shortage_id, branch_id, product_id, quantity) values(?,?,?,?)
        """, (_shortage_id , branch[random.randint(1,2241)], _product_id, random.randint(10,300)))
    conn.commit()
