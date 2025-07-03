import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import FacebookIcon from "@/components/icons/Facebook";
import TikTokIcon from "@/components/icons/Tiktok";
import InstagramIcon from "@/components/icons/Instagram";
import BokaDirektIcon from "@/components/icons/BokaDirekt";
import { BrickWall, Construction, Drill, HardHat, Pickaxe } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center bg-white px-4">
      <div className="absolute top-6 flex space-x-4">
        <span>Linnnails Studio.</span>
      </div>

      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <Drill className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <Construction className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <HardHat className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
          <Pickaxe className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
        <h1 className="text-lg lg:text-3xl font-semibold text-gray-800">
            Hemsidan är under uppbyggnad
          </h1>
        <p className="text-gray-500 text-sm lg:text-lg px-6">
          Du har kommit rätt till <strong>Linnail Studio</strong>, välkomen och ursäkta röran.<br />
          Vi jobbar på att få den klar så snart som möjligt. Under tiden kan du <strong>boka tid via Bokadirekt</strong>.
        </p>
        <a
          href="https://www.bokadirekt.se/places/linn-nails-128988" // Replace with actual Bokadirekt link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-2xl bg-black px-6 lg:px-6 py-2 lg:py-3 text-white text-sm lg:text-base font-medium hover:bg-gray-800 transition"
        >
          Boka tid på Bokadirekt
        </a>
      </div>

      {/* Social Icons at bottom */}
      <div className="absolute bottom-6 space-x-4">
        <p className="text-center text-sm lg:text-base pb-3 text-gray-800">Följ oss på:</p>
        <div className="flex space-x-3">
        <a
          href="https://www.facebook.com/share/1EQcpBS2pr/?mibextid=wwXIfr" // Replace with actual links
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition hover:fill-white"
        >
          <InstagramIcon className="w-5 h-5"/>
        </a>
        <a
          href="https://www.tiktok.com/@linnnails.se?_t=ZS-8vMwmwlR3H6&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition hover:fill-white"
        >
          <TikTokIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/share/1EQcpBS2pr/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition hover:fill-white"
        >
          <FacebookIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.bokadirekt.se/places/linn-nails-128988"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border border-black hover:bg-black hover:text-white transition hover:fill-white"
        >
          <BokaDirektIcon className="w-5 h-5" />
        </a>
      </div>
      </div>
    </main>
  );
}
