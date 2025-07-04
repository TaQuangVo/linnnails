import Image from "next/image";
import Link from "next/link";

export default function AboutSection (){
    return (
        <section className="mx-[calc(var(--app-padding)/2)] ">
            <div className="bg-[#ffffff] mt-40 px-10 py-10 flex rounded-3xl flex-col lg:flex-row">
                <div className="rounded-xl overflow-hidden lg:hidden block">
                    <Image 
                        src="/linn1.jpg" 
                        alt="Quote Icon" 
                        width={1164}
                        height={1400}
                        />
                </div>
                <div className="lg:w-[calc(100%/0.7)] lg:mr-20 opacity-80 mt-20 lg:my-0">
                    <div className="w-20 h-20 relative">
                        <Image 
                            src="/quote-icon.png" 
                            alt="Quote Icon" 
                            fill         
                            style={{
                                objectFit: "contain",
                            }} 
                            />
                    </div>
                    <p className="text-4xl lg:text-[2rem]/10 xl:text-4xl 2xl:text-5xl font-semibold my-5">Hos mig på LinnNails Studio får du exklusiva nagel- och fotvårdsbehandlingar i en lugn och trivsam atmosfär. Jag tar emot kvinnor, män och barn, och varje behandling anpassas noggrant efter dina specifika behov och önskemål. Som din personliga nagelterapeut sätter jag alltid dig i fokus, med målet att ge dig en upplevelse utöver det vanliga. När du lämnar salongen ska du känna dig både nöjd och strålande vacker.</p>
                    <div className="flex justify-end items-end">
                        <div className="flex items-center">
                            <div className="h-0.5 lg:w-50 xl:w-72 bg-black"></div>
                            <p className="italic text-3xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold mx-7">Linnnails Studio / Linn</p>
                        </div>
                        <div className="w-20 h-20 relative">
                            <Image 
                                src="/quote-icon.png" 
                                alt="Quote Icon" 
                                fill         
                                style={{
                                    objectFit: "contain",
                                }} 
                                />
                        </div>
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden lg:block hidden">
                    <Image 
                        src="/linn1.jpg" 
                        alt="Quote Icon" 
                        width={1164}
                        height={1400}
                        />
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <Link className="underline cursor-pointer focus:outline-none text-3xl" href="https://www.bokadirekt.se/places/linnnails-studio-128988#reviews">Se tidigare kunders upplevelser</Link>
            </div>
        </section>
    )
}