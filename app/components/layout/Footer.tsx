"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";
import { personalInfo } from "@/utils/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: personalInfo.social.github, icon: FiGithub, label: "GitHub" },
  { href: personalInfo.social.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: personalInfo.social.twitter, icon: FiTwitter, label: "Twitter" },
  { href: personalInfo.social.instagram, icon: FiInstagram, label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-sm">
                UA
              </div>
              <span className="font-display font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                Umair<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Full Stack Developer crafting beautiful, high-performance web experiences with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-sky-400"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Get in Touch
            </h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-sm hover:text-sky-400 transition-colors block mb-2"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.email}
            </a>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {personalInfo.location}
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-sky-400 hover:-translate-y-0.5"
                  style={{ color: "var(--text-secondary)", background: "var(--bg-card)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Umair Altaf. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-sky-400 hover:-translate-y-1"
            style={{ color: "var(--text-secondary)", background: "var(--bg-card)" }}
          >
            <FiArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
