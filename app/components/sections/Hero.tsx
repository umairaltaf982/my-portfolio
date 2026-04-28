"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiGithub, FiLinkedin, FiTwitter,
  FiArrowDown, FiDownload, FiMail,
  FiTerminal,
} from "react-icons/fi";
import { personalInfo } from "@/utils/data";
import { staggerContainer, fadeUp, scaleIn } from "@/utils/animations";

/* ── Typing effect ────────────────────────────────────────── */
const ROLES = personalInfo.titles;

function Typewriter() {
  const [idx,      setIdx]      = useState(0);
  const [text,     setText]     = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused,   setPaused]   = useState(false);

  useEffect(() => {
    if (paused) { const t = setTimeout(() => setPaused(false), 1800); return () => clearTimeout(t); }
    const word = ROLES[idx];
    if (!deleting && text.length < word.length) {
      const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 65);
      return () => clearTimeout(t);
    }
    if (!deleting && text.length === word.length) {
      const t = setTimeout(() => setDeleting(true), 2400);
      return () => clearTimeout(t);
    }
    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText(word.slice(0, text.length - 1)), 38);
      return () => clearTimeout(t);
    }
    if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
      setPaused(true);
    }
  }, [text, deleting, paused, idx]);

  return (
    <span className="gradient-text">
      {text}
      <span className="cursor-blink">|</span>
    </span>
  );
}

/* ── macOS window card — fake terminal ───────────────────── */
const codeLines = [
  { token: "const",    rest: " developer = {",       color: "#38bdf8" },
  { token: "  name",   rest: ': "Umair Altaf",',     color: "#22d3ee" },
  { token: "  focus",  rest: ': "Full Stack",',       color: "#22d3ee" },
  { token: "  stack",  rest: ': ["Next.js","Node"],', color: "#22d3ee" },
  { token: "  loves",  rest: ': "clean code",',       color: "#22d3ee" },
  { token: "  open",   rest: ": true,",               color: "#0ea5e9" },
  { token: "};",       rest: "",                      color: "#38bdf8" },
];

function MacWindow() {
  return (
    <div className="mac-window w-full max-w-sm">
      {/* Title bar */}
      <div className="mac-titlebar">
        <div className="mac-traffic">
          <span className="mac-close" />
          <span className="mac-min" />
          <span className="mac-max" />
        </div>
        <div
          className="flex items-center gap-1.5 mx-auto text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          <FiTerminal size={11} />
          developer.ts
        </div>
      </div>

      {/* Code body */}
      <div
        className="p-5 font-mono text-[13px] leading-7"
        style={{ background: "var(--bg-surface)" }}
      >
        {codeLines.map(({ token, rest, color }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + i * 0.09, duration: 0.3 }}
            className="flex"
          >
            <span style={{ color }}>{token}</span>
            <span style={{ color: "var(--text-secondary)" }}>{rest}</span>
          </motion.div>
        ))}

        {/* blinking caret line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          className="flex items-center gap-1 mt-1"
          style={{ color: "#0ea5e9" }}
        >
          <span>$</span>
          <span className="w-2 h-4 rounded-sm bg-sky-400 cursor-blink opacity-80" />
        </motion.div>
      </div>
    </div>
  );
}

/* ── Social links ─────────────────────────────────────────── */
const socials = [
  { href: personalInfo.social.github,   icon: FiGithub,   label: "GitHub"   },
  { href: personalInfo.social.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: personalInfo.social.twitter,  icon: FiTwitter,  label: "Twitter"  },
];

/* ── Hero ─────────────────────────────────────────────────── */
export default function Hero() {
  const { scrollY } = useScroll();
  const yBg  = useTransform(scrollY, [0, 600], [0, 100]);
  const fade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        {/* Dark gradient base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 10% 50%, rgba(14,165,233,0.12) 0%, transparent 55%), " +
              "radial-gradient(ellipse 60% 60% at 90% 30%, rgba(34,211,238,0.08) 0%, transparent 50%)",
          }}
        />

        {/* Soft orbs */}
        <div className="orb orb-primary" style={{ width: 520, height: 520, top: "-8%",  left: "-6%",  opacity: 0.45 }} />
        <div className="orb orb-cyan"    style={{ width: 420, height: 420, bottom: "5%", right: "-4%", opacity: 0.35 }} />
        <div className="orb orb-blue"    style={{ width: 300, height: 300, top: "45%",  left: "35%",  opacity: 0.2  }} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px)," +
              "linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left — text ──────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.22)",
                  color: "#10b981",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h1
                className="font-display font-extrabold leading-[1.06] tracking-tight"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
                  color: "var(--text-primary)",
                }}
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              {/* Typewriter role */}
              <div
                className="font-display font-bold h-[1.5em]"
                style={{ fontSize: "clamp(1.2rem, 2.8vw, 2rem)" }}
              >
                <Typewriter />
              </div>
            </motion.div>

            {/* Intro */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-[17px] leading-[1.75] max-w-[480px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.intro}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-white text-sm font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)" }}
              >
                View My Work
                <FiArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </Link>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:text-sky-400 hover:border-sky-400 hover:-translate-y-0.5"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <FiMail size={15} />
                Contact Me
              </a>

              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:text-sky-400 hover:border-sky-400 hover:-translate-y-0.5"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "var(--border)",
                  background: "var(--bg-card)",
                }}
              >
                <FiDownload size={15} />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
              <span
                className="text-[11px] uppercase tracking-[0.12em]"
                style={{ color: "var(--text-secondary)" }}
              >
                Find me on
              </span>
              <div className="flex gap-2">
                {socials.map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-9 h-9 rounded-lg flex items-center justify-center border transition-colors hover:text-sky-400 hover:border-sky-400"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border)",
                      background: "var(--bg-card)",
                    }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — macOS window ─────────────────── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind window */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(14,165,233,0.18), transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {/* Floating window */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <MacWindow />

              {/* Floating badge — years */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="glass absolute -left-14 top-8 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="font-display font-extrabold text-xl gradient-text leading-none">6+</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>Yrs Exp</div>
              </motion.div>

              {/* Floating badge — projects */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="glass absolute -right-14 bottom-16 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="font-display font-extrabold text-xl gradient-text leading-none">50+</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>Projects</div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "var(--text-secondary)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.15em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
