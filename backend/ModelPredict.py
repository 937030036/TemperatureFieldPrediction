import numpy as np
import pandas as pd
import torch
from torch.utils.data import Dataset, DataLoader
from sklearn.preprocessing import StandardScaler
import torch.nn as nn


class CustomDataset(Dataset):
    def __init__(self):
        # 数据标准化
        self.X_scaler = StandardScaler()
        self.y_scaler = StandardScaler()

    def __len__(self):
        return len(self.X)

    # def __getitem__(self, idx):
    #     return (
    #         torch.tensor(self.X[idx], dtype=torch.float32).to(device),
    #         torch.tensor(self.y[idx], dtype=torch.float32).to(device)
    #     )


class ModelPredict:
    model = None
    dataset = CustomDataset()

    @classmethod
    def predict(cls, data):
        if cls.model is None:
            cls.model = torch.load('best_model.pth', weights_only=False, map_location=torch.device('cpu'))
            cls.model.eval()
        # 使用保存的scaler转换输入
        X_scaled = cls.dataset.X_scaler.fit_transform(data)
        with torch.no_grad():
            inputs = torch.tensor(X_scaled, dtype=torch.float32)
            outputs = cls.model(inputs)
        # 反标准化输出
        cls.dataset.y_scaler.fit(outputs)
        return cls.dataset.y_scaler.inverse_transform(outputs.cpu().numpy())
