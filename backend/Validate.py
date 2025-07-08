vaild_arr = [-1 for _ in range(232)]
vaild_flag = False


def get_vaild_data(nddata):
    global vaild_flag
    global vaild_arr
    if not vaild_flag:
        for i in range(0, len(nddata)):
            if not nddata[i] == -1:
                vaild_arr[i] = nddata[i][0]
        if vaild_arr.count(-1) == 0:
            vaild_flag = True
            print("vaild_succ")
        return nddata

    for i in range(0, len(nddata)):
        if (abs(nddata[i][0] - vaild_arr[i]) / vaild_arr[i]) > 0.1:
            nddata[i][0] = vaild_arr[i]
        else:
            vaild_arr[i] = nddata[i][0]

    return nddata
