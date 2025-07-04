import Image from "next/image";
import PricingDialog from "./PricingDialog";

export default function ServiceSection() {
  return (
      <section className=" mx-[calc(var(--app-padding)/2)] mt-50">
        <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 rounded-3xl overflow-hidden">
          <div className="relative h-[calc(100vw/1)] lg:h-[calc(100vw/2.5)]">
            <Image
              src="/manikyr.jpg"
              alt="Hero Image"
              fill
              style={{
                objectFit: "cover",
              }}
              className="relative z-10"
            />
            <div className="bg-black absolute top-0 left-0 z-20 w-full h-full opacity-25"></div>
            <h2 className="absolute top-0 left-0 p-7 text-white z-50 text-4xl font-semibold">Manikyr</h2>
          </div>
          <div className="relative h-[calc(100vw/1)] lg:h-[calc(100vw/2.5)]">
            <Image
              src="/pedikyr.jpg"
              alt="Hero Image"
              fill
              style={{
                objectFit: "cover",
              }}
              className="relative z-10"
            />
            <div className="bg-black absolute top-0 left-0 z-20 w-full h-full opacity-25"></div>
            <h2 className="absolute top-0 left-0 p-7 text-white z-50 text-4xl font-semibold">Pedikyr</h2>
          </div>
          <div className="relative h-[calc(100vw/1)] lg:h-[calc(100vw/2.5)]">
            <Image
              src="/longnails.jpg"
              alt="Hero Image"
              fill
              style={{
                objectFit: "cover",
              }}
              className="relative z-10"
            />
            <div className="bg-black absolute top-0 left-0 z-20 w-full h-full opacity-25"></div>
            <h2 className="absolute top-0 left-0 p-7 text-white z-50 text-4xl font-semibold">Nagelförlängning</h2>
          </div>
        </div>
        <div className="w-full flex justify-end my-8 text-3xl">
        <PricingDialog >
          <span className="underline cursor-pointer focus:outline-none">Se vår prislista.</span>
          </PricingDialog>
        </div>
      </section>
  );
}
