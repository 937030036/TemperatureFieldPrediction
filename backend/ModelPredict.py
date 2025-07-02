import torch
from sklearn.preprocessing import StandardScaler


class ModelPredict:
    model = None
    scaler = StandardScaler()

    @classmethod
    def predict(cls, data):
        if cls.model is None:
            cls.model = torch.load('best_model.pth', weights_only=False, map_location=torch.device('cpu'))
            cls.model.eval()
        # 使用保存的scaler转换输入
        X_scaled = cls.scaler.fit_transform(data).T
        with torch.no_grad():
            inputs = torch.tensor(X_scaled, dtype=torch.float32)
            outputs = cls.model(inputs)
        # 反标准化输出
        tmp = cls.scaler.inverse_transform(outputs.cpu().numpy())
        return tmp
