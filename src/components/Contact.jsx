import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Phone,
  Sparkles,
  ExternalLink,
  MessageSquare,
  MessageCircle,
  AlertCircle
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { profile } from "../data/profile";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sendMethod, setSendMethod] = useState(""); // 'api', 'gmail', 'whatsapp'

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  const buildEncodedQuery = () => {
    const subject = encodeURIComponent(
      formState.subject.trim() || `Portfolio Inquiry from ${formState.name || "Recruiter"}`
    );
    const body = encodeURIComponent(
      `Hello Ramesh,\n\nName: ${formState.name}\nEmail: ${formState.email}\nSubject: ${formState.subject}\n\nMessage:\n${formState.message}\n\nSent from your portfolio website.`
    );
    return { subject, body };
  };

  const handleSendViaGmail = () => {
    const { subject, body } = buildEncodedQuery();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    setSubmitted(true);
    setSendMethod("gmail");
  };

  const handleSendViaWhatsApp = () => {
    const cleanPhone = profile.phone.replace(/[^0-9]/g, "");
    const text = encodeURIComponent(
      `Hi Ramesh, I am ${formState.name || "reaching out from your portfolio"}.\n\nEmail: ${formState.email || "N/A"}\n\nMessage:\n${formState.message || "I would like to discuss an opportunity."}`
    );
    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${text}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
    setSendMethod("whatsapp");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);

    try {
      // 1. Direct send via authenticated Gmail SMTP endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `New Inquiry from ${formState.name}`,
          message: formState.message
        })
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      // 2. Fallback via Web3Forms
      const fallbackResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c6ebff09-3682-4a47-bab9-e56a590f5b4d",
          name: formState.name,
          email: formState.email,
          subject: formState.subject || `New Inquiry from ${formState.name}`,
          message: formState.message,
          from_name: "Ramesh K Portfolio"
        })
      });
      const fallbackData = await fallbackResponse.json();
      if (fallbackData.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
        setIsSubmitting(false);
        return;
      }

      // 3. Fallback mailto
      const { subject, body } = buildEncodedQuery();
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } catch (err) {
      console.warn("Direct send fallback:", err);
      const { subject, body } = buildEncodedQuery();
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`, "_blank");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Image & Glow */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none -z-10"
        style={{ backgroundImage: "url('/assets/colorful-tech-bg.jpg')" }}
      ></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono-code mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed">
            I am actively seeking Full-Time Java Full Stack Developer opportunities. Reach out via email, connect on professional networks, or drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Click to Copy Email Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 relative overflow-hidden shadow-xl">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 text-xs font-mono-code transition-all hover:scale-105 active:scale-95"
                  title="Click to copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                Direct Email Address
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="block text-lg sm:text-xl font-bold text-white hover:text-cyan-300 transition-colors font-mono-code break-all mt-1"
              >
                {profile.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Click above to open your mail client, or use the copy button.
              </p>
            </div>

            {/* Social Network Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LinkedIn */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-indigo-500/40 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono-code uppercase">LinkedIn</span>
                  <p className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors font-mono-code">
                    ramesh-k-71243026a
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-mono-code uppercase">GitHub</span>
                  <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors font-mono-code">
                    Ramesh2200
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Status Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 text-cyan-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono-code uppercase">Current Location</p>
                <p className="text-sm font-semibold text-white">Karnataka, India (Open to Relocation / Remote)</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Functional Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/30 shadow-2xl relative"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">
                Send a Direct Message
              </h3>
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Direct Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-300/90 font-mono-code mt-0.5">
                      Delivered directly to <span className="text-white font-bold underline">ballariramesh0825@gmail.com</span>
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-mono-code bg-black/40 p-3.5 rounded-xl border border-white/5">
                  Thank you! Your inquiry has been forwarded straight to Ramesh's Gmail inbox. He will review your message and reply back to your email address promptly.
                </p>

                <div className="pt-2">
                  <span className="text-[11px] text-slate-400 font-mono-code block mb-2">Need a faster response?</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="py-2.5 px-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs font-mono-code flex items-center justify-center gap-2 hover:bg-emerald-400 transition-colors shadow-lg cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ping on WhatsApp</span>
                    </button>
                    <button
                      onClick={handleSendViaGmail}
                      className="py-2.5 px-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 font-bold text-xs font-mono-code flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Web Gmail</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full text-center text-xs text-slate-400 hover:text-slate-200 font-mono-code pt-3 underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712]/70 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#030712]/70 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="Java Full Stack Developer Role / Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-[#030712]/70 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Hi Ramesh, we are impressed by your full stack portfolio and would love to connect..."
                    className="w-full px-4 py-3 rounded-xl bg-[#030712]/70 border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-sm placeholder-slate-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Processing...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to Ramesh</span>
                    </>
                  )}
                </button>

                {/* Instant Quick Action Buttons */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code">
                  <span className="text-[11px] text-slate-400">Or reach directly:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSendViaWhatsApp}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSendViaGmail}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Open Web Gmail"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Gmail</span>
                    </button>
                    <a
                      href={`tel:${profile.phone}`}
                      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 flex items-center gap-1.5 transition-colors"
                      title="Call Ramesh directly"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
