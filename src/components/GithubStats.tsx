"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Stats = {
  public_repos: number;
  followers: number;
};

const FALLBACK: Stats = { public_repos: 6, followers: 0 };

function Counter({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 px-8 py-6">
      <span className="font-mono text-3xl font-semibold text-sky-400">
        {value}
      </span>
      <span className="text-xs uppercase tracking-wide text-foreground/50">
        {label}
      </span>
    </div>
  );
}

export default function GithubStats() {
  const [stats, setStats] = useState<Stats>(FALLBACK);

  useEffect(() => {
    let cancelled = false;
    fetch("https://api.github.com/users/begoneeraj")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        if (!cancelled) {
          setStats({
            public_repos: data.public_repos ?? FALLBACK.public_repos,
            followers: data.followers ?? FALLBACK.followers,
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="flex flex-wrap justify-center gap-4 sm:justify-start"
    >
      <Counter value={stats.public_repos} label="Public repos" />
      <Counter value={5} label="Live projects" />
      <Counter value={stats.followers} label="Followers" />
    </motion.div>
  );
}
