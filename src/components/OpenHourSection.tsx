import Image from "next/image";

export default function OpenHourSection() {
    return (
        <section className="flex flex-col items-center justify-center py-56">
            <div className="relative w-32 h-32">
                <Image 
                    src="/DoorIcon.svg"
                    alt="Door Icon"
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div className="flex text-5xl mt-20 font-semibold space-x-5">
                <span>Mån-fre: 10:00-18:00</span>
                <span>|</span>
                <span>Lördag: 10:00-17:00</span>
                <span>|</span>
                <span>Söndag: stängt</span>
            </div>
        </section>
    )
}