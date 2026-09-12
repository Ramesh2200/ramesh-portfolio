import React, { useState, useEffect } from "react";
import { X, ExternalLink, PlayCircle, FileDown, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { downloadResume } from "../utils/downloadResume";
import "./VideoModal.css";

function getEmbedUrl(url) {
  if (!url) return null;
  // YouTube watch / short link
  const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  if (ytMatch) {
    return `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }
  // Google Drive preview link
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
  }
  return null;
}

export function VideoModal({ videoData, project, isOpen, onClose }) {
  const [videoError, setVideoError] = useState(false);
  const data = videoData || project;
  const [currentSrc, setCurrentSrc] = useState(data?.videoFile || "");

  useEffect(() => {
    setVideoError(false);
    if (data?.videoFile) {
      setCurrentSrc(data.videoFile);
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, data, onClose]);

  const handleVideoError = (e) => {
    console.warn("Video failed to play:", currentSrc, e);
    if (data?.fallbackVideo && currentSrc !== data.fallbackVideo) {
      console.info("Switching to fallback video:", data.fallbackVideo);
      setCurrentSrc(data.fallbackVideo);
      return;
    }
    setVideoError(true);
  };

  if (!isOpen || !data) return null;

  const isIntro = data.type === "intro";
  const embedUrl = getEmbedUrl(currentSrc);

  return (
    <div className="video-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-project-badge">
              {isIntro ? "HR & Recruiter Presentation" : `${data.year || "2026"} • Full Stack`}
            </div>
            <h3 className="modal-title">
              {isIntro ? "Ramesh K — Self Introduction" : `${data.title} — Demonstration`}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!videoError ? (
            <div className="video-player-container">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={data.title || "Video Demonstration"}
                  className="modal-video-element"
                  style={{ border: 0, width: "100%", height: "100%", minHeight: "380px" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={data.poster}
                  className="modal-video-element"
                  key={currentSrc}
                  src={currentSrc}
                  onError={handleVideoError}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            <div className="video-placeholder-container">
              <div className="placeholder-icon-wrap">
                <PlayCircle size={48} className="placeholder-play-icon" />
              </div>
              <h4 className="placeholder-heading">Demo Video In Queue</h4>
              <p className="placeholder-message">
                Project demonstration video will be added soon.
              </p>
              {data.liveUrl && (
                <div className="placeholder-actions">
                  <a
                    href={data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span>Open Live Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="modal-footer">
          {isIntro ? (
            <>
              <div className="modal-stack-tags">
                <span className="tech-pill">Java Full Stack</span>
                <span className="tech-pill">Spring Boot</span>
                <span className="tech-pill">React.js</span>
                <span className="tech-pill">MySQL</span>
              </div>
              <div className="modal-action-links">
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Ramesh_K_Resume.pdf"
                  onClick={(e) => downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath)}
                  className="btn btn-outline-lime btn-sm cursor-pointer"
                >
                  <FileDown size={14} />
                  <span>Download Resume</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="btn btn-primary btn-sm"
                >
                  <Mail size={14} />
                  <span>Email Ramesh</span>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="modal-stack-tags">
                {data.stack &&
                  data.stack.map((tech, idx) => (
                    <span key={idx} className="tech-pill">
                      {tech}
                    </span>
                  ))}
              </div>
              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-lime btn-sm"
                >
                  <span>Visit Live Application</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
