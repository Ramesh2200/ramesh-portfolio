import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  Layers,
  Terminal,
  Server,
  Layout,
  Database,
  Wrench,
  ShieldCheck,
  Cpu
} from "lucide-react";
import { categorizedSkills, skillCategories } from "../data/skills";
import { TechIcon } from "../assets/tech-icons";

export function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCategories =
    activeTab === "all"
      ? categorizedSkills
      : categorizedSkills.filter((cat) => cat.category === activeTab);

  // Total count
  const totalCount = categorizedSkills.reduce((acc, cat) => acc + cat.skills.length, 0);

  const getCategoryCount = (id) => {
    if (id === "all") return totalCount;
    const cat = categorizedSkills.find((c) => c.category === id);
    return cat ? cat.skills.length : 0;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Colorful Background Mesh Image & Ambient Glows */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none -z-10"
        style={{ backgroundImage: "url('/assets/vibrant-mesh-bg.jpg')" }}
      ></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical Stack & <span className="text-gradient-cyan">Proficiencies</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Comprehensive production ecosystem featuring Core & Advanced Java, Python, Spring Boot, modern reactive frontends, and robust database architectures.
          </p>

          {/* Clean, Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl max-w-fit mx-auto">
            {skillCategories.map((category) => {
              const count = getCategoryCount(category.id);
              const isActive = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 font-mono-code flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500/25 to-indigo-500/25 text-cyan-300 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono-code ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-200 border border-cyan-400/30"
                        : "bg-white/5 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean, Well-Spaced Categorized Skills Container */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, delay: catIdx * 0.05 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 mb-6 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-2 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <TechIcon name={cat.iconKey} size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono-code">
                        {cat.skills.length} core technologies mastered
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono-code text-emerald-400 self-start sm:self-auto">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Industry & Coursework Verified</span>
                  </div>
                </div>

                {/* Neatly Aligned Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-card p-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group/item"
                    >
                      <div>
                        {/* Card Top: Logo & Level */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#090d16] border border-white/10 flex items-center justify-center p-2 group-hover/item:scale-110 group-hover/item:border-cyan-500/40 transition-all shadow-inner">
                            <TechIcon name={skill.iconKey || skill.name} size={24} />
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono-code font-semibold border border-cyan-500/20 whitespace-nowrap">
                            {skill.level}
                          </span>
                        </div>

                        {/* Skill Name */}
                        <h4 className="text-base font-bold text-white group-hover/item:text-cyan-300 transition-colors mb-1">
                          {skill.name}
                        </h4>

                        {/* Highlight Concepts */}
                        <p className="text-xs text-slate-400 font-mono-code leading-relaxed">
                          {skill.highlight}
                        </p>
                      </div>

                      {/* Bottom Accent Dot */}
                      <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          Production Ready
                        </span>
                        <span>Full Stack</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Engineering Tenets Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">Layered MVC Backend</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Decoupled Controllers, Services, Repositories, and Entity mappings in Spring Boot and Django.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">Relational Integrity</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Normalized schemas across MySQL and PostgreSQL with indexed foreign keys and ACID reliability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white mb-1">Clean Code & OOP</h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                Strict adherence to SOLID principles, DRY standards, REST conventions, and Git version control.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
