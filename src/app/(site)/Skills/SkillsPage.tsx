import { QuestionBottom } from "@/components/QuestionBottom";

import ChatShell from "@/components/ChatShell";
import { siteData } from "@/data/siteData";

export default function SkillsPage() {
  return (
    <ChatShell
      title="Skills"
      intro="دارم مهارت‌هام رو میارم..."
      data={siteData.skills}
    />
  );
}
