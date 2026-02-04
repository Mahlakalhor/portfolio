"use client";

import ChatShell from "@/components/ChatShell";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

const skills = {
  Core: ["HTML", "CSS", "JavaScript", "TypeScript"],
  React: ["React", "Next.js", "React Router", "React Query"],
  State: ["Redux", "Zustand"],
  UI: ["Tailwind", "Sass", "Framer", "Swiper"],
  Tools: ["Hook Form", "i18n", "ApexCharts", "Git"],
  Soft: ["Problem-solving", "Debugging"],
};

export default function SkillsPage() {
  return (
    <ChatShell message="What are your skills? Give me a list of your soft and hard skills.">
      <div className="min-h-[calc(100vh-140px)] px-4 py-8 flex items-center">
        <motion.div
          className="mx-auto w-full max-w-5xl space-y-6"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
            Skills & Expertise
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 ">
            {Object.entries(skills).map(([title, items], idx) => (
              <motion.section
                key={title}
                className=" p-4 sm:p-5 space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: idx * 0.06,
                }}
              >
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Layers className="h-4 w-4 sm:h-5 sm:w-5 text-[#007AFF]" />
                  <h3 className="text-base sm:text-lg font-semibold">
                    {title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {items.map((i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-black px-2.5 py-1 text-[11px] sm:text-sm text-white"
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
