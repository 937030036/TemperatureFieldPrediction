import pandas as pd

res = []
i = -1


def mock_init():
    global res
    df1 = pd.read_excel('data/水冷壁垂直管段后墙40米区域温度第1部分.xls', header=None).iloc[1:, 1:]
    df2 = pd.read_excel('data/水冷壁垂直管段后墙40米区域温度第2部分.xls', header=None).iloc[1:, 1:]
    df3 = pd.read_excel('data/水冷壁垂直管段前墙40米区域温度第1部分.xls', header=None).iloc[1:, 1:]
    df4 = pd.read_excel('data/水冷壁垂直管段前墙40米区域温度第2部分.xls', header=None).iloc[1:, 1:]
    df5 = pd.read_excel('data/水冷壁垂直管段右墙40米区域温度第1部分.xls', header=None).iloc[1:, 1:]
    df6 = pd.read_excel('data/水冷壁垂直管段右墙40米区域温度第2部分.xls', header=None).iloc[1:, 1:]
    df7 = pd.read_excel('data/水冷壁垂直管段左墙40米区域温度第1部分.xls', header=None).iloc[1:, 1:]
    df8 = pd.read_excel('data/水冷壁垂直管段左墙40米区域温度第2部分.xls', header=None).iloc[1:, 1:]

    res = pd.concat([df1, df2, df3, df4, df5, df6, df7, df8], axis=1)
    res = res.astype(float)
    res = res.to_numpy()


def get_one_mock_data():
    global res
    global i
    i = i + 1
    return res[i]
