"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCheckCircle,
} from "react-icons/fi";
import { personalInfo } from "@/utils/data";
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from "@/utils/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#0ea5e9",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "#10b981",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: personalInfo.location,
    href: "#",
    color: "#ec4899",
  },
];

const socialLinks = [
  { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: FiTwitter, href: personalInfo.social.twitter, label: "Twitter" },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Background orbs */}
      <div
        className="orb orb-primary absolute"
        style={{ width: 500, height: 500, bottom: "-15%", right: "-10%", opacity: 0.25 }}
      />
      <div
        className="orb orb-violet absolute"
        style={{ width: 400, height: 400, top: "-10%", left: "-8%", opacity: 0.2 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Work"
          highlight="Together"
          description="Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing."
        />

        <div ref={ref} className="grid lg:grid-cols-5 gap-10">
          {/* Left panel */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Intro */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-2xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <h3
                className="font-display font-bold text-lg mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Get in Touch
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Whether you have a project idea, want to collaborate, or just want to say hi — my inbox is always open!
              </p>
            </motion.div>

            {/* Contact details */}
            <div className="flex flex-col gap-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  custom={i}
                  href={href}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs mb-0.5" style={{ color: "var(--text-secondary)" }}>
                      {label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-secondary)" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center border transition-colors hover:text-sky-400 hover:border-sky-400"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border)",
                      background: "var(--bg-card)",
                    }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div
              className="p-6 sm:p-8 rounded-2xl"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <FiCheckCircle size={32} className="text-green-400" />
                  </div>
                  <h4
                    className="font-display font-bold text-xl"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Message Sent!
                  </h4>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3
                    className="font-display font-bold text-lg mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Send a Message
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      name="name"
                      label="Your Name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <InputField
                      name="email"
                      label="Email Address"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <InputField
                    name="subject"
                    label="Subject"
                    placeholder="Project collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />

                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-xs font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl text-sm resize-none transition-all duration-200 outline-none focus-ring"
                      style={{
                        background: "var(--bg-surface)",
                        color: "var(--text-primary)",
                        border: "1px solid var(--border)",
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl gradient-bg text-white font-semibold text-sm shadow-lg shadow-sky-500/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {status === "loading" ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none focus-ring"
        style={{
          background: "var(--bg-surface)",
          color: "var(--text-primary)",
          border: "1px solid var(--border)",
        }}
      />
    </div>
  );
}
