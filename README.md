# VeriMail

AI-powered phishing email detection and explanation platform that combines Machine Learning and Generative AI to identify malicious emails and provide human-readable security insights.

## Overview

VeriMail helps users determine whether an email is legitimate or a phishing attempt. The system analyzes email content using a trained machine learning model and generates detailed explanations using Gemini, making the results understandable even for non-technical users.

## Features

* Real-time phishing email detection
* Machine Learning-based classification
* TF-IDF text vectorization
* AI-generated explanations for predictions
* Interactive and modern React frontend
* Live sample email demonstration
* Confidence-based prediction results
* User-friendly interface for email analysis

## How It Works

1. User pastes an email into the application.
2. The email content is preprocessed and vectorized using TF-IDF.
3. The trained phishing detection model predicts whether the email is phishing or legitimate.
4. Gemini generates a detailed explanation of the prediction.
5. The result, confidence level, and explanation are displayed to the user.

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Python
* Flask

### Machine Learning

* Scikit-learn
* TF-IDF Vectorizer
* Pickle

### AI Integration

* Google Gemini API

## Project Structure

```text
VeriMail/
├── backend/
│   ├── config.py
│   ├── model/
│   │   ├── phishing_detector.pkl
│   │   └── tfidf_vectorizer.pkl
│   └── utils/
│       └── gemini.py
├── frontend/
│   └── react-app/
├── app.py
└── model.ipynb
```

## Installation

### Clone the Repository

```bash
git clone <repository-url>
cd VeriMail
```

### Backend Setup

```bash
pip install -r requirements.txt
python app.py
```

### Frontend Setup

```bash
cd frontend/react-app
npm install
npm run dev
```

## Environment Variables

Create a `.env` file and add your API credentials:

```env
GEMINI_API_KEY=YOUR_API_KEY
```

## Future Improvements

* URL reputation analysis
* Attachment scanning
* Browser extension support
* Real-time threat intelligence integration
* Multi-language phishing detection
* Advanced explainable AI visualizations

## Disclaimer

This project is intended for educational and research purposes. Predictions are generated using machine learning models and should not be considered a replacement for professional cybersecurity solutions.
