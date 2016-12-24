import sqlite3
import random
from random import shuffle

region_id = ['0' + str(i) + '00' for i in range(130)]
shuffle(region_id)
region = ['Asia', 'America', 'Africa', 'Europe']
ranking = list(range(1, 1221))
shuffle(ranking)
for i in range(1221):
    conn = sqlite3.connect('../db.sqlite3')
    chooser = random.randint(0, 3)
    customer_num = random.randint(400, 4000)
    c = conn.cursor()
    branch_ID = ''

    if len(str(i)) < 2:
        branch_ID = region_id[i / 10 + 1] + str(i)
    elif 2 <= len(str(i)) < 3:
        branch_ID = region_id[i / 10 + 1] + str(i)
    elif 3 <= len(str(i)) < 4:
        branch_ID = region_id[i / 10 + 1] + str(i)
    else:
        branch_ID = region_id[i / 10 + 1] + str(i)
    c.execute("""
        INSERT INTO branch_list(branch_ID,region, customer_num, ranking) values(?,?,?,?)
        """, (branch_ID , region[chooser], customer_num, ranking[i]))
    conn.commit()
