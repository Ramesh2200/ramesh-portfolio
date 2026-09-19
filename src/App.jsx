import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
  const videoRef = useRef(null);

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
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: 0.95,
              filter: "brightness(1.05) contrast(1.05)"
            }}
          >
            <source src="/ramesh-video.mp4" type="video/mp4" />
            <source src="/videos/ramesh-video.mp4" type="video/mp4" />
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
