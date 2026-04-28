"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiMonitor,
  FiServer,
  FiCloud,
  FiTool,
} from "react-icons/fi";
import { skills } from "@/utils/data";
import { staggerContainer, fadeUp } from "@/utils/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ElementType> = {
  FiMonitor,
  FiServer,
  FiCloud,
  FiTool,
};

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState(0);

  const category = skills[activeCategory];

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(34,211,238,0.2), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Skills & Expertise"
          title="My Technical"
          highlight="Toolkit"
          description="Technologies and tools I use to bring ideas to life — from pixel-perfect frontends to robust backend systems."
        />

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Category tabs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-3"
          >
            {skills.map(({ category: cat, iconName }, i) => {
              const Icon = ICON_MAP[iconName] ?? FiTool;
              const isActive = i === activeCategory;
              return (
                <motion.button
                  key={cat}
                  variants={fadeUp}
                  onClick={() => setActiveCategory(i)}
                  className="relative flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-200 w-full"
                  style={{
                    background: isActive ? "rgba(14,165,233,0.12)" : "var(--bg-card)",
                    border: `1px solid ${isActive ? "rgba(14,165,233,0.4)" : "var(--border)"}`,
                    color: isActive ? "#38bdf8" : "var(--text-secondary)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive
                        ? "rgba(14,165,233,0.2)"
                        : "rgba(99,102,241,0.08)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <span className="font-display font-semibold text-sm">{cat}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-border"
                      className="absolute left-0 top-1/4 bottom-1/4 w-0.5 rounded-full gradient-bg"
                    />
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <h3
                  className="font-display font-bold text-lg mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  {category.category} Skills
                </h3>
                <div className="flex flex-col gap-5">
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skill.color}
                      delay={i * 0.08}
                      animate={inView}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-secondary)" }}>
            Also experienced with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Prisma", "tRPC", "Zustand", "React Query", "Storybook",
              "Vitest", "Playwright", "Turborepo", "Nx", "Electron",
              "React Native", "Tauri", "WebGL", "Three.js", "D3.js",
            ].map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  level,
  color,
  delay,
  animate,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  animate: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {name}
        </span>
        <span className="text-xs font-semibold" style={{ color }}>
          {level}%
        </span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay,
            ease: [0.25, 1, 0.5, 1],
          }}
          style={{
            background: `linear-gradient(90deg, ${color}99, ${color})`,
          }}
        />
      </div>
    </div>
  );
}
