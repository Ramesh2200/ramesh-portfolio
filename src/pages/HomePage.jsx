import React from "react";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Education } from "../components/Education";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export function HomePage({ onWatchIntro }) {
  return (
    <div className="relative">
      {/* 1. Hero Section (Circular photo, dynamic typing, CTAs) */}
      <Hero onWatchIntro={onWatchIntro} />

      {/* 2. Skills Section (Neat categorized cards with official tech logos) */}
      <Skills />

      {/* 3. Featured Projects (Embedded video demo player, Vercel links, schema inspector) */}
      <Projects />

      {/* 4. Education (8.3 CGPA from Yenepoya Institute of Technology + timeline) */}
      <Education />

      {/* 5. Experience (Tap Academy 6-month Full Stack Developer role) */}
      <Experience />

      {/* 6. Contact (Functional form, click-to-copy email, LinkedIn, GitHub) */}
      <Contact />
    </div>
  );
}
