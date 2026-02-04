"use client";

import ChatShell from "@/components/ChatShell";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

const skills = {
  Core: ["HTML", "CSS", "JavaScript", "TypeScript"],
  React: ["React", "Next.js", "Router", "Query"],
  State: ["Redux", "Zustand"],
  UI: ["Tailwind", "Sass", "Framer", "Swiper"],
  Tools: ["Hook Form", "i18n", "ApexCharts", "Git"],
  Soft: ["Problem-solving", "Debugging"],
};

export default function SkillsPage() {
  return (
    <ChatShell message="What are your skills? Give me a list of your soft and hard skills.">
      <div className="p-40 flex items-center justify-center px-4">
        <motion.div
          className="w-full max-w-5xl space-y-6 sm:space-y-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-start">
            Skills & Expertise
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            {Object.entries(skills).map(([title, items], idx) => (
              <motion.section
                key={title}
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0.9, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: idx * 0.08,
                }}
              >
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-[#007AFF]" />
                  <h3 className="text-base sm:text-lg font-semibold">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
                  {items.map((i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-black px-2 py-1 text-[11px] sm:text-sm text-white whitespace-nowrap"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </motion.div>
      </div>
    </ChatShell>
  );
}
