import React, { useEffect, useState, useRef } from "react";
import { IconicRLogo } from "./IconicRLogo";
import "./LoadingScreen.css";

export function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Java & Spring Boot microservices...");
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const p = videoRef.current.play();
      if (p !== undefined) {
        p.catch((err) => console.log("Loading video play note:", err));
      }
    }
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2200; // Smooth 2.2s cinematic load

    const statusMilestones = [
      { at: 0, text: "Booting Java 21 & Spring Boot ecosystem..." },
      { at: 28, text: "Mounting React.js & Tailwind architecture..." },
      { at: 60, text: "Synchronizing REST APIs & MySQL database..." },
      { at: 88, text: "Rendering high-definition developer workspace..." },
      { at: 98, text: "Ready. Welcome to Ramesh K's Portfolio." }
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
        setStatusText("Ready. Welcome to Ramesh K's Portfolio.");
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 500);
        }, 200);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className={`modern-loading-screen ${isFading ? "screen-fade-out" : ""}`}>
      {/* 1. High Visibility Background Video Playing in Loading Screen */}
      <div className="loading-video-layer" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="loading-bg-video"
        >
          <source src="/ramesh-video.mp4" type="video/mp4" />
          <source src="https://raw.githubusercontent.com/Ramesh2200/ramesh-portfolio/main/public/ramesh-video.mp4" type="video/mp4" />
          <source src="/videos/ramesh-video.mp4" type="video/mp4" />
        </video>
        {/* Transparent dark vignette overlay for crisp contrast */}
        <div className="loading-video-overlay" />
      </div>

      {/* 2. Ambient Cyberpunk Glow Circles */}
      <div className="ambient-glow-circle"></div>
      <div className="ambient-glow-circle-cyan"></div>

      {/* 3. Glassmorphic Central HUD Card */}
      <div className="modern-loading-container">
        {/* Animated Brand Monogram */}
        <div className="loading-logo-wrapper">
          <div className="loading-pulse-ring"></div>
          <IconicRLogo size={68} withGlow={true} />
        </div>

        {/* Status Tag */}
        <div className="pill-badge-wrap">
          <div className="init-pill-badge">
            <span className="pill-pulse-dot"></span>
            <span className="pill-text">SYS_INIT • PORTFOLIO 2026</span>
          </div>
        </div>

        {/* Prominent Large Heading */}
        <h1 className="modern-loading-title">
          Ramesh <span className="title-gradient-accent">K</span>
        </h1>
        <p className="modern-loading-subtitle">
          JAVA FULL STACK DEVELOPER
        </p>

        {/* Dynamic Terminal Milestone Log */}
        <div className="modern-status-line">
          <span className="modern-status-cursor">$</span>
          <span className="modern-status-msg">{statusText}</span>
        </div>

        {/* High-Contrast Gradient Progress Bar */}
        <div className="modern-progressbar-track">
          <div
            className="modern-progressbar-fill"
            style={{ width: `${progress}%` }}
          >
            <span className="progressbar-glow-tip" />
          </div>
        </div>

        {/* Meta Sequence & Percentage Footer */}
        <div className="modern-meta-row">
          <span className="meta-sequence-tag font-mono-code">INITIALIZING EXPERIENCE</span>
          <span className="meta-pct-tag font-mono-code">{progress}%</span>
        </div>

        {/* Tech Stack Indicator Badges */}
        <div className="loading-tech-pills">
          <span className="loading-pill">Java 21</span>
          <span className="loading-pill">Spring Boot</span>
          <span className="loading-pill">React.js</span>
          <span className="loading-pill">MySQL</span>
          <span className="loading-pill">REST APIs</span>
        </div>
      </div>
    </div>
  );
}
