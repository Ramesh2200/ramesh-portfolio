import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isFading, setIsFading] = useState(false);

  const fullRole = "Full Stack Developer";

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // Exact 2.0-second loading transition

    // Typewriter effect synced to the 2 second duration
    const typingInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / 1400, 1);
      const charsToShow = Math.floor(progressRatio * fullRole.length);
      setTypedText(fullRole.substring(0, charsToShow));

      const currentProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(typingInterval);
        setProgress(100);
        setTypedText(fullRole);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
        }, 150);
      }
    }, 35);

    return () => clearInterval(typingInterval);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${isFading ? "fade-out" : ""}`}>
      {/* Background Neon Orbs */}
      <div className="loading-bg-glow loading-bg-glow-1"></div>
      <div className="loading-bg-glow loading-bg-glow-2"></div>

      <div className="loading-card">
        {/* Animated Avatar / Monogram with Glowing Ring */}
        <div className="loading-logo-wrap">
          <div className="loading-logo">
            <span className="logo-text">&lt;RK /&gt;</span>
            <span className="logo-dot"></span>
          </div>
        </div>

        <div className="loading-profile">
          <h2 className="loading-name">Ramesh K</h2>
          
          {/* Dynamic 2-Sec Typewriter for 'Full Stack Developer' */}
          <div className="loading-role-box">
            <span className="terminal-prompt">&gt;</span>
            <span className="loading-role text-gradient-role">
              {typedText}
            </span>
            <span className="typing-cursor"></span>
          </div>
        </div>

        {/* 2-Second Smooth Progress Bar */}
        <div className="loading-bar-wrapper">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="loading-status">
          <span className="status-text">
            {progress < 40
              ? "Bootstrapping Environment..."
              : progress < 85
              ? "Loading Interactive Modules..."
              : "Ready."}
          </span>
          <span className="status-num">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
