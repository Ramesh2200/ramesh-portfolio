import React from "react";
import { Experience } from "../components/Experience";
import { Contact } from "../components/Contact";

export function ExperienceContactPage() {
  return (
    <div className="pt-16 pb-20 min-h-screen">
      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
