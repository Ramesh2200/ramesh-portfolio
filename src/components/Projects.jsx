import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Play,
  Pause,
  Film,
  Image,
  Database,
  Server,
  Layers,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Boxes,
  X,
  Maximize2,
  RotateCcw
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projects } from "../data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [enlargedMedia, setEnlargedMedia] = useState(null);
  const [activeVideoPlays, setActiveVideoPlays] = useState({});
  const [mediaModes, setMediaModes] = useState({
    "smart-parking-system": "8k-hd",
    "ecommerce-website": "video",
    "food-order-delivery": "video"
  });

  const toggleMediaMode = (projectId, mode) => {
    setMediaModes((prev) => ({
      ...prev,
      [projectId]: mode
    }));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Colorful Background Image & Neon Glows */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none -z-10"
        style={{ backgroundImage: "url('/assets/colorful-tech-bg.jpg')" }}
      ></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-gradient-to-r from-cyan-600/15 to-fuchsia-600/15 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MULTIMEDIA PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Full Stack Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Enterprise applications equipped with embedded video demonstrations, live Vercel deployments, and production database integrations.
          </p>
        </div>

        {/* Featured Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {projects.map((project, index) => {
            const isSmartParking = project.id === "smart-parking-system";
            const isEcommerce = project.id === "ecommerce-website";
            const isFeastFlow = project.id === "food-order-delivery";

            const currentMediaMode = mediaModes[project.id] || (isSmartParking ? "8k-hd" : "video");

            const previewImage =
              isSmartParking
                ? currentMediaMode === "dashboard"
                  ? "/assets/smart-parking-dashboard.jpg"
                  : "/assets/smart-parking-8k-hd.jpg"
                : isEcommerce
                ? "/assets/ecommerce-demo-showcase-16x9.jpg"
                : "/assets/food-delivery-preview.jpg";

            const rawShowcaseImage =
              isSmartParking
                ? currentMediaMode === "dashboard"
                  ? "/assets/smart-parking-dashboard.jpg"
                  : "/assets/smart-parking-8k-hd.jpg"
                : isEcommerce
                ? "/assets/ecommerce-demo-showcase.png"
                : previewImage;

            const videoSrc =
              isEcommerce
                ? "/videos/ecommerce-demo.mp4"
                : isFeastFlow
                ? "/videos/food-delivery-demo.mp4"
                : null;

            const projectBadge = isSmartParking
              ? "Smart Parking System • 8K HD"
              : isFeastFlow
              ? "FeastFlow Food Delivery"
              : "E-Commerce Enterprise";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-cyan-500/40 group relative shadow-2xl"
              >
                <div>
                  {/* Top Bar with Media Switcher Tabs & Full Size Trigger */}
                  <div className="px-5 py-3.5 bg-[#03060d] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                      <span className="ml-2 text-xs font-mono-code text-slate-400 font-medium truncate max-w-[140px] sm:max-w-none">
                        {project.title}
                      </span>
                    </div>

                    {/* Media Switcher Tabs */}
                    <div className="flex items-center gap-1.5 bg-white/[0.05] p-1 rounded-xl border border-white/10">
                      {isSmartParking ? (
                        <>
                          <button
                            onClick={() => toggleMediaMode(project.id, "8k-hd")}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all ${
                              currentMediaMode === "8k-hd"
                                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                            <span>8K HD Facility</span>
                          </button>

                          <button
                            onClick={() => toggleMediaMode(project.id, "dashboard")}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all ${
                              currentMediaMode === "dashboard"
                                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Layers className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Dashboard UI</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => toggleMediaMode(project.id, "video")}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all ${
                              currentMediaMode === "video"
                                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Film className="w-3.5 h-3.5" />
                            <span>Video Demo</span>
                          </button>

                          <button
                            onClick={() => toggleMediaMode(project.id, "image")}
                            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono-code transition-all ${
                              currentMediaMode === "image"
                                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                                : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Image className="w-3.5 h-3.5" />
                            <span>Preview</span>
                          </button>
                        </>
                      )}

                      <button
                        onClick={() =>
                          setEnlargedMedia({
                            type: isSmartParking ? "image" : currentMediaMode,
                            url: isSmartParking
                              ? rawShowcaseImage
                              : currentMediaMode === "video"
                              ? project.youtubeEmbedUrl
                              : rawShowcaseImage,
                            title: isSmartParking
                              ? `${project.title} — ${currentMediaMode === "dashboard" ? "Live Dashboard UI" : "8K Ultra HD Visualization"}`
                              : project.title
                          })
                        }
                        className="p-1 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-white/10 transition-colors"
                        title="Enlarge (Full Width & Breadth)"
                        aria-label="Enlarge Media"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Multimedia Preview Container with Exact 16:9 Widescreen Aspect & Background Cover */}
                  <div
                    className="relative aspect-[16/9] w-full overflow-hidden bg-[#000000] bg-cover bg-center"
                    style={{ backgroundImage: `url(${previewImage})` }}
                  >
                    {currentMediaMode === "video" ? (
                      project.youtubeEmbedUrl ? (
                        !activeVideoPlays[project.id] ? (
                          <div
                            onClick={() =>
                              setActiveVideoPlays((prev) => ({ ...prev, [project.id]: true }))
                            }
                            className="relative w-full h-full cursor-pointer group/videocover flex items-center justify-center overflow-hidden"
                            title="Click to play video demo"
                          >
                            <img
                              src={previewImage}
                              alt={`${project.title} Video Demo Background`}
                              className="absolute inset-0 w-full h-full object-cover object-center group-hover/videocover:scale-105 transition-transform duration-700 pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-black/35 group-hover/videocover:bg-black/20 transition-colors backdrop-blur-[0.5px] pointer-events-none"></div>

                            {/* Centered Glowing Play Action - Exactly in the middle */}
                            <div className="relative z-10 flex flex-col items-center justify-center gap-3">
                              <div className="w-16 h-16 rounded-full bg-cyan-500/25 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-[0_0_35px_rgba(6,182,212,0.7)] group-hover/videocover:scale-110 group-hover/videocover:bg-cyan-500 group-hover/videocover:text-black group-hover/videocover:border-white transition-all">
                                <Play className="w-7 h-7 fill-current ml-1" />
                              </div>
                              <span className="px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-cyan-500/50 text-cyan-300 text-xs font-mono-code font-bold tracking-wide shadow-2xl flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                                Play Video Demo
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="relative w-full h-full">
                            <iframe
                              src={`${project.youtubeEmbedUrl}&autoplay=1`}
                              title={`${project.title} Video Walkthrough`}
                              className="w-full h-full border-0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveVideoPlays((prev) => ({ ...prev, [project.id]: false }));
                              }}
                              className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black/95 backdrop-blur-md border border-white/20 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-[11px] font-mono-code flex items-center gap-1.5 transition-all shadow-lg"
                              title="Show background cover"
                            >
                              <RotateCcw className="w-3 h-3" />
                              <span>Cover View</span>
                            </button>
                          </div>
                        )
                      ) : (
                        <video
                          src={videoSrc}
                          poster={previewImage}
                          controls
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover"
                        >
                          Your browser does not support HTML5 video.
                        </video>
                      )
                    ) : (
                      <div
                        onClick={() =>
                          setEnlargedMedia({
                            type: "image",
                            url: rawShowcaseImage,
                            title: isSmartParking
                              ? `${project.title} (${currentMediaMode === "dashboard" ? "Live Dashboard UI" : "8K Ultra HD Resolution"})`
                              : project.title
                          })
                        }
                        className="relative w-full h-full group/img cursor-pointer bg-slate-950 flex items-center justify-center overflow-hidden"
                        title={isSmartParking ? "Click to view in 8K Ultra HD" : "Click to view full width & breadth"}
                      >
                        <img
                          src={previewImage}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[11px] font-mono-code opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1.5 shadow-lg pointer-events-none">
                          <Maximize2 className="w-3 h-3" />
                          <span>{isSmartParking ? "8K Ultra HD View" : "Full Breadth View"}</span>
                        </div>
                      </div>
                    )}

                    {/* 8K Ultra HD Indicator Badge */}
                    {isSmartParking && (
                      <div className="absolute top-3 left-3 pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded-full bg-[#050505]/90 backdrop-blur-md text-cyan-300 font-mono-code text-[11px] font-bold border border-cyan-400/50 flex items-center gap-1.5 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                          <span>8K ULTRA HD</span>
                        </span>
                      </div>
                    )}

                    {/* Vercel Status Badge */}
                    <div className="absolute top-3 right-3 pointer-events-none z-10">
                      <span className="px-2.5 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md text-emerald-400 font-mono-code text-[11px] font-bold border border-emerald-500/30 flex items-center gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Vercel Deployed
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-md bg-white/5 text-slate-400 text-xs font-mono-code border border-white/10">
                          {project.year || "2026"}
                        </span>
                      </div>
                      <p className="text-xs font-mono-code text-cyan-400">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills in JetBrains Mono */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-mono-code"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Database Details */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-6 text-xs text-slate-300 flex items-start gap-2.5">
                      <Database className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{project.databaseDetails}</span>
                    </div>

                    {/* Core Features */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-6 font-mono-code">
                      {project.features.slice(0, 6).map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer with Live Vercel Link & Source Code Trigger */}
                <div className="p-6 sm:p-8 pt-0 border-t border-white/5 mt-auto flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02]"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://github.com/Ramesh2200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-mono-code flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Source Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="py-3 px-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 text-xs font-mono-code transition-colors"
                    title="View relational database entities"
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Architecture Summary Callout */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <Boxes className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">
                Full-Stack Architecture Standard
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Every application incorporates secure RESTful microservices, Spring Boot 3 layered MVC design, Hibernate 6 ORM persistence, and reactive React components deployed on Vercel.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Ramesh2200"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white text-xs font-mono-code transition-all hover:border-cyan-500/40"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>Browse All Repositories</span>
          </a>
        </div>

      </div>

      {/* Relational Schema Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-2xl bg-[#090d16] border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] p-6 sm:p-8 overflow-hidden relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2 text-xs font-mono-code text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>ARCHITECTURAL SCHEMA</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs font-mono-code uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Relational MySQL Entities & Tables
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.entities.map((entity) => (
                    <span
                      key={entity}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono-code text-xs font-semibold"
                    >
                      {entity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-mono-code uppercase text-slate-400 mb-3 tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Production Tested Modules
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 font-mono-code">
                  {selectedProject.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 p-1.5 rounded bg-white/[0.02]">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs text-center flex items-center justify-center gap-2 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live App</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-mono-code"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Full Width & Breadth Showcase Lightbox Modal */}
      <AnimatePresence>
        {enlargedMedia && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setEnlargedMedia(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#090d16] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(6,182,212,0.3)] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#03060d]">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <h3 className="text-white font-bold text-sm font-mono-code">
                    {enlargedMedia.title} — {enlargedMedia.type === "video" ? "Video Walkthrough" : "Full Breadth Showcase"}
                  </h3>
                </div>
                <button
                  onClick={() => setEnlargedMedia(null)}
                  className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/30 transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 sm:p-6 flex items-center justify-center bg-black/80">
                {enlargedMedia.type === "video" ? (
                  <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <iframe
                      src={enlargedMedia.url}
                      title={enlargedMedia.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="max-h-[78vh] overflow-auto flex items-center justify-center w-full">
                    <img
                      src={enlargedMedia.url}
                      alt={enlargedMedia.title}
                      className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-white/10"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
