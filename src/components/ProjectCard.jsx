import React from "react";
import { ExternalLink, Play, Database, Layers, Check, Globe } from "lucide-react";
import { TechIcon } from "../assets/tech-icons";
import "./ProjectCard.css";

export function ProjectCard({ project, index, onWatchDemo }) {
  const isEven = index % 2 === 0;

  return (
    <article className="glass-card project-card" id={`project-${project.id}`}>
      <div className="project-card-grid">
        {/* Left / Top Information Section */}
        <div className="project-content">
          <div className="project-meta-bar">
            <span className="project-index">0{index + 1}</span>
            <span className="project-year-pill">{project.year}</span>
            <span className="project-live-indicator">
              <span className="live-pulse"></span>
              Live on Vercel
            </span>
          </div>

          {project.logo && (
            <div className="project-brand-badge mb-3">
              <img
                src={project.logo}
                alt={`${project.title} logo`}
                className="h-8 w-auto max-w-[220px] object-contain filter drop-shadow-[0_2px_8px_rgba(0,242,254,0.3)]"
              />
            </div>
          )}

          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">{project.tagline}</p>

          <p className="project-description">{project.description}</p>

          {/* Database Architecture Box */}
          <div className="project-db-box">
            <div className="db-box-header">
              <Database size={15} className="db-icon" />
              <span>Database Entities & Services</span>
            </div>
            <div className="db-entities-list">
              {project.entities.map((entity, i) => (
                <span key={i} className="entity-pill">
                  {entity}
                </span>
              ))}
            </div>
          </div>

          {/* Features Highlights */}
          <div className="project-features-wrap">
            <div className="features-title">Core Implemented Features:</div>
            <div className="features-grid">
              {project.features.map((feature, i) => (
                <div key={i} className="feature-item">
                  <Check size={13} className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="project-stack-wrap">
            {project.stack.map((tech, i) => (
              <span key={i} className="tech-pill">
                <TechIcon name={tech} size={16} />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="project-actions flex flex-wrap gap-2.5">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-action-btn"
              id={`live-btn-${project.id}`}
            >
              <span>VIEW LIVE PROJECT</span>
              <ExternalLink size={16} />
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary project-action-btn"
                id={`repo-btn-${project.id}`}
              >
                <span>GITHUB SOURCE</span>
                <ExternalLink size={16} />
              </a>
            )}

            {project.videoFile && (
              <button
                type="button"
                className="btn btn-secondary project-action-btn"
                onClick={() => onWatchDemo(project)}
                id={`demo-btn-${project.id}`}
              >
                <Play size={16} className="play-icon" />
                <span>WATCH DEMO</span>
              </button>
            )}
          </div>
        </div>

        {/* Right / Visual Preview Section */}
        <div className="project-visual-preview">
          <div className="preview-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="terminal-title">{project.id}.app • production</div>
              <Globe size={13} className="terminal-globe" />
            </div>

            <div className="terminal-body">
              <div className="terminal-video-preview" onClick={() => onWatchDemo(project)} title="Click to watch project demonstration video">
                <img
                  src={project.poster}
                  alt={`${project.title} Video Explanation Preview`}
                  className="terminal-poster-img"
                  loading="lazy"
                />
                <div className="terminal-poster-overlay">
                  <div className="demo-play-circle-large">
                    <Play size={24} fill="currentColor" />
                  </div>
                  <div className="poster-meta-tag">
                    <span className="live-pulse"></span>
                    <span>Video Walkthrough Demo</span>
                  </div>
                </div>
              </div>

              {/* Architecture Summary Cards */}
              <div className="terminal-metrics-row">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="metric-box">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-value">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Demo Overlay Prompt */}
              <div className="terminal-demo-cta" onClick={() => onWatchDemo(project)}>
                <div className="demo-play-circle">
                  <Play size={16} fill="currentColor" />
                </div>
                <span>Stream Project Video Walkthrough</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
