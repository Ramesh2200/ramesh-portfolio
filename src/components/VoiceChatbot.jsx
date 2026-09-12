import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Send,
  X,
  Bot,
  User,
  Sparkles,
  ExternalLink,
  Download,
  RotateCcw
} from "lucide-react";
import { profile } from "../data/profile";

export function VoiceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechMuted, setSpeechMuted] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am Ramesh's AI Voice Assistant. Ask me anything about his technical projects, education at Yenepoya, skills, or hiring availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  const [voiceType, setVoiceType] = useState(() => {
    return localStorage.getItem("ramesh_voice_type") || "voice1";
  });
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const voicesRef = useRef([]);

  // Auto-scroll chat to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Load and cache voices consistently so voice doesn't randomly change
  useEffect(() => {
    const loadVoices = () => {
      if (!window.speechSynthesis) return;
      const vList = window.speechSynthesis.getVoices();
      if (vList && vList.length > 0) {
        voicesRef.current = vList;
        setVoicesLoaded(true);
      }
    };

    loadVoices();
    if (window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  // Setup Web Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          handleUserQuery(transcript);
        }
      };

      recognition.onerror = (err) => {
        console.warn("Speech recognition error:", err);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // Helper to get consistent voice based on selected Voice 1 (Male) or Voice 2 (Female)
  const getAssignedVoice = (type) => {
    const list = voicesRef.current.length > 0 ? voicesRef.current : (window.speechSynthesis?.getVoices() || []);
    if (!list || list.length === 0) return null;

    const englishVoices = list.filter((v) => v.lang.startsWith("en"));
    const pool = englishVoices.length > 0 ? englishVoices : list;

    if (type === "voice1") {
      // Voice 1: Male persona
      const maleVoice = pool.find((v) =>
        /male|david|daniel|alex|george|rishi|guy|james|arthur|fred|oliver/i.test(v.name)
      );
      return maleVoice || pool[0];
    } else {
      // Voice 2: Female / AI Assistant persona
      const femaleVoice = pool.find((v) =>
        /female|samantha|victoria|karen|susan|zira|moira|fiona|veena|catherine|jenny/i.test(v.name)
      );
      return femaleVoice || pool[1] || pool[0];
    }
  };

  // Text to Speech with strict consistent voice assignment
  const speakText = (text, overrideType) => {
    if (speechMuted || !window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // cancel any ongoing speech

    const cleanText = text
      .replace(/https?:\/\/\S+/g, "")
      .replace(/[*_#`[\]()]/g, "")
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const activeType = overrideType || voiceType;
    const targetVoice = getAssignedVoice(activeType);

    if (targetVoice) {
      utterance.voice = targetVoice;
    }

    if (activeType === "voice1") {
      utterance.rate = 1.0;
      utterance.pitch = 0.95;
    } else {
      utterance.rate = 1.05;
      utterance.pitch = 1.15;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceTypeChange = (newType) => {
    setVoiceType(newType);
    localStorage.setItem("ramesh_voice_type", newType);
    const label = newType === "voice1" ? "Voice 1: Natural Male voice activated" : "Voice 2: Crisp Female assistant voice activated";
    speakText(label, newType);
  };

  const testCurrentVoice = () => {
    const testPhrase = voiceType === "voice1"
      ? "Hello, this is Voice 1. Natural male persona for Ramesh K."
      : "Hello, this is Voice 2. Crisp AI assistant voice for Ramesh's portfolio.";
    speakText(testPhrase, voiceType);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Voice recognition is not supported in this browser. Please type your message below.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.warn("Could not start recognition:", e);
      }
    }
  };

  // Bot Knowledge Logic
  const generateBotReply = (query) => {
    const q = query.toLowerCase().trim();

    if (q.includes("project") || q.includes("ecommerce") || q.includes("feastflow") || q.includes("work")) {
      return "Ramesh has built two prominent full-stack applications: 1) A full-scale E-Commerce platform deployed on Vercel (ecommerce-app-1508.vercel.app) with React.js, Spring Boot, Hibernate, and MySQL. 2) FeastFlow, an end-to-end food order and delivery application (feastflow-food-delivery.vercel.app) with real-time order tracking and REST APIs.";
    }

    if (q.includes("certificate") || q.includes("degree certificate")) {
      return "Ramesh holds an official Bachelor of Engineering in Computer Science & Engineering degree certificate from Yenepoya Institute of Technology (VTU) with First Class Distinction and an 8.3 CGPA. You can view and download his Degree Certificate PDF directly in the Education section.";
    }

    if (q.includes("cgpa") || q.includes("education") || q.includes("college") || q.includes("yenepoya") || q.includes("degree")) {
      return "Ramesh is a 2026 Computer Science & Engineering graduate from Yenepoya Institute of Technology with an 8.3 CGPA (First Class with Distinction). His degree certificate is available for direct PDF download in the Education section.";
    }

    if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("backend")) {
      return "Ramesh is proficient in Java and Python for programming languages. His backend stack includes Spring Boot, Hibernate ORM, JDBC, Servlets, Flask, and Django. On the frontend, he mastered HTML5, CSS3, JavaScript, and React.js. His database skills cover MySQL, PostgreSQL, SQLite, and MongoDB, using Git, Postman, and VS Code.";
    }

    if (q.includes("experience") || q.includes("tap academy") || q.includes("training") || q.includes("intern")) {
      return "Ramesh completed an intensive 6-month Full Stack Web Developer program at Tap Academy, where he learned and mastered HTML5, CSS3, and JavaScript alongside Core Java, Spring Boot, Hibernate ORM, and MySQL database integration.";
    }

    if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("hire") || q.includes("reach")) {
      return "You can reach Ramesh directly via email at ballariramesh0825@gmail.com, or phone at +91 7672047816. He is also active on LinkedIn (ramesh-k-71243026a) and GitHub (Ramesh2200). He is available for immediate full-time software engineering roles!";
    }

    if (q.includes("resume") || q.includes("cv") || q.includes("download") || q.includes("pdf")) {
      return "Both Ramesh's official Resume PDF and his Degree Certificate PDF are available for one-click download! You can download his Resume from the top navigation bar or hero section, and his Degree Certificate from the Education section.";
    }

    if (q.includes("who are you") || q.includes("introduce") || q.includes("about") || q.includes("ramesh")) {
      return "Ramesh K is a Java Full Stack & Python Developer and 2026 Computer Science graduate from Yenepoya Institute of Technology (8.3 CGPA). He has 6 months of hands-on full-stack development experience building scalable web architectures.";
    }

    return "Ramesh K is a Java & Python Full Stack Developer with an 8.3 CGPA from Yenepoya Institute of Technology. Feel free to ask about his projects (E-Commerce & FeastFlow), skills (Spring Boot, React, Django, MySQL), or contact details!";
  };

  const handleUserQuery = (userText) => {
    if (!userText.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMsgList = [
      ...messages,
      { sender: "user", text: userText, timestamp: timeStr }
    ];

    setMessages(newMsgList);
    setInputVal("");

    const botResponse = generateBotReply(userText);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        }
      ]);
      speakText(botResponse);
    }, 450);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUserQuery(inputVal);
  };

  const quickPrompts = [
    "Tell me about Ramesh",
    "What projects has he built?",
    "What is his CGPA and college?",
    "Which backend skills does he know?",
    "How can I contact him?"
  ];

  return (
    <>
      {/* Floating Trigger Button at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-[#090d16] border border-cyan-500/40 text-white shadow-[0_0_30px_rgba(6,182,212,0.4)] backdrop-blur-xl"
            title="Open Voice Chatbot"
          >
            {/* Animated Glow Ring */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-60 blur-sm group-hover:opacity-100 transition-opacity -z-10 animate-pulse"></span>

            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Bot className="w-4 h-4" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-white font-mono-code flex items-center gap-1.5">
                Voice Assistant
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="text-[10px] text-cyan-300 font-mono-code">
                Ask about Ramesh
              </span>
            </div>
          </motion.button>
        )}
      </div>

      {/* Chatbot Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#070b14]/95 border border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.35)] backdrop-blur-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-[#0a0f1d] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white font-mono-code">
                      Ramesh AI Voice Bot
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <p className="text-[10px] text-cyan-300 font-mono-code">
                    {isSpeaking ? "Speaking out loud..." : isListening ? "Listening to your voice..." : "Voice & Text Ready"}
                  </p>
                </div>
              </div>

              {/* Controls: Mute Voice & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSpeechMuted(!speechMuted);
                    if (!speechMuted) window.speechSynthesis?.cancel();
                  }}
                  className={`p-2 rounded-xl border transition-all ${
                    speechMuted
                      ? "bg-rose-500/15 border-rose-500/30 text-rose-400"
                      : "bg-white/5 border-white/10 text-cyan-300 hover:bg-white/10"
                  }`}
                  title={speechMuted ? "Unmute Voice" : "Mute Voice"}
                >
                  {speechMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => {
                    window.speechSynthesis?.cancel();
                    setIsOpen(false);
                  }}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Voice Type Selector Bar (Voice 1: Male / Voice 2: Female + Test Voice) */}
            <div className="px-4 py-2 bg-[#090d16] border-b border-white/10 flex items-center justify-between text-xs font-mono-code">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Voice:</span>
                <button
                  onClick={() => handleVoiceTypeChange("voice1")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    voiceType === "voice1"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.35)]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  title="Select Voice 1 (Natural Male persona)"
                >
                  🎙️ Voice 1 (Male)
                </button>
                <button
                  onClick={() => handleVoiceTypeChange("voice2")}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                    voiceType === "voice2"
                      ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 shadow-[0_0_12px_rgba(217,70,239,0.35)]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  title="Select Voice 2 (Crisp Female assistant)"
                >
                  🎙️ Voice 2 (Female)
                </button>
              </div>

              <button
                onClick={testCurrentVoice}
                className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                title="Test Selected Voice Output"
              >
                <Volume2 className="w-3 h-3" />
                <span>Test Voice</span>
              </button>
            </div>

            {/* Speaking Wave Animation Bar */}
            {isSpeaking && (
              <div className="px-4 py-2 bg-cyan-500/10 border-b border-cyan-500/20 flex items-center justify-between text-xs text-cyan-300 font-mono-code">
                <span className="flex items-center gap-2">
                  <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                  Speaking response...
                </span>
                <div className="flex items-center gap-1">
                  <span className="w-1 h-3 bg-cyan-400 animate-pulse"></span>
                  <span className="w-1 h-5 bg-cyan-300 animate-pulse delay-75"></span>
                  <span className="w-1 h-4 bg-indigo-400 animate-pulse delay-150"></span>
                  <span className="w-1 h-6 bg-cyan-400 animate-pulse delay-100"></span>
                </div>
              </div>
            )}

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-br-none shadow-md"
                        : "glass-card text-slate-200 rounded-bl-none border border-white/10"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[9px] text-slate-400 text-right mt-1 font-mono-code">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-4 py-2 border-t border-white/5 bg-[#050810] flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleUserQuery(prompt)}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 text-[11px] font-mono-code whitespace-nowrap transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar with Voice Mic Button */}
            <form
              onSubmit={handleFormSubmit}
              className="p-3 bg-[#0a0f1d] border-t border-white/10 flex items-center gap-2"
            >
              {/* Voice Input Mic Button */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2.5 rounded-xl border transition-all flex items-center justify-center ${
                  isListening
                    ? "bg-rose-500 text-white border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.6)] animate-pulse"
                    : "bg-cyan-500/15 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/25"
                }`}
                title={isListening ? "Stop listening" : "Speak your question"}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={isListening ? "Listening to your voice..." : "Ask Ramesh AI anything..."}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder-slate-500 font-mono-code"
              />

              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white disabled:opacity-40 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
