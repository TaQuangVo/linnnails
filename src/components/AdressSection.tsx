import Image from "next/image";
import Link from "next/link";

export default function AdressSection() {
  return (
    <section className="pt-56 flex items-center justify-center">
        <div className="relative mx-[calc(var(--app-padding)/2)] lg:h-[calc(100vw/3)] h-[calc(100vw/1.2)] rounded-3xl overflow-hidden w-full">
            <Image
              src="/skyscraper.jpg"
              alt="Skyscrapers Image"
              fill
              style={{
                objectFit: "cover",
              }}
              className="relative z-10"
            />
            <div className="bg-[#970752] opacity-85 absolute top-0 left-0 w-full h-full z-30"></div>
            <div className="absolute top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center">
                <div className="px-8 py-1 text-2xl font-semibold text-white border rounded-full mb-12">Address</div>
                <h2 className="text-white text-5xl font-bold">Tegnérgatan 17, Stockholm</h2>
                <Link
                    href="https://www.google.com/maps/place/LinnNails+Studio/@59.3400334,18.062276,17z/data=!3m1!4b1!4m6!3m5!1s0x465f9dbc9f9cc18b:0x7249410e34e5a491!8m2!3d59.3400334!4d18.062276!16s%2Fg%2F11mdfz9qww?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    className="pt-7"
                    rel="noopener noreferrer">
                        <span className="underline text-white text-2xl cursor-pointer hover:font-semibold">Visa i kartan</span>
                </Link>
                <span className="absolute right-0 bottom-0 m-12 text-3xl font-semibold text-white opacity-65">c/o Glow Be Cec*</span>
            </div>
        </div>
    </section>
  );
}
