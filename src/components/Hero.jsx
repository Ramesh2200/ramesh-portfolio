import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  ExternalLink,
  Code,
  Sparkles,
  Database,
  Layers,
  Terminal,
  Server,
  Play,
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { profile } from "../data/profile";
import { downloadResume } from "../utils/downloadResume";

export function Hero({ onWatchIntro }) {
  // Roles updated per user prompt: 'Java Full Stack Developer', 'Python & Django Developer', 'Spring Boot Specialist'
  const roles = [
    "Java Full Stack Developer",
    "Python & Django Developer",
    "Spring Boot Specialist"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(105);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Animated Gradient Mesh, Glows & Dot Matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        <div className="orb-cyan absolute -top-20 left-1/4 w-[34rem] h-[34rem] rounded-full bg-cyan-500/15 blur-[130px]"></div>
        <div className="orb-indigo absolute top-1/3 -right-20 w-[38rem] h-[38rem] rounded-full bg-indigo-500/15 blur-[150px]"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-purple-600/10 blur-[120px]"></div>
        <div className="absolute inset-0 dot-matrix opacity-60"></div>
        <div className="absolute inset-0 technical-grid opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Headline, Typewriter & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono-code font-medium text-cyan-300 tracking-wide uppercase">
                2026 CS Graduate • 8.3 CGPA • Yenepoya Institute of Technology
              </span>
            </div>

            {/* Main Headline with Colorful Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 via-indigo-400 to-fuchsia-400">
                Ramesh K
              </span>
            </h1>

            {/* Dynamic Typing Title in JetBrains Mono with Multi-Color Gradient */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-6">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono-code text-slate-100 flex items-center">
                <span className="text-cyan-400 mr-2">&gt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 animate-pulse">
                  {displayText}
                </span>
                <span className="inline-block w-2.5 h-7 ml-1.5 bg-cyan-400 align-middle animate-pulse"></span>
              </span>
            </div>

            {/* Clean Professional Narrative */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              Computer Science graduate from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300 font-bold">
                Yenepoya Institute of Technology (8.3 CGPA)
              </span>{" "}
              with 6 months of professional training at Tap Academy. Skilled in building resilient web platforms across Java, Spring Boot, Python, Django, React.js, and relational databases.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <Link
                to="/projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 hover:from-cyan-400 hover:via-indigo-400 hover:to-fuchsia-400 text-white font-semibold text-sm shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath)}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-cyan-500/30 hover:border-cyan-400 text-slate-100 font-medium text-sm backdrop-blur-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.15)] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Open Resume</span>
              </a>

              <a
                href={profile.resumePath}
                download="Ramesh_K_Resume.pdf"
                onClick={(e) => downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath)}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 text-xs font-mono-code transition-all cursor-pointer"
                title="Download and Open Resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {onWatchIntro && (
                <button
                  onClick={onWatchIntro}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 text-slate-300 hover:text-cyan-300 text-xs font-mono-code transition-all"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>Watch Video Intro</span>
                </button>
              )}
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs text-slate-400 font-mono-code mr-2 uppercase tracking-wider">
                Connect:
              </span>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Direct Email"
                className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Circular Hero Frame with Ramesh's Photo and Glowing Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2 py-6"
          >
            {/* Ambient Mesh Glow */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/25 to-purple-500/20 blur-3xl -z-10 animate-pulse"></div>

            {/* Circular Frame Container */}
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer Animated Spinning Multi-Color Rainbow Ring */}
              <div
                className="absolute inset-0 rounded-full p-[3px] animate-spin-slow pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, #06b6d4, #6366f1, #d946ef, #f59e0b, #10b981, #06b6d4)"
                }}
              >
                <div className="w-full h-full rounded-full bg-[#050505]"></div>
              </div>

              {/* Inner Reverse Spinning Vibrant Ring */}
              <div
                className="absolute inset-2 sm:inset-3 rounded-full p-[2px] animate-reverse-spin opacity-90 pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 180deg, #d946ef, transparent, #22d3ee, transparent, #818cf8, transparent, #f59e0b)"
                }}
              >
                <div className="w-full h-full rounded-full bg-[#050505]"></div>
              </div>

              {/* High-Fidelity Circular Masked Photo */}
              <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_40px_rgba(6,182,212,0.4)] bg-[#0c101a] group">
                <img
                  src="/ramesh-profile.jpg"
                  alt="Ramesh K - Java Full Stack Developer"
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Circular Gradient Shadow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent pointer-events-none"></div>

                {/* Name Tag */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md border border-cyan-500/40 text-center shadow-lg">
                  <span className="text-[11px] font-bold text-cyan-300 font-mono-code tracking-wide">
                    Ramesh K
                  </span>
                </div>
              </div>

              {/* Floating Skill Badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute -top-3 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#090d16]/90 backdrop-blur-xl border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center gap-2 z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-code font-bold text-white block">Java & Spring</span>
                  <span className="text-[9px] text-cyan-400 font-mono-code">Enterprise MVC</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.6 }}
                className="absolute -bottom-3 -right-3 sm:-right-6 px-3.5 py-2 rounded-2xl bg-[#090d16]/90 backdrop-blur-xl border border-indigo-500/40 shadow-[0_0_25px_rgba(99,102,241,0.3)] flex items-center gap-2 z-20"
              >
                <div className="w-7 h-7 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono-code font-bold text-white block">React.js & Python</span>
                  <span className="text-[9px] text-indigo-400 font-mono-code">Django & APIs</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5.8, ease: "easeInOut", delay: 1 }}
                className="hidden sm:flex absolute top-1/2 -right-8 px-3 py-1.5 rounded-xl bg-[#090d16]/90 backdrop-blur-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.25)] items-center gap-2 z-20"
              >
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-mono-code text-slate-200">MySQL & Postgres</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel"
        >
          <div className="text-center lg:text-left sm:border-r border-white/10 sm:pr-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan font-mono-code">6+ Mos</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Tap Academy Dev</p>
          </div>

          <div className="text-center lg:text-left sm:border-r border-white/10 sm:px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-gradient-indigo font-mono-code">8.3</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">B.E. CSE CGPA</p>
          </div>

          <div className="text-center lg:text-left sm:border-r border-white/10 sm:px-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan font-mono-code">2+</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Production Apps</p>
          </div>

          <div className="text-center lg:text-left sm:pl-4">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono-code">2026</p>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Immediate Joiner</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
