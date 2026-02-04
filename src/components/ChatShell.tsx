"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ChatShellProps = {
  message: string;
  duration?: number; // ms
  children: React.ReactNode;
};

export default function ChatShell({
  message,
  duration = 2600,
  children,
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
              transition={{ duration: 0.25 }}
            >
              <div className="ml-auto w-fit max-w-[90%] rounded-3xl bg-[#0095da] px-4 py-2 text-white shadow-sm">
                <div className="text-sm sm:text-base leading-relaxed">
                  {message}
                </div>
              </div>
              <span className="inline-flex items-center gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[#3387ae]"
                    animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 0.8,
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
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ThinkingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block h-1.5 w-1.5 rounded-full bg-white/90"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </span>
  );
}
