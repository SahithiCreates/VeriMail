from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import re

from backend.utils.gemini import explain_email

app = Flask(__name__)
CORS(app)

# load model
model = joblib.load("backend/model/phishing_detector.pkl")
vectorizer = joblib.load("backend/model/tfidf_vectorizer.pkl")


# -----------------------
# preprocessing
# -----------------------
def preprocess(text):
    text = text.lower()
    text = re.sub(r'[^a-z\s]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


# -----------------------
# 1. FAST PREDICT API
# -----------------------
@app.route("/predict", methods=["POST"])
def predict():
    data = request.json.get("email", "")

    clean_text = preprocess(data)
    vec = vectorizer.transform([clean_text])

    pred = int(model.predict(vec)[0])
    prob = model.predict_proba(vec)[0]

    prediction_label = "Phishing" if pred == 1 else "Safe"
    confidence = float(max(prob))

    return jsonify({
        "prediction": prediction_label,
        "confidence": confidence
    })


# -----------------------
# 2. GEMINI EXPLANATION API
# -----------------------
@app.route("/explain", methods=["POST"])
def explain():
    data = request.json.get("email", "")
    prediction = request.json.get("prediction", "")

    explanation = explain_email(data, prediction)

    return jsonify({
        "explanation": explanation
    })


# -----------------------
# run
# -----------------------
if __name__ == "__main__":
    app.run(debug=True)