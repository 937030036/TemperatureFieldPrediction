import joblib
from NetModel import CustomMultiOutputModel, get_feature_importances


class ModelPredict:
    model_assets = None

    @classmethod
    def predict_data(cls, data):
        if cls.model_assets is None:
            cls.model_assets = joblib.load('multitarget_lgbm_model.pkl')
        # 2. 提取各个组件
        final_model = cls.model_assets['model']
        scaler = cls.model_assets['scaler']
        selector = cls.model_assets['selector']  # 注意：可能是None（如果未使用特征选择）

        # 3. 准备单条样本数据（示例数据，请替换为实际特征值）
        # 注意：特征必须与训练数据完全相同的顺序和维度
        # sample_data = pd.DataFrame([data]).to_numpy()

        scaled_data = scaler.transform(data)
        # 4. 特征选择（如果训练时使用了）
        sample_data = selector.transform(scaled_data)

        # 5. 特征标准化

        # 6. 进行预测
        prediction = final_model.predict(sample_data)

        # 7. 处理预测结果（多目标输出）
        # 假设模型预测3个目标（输出3个值）
        # print("预测结果（多目标）:", prediction[0])  # [target1, target2, target3]
        return prediction[0]


if __name__ == '__main__':
    ModelPredict.predict_data([i for i in range(232)])
