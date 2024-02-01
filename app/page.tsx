import Hero from "@/components/main/Hero";
import HeroContent from "@/components/sub/HeroContent";
import Image from "next/image";

export default function Home() {
  
  return (
  <main className="h full w full">
    <div className="flex flex-col h-[900px] gap-20">
      <Hero />
      <HeroContent />
    </div>
  </main>
  );
}
