import { BottomNav } from "@/components/MainBottomNav";
import SplashCursor from "@/components/SplashCursor";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background cursor */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <SplashCursor />
      </div>

      {/* HERO */}
      <main className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6">
          {/* text */}
          <p className="text-base sm:text-xl text-neutral-700">
            Hey, I&apos;m Mahla 👋
          </p>

          <h1 className="font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight">
            Front-End Developer
          </h1>

          {/* avatar */}
          <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/me.jpg" // 👈 عکس خودت
              alt="Mahla"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* input + buttons */}
          <BottomNav />
        </div>
      </main>
    </div>
  );
}
