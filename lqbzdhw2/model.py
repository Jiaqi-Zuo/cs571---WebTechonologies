import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib


def train():
    df = pd.read_csv("SBP.csv")

    x = df[["Age", "Weight"]]
    y = df["SBP"]

    regr = LinearRegression()
    regr.fit(x, y)

    joblib.dump(regr, "myRegr.pkl")


def load(x,y):
    clf = joblib.load("myRegr.pkl")
    age = x
    weight = y
    x = pd.DataFrame([[age, weight]], columns=["Age", "Weight"])
    prediction = clf.predict(x)[0]
    return prediction
    print(prediction)


if __name__ == "__main__":
    train()
    x = 18
    y = 60
    load(x,y)
