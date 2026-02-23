"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ChatShellProps = {
  message: string;
  duration?: number; // ms
  children: React.ReactNode;

  avatarSrc?: string;
  avatarHref?: string;
};

const IOS_BLUE = "#007AFF";

export default function ChatShell({
  message,
  duration = 2600,
  children,
  avatarSrc = "/avatar.png",
  avatarHref = "/",
}: ChatShellProps) {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    setShowToast(true);
    const t = setTimeout(() => setShowToast(false), duration);
    return () => clearTimeout(t);
  }, [message, duration]);

  return (
    <div className="min-h-screen px-4 py-10 sm:py-14">
      <div className="mx-auto w-full max-w-5xl flex flex-col items-center">
        {/* ✅ Avatar همیشه هست | اول بزرگ، بعد کوچیک */}
        <motion.div
          className="mb-6 flex justify-center"
          initial={false}
          animate={{
            scale: showToast ? 1 : 0.92, // بعد از محو پیام یه کم جمع‌تر
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
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
              <motion.img
                src={avatarSrc}
                alt="Profile"
                loading="lazy"
                className="rounded-full object-cover ring-2 ring-white/70"
                initial={false}
                animate={{
                  width: showToast ? 84 : 64,  // اول بزرگ‌تر، بعد استاندارد
                  height: showToast ? 84 : 64,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </span>
          </Link>
        </motion.div>

        {/* ✅ Toast: پیام + سه نقطه‌ها */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              key={message}
              className="w-full max-w-2xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* پیام وسط */}
              <div
                className="mx-auto w-fit max-w-[92%] rounded-full px-5 py-2.5 text-white shadow-sm"
                style={{ backgroundColor: IOS_BLUE }}
              >
                <div className="text-sm sm:text-base leading-relaxed">
                  {message}
                </div>
              </div>

              {/* dots سمت چپ (مثل عکس) */}
              <div className="mt-3 flex justify-start">
                <span className="inline-flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-500/70"
                      animate={{ y: [0, -4, 0], opacity: [0.35, 1, 0.35] }}
                      transition={{
                        duration: 0.85,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ✅ Content بعد از toast */}
        <AnimatePresence mode="wait">
          {!showToast && (
            <motion.div
              key="content"
              className="w-full mt-6"
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