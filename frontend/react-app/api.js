const BASE_URL = "http://127.0.0.1:5000";

export async function predictEmail(email) {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  return res.json();
}

export async function explainEmail(email, prediction) {
  const res = await fetch(`${BASE_URL}/explain`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, prediction }),
  });

  return res.json();
}