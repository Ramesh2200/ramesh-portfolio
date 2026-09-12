import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Download, Code2, FileText } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "../data/profile";
import { downloadResume } from "../utils/downloadResume";
import { IconicRLogo } from "./IconicRLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", id: "hero", path: "/" },
    { label: "Skills", id: "skills", path: "/skills" },
    { label: "Projects", id: "projects", path: "/projects" },
    { label: "Education", id: "education", path: "/education" },
    { label: "Experience", id: "experience", path: "/experience" },
    { label: "Contact", id: "contact", path: "/contact" }
  ];

  // Scroll listener for background glass blur and active section scroll-spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only run scroll-spy on continuous home page
      if (location.pathname === "/" || location.pathname === "") {
        const sections = ["hero", "skills", "projects", "education", "experience", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Handle hash scrolling on route change or initial load
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(targetId);
        }, 100);
      }
    }
  }, [location]);

  // Smooth continuous navigation handler
  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const el = document.getElementById(link.id);
    if (el) {
      // Element exists on current page: smooth scroll continuously!
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(link.id);
      window.history.pushState(null, "", `/#${link.id}`);
    } else {
      // Element is on the continuous home view: navigate there and scroll
      navigate(`/#${link.id}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-3"
          : "bg-[#050505]/50 backdrop-blur-md py-4 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/#hero"
          onClick={(e) => handleNavClick(e, { id: "hero", path: "/" })}
          className="group flex items-center gap-2.5 font-bold tracking-tight text-white transition-colors"
        >
          <IconicRLogo size={38} className="group-hover:scale-105 transition-transform" />
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-wide font-mono-code flex items-center gap-1.5 text-white">
              Ramesh
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </span>
            <span className="text-[10px] text-slate-400 -mt-1 font-mono-code uppercase tracking-wider">
              Java & Python Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Continuous Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 font-mono-code ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Status Badge, Theme Toggle & Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />

          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Available to Hire</span>
          </div>

          <button
            type="button"
            onClick={(e) => downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            onClick={(e) => downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-400 cursor-pointer"
            title="Open Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#050505]/95 border-b border-white/10 backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-2.5 mb-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono-code">
              <span>Status: Ready for 2026 Full-Time Roles</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors font-mono-code ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Open & View Resume (PDF)</span>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  downloadResume(e, "Ramesh_K_Resume.pdf", profile.resumePath);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Download PDF File</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
