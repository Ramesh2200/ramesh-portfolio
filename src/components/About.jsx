import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Server,
  Layers,
  Cpu,
  CheckCircle2,
  Play,
  FileCode2,
  Code2,
  Award,
  Globe2
} from "lucide-react";
import { profile } from "../data/profile";
import { education } from "../data/education";

export function About({ onWatchIntro }) {
  const pillars = [
    {
      icon: Server,
      title: "Scalable Java Backends",
      desc: "Architecting modular Spring Boot REST microservices with Hibernate ORM, JDBC pooling, and clean layered MVC patterns.",
      accent: "from-cyan-500/20 to-cyan-500/5",
      border: "hover:border-cyan-500/40"
    },
    {
      icon: Code2,
      title: "Reactive Modern Frontend",
      desc: "Crafting fluid, accessible single-page applications using React.js hooks, responsive Tailwind utility layouts, and dynamic state.",
      accent: "from-indigo-500/20 to-indigo-500/5",
      border: "hover:border-indigo-500/40"
    },
    {
      icon: Layers,
      title: "Optimized Relational DBs",
      desc: "Designing normalized MySQL database schemas, composite keys, indexing, and complex queries for performant CRUD operations.",
      accent: "from-sky-500/20 to-sky-500/5",
      border: "hover:border-sky-500/40"
    },
    {
      icon: Cpu,
      title: "Clean Code & Reliability",
      desc: "Deeply rooted in OOP, DRY principles, SOLID conventions, comprehensive API testing with Postman, and collaborative Git workflows.",
      accent: "from-emerald-500/20 to-emerald-500/5",
      border: "hover:border-emerald-500/40"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Image & Ambience */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none -z-10"
        style={{ backgroundImage: "url('/assets/vibrant-mesh-bg.jpg')" }}
      ></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Driven By <span className="text-gradient-cyan">Scalability & Passion</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Bridging robust backend engineering with responsive front-end design to deliver high-performance, real-world digital products.
          </p>
        </div>

        {/* Top Grid: Academic Spotlight & Interactive Code Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left: Academic Background Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider font-semibold">
                    Academic Background
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    B.E. in Computer Science & Engineering
                  </h3>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-white font-semibold text-base">
                    Yenepoya Institute of Technology
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-code text-xs font-bold border border-cyan-500/30">
                    8.3 CGPA
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono-code flex items-center gap-1.5 mb-3">
                  <span>Moodabidre, Karnataka</span> • <span>Class of 2022 – 2026</span>
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Rigorous computer science curriculum emphasizing Object-Oriented Programming (Java), Data Structures & Algorithms, Relational Database Management Systems (RDBMS), Operating Systems, and Software Engineering methodologies.
                </p>
              </div>

              {/* Core Tenets Checklist */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Graduating in 2026 with consistent academic distinction (8.3 CGPA).</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>6 Months intensive professional full-stack training at Tap Academy.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>Demonstrated capability deploying production E-Commerce & Food Delivery apps.</span>
                </div>
              </div>
            </div>

            {onWatchIntro && (
              <button
                onClick={onWatchIntro}
                className="w-full mt-4 flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 border border-cyan-500/30 text-cyan-200 text-sm font-semibold transition-all hover:scale-[1.01]"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Watch Video Introduction & Walkthrough</span>
              </button>
            )}
          </motion.div>

          {/* Right: Technical Persona & Code Terminal Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4 font-mono-code text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-slate-300">ramesh_profile.json</span>
              </div>
              <span className="text-cyan-400/80">UTF-8 // JSON</span>
            </div>

            {/* Code Block in JetBrains Mono */}
            <pre className="p-4 rounded-xl bg-[#030712]/80 border border-white/5 font-mono-code text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed shadow-inner">
              <code>{`{
  "developer": "Ramesh K",
  "status": "Ready for Full-Time Roles (2026)",
  "education": {
    "degree": "B.E. Computer Science & Engineering",
    "institution": "Yenepoya Institute of Technology",
    "cgpa": "8.3 / 10.0",
    "year": "2022 - 2026"
  },
  "coreExpertise": [
    "Java 17/21", "Spring Boot", "Hibernate ORM",
    "React.js", "MySQL", "REST APIs", "JDBC"
  ],
  "training": "Tap Academy Full Stack Developer (6 Mos)",
  "location": "Karnataka, India",
  "passion": "Building scalable web platforms with clean code"
}`}</code>
            </pre>

            {/* Bottom Highlights */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/15 text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-mono-code">Commitment</p>
                  <p className="text-sm font-semibold text-white">Clean Architecture</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-mono-code">Target</p>
                  <p className="text-sm font-semibold text-white">Full-Stack Scale</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Four Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 rounded-2xl ${pillar.border} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
