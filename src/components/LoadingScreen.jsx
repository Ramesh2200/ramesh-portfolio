import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Java & Spring Boot microservices...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // Exactly 2 seconds

    const statusMilestones = [
      { at: 0, text: "Initializing Java & Spring Boot microservices..." },
      { at: 30, text: "Mounting React architecture & REST APIs..." },
      { at: 65, text: "Establishing MySQL relational schemas..." },
      { at: 90, text: "Full Stack Developer workspace ready." }
    ];

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentPct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentPct);

      // Update terminal status text based on progress milestone
      for (let i = statusMilestones.length - 1; i >= 0; i--) {
        if (currentPct >= statusMilestones[i].at) {
          setStatusText(statusMilestones[i].text);
          break;
        }
      }

      if (elapsed >= duration) {
        clearInterval(timer);
        setProgress(100);
        setStatusText("Full Stack Developer workspace ready.");
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
        }, 150);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`modern-loading-screen ${isFading ? "screen-fade-out" : ""}`}>
      {/* Soft Ambient Radial Coral/Red Glow */}
      <div className="ambient-glow-circle"></div>

      <div className="modern-loading-container">
        {/* Top Monogram Box with Dashed Accent Frame */}
        <div className="monogram-outer-frame">
          <div className="monogram-inner-box">
            <span className="monogram-initials">
              R<span className="monogram-red-dot">.</span>
            </span>
          </div>
        </div>

        {/* Glowing Pill Tag */}
        <div className="pill-badge-wrap">
          <div className="init-pill-badge">
            <span className="pill-pulse-dot"></span>
            <span className="pill-text">INITIALIZING PORTFOLIO</span>
          </div>
        </div>

        {/* Primary Name */}
        <h1 className="modern-loading-title">Ramesh K</h1>

        {/* Typewriter Subtitle Log */}
        <div className="modern-status-line">
          <span className="modern-status-msg">{statusText}</span>
        </div>

        {/* Slim Crimson Gradient Progress Bar */}
        <div className="modern-progressbar-track">
          <div
            className="modern-progressbar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Meta Sequence & Percentage Footer */}
        <div className="modern-meta-row">
          <span className="meta-sequence-tag">SYS_INIT_SEQUENCE</span>
          <span className="meta-pct-tag">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
