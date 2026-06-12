import { useState } from "react";
import { predictEmail, explainEmail } from "../../api";
import { Link } from "react-router-dom";
import "./Predict.css";

function Predict() {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = async () => {
    if (!email.trim()) return;
    
    setLoading(true);
    setExplanation("");

    try {
      const data = await predictEmail(email);
      setResult(data);
      if (data.prediction) {
         const exp = await explainEmail(email, data.prediction);
         setExplanation(exp.explanation);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // Helper to safely format explanation into stylish bullets
  const formatExplanation = (text, isSafe) => {
    if (!text) return null;
    
    // Split by newlines and filter empty lines
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    
    return lines.map((line, idx) => {
      // Very basic formatting: if line contains a colon, make the first part bold
      let formattedLine = line.replace(/^- /, '').replace(/^\* /, '').trim();
      const splitIdx = formattedLine.indexOf(':');
      
      let header = "";
      let desc = formattedLine;
      
      if (splitIdx > 0 && splitIdx < 50) { // arbitrary length check for header
        header = formattedLine.substring(0, splitIdx + 1);
        desc = formattedLine.substring(splitIdx + 1);
      }

      return (
        <div key={idx} className="bullet-item">
          <div className={`bullet-accent ${isSafe ? 'safe-icon' : 'warn-icon'}`}>
            {isSafe ? '✓' : '!'}
          </div>
          <div className="bullet-text">
            {header ? <strong>{header}</strong> : null}
            {desc}
          </div>
        </div>
      );
    });
  };

  const isSafe = result?.prediction && result.prediction.toLowerCase() !== "phishing" && result.prediction.toLowerCase() !== "high risk";
  const confidencePercent = result?.confidence ? (result.confidence * 100).toFixed(2) : 0;

  return (
    <div className="predict-page-container">
      <div className="predict-wrapper">
        
        <header className="predict-header">
          <h1 className="predict-title">Phishing Email Detector</h1>
          <p className="predict-subtitle">
            Paste the raw email content below to generate an AI-powered security breakdown.
          </p>
        </header>

        <div className="predict-grid">
          
          {/* Left Column: Input */}
          <div className="input-section">
            <textarea
              className="email-input"
              placeholder="Paste your email text or headers here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <button 
              className="predict-btn" 
              onClick={handleCheck} 
              disabled={loading || !email.trim()}
            >
              {loading && <div className="spinner"></div>}
              {loading ? "Analyzing Email..." : "Check Email"}
            </button>
          </div>

          {/* Right Column: Results */}
          <div className="results-wrapper">
            {result && (
              <div className="results-section">
                
                {/* Verdict Card */}
                <div className="verdict-card">
                  <div className="verdict-header">
                    <div className="verdict-status">
                      <h2>Prediction Verdict</h2>
                      <p className={`status-text ${isSafe ? 'status-safe' : 'status-phishing'}`}>
                        {result.prediction}
                      </p>
                    </div>
                    <div className="confidence-metrics">
                      <span className="confidence-label">Model Confidence</span>
                      <span className="confidence-value">{confidencePercent}%</span>
                    </div>
                  </div>
                  
                  <div className="progress-container">
                    <div 
                      className={`progress-fill ${isSafe ? 'progress-safe' : 'progress-phishing'}`} 
                      style={{ width: `${confidencePercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* AI Explanation Box */}
                <div className="explanation-card">
                  <h3 className="explanation-header">
                    <span className="explanation-icon">✨</span> AI Explanation
                  </h3>
                  
                  <div className="bullet-list">
                    {explanation ? (
                      formatExplanation(explanation, isSafe)
                    ) : (
                      <div className="bullet-item">
                        <div className="bullet-accent">⌛</div>
                        <div className="bullet-text">Generating tailored AI insights...</div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Predict;