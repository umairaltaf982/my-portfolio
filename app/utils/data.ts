export interface Project {
  id: number;
  title: string;
  description: string;
  gradient: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  color: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: SkillItem[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
  tagColor: string;
  slug: string;
}

export const personalInfo = {
  name: "Umair Altaf",
  title: "Full Stack Developer",
  titles: ["Full Stack Developer", "UI/UX Enthusiast", "Software Engineer", "Problem Solver"],
  intro:
    "Software Engineer with proven expertise in building responsive and user-centric applications. Skilled in web technologies to create seamless front-end and back-end integrations. Deployed systems remote across Pakistan.",
  bio: "Passionate full-stack developer with 1.5+ years of experience building modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding, I'm exploring new technologies, contributing to open source, or writing about software development.",
  email: "umairaltaf982@gmail.com",
  phone: "+92 3010135588",
  location: "Lahore, Pakistan",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/umairaltaf982",
    linkedin: "https://linkedin.com/in/umairaltaf982",
    twitter: "https://twitter.com",
    instagram: "https://www.instagram.com/shk.umairaltaf",
  },
  stats: [
    { value: "1.5+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "2+", label: "Happy Clients" },
    { value: "20+", label: "GitHub Stars" },
  ],
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    iconName: "FiMonitor",
    skills: [
      { name: "React / Next.js", level: 95, color: "#61DAFB" },
      { name: "TypeScript", level: 90, color: "#3178C6" },
      { name: "Tailwind CSS", level: 92, color: "#38BDF8" },
      { name: "Framer Motion", level: 82, color: "#BB4BFF" },
      { name: "Redux / Zustand", level: 85, color: "#764ABC" },
    ],
  },
  {
    category: "Backend",
    iconName: "FiServer",
    skills: [
      { name: "Node.js / Express", level: 90, color: "#68A063" },
      { name: "Python / FastAPI", level: 84, color: "#3776AB" },
      { name: "PostgreSQL", level: 83, color: "#4169E1" },
      { name: "MongoDB", level: 80, color: "#47A248" },
      { name: "Redis", level: 75, color: "#DC382D" },
    ],
  },
  {
    category: "DevOps",
    iconName: "FiCloud",
    skills: [
      { name: "Docker / K8s", level: 78, color: "#2496ED" },
      { name: "AWS / GCP", level: 74, color: "#FF9900" },
      { name: "CI/CD Pipelines", level: 80, color: "#2088FF" },
      { name: "Terraform", level: 65, color: "#623CE4" },
    ],
  },
  {
    category: "Tools",
    iconName: "FiTool",
    skills: [
      { name: "Git / GitHub", level: 95, color: "#F05032" },
      { name: "Figma", level: 80, color: "#F24E1E" },
      { name: "Jira", level: 77, color: "#E535AB" },
      { name: "Slack", level: 82, color: "#C21325" },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "AslasChat – AI-Powered Chatbot Platform",
    description:
      "Multi-tenant SaaS for document-trained AI chatbots (PDF/DOCX/TXT) with 40KB context budgeting, multi-modelsupport. Async lead extraction, Stripe webhook billing (3 tiers), Socket.IO notifications with per-owner room architecture. Social integrations with Whatsapp, Instagram and web embedded.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    tags: ["Next.js", "Nest.js", "Firebase", "MongoDB", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/Anas-Ali-3673/aslaschat.git",
    featured: true,
  },
  {
    id: 2,
    title: "Chinioti Wooden Art – Furniture Website",
    description:
      "JWT/Google OAuth authentication, shopping cart with discounts, product filtering, interactive maps (Leaflet), protected routes, form handling, toast notifications, and responsive design with dark mode support.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    tags: ["Next.js", "Node.js", "Stripe", "Vercel", "MongoDB"],
    liveUrl: "https://chinioti-wooden-art.vercel.app/",
    githubUrl: "https://github.com/umairaltaf982/Chinioti-Wooden-Art-Frontend.git",
    featured: true,
  },
  {
    id: 3,
    title: "Desi Recipe – A Cooking Platform",
    description:
      "Full-stack cooking app and admin panel (MERN); integrated Firebase with normalized data models and optimized page load & SEO.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    tags: ["Flutter", "React", "Node.js", "Docker", "Firebase", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/AsfandyarHashmi/cooking-app.git",
  },
  {
    id: 4,
    title: "Multilingual Dictionary Application",
    description:
      "Multilingual Desktop Arabic-Urdu-Persian dictionary in Java with 3-tier architecture (Swing, BLL, DAL) using Factory and Facade patterns. Alkhalil and Farasa NLP for Arabic morphology and POS tagging; MySQL Abstract Factory DAL with DBCP2 pooling.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    tags: ["Java Swing", "FlatLaf", "MySQL", "Jsoup", "Apache HttpClient", "Maven"],
    liveUrl: "#",
    githubUrl: "https://github.com/umairaltaf982/Multilingual-Dictionary.git",
  },
  {
    id: 5,
    title: "Railway Management System",
    description:
      "Multi-role railway management system with real-time booking, scheduling, admin tools, Oracle DB, and .NET drag-and-drop UI.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    tags: ["C#", ".NET", "Oracle", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/umairaltaf982/Railway_management_system.git",
  },
  {
    id: 6,
    title: "CryptoWallet 🔐",
    description:
      "A decentralized cryptocurrency wallet application with blockchain functionality, built with Go backend and React frontend.",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    tags: ["C#", ".NET", "Oracle", "MySQL"],
    liveUrl: "https://frontend-nine-iota-22.vercel.app/",
    githubUrl: "https://github.com/umairaltaf982/Decentralized-Cryptocurrency-Wallet-System.git",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelance Software Engineer",
    company: "Local Clients",
    duration: "Jan 2026 – Present",
    location: "Remote",
    description: [
      "Developed and maintained backend APIs; conducted code reviews and translated client requirements into functional web solutions.",
      "Reduced page load times by 60% via Next.js App Router migration, streaming SSR, and edge caching.",
      "Mentored 5 junior developers, established code review standards and shipped 3 major product features.",
      "Designed and built real-time notification system processing 2M+ events/day using Redis Streams.",
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "Firebase", "Redis"],
  },
  {
    id: 2,
    role: "Full Stack Web Developer",
    company: "Aslase",
    duration: "Sep 2025 – Jun 2026",
    location: "Remote",
    description: [
      "Built REST APIs for AI-driven CRM & chatbot platform; integrated WhatsApp, Instagram & WordPress messaging services.",
      "Architected RESTful APIs with Node.js and Express, reducing average response time by 40%.",
      "Implemented automated CI/CD pipeline cutting deployment time from 2 hours to 8 minutes.",
      "Integrated Stripe payment processing handling $500K+ monthly transaction volume.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Stripe"],
  },
  {
    id: 3,
    role: "Cloud App Development & Maintenance Intern",
    company: "Systems' Limited",
    duration: "Jun 2025 – Aug 2025",
    location: "Lahore, PK",
    description: [
      "Developed full-stack MERN applications; implemented MFA authentication systems and tested APIs with Postman.",
      "Maintained code documentation, collaborated via Git/GitHub, and assisted in feature testing for reliability.",
      "Collaborated with UX designers to implement pixel-perfect, WCAG 2.1 AA accessible interfaces.",
    ],
    technologies: ["React", "JavaScript", "AWS", "DevOps", "Jenkins"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Web Scraping for Academic Research: A Case Study on NeurIPS Proceedings",
    excerpt:
      "Experience of scraping the NeurIPS (Neural Information Processing Systems) conference proceedings to download research papers and extract metadata.",
    date: "Feb 3, 2025",
    readTime: "5 min read",
    tag: "Data Scraping",
    tagColor: "from-indigo-500 to-violet-500",
    slug: "datascraping-2025",
  },
  {
    id: 2,
    title: "TF-IDF vs One-Hot Encoding: A Dimensionality Reduction & Classification Study using KNN and Logistic Regression",
    excerpt:
      "how different feature encoding methods — TF-IDF and one-hot encoding — influence the performance of dimensionality reduction techniques (PCA and SVD) and classification models (KNN and Logistic Regression).",
    date: "May 4, 2025",
    readTime: "3 min read",
    tag: "TF-IDF ",
    tagColor: "from-blue-500 to-cyan-500",
    slug: "TF-IDF_vs_one-hotEncoding",
  },
  {
    id: 3,
    title: "Detecting Deepfakes and Software Defects with Machine Learning: A Hands-on ML Pipeline in Python",
    excerpt:
      "Support Vector Machines (SVM), Logistic Regression, Perceptron, and Deep Neural Networks (DNN).",
    date: "May 4, 2025",
    readTime: "3 min read",
    tag: "Deepfakes",
    tagColor: "from-violet-500 to-pink-500",
    slug: "mastering-Deepfakes-softDefects",
  },
];
