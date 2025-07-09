import sqlite3

import datetime


def db_init():
    conn = sqlite3.connect('history.db')
    c = conn.cursor()

    cursor = c.execute('''select name from sqlite_master''')
    if len([row for row in cursor]) > 0:
        return

    strmain = r"'2DCS_AI_HAD81CT"
    number = 117
    strres_117177 = ""
    for i in range(number, 177):
        strtmp = strmain + str(i) + "' FLOAT NOT NULL,"
        strres_117177 += strtmp
    strres_001116 = ""
    for i in range(1, 117):
        strtmp = strmain + str(i) + "' FLOAT NOT NULL,"
        strres_001116 += strtmp

    strres_177232 = ""
    for i in range(177, 233):
        strtmp = strmain + str(i) + "' FLOAT NOT NULL,"
        strres_177232 += strtmp

    strres = strres_117177 + strres_001116 + strres_177232
    strres = strres.strip(',')
    c.execute('''CREATE TABLE surface_history(ID INTEGER PRIMARY KEY,Time DATATIME NOT NULL,''' + strres + ''');''')
    # c.execute("INSERT INTO history (NAME,AGE) VALUES ('Paul', 532.92 )")
    # cursor = c.execute("SELECT *  from history")
    # for row in cursor:
    #     print(row)
    conn.commit()

    # 预测表
    strmain = r"'2DCS_AI__A010S0806N0"
    number = 1
    strres = ""
    for i in range(number, 60):
        if 26 < i < 30:
            continue

        strtmp = strmain + str(i) + "_OUT' FLOAT NOT NULL,"
        strres += strtmp

    strres = strres.strip(',')
    c.execute('''CREATE TABLE predict(ID INTEGER PRIMARY KEY,Time DATATIME NOT NULL,
    '2DCS_AI__A010S0806N077_OUT' FLOAT NOT NULL,
    '2DCS_AI__A010S0806N078_OUT' FLOAT NOT NULL,
    '2DCS_AI__A010S0806N079_OUT' FLOAT NOT NULL,
    '2DCS_AI__A010S0806N080_OUT' FLOAT NOT NULL,''' + strres + ''');''')

    conn.commit()
    conn.close()


def db_insert_surface_history(datastr):
    conn = sqlite3.connect('history.db')
    c = conn.cursor()
    datastr = datastr.strip('[]')
    dt = datetime.datetime.now()

    c.execute(r"INSERT INTO surface_history VALUES (NULL,'" + str(dt) + "'," + datastr + " )")
    conn.commit()
    conn.close()


def db_insert_predict(datastr):
    conn = sqlite3.connect('history.db')
    c = conn.cursor()
    datastr = datastr.strip('[]')
    dt = datetime.datetime.now()

    c.execute(r"INSERT INTO predict VALUES (NULL,'" + str(dt) + "'," + datastr + " )")
    conn.commit()
    conn.close()


if __name__ == '__main__':
    db_init()
