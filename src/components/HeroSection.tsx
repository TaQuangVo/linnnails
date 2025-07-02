import Image from "next/image";
import ActionButton from "./ActionButton";
import HeroImage from "./HeroImage";

export default function HeroSection() {
  return (
      <section className="h-svh">
        <div className="relative w-screen  h-[calc(100svh-var(--herobutton-height))] pt-[calc(var(--app-padding)/2)]">
          <div className="relative h-full w-[calc(100vw-var(--app-padding))] mx-[calc(var(--app-padding)/2)] rounded-3xl overflow-hidden">
            <HeroImage />
            <div className="w-full bg-black relative z-20 opacity-20 h-full"></div>
            <div className="w-40 h-40 bg-black absolute top-8 left-8 z-30 flex flex-col items-end justify-end p-2 rounded-md">
              <span className="text-white text-2xl font-semibold">Linnnails</span>
              <span className="text-white font-medium text-xl lg:text-lg">Studio.</span>
            </div>
          </div>
        </div>
        <div className="h-[var(--herobutton-height)] flex flex-col lg:flex-row items-center mx-[calc(var(--app-padding)/2)]">
          <div className="lg:pl-7 text-3xl font-semibold flex flex-col lg:justify-center lg:items-start w-full lg:w-auto mt-8">
            <h2>Hej, det är Linn</h2>
            <p className='text-nowrap'>Låt mig vara din personliga nagelartist.</p>
          </div>
          <div className="w-full pl-30 lg:pl-20 mt-10 grow">
            <ActionButton/>
          </div>
        </div>
      </section>
  );
}
