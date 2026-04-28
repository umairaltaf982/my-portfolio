"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";
import { experiences } from "@/utils/data";
import { staggerContainer, fadeUp } from "@/utils/animations";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="experience"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(14,165,233,0.1), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Career"
          title="Work"
          highlight="Experience"
          description="My professional journey — each role has shaped my skills and perspective as a developer."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex flex-col"
        >
          {/* Vertical timeline line */}
          <div
            className="absolute left-[19px] sm:left-[23px] top-6 bottom-0 w-0.5 hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #0ea5e9 0%, #22d3ee 60%, transparent 100%)",
              opacity: 0.5,
            }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              custom={i}
              className="relative flex gap-6 md:gap-10 pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex flex-col items-center flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 300 }}
                  className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-lg flex-shrink-0"
                  style={{ boxShadow: "0 4px 16px rgba(14,165,233,0.35)" }}
                >
                  <FiBriefcase size={16} className="text-white" />
                </motion.div>
              </div>

              {/* Card */}
              <div
                className="flex-1 p-6 rounded-2xl group hover-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="font-display font-bold text-lg leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <span className="font-semibold text-sm gradient-text">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 sm:items-end flex-shrink-0">
                    <div
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <FiCalendar size={12} />
                      {exp.duration}
                    </div>
                    <div
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <FiMapPin size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="flex flex-col gap-2 mb-4">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex gap-2.5">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "rgba(14,165,233,0.12)" }}
                      >
                        <FiCheck size={11} style={{ color: "#38bdf8" }} />
                      </div>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
