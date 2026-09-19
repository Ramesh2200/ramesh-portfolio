import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Sparkles,
  Database,
  Layers,
  Terminal,
  Server,
  Play,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import { downloadResume } from "../utils/downloadResume";

export function Hero({ onWatchIntro }) {
  const roles = [
    "Java Full Stack Developer",
    "Spring Boot Specialist",
    "Python & Django Developer",
    "React.js & REST API Architect"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(35);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  const handleCopy = (text, type) => {
    navigator.clipboard?.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const coreSkills = [
    { name: "Java", color: "bg-amber-500/15 text-amber-300 border-amber-500/30" },
    { name: "Spring Boot", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
    { name: "React.js", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30" },
    { name: "Python", color: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
    { name: "Django", color: "bg-teal-500/15 text-teal-300 border-teal-500/30" },
    { name: "MySQL", color: "bg-sky-500/15 text-sky-300 border-sky-500/30" },
    { name: "REST APIs", color: "bg-purple-500/15 text-purple-300 border-purple-500/30" },
    { name: "Git", color: "bg-rose-500/15 text-rose-300 border-rose-500/30" }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* 1. Transparent Ambient Glows & Dot-Matrix Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
        {/* Soft Ambient Luminous Accent */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-[130px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] rounded-full bg-indigo-500/10 blur-[140px]"></div>

        {/* Subtle Technical Dot-Matrix Texture */}
        <div className="absolute inset-0 dot-matrix opacity-10 pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Status Capsule */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0c121e]/90 border border-cyan-500/40 shadow-[0_4px_25px_rgba(6,182,212,0.25)] backdrop-blur-xl">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono-code font-bold text-cyan-300 tracking-wide uppercase">
              2026 CS Graduate • 7.9 CGPA • Available for Immediate Joining
            </span>
          </div>
        </motion.div>

        {/* Main Grid: Details Left, Focal Profile Photo Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: All Core Portfolio Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Name with Modern Gradient Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-[1.12] drop-shadow-lg">
              Hello, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Ramesh K
              </span>
            </h1>

            {/* Dynamic Typewriter Professional Title */}
            <div className="h-12 sm:h-14 flex items-center justify-center lg:justify-start mb-5">
              <div className="inline-flex items-center px-4 py-2 rounded-xl bg-[#090e1a]/85 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Terminal className="w-4 h-4 text-cyan-400 mr-2.5" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono-code text-white flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300">
                    {displayText}
                  </span>
                  <span className="inline-block w-2 sm:w-2.5 h-6 sm:h-7 ml-2 bg-cyan-400 align-middle animate-pulse"></span>
                </span>
              </div>
            </div>

            {/* Short Narrative Introduction */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed font-normal">
              Computer Science graduate from{" "}
              <span className="font-semibold text-cyan-300 underline decoration-cyan-400/40 underline-offset-4">
                Yenepoya Institute of Technology (7.9 CGPA)
              </span>{" "}
              with{" "}
              <span className="font-semibold text-indigo-300">
                6 months of intensive full-stack development training at Tap Academy
              </span>.
              Experienced in architecting production-grade web systems across Java, Spring Boot, React.js, Python, Django, and MySQL.
            </p>

            {/* Skills Snapshot Row */}
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2.5 text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>Core Technical Skills</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs font-mono-code font-medium px-2.5 py-1 rounded-lg ${skill.color} border backdrop-blur-md shadow-xs transition-transform hover:scale-105 cursor-default`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Projects Quick Showcase */}
            <div className="mb-8 p-3.5 rounded-2xl bg-[#090e1a]/85 border border-cyan-500/30 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-2 px-1">
                <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Featured Production Projects</span>
                </span>
                <Link
                  to="/projects"
                  className="text-[11px] font-mono-code text-cyan-400 hover:underline flex items-center gap-1"
                >
                  View All ({projects.length})
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {projects.slice(0, 3).map((p) => (
                  <Link
                    key={p.id}
                    to="/projects"
                    className="p-2 rounded-xl bg-[#0c1322]/80 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 transition-all text-left group flex items-center gap-2.5"
                  >
                    <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-cyan-500/30 bg-slate-900 shadow-xs">
                      <img src={p.previewImage || p.poster} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold text-white truncate group-hover:text-cyan-300">
                        {p.title}
                      </div>
                      <div className="text-[9px] text-slate-400 font-mono-code truncate mt-0.5">
                        {p.stack.slice(0, 3).join(" • ")}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
              <Link
                to="/projects"
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-fuchsia-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-fuchsia-500 text-white font-semibold text-sm shadow-[0_10px_30px_rgba(6,182,212,0.35)] transition-all hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={profile.resumePath}
                download="Ramesh_K_Resume.pdf"
                onClick={(e) => downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath)}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0e1626]/90 hover:bg-[#142036] border border-cyan-500/35 hover:border-cyan-400 text-white font-medium text-sm backdrop-blur-xl transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {onWatchIntro && (
                <button
                  onClick={onWatchIntro}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#090e1a]/80 hover:bg-[#0f172a] border border-white/10 hover:border-cyan-500/30 text-slate-200 hover:text-white text-xs font-mono-code transition-all"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                  <span>Watch Intro</span>
                </button>
              )}
            </div>

            {/* Direct Contact Info Strip & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/10 text-xs">
              {/* Email Chip */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090e1a]/85 border border-white/10 backdrop-blur-md">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-slate-200 hover:text-cyan-400 font-mono-code"
                >
                  {profile.email}
                </a>
                <button
                  onClick={() => handleCopy(profile.email, "email")}
                  title="Copy email"
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Phone Chip */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#090e1a]/85 border border-white/10 backdrop-blur-md">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <a
                  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                  className="text-slate-200 hover:text-indigo-400 font-mono-code"
                >
                  {profile.phone}
                </a>
                <button
                  onClick={() => handleCopy(profile.phone, "phone")}
                  title="Copy phone"
                  className="p-1 text-slate-400 hover:text-white transition-colors"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-slate-400 font-mono-code">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{profile.location}</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl bg-[#090e1a]/85 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all hover:scale-110 shadow-xs"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl bg-[#090e1a]/85 border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all hover:scale-110 shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Main Focal Point - The Prominent Profile Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center order-1 lg:order-2 py-4"
          >
            {/* Luminous Ambient Studio Lighting behind the photo frame */}
            <div className="absolute w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-cyan-400/35 via-white/50 to-indigo-400/35 blur-3xl -z-10 animate-pulse pointer-events-none"></div>

            {/* Profile Photo Showcase Card Container */}
            <div className="relative w-full max-w-[430px] group">
              
              {/* Outer Decorative Gradient Border Glow */}
              <div className="absolute -inset-1.5 rounded-[2.2rem] bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500 opacity-70 blur-lg group-hover:opacity-95 transition-opacity duration-500"></div>

              {/* Main Rounded Frame with Soft Shadow & Realistic Visual Fidelity */}
              <div className="relative rounded-[2rem] overflow-hidden bg-[#0a0f1d] border-2 border-cyan-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl p-2.5 transition-transform duration-500 group-hover:scale-[1.01]">
                
                {/* Photo Container with rounded corners */}
                <div className="relative w-full aspect-square rounded-[1.6rem] overflow-hidden bg-slate-900 shadow-inner">
                  <img
                    src="/ramesh-profile.jpg"
                    alt="Ramesh K - Java Full Stack Developer & 2026 CS Graduate"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />

                  {/* Soft Realistic Gradient Vignette at the base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none"></div>

                  {/* Top-Right Floating Live Status Pill */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 shadow-lg flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-[10px] font-mono-code font-bold text-emerald-300 uppercase tracking-wider">
                      Ready to Work
                    </span>
                  </div>

                  {/* Bottom Photo Identity Banner */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/15 shadow-xl flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-white font-mono-code flex items-center gap-1.5">
                        <span>Ramesh K</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      </h2>
                      <p className="text-[10px] text-cyan-300 font-mono-code">
                        Java Full Stack • Spring Boot • Python
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] uppercase font-mono-code tracking-wider text-slate-400 block">
                        YIT 2026 Batch
                      </span>
                      <span className="text-xs font-bold text-emerald-400 font-mono-code">
                        7.9 CGPA
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Glassmorphism Metric Badges around the Photo */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#0c1220]/95 backdrop-blur-xl border border-cyan-500/40 shadow-[0_10px_30px_rgba(6,182,212,0.25)] flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono-code font-bold text-white block">
                    Enterprise Java
                  </span>
                  <span className="text-[10px] text-cyan-400 font-mono-code">
                    Spring Boot & MVC
                  </span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-3 sm:-left-5 px-3.5 py-2 rounded-2xl bg-[#0c1220]/95 backdrop-blur-xl border border-indigo-500/40 shadow-[0_10px_30px_rgba(99,102,241,0.25)] flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono-code font-bold text-white block">
                    Tap Academy Dev
                  </span>
                  <span className="text-[10px] text-indigo-400 font-mono-code">
                    6 Months Training
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Counter & Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-[#090e1a]/85 border border-cyan-500/25 backdrop-blur-2xl shadow-xl"
        >
          <div className="text-center sm:text-left sm:border-r border-white/10 sm:pr-4">
            <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 font-mono-code">
              6+ Months
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">
              Tap Academy Dev
            </p>
          </div>

          <div className="text-center sm:text-left sm:border-r border-white/10 sm:px-4">
            <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-300 font-mono-code">
              7.9 CGPA
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">
              B.E. CSE (YIT)
            </p>
          </div>

          <div className="text-center sm:text-left sm:border-r border-white/10 sm:px-4">
            <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 font-mono-code">
              3+ Projects
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">
              Production Web Apps
            </p>
          </div>

          <div className="text-center sm:text-left sm:pl-4">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono-code">
              2026 Batch
            </p>
            <p className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">
              Immediate Joiner
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
