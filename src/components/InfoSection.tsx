import Image from "next/image";
import ActionButton from "./ActionButton";

export default function InfoSection() {
    return (
        <section className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10 mx-[calc(var(--app-padding)/2)] mt-50">
            <div className="relative w-full h-[400px] lg:h-[600px] bg-[#a67ec4] rounded-3xl overflow-hidden">
                <div className="absolute w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] right-0 bottom-0 opacity-30 scale-200">
                    <Image
                        src="/clarity_clock-line.png"
                        alt="Info Image"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="flex flex-col text-5xl font-semibold gap-12 m-14 text-white">
                    <span>Mån-fre: 10:00-18:00</span>
                    <span>Lördag: 10:00-17:00</span>
                    <span>Sönsag: stäng</span>
                </div>
                <span className="absolute right-0 bottom-0 m-12 text-3xl font-semibold opacity-45">Öppettider*</span>
            </div>
            <div className="w-full h-[400px] lg:h-[600px] rounded-3xl flex flex-col gap-10">
                <div className="relative grow bg-[#7ECDEF] rounded-3xl overflow-hidden">
                <div className="absolute w-[100px] lg:w-[200px] h-[100px] lg:h-[200px] right-20 bottom-10 opacity-30 scale-200">
                        <Image
                            src="/Contactbook.png"
                            alt="Info Image"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className="flex flex-col text-5xl font-semibold gap-12 m-14 text-white">
                        <span>073-654-33-38</span>
                        <span>Info@linnnails.se</span>
                    </div>
                    <span className="absolute right-0 bottom-0 m-12 text-3xl font-semibold opacity-45">Contact uppgifter*</span>
                </div>
                <div className="rounded-3xl">
                <ActionButton />
                </div>
            </div>
        </section>
    )
}