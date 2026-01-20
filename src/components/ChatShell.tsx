"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SkillsChat() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-end justify-start p-40 gap-4">
      <AnimatePresence>
        {showLoading && (
          <motion.div
            className="bg-[#0095da] text-white rounded-3xl p-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            I&apos;m searching for Mahla&apos;s skills...
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// chatshell ro dynamici kon k roe har button skills y me zad message taghir kone 
bad toe har 