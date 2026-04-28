"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { projects } from "@/utils/data";
import { staggerContainer, fadeUp } from "@/utils/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const FILTERS = ["All", "Featured", "Web App", "Tool"];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : filter === "Featured"
      ? projects.filter((p) => p.featured)
      : projects;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(99,102,241,0.08), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Portfolio"
          title="Projects I've"
          highlight="Built"
          description="A selection of projects that showcase my skills across the full stack — from concept to production."
        />

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              whileTap={{ scale: 0.96 }}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{
                background: filter === f ? undefined : "var(--bg-card)",
                color: filter === f ? "#fff" : "var(--text-secondary)",
                border: `1px solid ${filter === f ? "transparent" : "var(--border)"}`,
                backgroundImage:
                  filter === f
                    ? "linear-gradient(135deg, #0ea5e9, #22d3ee)"
                    : undefined,
              }}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUp}
                custom={i}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-2xl overflow-hidden flex flex-col hover-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Project image / gradient */}
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    /* Pattern overlay */
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                  )}

                  {/* Hover overlay — pure CSS via group */}
                  <div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      aria-label="Live demo"
                    >
                      <FiExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium">
                      <FiStar size={11} />
                      Featured
                    </div>
                  )}

                  {/* Project number */}
                  <div
                    className="absolute bottom-3 left-3 font-display font-black text-5xl text-white/10 select-none"
                    style={{ lineHeight: 1 }}
                  >
                    0{project.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <h3
                    className="font-display font-bold text-base leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed flex-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div
                    className="flex gap-3 pt-3 border-t"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <FiExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-sky-400"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <FiGithub size={13} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/umairaltaf982"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border hover:text-sky-400 hover:border-sky-400 transition-colors duration-200 hover:-translate-y-0.5 hover:transition-transform"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--border)",
              background: "var(--bg-card)",
            }}
          >
            <FiGithub size={16} />
            See All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
