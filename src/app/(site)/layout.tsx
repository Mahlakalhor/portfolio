import { BottomNav } from "@/components/BottomNav";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>

      <BottomNav />
    </div>
  );
}
