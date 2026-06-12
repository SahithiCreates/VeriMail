from google import genai
from backend.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


import re

def clean_text(text):
    lines = text.split("\n")

    cleaned = []

    for line in lines:
        line = line.strip()
        line = re.sub(r"[\*\•\#]", "", line)
        line = re.sub(r"\s+", " ", line)

        if line:
            cleaned.append(line)

    return "\n".join(cleaned)

def explain_email(email_text, prediction):
    try:
        prompt = f"""
            You are a cybersecurity expert.

            Email:
            {email_text}

            Prediction: {prediction}

            Return response in STRICT format:

            - Start each point with a bullet "-"
            - Each point must be ONE SHORT SENTENCE
            - Do NOT use markdown, asterisks, or bold text
            - Do NOT write paragraphs
            - Maximum 5 bullet points
            """

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        return clean_text(response.text)

    except Exception as e:
        print("Gemini error:", e)
        return "Explanation not available"

    