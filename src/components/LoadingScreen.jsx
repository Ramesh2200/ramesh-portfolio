import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [stepText, setStepText] = useState("Initializing Java Virtual Machine...");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const steps = [
      { p: 20, text: "Initializing Core Java runtime..." },
      { p: 45, text: "Bootstrapping Spring Boot & REST APIs..." },
      { p: 70, text: "Mounting React component hierarchy..." },
      { p: 90, text: "Establishing MySQL & Hibernate schemas..." },
      { p: 100, text: "Workspace Ready." }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].p);
        setStepText(steps[currentStep].text);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
        }, 300);
      }
    }, 180);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loading-screen ${isFading ? "fade-out" : ""}`}>
      <div className="loading-card">
        <div className="loading-logo-wrap">
          <div className="loading-logo">
            <span className="logo-text">RK</span>
            <span className="logo-dot"></span>
          </div>
        </div>

        <div className="loading-profile">
          <h2 className="loading-name">Ramesh K</h2>
          <p className="loading-role">Java Full Stack Developer</p>
        </div>

        <div className="loading-bar-wrapper">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="loading-status">
          <span className="status-text">{stepText}</span>
          <span className="status-num">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
