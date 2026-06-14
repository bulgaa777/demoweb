import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#e6efff]">
      <Navbar />
      <HeroSection />
      <ProcessSection />
    </main>
  );
}
