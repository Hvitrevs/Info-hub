
import HeroContent from "@/components/sub/HeroContent";
import Image from "next/image";

export default function Home() {
  
  return (
  <main className="h full w full">
    <div className="flex flex-col xs:px-10 lg:px-20 xl:mt-1 md:mt-20 sm:mt-20 xs:mt-10 gap-20">
      <HeroContent />
    </div>
  </main>
  );
}
