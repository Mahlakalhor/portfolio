"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const QuestionBottom = () => {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const nav = [
    { href: "/", label: "Me", stroke: "#329696", icon: "laugh" as const },
    { href: "/Projects", label: "Projects", stroke: "#3E9858", icon: "briefcase" as const },
    { href: "/Skills", label: "Skills", stroke: "#856ED9", icon: "layers" as const },
    { href: "/Resume", label: "Resume", stroke: "#B95F9D", icon: "file" as const },
    { href: "/Contact", label: "Contact", stroke: "#C19433", icon: "user" as const },
  ];

  return (
    <motion.div
      className="fixed left-0 right-0 z-50 p-6"
      animate={{ bottom: open ? 14 : 8 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div ref={boxRef} className="mx-auto w-full max-w-5xl px-3">
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mb-2"
            >
              <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar sm:flex-wrap sm:justify-center sm:overflow-visible">
                {nav.map((b, idx) => (
                  <motion.div
                    key={b.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: idx * 0.06,
                    }}
                  >
                    <NavBtn {...b} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <form
          className={`mx-auto w-full transition-all duration-200 ${
            open ? "max-w-lg" : "max-w-sm"
          }`}
        >
          <div className="flex items-center rounded-full border border-[#E5E5E9] bg-[#ECECF0] py-2 pr-2 pl-5 shadow-sm">
            <input
              onFocus={() => setOpen(true)}
              placeholder="Ask me anything…"
              className="w-full bg-transparent text-sm sm:text-base placeholder:text-gray-500 focus:outline-none font-medium"
              type="text"
            />
            <button
              type="submit"
              aria-label="Submit question"
              className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white active:scale-95"
            >
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
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

function NavBtn({
  href,
  label,
  stroke,
  icon,
}: {
  href: string;
  label: string;
  stroke: string;
  icon: "laugh" | "briefcase" | "layers" | "file" | "user";
}) {
  return (
    <Link href={href} className="block flex-shrink-0">
      <button
        className="
          h-10 sm:h-11
          rounded-full sm:rounded-xl
          border border-gray-200 bg-gray-100
          px-4 shadow-none
          whitespace-nowrap
        "
      >
        <div className="flex items-center gap-2 text-gray-700">
          {icon === "laugh" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"></path>
              <line x1="9" x2="9.01" y1="9" y2="9"></line>
              <line x1="15" x2="15.01" y1="9" y2="9"></line>
            </svg>
          )}
          {icon === "briefcase" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 12h.01"></path>
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
              <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
          )}
          {icon === "layers" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
            </svg>
          )}
          {icon === "file" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M16 13H8" />
              <path d="M16 17H8" />
              <path d="M10 9H8" />
            </svg>
          )}
          {icon === "user" && (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="10" cy="8" r="5"></circle>
              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
              <circle cx="18" cy="18" r="3"></circle>
              <path d="m22 22-1.9-1.9"></path>
            </svg>
          )}

          <span className="text-sm font-medium">{label}</span>
        </div>
      </button>
    </Link>
  );
}