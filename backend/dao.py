import sqlite3


def db_init():
    conn = sqlite3.connect('history.db')
    c = conn.cursor()
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
    c.execute('''CREATE TABLE history(ID INTEGER PRIMARY KEY,''' + strres + ''');''')
    # c.execute("INSERT INTO history (NAME,AGE) VALUES ('Paul', 532.92 )")
    # cursor = c.execute("SELECT *  from history")
    # for row in cursor:
    #     print(row)
    conn.commit()
    conn.close()


def db_insert(datastr):
    conn = sqlite3.connect('history.db')
    c = conn.cursor()
    datastr = datastr.strip('[]')

    c.execute("INSERT INTO history VALUES (NULL," + datastr + " )")
    conn.commit()
    conn.close()


if __name__ == '__main__':
    db_init()
