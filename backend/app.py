from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
from ModelPredict import ModelPredict
import torch.nn as nn
import time

app = Flask(__name__)
CORS(app)


class RegressionModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            # 输入层 -> 隐藏层1
            nn.Linear(232, 1024),
            nn.BatchNorm1d(1024),
            nn.ReLU(),
            nn.Dropout(0.2),

            nn.Linear(1024, 512),
            nn.BatchNorm1d(512),
            nn.ReLU(),
            nn.Dropout(0.2),

            nn.Linear(512, 256),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Dropout(0.2),

            # 隐藏层2
            nn.Linear(256, 128),
            nn.BatchNorm1d(128),
            nn.ReLU(),
            nn.Dropout(0.2),

            # 隐藏层3
            nn.Linear(128, 64),
            nn.BatchNorm1d(64),
            nn.ReLU(),
            nn.Dropout(0.2),

            # 隐藏层4 (可选)
            # nn.Linear(64, 32),
            # nn.BatchNorm1d(32),
            # nn.ReLU(),
            # nn.Dropout(0.2),

            # 输出层
            nn.Linear(64, 60)
        )

    def forward(self, x):
        return self.layers(x)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/grid', methods=['GET'])
def get_griddata():  # put application's code here

    start = time.time()

    sample_input = ((np.random.rand(232) * 200 + 300)
                    .reshape(-1, 1))
    res = ModelPredict.predict(sample_input)[0]
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
    app.run()
