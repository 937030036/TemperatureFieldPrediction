import torch
from sklearn.preprocessing import StandardScaler
import joblib
import Config


class ModelPredict:
    model = None
    scaler_x = StandardScaler()
    scaler_y = joblib.load(Config.scaler_bin_path)

    @classmethod
    def predict(cls, data):
        if cls.model is None:
            cls.model = torch.load(Config.best_model_path, weights_only=False, map_location=torch.device('cpu'))
            cls.model.eval()
        # 使用保存的scaler转换输入
        X_scaled = cls.scaler_x.fit_transform(data).T
        with torch.no_grad():
            inputs = torch.tensor(X_scaled, dtype=torch.float32)
            outputs = cls.model(inputs)
        # 反标准化输出
        tmp = cls.scaler_y.inverse_transform(outputs.cpu().numpy())
        return tmp
