import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { VideoModal } from "./components/VideoModal";
import { VoiceChatbot } from "./components/VoiceChatbot";
import { LoadingScreen } from "./components/LoadingScreen";
import { ResumeModal } from "./components/ResumeModal";
import { HomePage } from "./pages/HomePage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { EducationPage } from "./pages/EducationPage";
import { ExperienceContactPage } from "./pages/ExperienceContactPage";
import { profile } from "./data/profile";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [introModalOpen, setIntroModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  // Global listener for resume modal opens (from any button or utility)
  useEffect(() => {
    const handleOpenResume = () => setResumeModalOpen(true);
    window.addEventListener("open-resume-modal", handleOpenResume);
    return () => window.removeEventListener("open-resume-modal", handleOpenResume);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500/35 selection:text-white flex flex-col justify-between">
        
        {/* Atmospheric Dynamic Background Video Layer */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          {/* Main Background Video - Set to 95% opacity per user prompt */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: 0.95,
              filter: "brightness(0.78) contrast(1.10) saturate(1.15)"
            }}
          >
            <source src="/ramesh-video.mp4" type="video/mp4" />
            <source src="/videos/ramesh-video.mp4" type="video/mp4" />
          </video>

          {/* Fallback Static Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700 pointer-events-none -z-10"
            style={{
              backgroundImage: "url('/assets/colorful-tech-bg.jpg')",
              opacity: 0.25
            }}
          ></div>

          {/* Deep Cinematic Contrast Vignette with subtle backdrop blur for crisp front text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-[#050505]/40 to-[#050505]/80 pointer-events-none backdrop-blur-[0.5px]" />

          {/* Multi-Color Neon Glowing Ambient Orbs */}
          <div className="orb-cyan absolute top-10 -left-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/15 to-transparent blur-[150px]"></div>
          <div className="orb-indigo absolute top-1/2 -right-24 w-[44rem] h-[44rem] rounded-full bg-gradient-to-bl from-fuchsia-600/20 via-indigo-600/15 to-purple-600/10 blur-[160px]"></div>
          <div className="absolute -bottom-10 left-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-[140px]"></div>

          {/* Grid and Dot-Matrix Textures */}
          <div className="absolute inset-0 dot-matrix opacity-25"></div>
          <div className="absolute inset-0 technical-grid opacity-20"></div>
        </div>

        {/* Global Sticky Glass Navbar */}
        <Navbar />

        {/* Multi-Page & Continuous Navigation Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onWatchIntro={() => setIntroModalOpen(true)} />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/experience" element={<ExperienceContactPage />} />
            <Route path="/contact" element={<ExperienceContactPage />} />
            <Route path="/experience-contact" element={<ExperienceContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage onWatchIntro={() => setIntroModalOpen(true)} />} />
          </Routes>
        </main>

        {/* Global Sleek Footer */}
        <Footer />

        {/* Interactive Voice Chatbot */}
        <VoiceChatbot />

        {/* Floating Ambient Background Video Controls */}
        <div className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#080d1a]/85 hover:bg-[#080d1a] border border-cyan-500/35 text-xs font-mono-code text-cyan-300 backdrop-blur-xl shadow-[0_4px_25px_rgba(6,182,212,0.2)] transition-all">
          <span className="relative flex h-2 w-2">
            {isVideoPlaying ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            )}
          </span>
          <span className="text-[11px] font-semibold text-slate-200 hidden sm:inline">
            BG Video
          </span>
          <div className="h-3 w-px bg-white/15 hidden sm:block"></div>
          <button
            type="button"
            onClick={toggleVideoPlay}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
            title={isVideoPlaying ? "Pause Background Video" : "Play Background Video"}
            aria-label={isVideoPlaying ? "Pause Background Video" : "Play Background Video"}
          >
            {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={toggleVideoMute}
            className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
            title={isVideoMuted ? "Unmute Audio" : "Mute Audio"}
            aria-label={isVideoMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Recruiter Self Introduction Video Modal */}
        <VideoModal
          isOpen={introModalOpen}
          onClose={() => setIntroModalOpen(false)}
          videoData={{
            type: "intro",
            title: "Ramesh K — Self Introduction",
            videoFile: profile.introVideo,
            poster: profile.headshot
          }}
        />

        {/* Interactive Resume Viewer Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
