"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiClock, FiCalendar } from "react-icons/fi";
import { blogPosts } from "@/utils/data";
import { staggerContainer, fadeUp } from "@/utils/animations";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 70% 50%, rgba(236,72,153,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Writing"
          title="From the"
          highlight="Blog"
          description="Thoughts, tutorials, and insights on modern web development, architecture, and engineering culture."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <button onClick={() => window.location.href='https://medium.com/@umairaltaf982'}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Read All Articles
            <FiArrowRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post, index }: { post: (typeof blogPosts)[0]; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      className="group relative flex flex-col rounded-2xl overflow-hidden cursor-pointer hover-card"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Gradient header */}
      <div className={`relative h-40 bg-gradient-to-br ${post.tagColor} overflow-hidden`}>
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.15), transparent 50%)",
            }}
          />
        )}
        <div
          className="absolute bottom-4 left-5 text-white/10 font-display font-black select-none"
          style={{ fontSize: "80px", lineHeight: 1 }}
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>

        {/* Tag */}
        <div className="absolute top-4 left-5">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold">
            {post.tag}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div
          className="flex items-center gap-3 text-xs"
          style={{ color: "var(--text-secondary)" }}
        >
          <span className="flex items-center gap-1">
            <FiCalendar size={11} />
            {post.date}
          </span>
          <span className="w-1 h-1 rounded-full" style={{ background: "var(--text-secondary)" }} />
          <span className="flex items-center gap-1">
            <FiClock size={11} />
            {post.readTime}
          </span>
        </div>

        <h3
          className="font-display font-bold text-base leading-snug group-hover:text-sky-400 transition-colors"
          style={{ color: "var(--text-primary)" }}
        >
          {post.title}
        </h3>

        <p
          className="text-xs leading-relaxed flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {post.excerpt}
        </p>

        <div onClick={() => window.location.href='https://medium.com/@umairaltaf982'}
          className="flex items-center gap-1.5 text-xs font-semibold pt-3 border-t text-sky-400"
          style={{ borderColor: "var(--border)" }}
        >
          Read Article
          <FiArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  );
}
