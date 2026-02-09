"use client";

import ChatShell from "@/components/ChatShell";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <ChatShell message="Can you show me your resume or CV?.">
      {" "}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-4xl">
          {/* Title */}
          <h1 className="mb-8 text-3xl sm:text-4xl font-bold">Resume</h1>

          {/* Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-accent p-6 transition-all duration-300 hover:bg-accent/80">
            <div className="flex items-center justify-between gap-4">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background">
                  <FileText className="h-6 w-6 text-muted-foreground" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Mahla Kalhor</h3>
                  <p className="text-sm text-muted-foreground">
                    Front-End Developer
                  </p>

                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>PDF</span>
                    <span>•</span>
                    <span>Updated 2026</span>
                  </div>
                </div>
              </div>

              {/* Download */}
              <a
                href="/resume.pdf"
                download
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007AFF] text-white transition hover:bg-[#007AFF]/90"
              >
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ChatShell>
  );
}
