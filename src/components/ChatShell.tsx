"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ChatShellProps = {
  message: string;
  duration?: number; // ms
  children: React.ReactNode;

  // ✅ new
  avatarSrc?: string; // you will pass your image path
  avatarHref?: string; // where it should navigate
};

export default function ChatShell({
  message,
  duration = 2600,
  children,
  avatarSrc = "/avatar.png",
  avatarHref = "/page", // تغییر بده به مسیر page.tsx خودت (مثلا "/")
}: ChatShellProps) {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    setShowToast(true);
    const t = setTimeout(() => setShowToast(false), duration);
    return () => clearTimeout(t);
  }, [message, duration]);

  return (
    <div className="min-h-screen px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center gap-8">
        {/* toast */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              key={message}
              className="w-full max-w-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* ✅ Avatar */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mb-2 flex justify-end"
              >
                <Link
                  href={avatarHref}
                  className="group relative inline-flex"
                  aria-label="Open profile"
                >
                  <span
                    className="
                      block rounded-full p-[2px]
                      bg-white/60 backdrop-blur
                      shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                      transition-transform
                      group-hover:scale-[1.03] group-active:scale-[0.98]
                    "
                  >
                    <img
                      src={avatarSrc}
                      alt="Profile"
                      className="
                        h-12 w-12 sm:h-14 sm:w-14
                        rounded-full object-cover
                        ring-2 ring-white/70
                      "
                      loading="lazy"
                    />
                  </span>
                </Link>
              </motion.div>

              {/* message bubble */}
              <div className="ml-auto w-fit max-w-[90%] rounded-3xl bg-[#0095da] px-4 py-2 text-white shadow-sm">
                <div className="text-sm sm:text-base leading-relaxed">
                  {message}
                </div>
              </div>

              {/* dots */}
              <span className="inline-flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[#3387ae]"
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* content */}
        <AnimatePresence mode="wait">
          {!showToast && (
            <motion.div
              key="content"
              className="w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
