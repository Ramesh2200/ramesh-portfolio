import React, { useState, useEffect } from "react";
import { X, ExternalLink, PlayCircle, FileDown, Mail, Image, Film, Sparkles, Maximize2 } from "lucide-react";
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
  const [activeMode, setActiveMode] = useState("video");

  const isIntro = data?.type === "intro";
  const posterImg = data?.infographic || data?.poster || "/assets/ramesh-self-intro-hd.jpg";

  useEffect(() => {
    setVideoError(false);
    if (data?.videoFile) {
      setCurrentSrc(data.videoFile);
    }
    setActiveMode("video");

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
  }, [isOpen, data, onClose, isIntro]);

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

  const embedUrl = getEmbedUrl(currentSrc);

  return (
    <div className="video-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="video-modal-content" style={{ maxWidth: "980px" }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-project-badge">
              {isIntro ? "HR & Recruiter Presentation" : `${data.year || "2026"} • Full Stack`}
            </div>
            <h3 className="modal-title">
              {isIntro ? "Ramesh K — Self Introduction" : `${data.title} — Demonstration`}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab Switcher for Presentation vs Video */}
            <div className="flex items-center gap-1 bg-white/[0.06] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveMode("infographic")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeMode === "infographic"
                    ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Image size={13} />
                <span>Poster Demo</span>
              </button>

              <button
                onClick={() => setActiveMode("video")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
                  activeMode === "video"
                    ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.3)] font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Film size={13} />
                <span>Video Walkthrough</span>
              </button>
            </div>

            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ minHeight: "420px", background: "#060911" }}>
          {activeMode === "infographic" ? (
            <div className="relative w-full h-full flex items-center justify-center p-2 bg-[#05070d]">
              <img
                src={posterImg}
                alt={data.title || "Self Introduction"}
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-4 right-4 pointer-events-none">
                <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono-code flex items-center gap-1.5 shadow-lg">
                  <Sparkles size={13} />
                  <span>Full Presentation View</span>
                </span>
              </div>
            </div>
          ) : !videoError ? (
            <div className="video-player-container">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={data.title || "Video Demonstration"}
                  className="modal-video-element"
                  style={{ border: 0, width: "100%", height: "100%", minHeight: "420px" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  controls
                  autoPlay
                  playsInline
                  poster={posterImg}
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
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 bg-[#05070d]">
              <img
                src={posterImg}
                alt={data.title || "Project Demo"}
                className="w-full h-auto max-h-[65vh] object-contain rounded-xl shadow-xl mb-3"
              />
              <p className="text-xs text-slate-400 font-mono-code">
                Displaying official presentation demo poster.
              </p>
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
