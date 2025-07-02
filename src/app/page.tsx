import AdressSection from "@/components/AdressSection";
import FooterSection from "@/components/FooterSection";
import GrainedOverlay from "@/components/GrainedOverlay";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import PricingDialog from "@/components/PricingDialog";
import ServiceSection from "@/components/ServiceSection";

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
      <FooterSection />
      <PricingDialog />
    </main>
  );
}
