"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const IOS_BLUE = "#007AFF";

export const BottomNav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="z-10 mt-4 w-full px-4 md:px-0"
    >
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center gap-4">
        {/* input */}
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
          className="relative w-full max-w-lg"
        >
          <div
            className="
              mx-auto flex items-center rounded-full
              border border-white/35 bg-white/15
              py-2.5 pr-2 pl-5
              backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]
              transition-all
              focus-within:border-[#007AFF]/60 focus-within:bg-white/20
            "
          >
            <input
              placeholder="Ask me anything…"
              className="w-full border-none bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
              type="text"
            />
            <button
              type="submit"
              disabled
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#007AFF] p-2.5 text-white transition-colors hover:bg-[#007AFF]/90 disabled:opacity-70"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.form>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
          className="
            w-full max-w-3xl
            flex flex-col gap-3
            sm:flex-row sm:flex-wrap sm:justify-center
          "
        >
          <NavLink href="/" label="Me">
            <LaughIcon />
          </NavLink>
          <NavLink href="/Projects" label="Projects">
            <BriefcaseIcon />
          </NavLink>
          <NavLink href="/Skills" label="Skills">
            <LayersIcon />
          </NavLink>
          <NavLink href="/Contact" label="Contact">
            <UserIcon />
          </NavLink>
          <NavLink href="/Resume" label="Resume">
            <FileIcon />
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

function NavLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="
        relative overflow-hidden
        inline-flex h-14 w-full cursor-pointer
        items-center justify-center gap-2 whitespace-nowrap
        rounded-2xl border border-white/35
        bg-white/15 p-4 text-sm font-medium
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        backdrop-blur-xl
        transition-all
        hover:bg-white/20 hover:border-white/50
        active:scale-95
        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#007AFF]/50
        sm:h-8 sm:w-32 sm:p-12
      "
    >
      {/* glass highlight */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 to-transparent opacity-70" />

      <div className="relative flex items-center justify-center gap-3 text-gray-700 sm:flex-col sm:gap-1">
        {children}
        <span className="text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
}

/* Icons (iOS blue) */
function LaughIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#007AFF]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#007AFF]"
      aria-hidden="true"
    >
      <path d="M12 12h.01" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M22 13a18.15 18.15 0 0 1-20 0" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#007AFF]"
      aria-hidden="true"
    >
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
      <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
      <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#007AFF]"
      aria-hidden="true"
    >
      <circle cx="10" cy="8" r="5" />
      <path d="M2 21a8 8 0 0 1 10.434-7.62" />
      <circle cx="18" cy="18" r="3" />
      <path d="m22 22-1.9-1.9" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#007AFF]"
      aria-hidden="true"
    >
      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
      <path d="M14 2v5a1 1 0 0 0 1 1h5" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
