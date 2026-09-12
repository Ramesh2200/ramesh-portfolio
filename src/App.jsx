import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { VideoModal } from "./components/VideoModal";
import { VoiceChatbot } from "./components/VoiceChatbot";
import { LoadingScreen } from "./components/LoadingScreen";
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
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-[#050505] text-slate-100 selection:bg-cyan-500/35 selection:text-white flex flex-col justify-between">
        
        {/* Atmospheric Colorful Background Image Layers */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
          {/* Colorful Futuristic Tech Image Layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-screen dark:opacity-40 transition-opacity duration-700"
            style={{ backgroundImage: "url('/assets/colorful-tech-bg.jpg')" }}
          ></div>

          {/* Secondary Vibrant Liquid Color Mesh Layer */}
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-20 mix-blend-color-dodge pointer-events-none"
            style={{ backgroundImage: "url('/assets/vibrant-mesh-bg.jpg')" }}
          ></div>

          {/* Multi-Color Neon Glowing Ambient Orbs */}
          <div className="orb-cyan absolute top-10 -left-20 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-500/20 to-transparent blur-[150px]"></div>
          <div className="orb-indigo absolute top-1/2 -right-24 w-[44rem] h-[44rem] rounded-full bg-gradient-to-bl from-fuchsia-600/25 via-indigo-600/20 to-purple-600/15 blur-[160px]"></div>
          <div className="absolute -bottom-10 left-1/4 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-transparent blur-[140px]"></div>

          {/* Grid and Dot-Matrix Textures */}
          <div className="absolute inset-0 dot-matrix opacity-30"></div>
          <div className="absolute inset-0 technical-grid opacity-25"></div>
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
      </div>
    </Router>
  );
}

export default App;
