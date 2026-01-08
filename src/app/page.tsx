import { BottomNav } from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <section className="relative z-10 p-40">
        <div className="flex flex-col justify-center items-center">
          <span className="text-2xl">Hey, I'm Mahla</span>
          <span className="font-bold text-6xl">Front-End Developer</span>
        </div>
      </section>
      <BottomNav/>
    </>
  );
}
