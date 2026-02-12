"use client";

import ChatShell from "@/components/ChatShell";
import { motion } from "framer-motion";

const IOS_BLUE = "#007AFF";

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.1-3.3-1.1
      c-.4-1.1-1.1-1.4-1.1-1.4c-.9-.6.1-.6.1-.6c1 .1 1.5 1 1.5 1c.9 1.6 2.4 1.1 3 .9
      c.1-.6.35-1.1.65-1.35c-2.2-.25-4.6-1.1-4.6-5A3.9 3.9 0 0 1 7.5 7.1
      c-.1-.25-.45-1.3.1-2.7c0 0 .85-.3 2.8 1.05A9.7 9.7 0 0 1 12 5.2
      c.85 0 1.7.1 2.5.35c1.95-1.35 2.8-1.05 2.8-1.05c.55 1.4.2 2.45.1 2.7
      A3.9 3.9 0 0 1 20.6 10c0 3.9-2.4 4.75-4.65 5c.4.35.75 1.05.75 2.1V21
      c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="3"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8 10v7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 7.5h.01"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M12 17v-4a2.2 2.2 0 0 1 4.4 0v4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 10v7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const ContactPage = () => {
  return (
    <ChatShell message="How can I contact you?">
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-xl rounded-3xl bg-accent px-6 py-8 sm:px-10 sm:py-12"
        >
          {/* Header */}
          <div className="mb-8 text-center sm:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-2xl sm:text-3xl font-semibold text-foreground"
            >
              Contact Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
              className="mt-1 text-sm text-muted-foreground"
            >
              Mahla Kalhor
            </motion.p>
          </div>

          {/* Info */}
          <div className="space-y-5 text-sm sm:text-base">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 break-all"
            >
              <span className="text-muted-foreground flex items-center gap-2">
                <span className="text-neutral-500">
                  <MailIcon />
                </span>
                Email
              </span>

              <a
                href="mailto:Mahlakalhor82@gmail.com"
                className="text-blue-500 hover:underline"
                style={{ color: IOS_BLUE }}
              >
                Mahlakalhor82@gmail.com
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3"
            >
              <span className="text-muted-foreground flex items-center gap-2">
                <span className="text-neutral-500">
                  <LocationIcon />
                </span>
                Location
              </span>
              <span>Tehran</span>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
              className="pt-4 flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://linkedin.com/in/YOUR_ID"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground transition"
              >
                <span className="text-neutral-500">
                  <LinkedinIcon />
                </span>
                <span className="text-sm font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/YOUR_ID"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground transition"
              >
                <span className="text-neutral-500">
                  <GithubIcon />
                </span>
                <span className="text-sm font-medium">GitHub</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </ChatShell>
  );
};
