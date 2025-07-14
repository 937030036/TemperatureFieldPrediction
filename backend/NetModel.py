import lightgbm as lgb
import numpy as np
from sklearn.base import BaseEstimator, RegressorMixin


class CustomMultiOutputModel(BaseEstimator, RegressorMixin):
    """可序列化的多输出模型类"""

    def __init__(self, models=None):
        self.models = models if models is not None else []

    def fit(self, X, y, eval_set=None, early_stopping_rounds=None, verbose=False):
        """训练模型（支持早停）"""
        if eval_set is None:
            eval_set = []

        self.models = []
        n_targets = y.shape[1]

        for i in range(n_targets):
            if verbose:
                print(f"\nTraining model for target {i + 1}/{n_targets}")

            # 创建新模型
            model = lgb.LGBMRegressor(verbosity=-1)

            # 配置早停回调
            callbacks = []
            if early_stopping_rounds and len(eval_set) > 0:
                valid_set = [(eval_set[0][0], eval_set[0][1][:, i])]
                callbacks.append(lgb.early_stopping(early_stopping_rounds))

            # 训练模型
            model.fit(
                X, y[:, i],
                eval_set=valid_set if callbacks else None,
                callbacks=callbacks
            )
            self.models.append(model)
        return self

    def predict(self, X):
        """预测所有目标值"""
        predictions = np.column_stack([model.predict(X) for model in self.models])
        return predictions

    def get_feature_importances(self, importance_type='gain'):
        """获取平均特征重要性"""
        importances = []
        for model in self.models:
            imp = model.booster_.feature_importance(importance_type=importance_type)
            importances.append(imp)
        return np.mean(importances, axis=0)


def get_feature_importances(estimator):
    """从多输出模型中提取平均特征重要性"""
    if hasattr(estimator, 'get_feature_importances'):
        return estimator.get_feature_importances()

    # 兼容MultiOutputRegressor
    all_importances = [e.booster_.feature_importance(importance_type='gain')
                       for e in estimator.estimators_]
    return np.mean(all_importances, axis=0)
