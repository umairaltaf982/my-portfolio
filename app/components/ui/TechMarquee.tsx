"use client";

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiPython, SiDocker, SiGithub,
  SiPostgresql, SiMongodb, SiTailwindcss, SiRedis,
  SiFigma, SiGit, SiLinux, SiKubernetes,
  SiGrafana, SiTerraform, SiAnsible, SiJenkins,
  SiNginx, SiGraphql, SiVercel, SiCloudflare,
  SiGo, SiRust, SiGooglecloud, SiDigitalocean,
} from "react-icons/si";

interface Tech {
  icon: React.ElementType;
  name: string;
  color: string;
}

const TECHS: Tech[] = [
  { icon: SiReact,        name: "React",        color: "#61DAFB" },
  { icon: SiNextdotjs,    name: "Next.js",      color: "#ffffff" },
  { icon: SiTypescript,   name: "TypeScript",   color: "#3178C6" },
  { icon: SiNodedotjs,    name: "Node.js",      color: "#68A063" },
  { icon: SiPython,       name: "Python",       color: "#3776AB" },
  { icon: SiDocker,       name: "Docker",       color: "#2496ED" },
  { icon: SiGooglecloud,  name: "GCP",          color: "#4285F4" },
  { icon: SiGithub,       name: "GitHub",       color: "#ffffff" },
  { icon: SiPostgresql,   name: "PostgreSQL",   color: "#4169E1" },
  { icon: SiMongodb,      name: "MongoDB",      color: "#47A248" },
  { icon: SiTailwindcss,  name: "Tailwind CSS", color: "#38BDF8" },
  { icon: SiRedis,        name: "Redis",        color: "#DC382D" },
  { icon: SiFigma,        name: "Figma",        color: "#F24E1E" },
  { icon: SiGit,          name: "Git",          color: "#F05032" },
  { icon: SiLinux,        name: "Linux",        color: "#FCC624" },
  { icon: SiKubernetes,   name: "Kubernetes",   color: "#326CE5" },
  { icon: SiGrafana,      name: "Grafana",      color: "#F46800" },
  { icon: SiTerraform,    name: "Terraform",    color: "#7B42BC" },
  { icon: SiAnsible,      name: "Ansible",      color: "#EE0000" },
  { icon: SiJenkins,      name: "Jenkins",      color: "#D24939" },
  { icon: SiNginx,        name: "Nginx",        color: "#009639" },
  { icon: SiGraphql,      name: "GraphQL",      color: "#E535AB" },
  { icon: SiVercel,       name: "Vercel",       color: "#ffffff" },
  { icon: SiCloudflare,   name: "Cloudflare",   color: "#F48120" },
  { icon: SiGo,           name: "Go",           color: "#00ADD8" },
  { icon: SiRust,         name: "Rust",         color: "#CE422B" },
  { icon: SiDigitalocean, name: "DigitalOcean", color: "#0080FF" },
];

/* Duplicate — CSS animates 0 → -50% for a seamless loop */
const TRACK = [...TECHS, ...TECHS];

function TechCard({ tech }: { tech: Tech }) {
  const Icon = tech.icon;
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-3 mx-3">
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
        }}
      >
        <Icon size={38} style={{ color: tech.color }} />
      </div>
      <span
        className="text-xs font-semibold whitespace-nowrap"
        style={{ color: "var(--text-secondary)" }}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Label */}
      <div className="text-center mb-10">
        <span
          className="text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: "var(--text-secondary)" }}
        >
          Technologies I work with
        </span>
      </div>

      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg-surface), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg-surface), transparent)" }}
      />

      {/* Single scrolling row */}
      <div className="overflow-hidden">
        <div className="marquee-track">
          {TRACK.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
