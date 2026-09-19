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
  const [videoOpacity, setVideoOpacity] = useState(0.95);
  const [bgVideoSrc, setBgVideoSrc] = useState("/ramesh-video.mp4");
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

  // Ensure background video plays automatically
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Video autoplay handling:", err);
        });
      }
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-transparent text-slate-100 selection:bg-cyan-500/35 selection:text-white">
        
        {/* Full HD Background Video Layer - High visibility at 95% opacity in front of canvas */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Main Background Video */}
          <video
            ref={videoRef}
            key={bgVideoSrc}
            src={bgVideoSrc}
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{
              opacity: isVideoPlaying ? videoOpacity : 0,
              filter: "brightness(1.05) contrast(1.05)"
            }}
          >
            <source src={bgVideoSrc} type="video/mp4" />
            <source src="/ramesh-video.mp4" type="video/mp4" />
          </video>

          {/* Minimal transparent contrast overlay to keep front text sharp & neat */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none" />
        </div>

        {/* Foreground Content with z-10 */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen">
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
        </div>

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
            onClick={() => {
              const opacities = [0.95, 1.0, 0.85, 0.65];
              const curIdx = opacities.indexOf(videoOpacity);
              const next = opacities[curIdx >= 0 ? (curIdx + 1) % opacities.length : 0];
              setVideoOpacity(next);
            }}
            className="px-2 py-0.5 rounded-md hover:bg-white/10 text-cyan-300 font-mono text-[11px] transition-colors"
            title="Click to cycle background video opacity"
          >
            {Math.round(videoOpacity * 100)}%
          </button>
          <div className="h-3 w-px bg-white/15"></div>
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
          <div className="h-3 w-px bg-white/15"></div>
          <button
            type="button"
            onClick={() => {
              const next = bgVideoSrc === "/ramesh-video.mp4" ? "/videos/self-introduction.mp4" : "/ramesh-video.mp4";
              setBgVideoSrc(next);
            }}
            className="px-2 py-0.5 rounded-md hover:bg-white/10 text-cyan-300 font-mono text-[11px] transition-colors"
            title="Switch Background Video between Tech Reel and Self Intro"
          >
            {bgVideoSrc === "/ramesh-video.mp4" ? "Reel" : "Intro"}
          </button>
          <div className="h-3 w-px bg-white/15"></div>
          <button
            type="button"
            onClick={() => setIntroModalOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/35 border border-cyan-400/50 text-cyan-200 hover:text-white font-mono text-[11px] font-bold transition-all cursor-pointer shadow-sm"
            title="Watch Self Introduction Video in High Definition"
          >
            <Play className="w-2.5 h-2.5 fill-current text-cyan-400" />
            <span>Self Intro</span>
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
