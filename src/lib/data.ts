export const profile = {
  name: "Pushpraj Singh Prashant",
  handle: "begoneeraj",
  role: "Software Engineer",
  taglines: [
    "I build things that verify, protect, and connect.",
    "AI fact-checking meets full-stack engineering.",
    "Python by day, Flutter by night.",
    "Shipping solo projects end to end.",
  ],
  email: "pushprajsingh2007prashant@gmail.com",
  github: "https://github.com/begoneeraj",
  bio: "I build software that deals with things people can't easily verify by eye — AI-checked news claims, location metadata hidden in photos, credit records, patient data. Most recently: an AI fact-checker for Indian news that cross-references claims against sources in real time. Not chasing a single stack — I go wherever the problem needs.",
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  href: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Newsup",
    slug: "Newsup",
    description:
      "AI fact-checker & crisis tracker for Indian news — claim verification via Groq/Llama, RTI & NEET crisis timelines.",
    tags: ["Python", "Dart", "Flutter", "Supabase"],
    href: "https://github.com/begoneeraj/Newsup",
    featured: true,
  },
  {
    name: "MediConnect",
    slug: "MediConnect",
    description:
      "Full-stack platform connecting patients and care — built as a real product, not a tutorial clone.",
    tags: ["TypeScript"],
    href: "https://github.com/begoneeraj/MediConnect",
    featured: true,
  },
  {
    name: "GraamCredit",
    slug: "GraamCredit",
    description: "Credit / lending web application for rural finance workflows.",
    tags: ["Python", "HTML", "JavaScript"],
    href: "https://github.com/begoneeraj/GraamCredit",
  },
  {
    name: "decoy-drop",
    slug: "decoy-drop",
    description:
      "Fake GPS geotag generator and EXIF metadata extractor — a tool for understanding exactly what your photos leak.",
    tags: ["JavaScript"],
    href: "https://github.com/begoneeraj/decoy-drop",
  },
  {
    name: "ADTC Firozabad",
    slug: "Adtc-Firozabad",
    description:
      "Official bilingual (EN/HI) site for a govt-accredited driving training centre — enrolment, Form 5B info, compliance pages.",
    tags: ["HTML", "JavaScript", "Python"],
    href: "https://github.com/begoneeraj/Adtc-Firozabad",
    live: "https://adtc-firozabad.vercel.app",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Dart", "SQL"] },
  {
    label: "Frameworks & Platforms",
    skills: ["Flutter", "React", "Next.js", "Node.js", "Supabase", "PostgreSQL"],
  },
  { label: "AI / Tools", skills: ["Groq", "Llama", "Git", "Vercel"] },
];
