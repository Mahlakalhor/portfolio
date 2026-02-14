"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChatShell from "@/components/ChatShell";

type Project = {
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  { category: "AI", title: "ChatGPT", image: "/projects/1.png" },
  { category: "Startup", title: "Y Combinator", image: "/projects/2.png" },
  { category: "Startup", title: "Loopt", image: "/projects/3.png" },
  { category: "UI", title: "Portfolio", image: "/projects/4.png" },
  { category: "E-commerce", title: "Shop", image: "/projects/5.png" },
];

const CARD_W = 224;
const GAP = 24;

export default function ProjectsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  // const [canLeft, setCanLeft] = useState(false);
  // const [canRight, setCanRight] = useState(true);

  const step = useMemo(() => CARD_W + GAP, []);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    // setCanLeft(el.scrollLeft > 4);
    // setCanRight(el.scrollLeft < max - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, projects.length - 3); // چون 3 تا نمایش می‌دی
  const prev = () => setIndex((v) => Math.max(0, v - 1));
  const next = () => setIndex((v) => Math.min(maxIndex, v + 1));

  const canLeft = index > 0;
  const canRight = index < maxIndex;

  return (
    <ChatShell message="What are your projects? What are you working on right now?">
      <div className="min-h-[calc(100vh-140px)] px-4 py-10 sm:py-14">
        <motion.div
          className="mx-auto w-full max-w-5xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* top avatar */}
          <div className="flex justify-center">
            <div className="h-10 w-10 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="/avatar.png"
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* title */}
          <div className="mt-6 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 sm:text-4xl">
              My Projects
            </h1>
          </div>

          {/* slider */}
          <div className="relative mt-8 sm:mt-10">
            {/* fades */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-14 bg-linear-to-r from-white via-white/70 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-14 bg-linear-to-l from-white via-white/70 to-transparent" />

            {/* viewport */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: `calc(-${index} * (33.333% + 16px))` }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
              >
                {projects.map((p, idx) => (
                  <div
                    key={p.title + idx}
                    className="
            w-[calc((100%-48px)/3)] shrink-0
            max-sm:w-full
          "
                  >
                    <ProjectCard p={p} i={idx} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* arrows */}
            <div className="mt-4 flex justify-end gap-2">
              <ArrowBtn dir="left" disabled={!canLeft} onClick={prev} />
              <ArrowBtn dir="right" disabled={!canRight} onClick={next} />
            </div>
          </div>

          {/* assistant text */}
          <AnimatePresence>
            <motion.div
              className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-neutral-700 sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              You can check out all my projects above! If you want to dive
              deeper into any specific one or have questions about them, just
              let me know! What interests you the most?
            </motion.div>
          </AnimatePresence>

          {/* space for fixed QuestionBottom */}
          <div className="h-28 sm:h-32" />
        </motion.div>
      </div>
    </ChatShell>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.button
      type="button"
      className="
        relative shrink-0
        h-72 w-52 sm:h-80 sm:w-56
        overflow-hidden rounded-3xl
        bg-neutral-100
        shadow-sm hover:shadow-xl transition-shadow
        snap-center
      "
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.06 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <img
        src={p.image}
        alt={p.title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/10 to-black/5" />

      <div className="relative z-10 p-5 text-left sm:p-6">
        <p className="text-xs text-white/90 sm:text-sm">{p.category}</p>
        <h3 className="mt-1 text-xl font-semibold leading-tight text-white sm:text-2xl">
          {p.title}
        </h3>
      </div>
    </motion.button>
  );
}

function ArrowBtn({
  dir,
  disabled,
  onClick,
}: {
  dir: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        flex h-10 w-10 items-center justify-center rounded-full
        bg-neutral-100 text-neutral-500
        disabled:opacity-40
        active:scale-95 transition
      "
      aria-label={dir === "left" ? "Scroll left" : "Scroll right"}
    >
      {dir === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      )}
    </button>
  );
}
