import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Cpu,
  Database,
  Server,
  Code,
  Download,
  Eye,
  X,
  ExternalLink,
  ZoomIn
} from "lucide-react";

export function Education() {
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  const handleDownloadPDF = (e) => {
    if (e) e.preventDefault();
    const url = "/Ramesh_K_Degree_Certificate.pdf";
    const filename = "Ramesh_K_Degree_Certificate.pdf";

    // 100% reliable blob download
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }, 300);
      })
      .catch((err) => {
        console.warn("Blob download fallback:", err);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.target = "_blank";
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 300);
      });
  };

  const coreCompetencies = [
    {
      title: "Data Structures & Algorithms",
      desc: "Arrays, LinkedLists, Binary Trees, Stacks, Queues, Hashing, Graph Traversals, Sorting.",
      icon: Code,
      accent: "#06b6d4"
    },
    {
      title: "Object-Oriented Programming (Java)",
      desc: "Inheritance, Polymorphism, Abstraction, Encapsulation, Collections, Multithreading.",
      icon: Cpu,
      accent: "#6366f1"
    },
    {
      title: "Relational Database Management",
      desc: "MySQL & PostgreSQL schema normalization, complex SQL joins, indexing, ACID transactions.",
      icon: Database,
      accent: "#10b981"
    },
    {
      title: "Software Engineering & Architecture",
      desc: "Layered MVC patterns, REST API standards, Git version control, testing methodologies.",
      icon: Server,
      accent: "#f59e0b"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Colorful Background Ambient Image & Mesh */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: "url('/assets/colorful-tech-bg.jpg')" }}
        ></div>
        <div className="absolute -top-10 right-1/4 w-[32rem] h-[32rem] rounded-full bg-purple-600/15 blur-[140px]"></div>
        <div className="absolute bottom-10 left-1/4 w-[32rem] h-[32rem] rounded-full bg-cyan-600/15 blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Degree Honors</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Bachelor of Engineering in Computer Science & Engineering from Yenepoya Institute of Technology with official VTU degree certification.
          </p>
        </div>

        {/* 1. Featured Degree Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 hover:border-cyan-500/40 relative overflow-hidden shadow-2xl mb-12"
        >
          {/* Top Multi-Color Neon Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 via-purple-500 to-emerald-400"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] shrink-0 p-4">
                <GraduationCap className="w-10 h-10" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-code text-xs font-bold border border-cyan-500/30">
                    B.E. Computer Science & Engineering
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-code text-xs font-bold border border-emerald-500/30">
                    Graduating Class of 2026
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Yenepoya Institute of Technology
                </h3>
                <p className="text-cyan-400 text-sm font-semibold flex items-center gap-1.5 mt-1 font-mono-code">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  Moodabidre, Karnataka, India
                </p>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.25)] text-center">
                <span className="text-[10px] uppercase font-mono-code text-slate-400 block">Grade Point Average</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300 font-mono-code">
                  8.3 / 10.0
                </span>
              </div>
            </div>
          </div>

          {/* Degree Overview */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
            Completed intensive 4-year Computer Science & Engineering curriculum focused on core algorithm design, object-oriented systems engineering in Java, relational database modeling, and scalable modern web architectures.
          </p>

          {/* Core Subject Competencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreCompetencies.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-3 shadow-sm"
                      style={{ color: item.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono-code">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono-code">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Distinction Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 2. Official Provisional Degree Certificate Showcase & PDF Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-amber-500/40 relative overflow-hidden shadow-2xl"
        >
          {/* Top Amber-Gold Neon Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300"></div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono-code text-[11px] font-bold border border-amber-500/30">
                    OFFICIAL PROVISIONAL DEGREE CERTIFICATE
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono-code text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> VTU Verified
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Visvesvaraya Technological University
                </h3>
                <p className="text-xs font-mono-code text-slate-400 mt-0.5">
                  Provisional Degree Certificate • Ref: <span className="text-amber-400 font-bold">PDC0005527</span> • USN: <span className="text-cyan-300 font-bold">4DM22CS080</span>
                </p>
              </div>
            </div>

            {/* Action Buttons: PDF Download & Preview */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleDownloadPDF}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs font-mono-code shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                title="Download Official Degree Certificate PDF to Disk"
              >
                <Download className="w-4 h-4" />
                <span>Download Certificate (PDF)</span>
              </button>

              <a
                href="/Ramesh_K_Degree_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 text-xs font-mono-code transition-all"
                title="Open PDF Document in New Tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open PDF</span>
              </a>

              <button
                onClick={() => setIsCertModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-mono-code transition-all cursor-pointer"
                title="View High-Resolution Certificate"
              >
                <ZoomIn className="w-4 h-4 text-amber-400" />
                <span>Zoom</span>
              </button>
            </div>
          </div>

          {/* Certificate Interactive Preview Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Certificate Image Frame */}
            <div
              onClick={() => setIsCertModalOpen(true)}
              className="lg:col-span-6 relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-white/20 bg-white shadow-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]"
            >
              <div className="relative overflow-hidden bg-white p-2">
                <img
                  src="/ramesh-degree-certificate.png"
                  alt="Ramesh K - Provisional Degree Certificate - Visvesvaraya Technological University"
                  className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-6 text-center backdrop-blur-xs">
                  <span className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </span>
                  <span className="text-sm font-mono-code text-white font-bold">
                    Click to View Full Size Certificate
                  </span>
                  <span className="text-xs font-mono-code text-amber-300">
                    Ref: PDC0005527 • VTU Belagavi
                  </span>
                </div>
              </div>
            </div>

            {/* Certificate Highlights & Verification Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider">
                  Degree Awarded
                </div>
                <div className="text-lg font-bold text-white">
                  B.E. in Computer Science & Engineering
                </div>
                <div className="text-xs text-cyan-300 font-mono-code">
                  Awarded to: <span className="font-bold text-white">RAMESH K</span> • USN: <span className="font-bold text-cyan-400">4DM22CS080</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <div className="text-[11px] font-mono-code text-slate-400 uppercase tracking-wider">
                  Awarding University & Institution
                </div>
                <div className="text-sm font-semibold text-white">
                  Visvesvaraya Technological University (VTU)
                </div>
                <div className="text-xs text-slate-400 font-mono-code">
                  "Jnana Sangama" Belagavi - 590 018, Karnataka State, India
                </div>
                <div className="text-xs text-slate-400 font-mono-code">
                  College: Yenepoya Institute of Technology, Moodabidre
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-center">
                  <span className="text-[10px] font-mono-code uppercase text-emerald-300 block">Class Division</span>
                  <span className="text-xs font-black text-emerald-400 font-mono-code mt-0.5 block">
                    First Class with Distinction
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-center">
                  <span className="text-[10px] font-mono-code uppercase text-cyan-300 block">Issue Date</span>
                  <span className="text-xs font-black text-cyan-400 font-mono-code mt-0.5 block">
                    June 30, 2026
                  </span>
                </div>
              </div>

              {/* Direct Action Links Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code">
                <button
                  onClick={handleDownloadPDF}
                  className="w-full sm:flex-1 text-center py-2.5 px-4 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-all font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Certificate (PDF)</span>
                </button>
                <a
                  href="/Ramesh_K_Resume.pdf"
                  download="Ramesh_K_Resume.pdf"
                  className="w-full sm:flex-1 text-center py-2.5 px-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all font-semibold flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Simple Schooling & Pre-University (PUC & SSLC) Cards */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white font-mono-code uppercase tracking-wider">
              Schooling & Pre-University Foundation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PUC Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 font-mono-code text-[11px] font-bold border border-cyan-500/25">
                    Pre-University Course (PUC)
                  </span>
                  <h4 className="text-base font-bold text-white mt-2">
                    Bellary Indep PU College
                  </h4>
                  <p className="text-xs text-slate-400 font-mono-code mt-0.5">
                    Karnataka, India • 2020 – 2022
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-center shrink-0">
                  <span className="text-[10px] uppercase font-mono-code text-slate-400 block">Score</span>
                  <span className="text-xl font-extrabold text-cyan-400 font-mono-code">66%</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono-code">
                Science stream focusing on Physics, Chemistry, Mathematics, and Computer Science (PCMC).
              </p>
            </motion.div>

            {/* SSLC Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-mono-code text-[11px] font-bold border border-emerald-500/25">
                    Secondary School (SSLC)
                  </span>
                  <h4 className="text-base font-bold text-white mt-2">
                    Morarji Desai Residential School
                  </h4>
                  <p className="text-xs text-slate-400 font-mono-code mt-0.5">
                    Karnataka, India • 2020
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-center shrink-0">
                  <span className="text-[10px] uppercase font-mono-code text-slate-400 block">Distinction</span>
                  <span className="text-xl font-extrabold text-emerald-400 font-mono-code">86%</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono-code">
                Secondary School Leaving Certificate (10th Standard) completed with first-class academic distinction.
              </p>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Certificate Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isCertModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setIsCertModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/95 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Provisional Degree Certificate — Ramesh K
                    </h4>
                    <p className="text-[11px] font-mono-code text-slate-400">
                      Visvesvaraya Technological University • Ref: PDC0005527 • USN: 4DM22CS080
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadPDF}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold font-mono-code transition-all cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                  <a
                    href="/Ramesh_K_Degree_Certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-mono-code transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Tab</span>
                  </a>
                  <button
                    onClick={() => setIsCertModalOpen(false)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    title="Close preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body with Certificate Image */}
              <div className="overflow-y-auto p-4 sm:p-6 bg-slate-950 flex items-center justify-center">
                <img
                  src="/ramesh-degree-certificate.png"
                  alt="Provisional Degree Certificate - Ramesh K"
                  className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-white/20 bg-white"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
