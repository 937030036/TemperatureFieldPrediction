from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


@app.route('/grid', methods=['GET'])
def get_griddata():  # put application's code here
    data = np.random.uniform(800, 1300, (3, 4)).round(2)
    response = {"data": data.tolist()}
    return jsonify(response), 200


if __name__ == '__main__':
    app.run()
