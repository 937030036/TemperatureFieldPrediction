from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np

import MockData
from NetModel import RegressionModel
import dao
from ModelPredict import ModelPredict
import time
from dao import db_insert_surface_history, db_insert_predict
from Validate import get_vaild_data

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/grid', methods=['GET'])
def get_griddata():  # put application's code here
    start = time.time()

    # 模拟输入接口
    mockdata = MockData.get_one_mock_data().reshape(-1, 1)
    sample_input = (np.random.rand(232) * 200 + 300).reshape(-1, 1)
    arr = sample_input.reshape(1, -1).tolist()[0]
    for i in range(len(arr)):
        arr[i] = round(arr[i], 4)
    # 存入数据库
    db_insert_surface_history(str(arr))

    # 处理坏点
    sample_input = get_vaild_data(sample_input)

    # 预测
    res = ModelPredict.predict(sample_input)[0]
    # 入库
    arr = res.tolist()
    for i in range(len(arr)):
        arr[i] = round(arr[i], 4)
    db_insert_predict(str(arr))

    res_33 = res[0:28].reshape(4, 7)
    res_45 = res[30:-2].reshape(4, 7)
    res_45 = list(res_45)
    tmp = []
    for row in res_45:
        rowlist = []
        for item in row:
            rowlist.append(round(float(item), 2))
        tmp.append(rowlist)

    sample_input = sample_input.reshape(1, -1)
    tmp_232 = []
    for i in sample_input[0]:
        tmp_232.append(round(float(i), 2))

    back = list(tmp_232[:60])
    front = list(tmp_232[60:120])
    right = list(tmp_232[120:176])
    left = list(tmp_232[176:])

    response = {'resdata': tmp, 'back': back, 'front': front, 'right': right, 'left': left}

    end = time.time()
    print(end - start)
    return jsonify(response), 200


if __name__ == '__main__':
    dao.db_init()
    MockData.mock_init()
    app.run()
