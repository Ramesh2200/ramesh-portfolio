import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  ExternalLink,
  Printer,
  FileText,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  Check,
  Eye,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { profile } from "../data/profile";

export function ResumeModal({ isOpen, onClose }) {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [activeTab, setActiveTab] = useState("hd"); // 'hd' or 'pdf'
  const [downloaded, setDownloaded] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const url = profile.resumePath || "/Ramesh_K_Resume.pdf";
    const filename = "Ramesh_K_Resume.pdf";

    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setDownloaded(true);
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }, 800);
        setTimeout(() => setDownloaded(false), 3000);
      })
      .catch((err) => {
        console.warn("Direct blob download error, fallback:", err);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      });
  };

  const handleOpenInNewTab = () => {
    window.open(profile.resumePath || "/Ramesh_K_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  const handlePrint = () => {
    const printWindow = window.open(profile.resumePath || "/Ramesh_K_Resume.pdf", "_blank");
    if (printWindow) {
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#070b14] border-b border-white/10 select-none">
            {/* Left Title Info */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide font-mono-code">
                    Ramesh_K_Resume.pdf
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3 h-3" />
                    Verified 2026
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono-code">
                  Java & Python Full Stack Developer • Tap Academy • 1 Page
                </p>
              </div>
            </div>

            {/* Middle View Selector */}
            <div className="flex items-center bg-white/[0.05] border border-white/10 rounded-xl p-0.5 text-xs font-mono-code">
              <button
                type="button"
                onClick={() => setActiveTab("hd")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "hd"
                    ? "bg-cyan-500 text-white font-semibold shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>HD View</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("pdf")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === "pdf"
                    ? "bg-cyan-500 text-white font-semibold shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Browser PDF</span>
              </button>
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Zoom Controls (Active in HD view) */}
              {activeTab === "hd" && (
                <div className="hidden sm:flex items-center gap-1 bg-white/[0.04] border border-white/10 rounded-xl px-1 py-0.5">
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.max(z - 15, 60))}
                    className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono-code text-slate-300 w-9 text-center">
                    {zoomLevel}%
                  </span>
                  <button
                    type="button"
                    onClick={() => setZoomLevel((z) => Math.min(z + 15, 170))}
                    className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setZoomLevel(100)}
                    className="p-1 text-slate-400 hover:text-white hover:bg-white/10 rounded cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Open in Tab */}
              <button
                type="button"
                onClick={handleOpenInNewTab}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-200 hover:text-white text-xs font-mono-code transition-all cursor-pointer"
                title="Open PDF in a fresh browser tab"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden md:inline">Open Tab</span>
              </button>

              {/* Print */}
              <button
                type="button"
                onClick={handlePrint}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-200 hover:text-white text-xs font-mono-code transition-all cursor-pointer"
                title="Print Resume"
              >
                <Printer className="w-3.5 h-3.5 text-indigo-400" />
                <span>Print</span>
              </button>

              {/* Download PDF Button */}
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold font-mono-code shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {downloaded ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </>
                )}
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
                title="Close Resume View (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Content */}
          <div className="flex-1 overflow-auto bg-[#04060b] p-3 sm:p-6 flex items-center justify-center relative">
            {activeTab === "hd" ? (
              <div
                className="flex items-center justify-center transition-all duration-200 max-w-full"
                style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "top center" }}
              >
                <div className="relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/20 bg-white">
                  <img
                    src="/ramesh-resume-preview-hd.png"
                    alt="Ramesh K - Resume Preview"
                    className="max-h-[78vh] w-auto object-contain select-none"
                    loading="eager"
                  />
                  {/* Subtle watermarked security badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono-code text-cyan-300 border border-cyan-500/30">
                    Official Resume
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <iframe
                  src={`${profile.resumePath || "/Ramesh_K_Resume.pdf"}#toolbar=1&navpanes=0`}
                  title="Ramesh K Resume PDF Viewer"
                  className="w-full h-full border-0"
                />
              </div>
            )}
          </div>

          {/* Bottom Floating Quick Tips Footer */}
          <div className="px-4 py-2 bg-[#070b14]/90 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono-code">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Online Document: Always serves the latest updated 2026 resume</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>Press [Esc] to exit viewer</span>
              <button
                type="button"
                onClick={handleDownload}
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 cursor-pointer"
              >
                Direct PDF Download
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
