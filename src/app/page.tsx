import HomeHeadSection from "@/components/HomeHeadSection";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeSkillsSection from "@/components/HomeSkillsSection";

export default function Home() {
  return (
    <div className="pt-20 pb-12 px-10">
      <HomeHeadSection />
      <HomeAboutSection />
      <HomeSkillsSection />
    </div>
  );
}
