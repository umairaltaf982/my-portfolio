"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCode, FiZap, FiHeart, FiCoffee,
  FiMapPin, FiMail, FiGithub, FiLinkedin, FiTwitter,
} from "react-icons/fi";
import { personalInfo } from "@/utils/data";
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "@/utils/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  { icon: FiCode,   label: "Clean Code",     desc: "Readable, maintainable, tested.",     color: "#0ea5e9", bg: "rgba(14,165,233,0.1)"  },
  { icon: FiZap,    label: "Performance",    desc: "Sub-second loads, every time.",        color: "#f59e0b", bg: "rgba(245,158,11,0.1)"  },
  { icon: FiHeart,  label: "User-Centric",   desc: "Experiences people actually love.",    color: "#ec4899", bg: "rgba(236,72,153,0.1)"  },
  { icon: FiCoffee, label: "Problem Solver", desc: "Complexity → elegant solutions.",      color: "#10b981", bg: "rgba(16,185,129,0.1)"  },
];

const interests = [
  "Open Source", "System Design", "UI/UX", "Web Performance",
  "Dev Tooling", "AI / LLMs", "TypeScript", "Architecture",
  "Databases", "DevOps",
];

const journey = [
  { year: "2022", label: "Programming Understanding",    detail: "Started career" },
  { year: "2023", label: "Program Complexities and Databases",      detail: "Data Structures + DBs" },
  { year: "2024", label: "HTML + CSS + JavaScript",     detail: "Dynamic websites" },
  { year: "2025", label: "React + Node Projects",     detail: "Client Based Projects" },
  { year: "2026", label: "Now",             detail: "Full Stack Web Developer + DevOps" },
];

const socials = [
  { icon: FiGithub,   href: personalInfo.social.github,   label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.social.linkedin,  label: "LinkedIn" },
  { icon: FiTwitter,  href: personalInfo.social.twitter,   label: "Twitter" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 10% 60%, rgba(14,165,233,0.06), transparent 55%), " +
            "radial-gradient(ellipse 60% 45% at 90% 30%, rgba(34,211,238,0.05), transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="About Me"
          title="The Developer"
          highlight="Behind the Code"
          description="Passionate about crafting fast, beautiful products — with care for every pixel and every millisecond."
        />

        <div ref={ref} className="flex flex-col gap-6">

          {/* ── Row 1: Profile card + Values grid ── */}
          <div className="grid lg:grid-cols-12 gap-5">

            {/* Profile card */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:col-span-4 relative rounded-2xl overflow-hidden p-6 flex flex-col gap-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {/* Blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />

              {/* Avatar + status */}
              <div className="flex items-center justify-between relative z-10">
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-2xl text-white"
                    style={{
                      background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                      boxShadow: "0 8px 24px rgba(14,165,233,0.4)",
                    }}
                  >
                    UA
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 bg-green-400"
                    style={{ borderColor: "var(--bg-card)" }}
                  />
                </div>
                <span
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.22)",
                    color: "#10b981",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to work
                </span>
              </div>

              {/* Name + role */}
              <div className="relative z-10">
                <h3
                  className="font-display font-extrabold text-xl leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {personalInfo.name}
                </h3>
                <p className="text-sm font-semibold gradient-text">{personalInfo.title}</p>
              </div>

              {/* Bio */}
              <p
                className="text-sm leading-relaxed relative z-10"
                style={{ color: "var(--text-secondary)" }}
              >
                {personalInfo.bio}
              </p>

              {/* Location + email */}
              <div className="flex flex-col gap-2 relative z-10">
                {[
                  { icon: FiMapPin, val: personalInfo.location },
                  { icon: FiMail,   val: personalInfo.email    },
                ].map(({ icon: Icon, val }) => (
                  <div
                    key={val}
                    className="flex items-center gap-2 text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Icon size={12} style={{ color: "#0ea5e9", flexShrink: 0 }} />
                    <span className="truncate">{val}</span>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div
                className="flex items-center gap-2 pt-4 relative z-10"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-colors hover:text-sky-400 hover:border-sky-400"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border)",
                      background: "var(--bg-surface)",
                    }}
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Values 2×2 grid */}
            <div className="lg:col-span-8 grid grid-cols-2 gap-4">
              {values.map(({ icon: Icon, label, desc, color, bg }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.09, duration: 0.5, ease: [0.22,1,0.36,1] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative flex flex-col gap-4 p-6 rounded-2xl overflow-hidden cursor-default"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  {/* Subtle color bleed in corner */}
                  <div
                    className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${color}22, transparent 70%)` }}
                  />
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: bg }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <div>
                    <h4
                      className="font-display font-bold text-base mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {label}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Row 2: Interests + Timeline ── */}
          <div className="grid lg:grid-cols-12 gap-5">

            {/* Interests */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.35 }}
              className="lg:col-span-4 p-6 rounded-2xl flex flex-col gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <h4
                className="font-display font-semibold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                Interests & Passions
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.04 }}
                    whileHover={{ scale: 1.07 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "var(--bg-surface)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Career timeline — horizontal */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              className="lg:col-span-8 p-6 rounded-2xl flex flex-col gap-5"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center justify-between">
                <h4
                  className="font-display font-semibold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  Career Journey
                </h4>
                <span
                  className="text-[11px] px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(14,165,233,0.1)",
                    color: "#38bdf8",
                    border: "1px solid rgba(14,165,233,0.2)",
                  }}
                >
                  2022 → Present
                </span>
              </div>

              {/* Timeline items */}
              <div className="relative">
                {/* connector line */}
                <div
                  className="absolute top-5 left-5 right-5 h-px hidden sm:block"
                  style={{ background: "linear-gradient(to right, #0ea5e9, #22d3ee, rgba(34,211,238,0.2))" }}
                />
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {journey.map(({ year, label, detail }, i) => {
                    const isNow = i === journey.length - 1;
                    return (
                      <motion.div
                        key={year}
                        initial={{ opacity: 0, y: 18 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.09 }}
                        className="flex flex-col items-start sm:items-center gap-2.5"
                      >
                        {/* Icon square */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-black text-xs flex-shrink-0 relative z-10"
                          style={{
                            background: isNow
                              ? "linear-gradient(135deg, #10b981, #059669)"
                              : "linear-gradient(135deg, #0ea5e9, #0284c7)",
                            boxShadow: isNow
                              ? "0 4px 14px rgba(16,185,129,0.4)"
                              : "0 4px 14px rgba(14,165,233,0.35)",
                          }}
                        >
                          {year.slice(2)}
                        </div>
                        <div className="sm:text-center">
                          <div
                            className="text-xs font-black"
                            style={{ color: isNow ? "#10b981" : "#38bdf8" }}
                          >
                            {year}
                          </div>
                          <div
                            className="text-xs font-semibold mt-0.5"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {label}
                          </div>
                          <div
                            className="text-[11px] mt-0.5 hidden sm:block leading-snug"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {detail}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
