import React from "react";
import { Award, Rocket, CheckCircle2 } from "lucide-react";
import { achievements } from "../data/achievements";
import "./Achievements.css";

export function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge section-badge-purple">VERIFIED HIGHLIGHTS</div>
          <h2 className="section-title">Key Engineering Achievements</h2>
          <p className="section-subtitle">
            Demonstrated capabilities supported directly by documented full-stack systems and production deployments.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={item.id} className="glass-card achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon-wrap">
                  {index === 0 ? (
                    <Rocket size={26} className="achieve-icon" />
                  ) : (
                    <Award size={26} className="achieve-icon" />
                  )}
                </div>
                <div className="achievement-badge">{item.badge}</div>
              </div>

              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-desc">&ldquo;{item.description}&rdquo;</p>

              <div className="achievement-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="achieve-tag">
                    <CheckCircle2 size={12} className="achieve-tag-icon" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
