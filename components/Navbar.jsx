"use client";
import { useEffect, useRef, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Mobile from "@/components/Mobile";
import MainLogo from "../assets/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showComponent, setShowComponent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasShadow, setHasShadow] = useState(false);
  const lastScrollY = useRef(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child element
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  const logo = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };

  const mobNav = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4, delay: 2 } },
  };

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  const scrollThreshold = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If we're at the very top of the page, no shadow and navbar is visible
      if (currentScrollY === 0) {
        setIsVisible(true);
        setHasShadow(false); // No shadow at the very top
      }

      // Scroll down beyond threshold: Hide the navbar and remove shadow
      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > scrollThreshold
      ) {
        setIsVisible(false); // Hide navbar after scrolling down past the threshold
      }

      // Scroll up: Show the navbar and add shadow if scrolled beyond the threshold
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true); // Show the navbar when scrolling up
        if (currentScrollY > scrollThreshold) {
          setHasShadow(true); // Add shadow after scrolling down past the threshold
        } else {
          setHasShadow(false); // No shadow if within the first 100px from the top
        }
      }

      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <nav
        className={`fixed w-full left-0 top-0 z-20 transition-all duration-300 ${
          isVisible
            ? "translate-y-0 " + (hasShadow ? "shadow-lg" : "")
            : "-translate-y-20"
        } backdrop-blur-sm bg-opacity-90 bg-white dark:bg-slate-950 dark:shadow-blue-950 overflow-hidden `}
      >
        <div className="flex w-full max-w-screen-xl mx-auto h-16 overflow-hidden justify-between items-center px-5 md:px-24">
          {/* Logo animation */}
          <motion.div
            className="text-sm font-bold fill-inherit"
            variants={logo}
            initial="hidden"
            animate="show"
          >
            <MainLogo className="w-10 h-10 fill-blue-500" alt="logo" />
          </motion.div>

          {/* Nav links animation container */}
          <motion.div
            className="hidden md:flex gap-8 text-sm font-mono items-center list-none"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.button
              className="hover:text-blue-500"
              onClick={() => handleScrollToSection("about")}
              variants={item}
            >
              About
            </motion.button>
            <motion.button
              className="hover:text-blue-500"
              onClick={() => handleScrollToSection("projects")}
              variants={item}
            >
              Projects
            </motion.button>
            <motion.button
              className="hover:text-blue-500"
              onClick={() => handleScrollToSection("contact")}
              variants={item}
            >
              Contact
            </motion.button>

            {/* Dark Mode toggle button animation */}
            <motion.button
              className="text-xl hover:text-blue-500"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variants={item}
            >
              {theme === "dark" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )}
            </motion.button>
          </motion.div>

          <motion.div
            class="md:hidden hover:text-blue-500 flex gap-4 dark:text-slate-200"
            variants={mobNav}
            initial="hidden"
            animate="show"
          >
            {" "}
            <button
              type="button"
              class="hover:text-blue-500 focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                  ></path>
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                  ></path>
                  <circle
                    cx="256"
                    cy="256"
                    r="80"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  ></circle>
                </svg>
              )}
            </button>{" "}
            <button type="button" onClick={toggleComponent}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
              </svg>
            </button>
          </motion.div>
        </div>
      </nav>
      <Mobile isOpen={showComponent} onClose={() => setShowComponent(false)} />
    </div>
  );
};

export default Navbar;
