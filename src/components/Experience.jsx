import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Bug,
  Database,
  Layers,
  Sparkles,
  GitBranch,
  GraduationCap,
  Code2
} from "lucide-react";
import { experience } from "../data/experience";
import { education } from "../data/education";

export function Experience() {
  const tapAcademyDetails = {
    role: "Full Stack Web Developer",
    company: "Tap Academy",
    period: "6 Months Intensive Training & Development",
    location: "Karnataka, India",
    summary:
      "Completed an intensive 6-month Full Stack Web Development program where I learned and mastered core web frontend technologies including HTML5, CSS3, and JavaScript, while architecting scalable full-stack applications with Core Java, Spring Boot, React.js, Hibernate ORM, and MySQL.",
    corePillars: [
      {
        icon: Code2,
        title: "Frontend Engineering (HTML5, CSS3, JavaScript)",
        desc: "Learned and mastered core web fundamentals including semantic HTML5 structure, modern responsive CSS3 styling, and dynamic JavaScript DOM manipulation and event-driven logic."
      },
      {
        icon: Layers,
        title: "RESTful API Engineering",
        desc: "Designed, developed, and tested RESTful web services in Spring Boot following strict HTTP conventions, status codes, and JSON response payloads."
      },
      {
        icon: Database,
        title: "Database Integration & ORM",
        desc: "Integrated relational MySQL databases using Hibernate ORM and JDBC, optimizing schema designs, foreign key relations, and transactional integrity."
      },
      {
        icon: Bug,
        title: "Bug Resolution & Debugging",
        desc: "Systematically isolated, diagnosed, and resolved edge-case bugs across full-stack layers, improving code modularity and runtime performance."
      },
      {
        icon: GitBranch,
        title: "Collaborative Git Workflows",
        desc: "Employed version control best practices, modular branch management, code refactoring, and clean code principles."
      }
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Core Java",
      "Spring Boot",
      "React.js",
      "Hibernate ORM",
      "MySQL",
      "REST APIs",
      "JDBC",
      "Git & GitHub",
      "Postman",
      "Maven"
    ]
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Colorful Background Ambient Image & Glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none -z-10"
        style={{ backgroundImage: "url('/assets/vibrant-mesh-bg.jpg')" }}
      ></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROFESSIONAL JOURNEY & TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="text-gradient-cyan">Industry Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            Practical full-stack development experience from industry training alongside computer science academic achievements.
          </p>
        </div>

        {/* Tap Academy Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 relative overflow-hidden mb-16 shadow-2xl"
        >
          {/* Top subtle gradient strip */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-sky-400"></div>

          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] shrink-0">
                <Briefcase className="w-7 h-7" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono-code text-xs font-bold border border-cyan-500/30">
                  Tap Academy
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {tapAcademyDetails.role}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {tapAcademyDetails.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                {tapAcademyDetails.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <p className="text-base text-slate-300 leading-relaxed mb-8">
            {tapAcademyDetails.summary}
          </p>

          {/* 4 Core Focus Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {tapAcademyDetails.corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Technologies Used Bar */}
          <div>
            <h4 className="text-xs font-mono-code uppercase text-slate-400 mb-3 tracking-wider">
              Ecosystem & Technologies Practiced:
            </h4>
            <div className="flex flex-wrap gap-2">
              {tapAcademyDetails.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-cyan-300 text-xs font-mono-code hover:border-cyan-500/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
