"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMoon, FiSun, FiDownload, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "next-themes";
import { personalInfo } from "@/utils/data";

const navLinks = [
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#blog",       label: "Blog"       },
  { href: "#contact",    label: "Contact"    },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [mounted,      setMounted]      = useState(false);
  const [activeSection,setActiveSection]= useState("");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── macOS-style menu bar ───────────────────────── */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Top bar stripe — macOS feel */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "glass shadow-lg shadow-sky-900/10"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">

              {/* ── Logo ── */}
              <Link
                href="#hero"
                onClick={() => setMobileOpen(false)}
                className="group flex items-center gap-2.5"
              >
                {/* macOS traffic-light inspired logo */}
                <div className="relative flex items-center justify-center w-8 h-8">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-xs text-white shadow-md group-hover:shadow-sky-500/40 group-hover:scale-110 transition-all duration-200"
                    style={{
                      background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                    }}
                  >
                    UA
                  </div>
                </div>
                <span
                  className="font-display font-semibold text-base hidden sm:block tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  umair<span className="gradient-text font-black">.</span>dev
                </span>
              </Link>

              {/* ── Center pill nav — macOS Spotlight feel ── */}
              <nav className="hidden md:flex items-center">
                <div
                  className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-xl"
                  style={{
                    background: scrolled ? "transparent" : "var(--bg-card)",
                    border: scrolled ? "none" : "1px solid var(--border)",
                  }}
                >
                  {navLinks.map((link) => {
                    const id = link.href.slice(1);
                    const isActive = activeSection === id;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all duration-200"
                        style={{ color: isActive ? "#0ea5e9" : "var(--text-secondary)" }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-lg"
                            style={{ background: "rgba(14,165,233,0.1)" }}
                            transition={{ type: "spring", stiffness: 400, damping: 35 }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* ── Right controls ── */}
              <div className="flex items-center gap-1.5">
                {/* Theme toggle — macOS switch feel */}
                {mounted && (
                  <motion.button
                    whileTap={{ scale: 0.88 }}
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    aria-label="Toggle theme"
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-sky-500/10"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={theme}
                        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                        animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                        exit={  { rotate:  90, opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.18 }}
                      >
                        {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                )}

                {/* Resume CTA */}
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/25"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
                >
                  <FiDownload size={13} />
                  Resume
                </a>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Toggle menu"
                  className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-sky-500/10"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={mobileOpen ? "x" : "menu"}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0,   opacity: 1 }}
                      exit={  { rotate:  90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>

            </div>
          </div>

          {/* macOS-style separator line */}
          {scrolled && (
            <div className="h-px" style={{ background: "var(--border)" }} />
          )}
        </div>
      </motion.header>

      {/* ── Mobile drawer ─────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed right-0 top-0 bottom-0 z-40 w-64 md:hidden flex flex-col pt-16 pb-8 px-5 gap-1.5"
              style={{
                background: "var(--bg-surface)",
                borderLeft: "1px solid var(--border)",
                backdropFilter: "blur(24px)",
              }}
            >
              {/* Traffic lights */}
              <div className="mac-traffic mb-5 mt-1">
                <span className="mac-close" />
                <span className="mac-min" />
                <span className="mac-max" />
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.28 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all hover:text-sky-400 hover:bg-sky-500/10"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                href={personalInfo.resumeUrl}
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl text-white text-sm font-semibold"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
              >
                <FiDownload size={15} />
                Download Resume
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
