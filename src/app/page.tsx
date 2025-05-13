import Image from "next/image";
import MainBanner from "@/components/MainBanner";
import QuickLinks from "@/components/QuickLinks";
import ProgramCards from "@/components/ProgramCards";
import Announcements from "@/components/Announcements";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MainBanner />
      <QuickLinks />
      <ProgramCards />
      <Announcements />
    </div>
  );
}
