import AdressSection from "@/components/AdressSection";
import FooterSection from "@/components/FooterSection";
import GrainedOverlay from "@/components/GrainedOverlay";
import HeroSection from "../components/HeroSection";
import InfoSection from "@/components/InfoSection";
import ServiceSection from "@/components/ServiceSection";

import type { Metadata } from 'next'
import AboutSection from "@/components/AboutSection";
import BookButton from "@/components/BookButton";
import BookButton2 from "@/components/BookButton2";
 
export const metadata: Metadata = {
  title: 'Linnnails Studio',
  description: 'Hos oss på LinnNails Studio är vi stolta över att kunna erbjuda exklusiva nagel- och fotvårdsbehandlingar för kvinnor, män och barn, allt i en lugn och trivsam atmosfär.',
}

export default function Home() {
  return (
    <main className="relative">
      <GrainedOverlay />
      <div className="absolute top-0 left-0 w-full h-full bg-pattern -z-30">
      </div>
      <HeroSection />
      <ServiceSection />
      <AdressSection />
      <InfoSection />
      <AboutSection />
      <div className="w-full flex justify-center items-center mt-80 mb-10">
        <BookButton />
      </div>
      <FooterSection />
    </main>
  );
}
