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
    res = list(ModelPredict.predict(sample_input)[0])
    tmp = []
    for i in res:
        tmp.append(round(float(i), 2))

    end = time.time()
    print(end - start)
    return tmp, 200


if __name__ == '__main__':
    app.run()
