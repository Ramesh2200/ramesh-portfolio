import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  // Toggle between 'dark' and 'light' (white)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("ramesh_portfolio_theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const mode = isDark ? "dark" : "light";
    localStorage.setItem("ramesh_portfolio_theme", mode);
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
      root.classList.remove("light");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="flex items-center bg-white/[0.05] p-1 rounded-xl border border-white/10 backdrop-blur-xl">
      <button
        onClick={() => setIsDark(true)}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
          isDark
            ? "bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-semibold"
            : "text-slate-400 hover:text-slate-200"
        }`}
        title="Dark Mode"
      >
        <Moon className="w-3.5 h-3.5 text-cyan-400" />
        <span>Dark</span>
      </button>

      <button
        onClick={() => setIsDark(false)}
        className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono-code transition-all ${
          !isDark
            ? "bg-gradient-to-r from-amber-400/30 to-rose-400/30 text-amber-300 border border-amber-400/40 shadow-[0_0_15px_rgba(245,158,11,0.3)] font-semibold"
            : "text-slate-400 hover:text-slate-200"
        }`}
        title="White / Light Mode"
      >
        <Sun className="w-3.5 h-3.5 text-amber-400" />
        <span>White</span>
      </button>
    </div>
  );
}
