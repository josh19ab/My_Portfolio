"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Email from "@/components/Email";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState({
    hero: false,
    about: false,
    projects: false,
    contact: false,
  });

  // Handle intersection observer for triggering animations on scroll
  useEffect(() => {
    const sections = [
      { id: "hero", element: document.getElementById("hero") },
      { id: "about", element: document.getElementById("about") },
      { id: "projects", element: document.getElementById("projects") },
      { id: "contact", element: document.getElementById("contact") },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasScrolled((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    sections.forEach(({ element }) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ element }) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Animation variants for each section
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staticComponent = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { scale: 1, opacity: 100, transition: { duration: 0.7 } },
  };

  return (
    <main className="flex justify-center items-center bg-white dark:bg-slate-950 min-h-screen transition-all duration-300">
      <div className="max-w-screen-xl w-full mx-auto relative">
        {/* Navbar will appear immediately */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
        </motion.div>

        {/* Hero Section - Appears after navbar */}
        <motion.div
          id="hero"
          initial="hidden"
          animate={hasScrolled.hero ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        {/* About Section */}
        <motion.div
          id="about"
          initial="hidden"
          animate={hasScrolled.about ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        {/* Projects Section */}

        <Projects />

        {/* Contact Section */}
        <motion.div
          id="contact"
          initial="hidden"
          animate={hasScrolled.contact ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>

        {/* Static components like social links and email */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staticComponent}
          transition={{ delay: 2}}
        >
          <SocialLinks />
          <Email />
        </motion.div>
      </div>
    </main>
  );
}
