"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/utils/animations";

interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow, title, highlight, description, align = "center",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const alignClass = align === "center" ? "text-center items-center" : "items-start";

  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`flex flex-col gap-3 mb-14 ${alignClass}`}
    >
      {/* Eyebrow pill */}
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]"
        style={{
          background: "rgba(14,165,233,0.1)",
          color: "#38bdf8",
          border: "1px solid rgba(14,165,233,0.2)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "#0ea5e9" }}
        />
        {eyebrow}
      </motion.span>

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {highlight ? (
          <>
            {parts[0]}
            <span className="gradient-text">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
