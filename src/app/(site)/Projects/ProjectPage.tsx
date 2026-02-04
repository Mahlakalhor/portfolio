"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const CARD_W = 224; // w-56
const GAP = 24; // نزدیک‌تر به fastfolio (gap-6)

export default function ProjectsPage() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const step = useMemo(() => CARD_W + GAP, []);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft < max - 4);
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

  return (
    <div className="min-h-[calc(100vh-140px)] px-4 py-10 sm:py-14">
      <motion.div
        className="mx-auto w-full max-w-5xl"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* top avatar like fastfolio */}
        <div className="flex justify-center">
          <div className="h-10 w-10 rounded-2xl overflow-hidden shadow-sm bg-neutral-100">
            {/* جای عکس خودت */}
            <img
              src="/avatar.png"
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* title centered */}
        <div className="mt-6 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-neutral-900">
            My Projects
          </h1>
        </div>

        {/* slider */}
        <div className="relative mt-8 sm:mt-10">
          {/* fades (left/right) */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 sm:w-14 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 sm:w-14 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <div
            ref={trackRef}
            className="
              flex gap-6
              overflow-x-auto scroll-smooth
              [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              justify-start
              sm:justify-center
              px-1
              pb-2
              snap-x snap-mandatory
            "
          >
            {projects.map((p, idx) => (
              <ProjectCard key={p.title + idx} p={p} i={idx} />
            ))}
          </div>

          {/* arrows bottom-right (like fastfolio) */}
          <div className="mt-4 flex justify-end gap-2">
            <ArrowBtn
              dir="left"
              disabled={!canLeft}
              onClick={() => scrollBy("left")}
            />
            <ArrowBtn
              dir="right"
              disabled={!canRight}
              onClick={() => scrollBy("right")}
            />
          </div>
        </div>

        {/* assistant text bubble */}
        <AnimatePresence>
          <motion.div
            className="mx-auto mt-8 max-w-2xl text-sm sm:text-base text-neutral-700 leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            You can check out all my projects above! If you want to dive deeper
            into any specific one or have questions about them, just let me
            know! What interests you the most?
          </motion.div>
        </AnimatePresence>

        {/* space for your fixed QuestionBottom */}
        <div className="h-28 sm:h-32" />
      </motion.div>
    </div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.button
      type="button"
      className="
        relative flex-shrink-0
        h-72 w-52
        sm:h-80 sm:w-56
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

      {/* overlay like fastfolio */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/5" />

      <div className="relative z-10 p-5 sm:p-6 text-left">
        <p className="text-xs sm:text-sm text-white/90">{p.category}</p>
        <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white leading-tight">
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
