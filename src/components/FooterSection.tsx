import { Copyright } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
    return (
        <section className="bg-black flex flex-col items-center justify-center pt-40 pb-10 mt-120 relative">
            <div className="text-white flex flex-col">
                <span className="text-6xl font-semibold">Hej och välkommen :)</span>
                <span className="w-full text-2xl text-end pr-10 mt-5">//Linn*</span>
            </div>
            <div className="flex flex-col lg:flex-row text-2xl mt-30 font-medium lg:space-x-50 text-white">
                <span className="text-center">073-654-33-38</span>
                <span className="text-center">Tegnérgatan 17, stockholm</span>
                <span className="text-center">Info@linnnails.se</span>
            </div>
            <div className="flex text-xl items-center text-white w-full justify-end mt-30 opacity-60  mr-[calc(var(--app-padding)/2)]">
                <Copyright className="w-7"/>
                <span className="ml-2">2025 Linnnails Studio</span>
            </div>

            <div className="absolute top-0 right-0 -translate-y-full flex gap-15 lg:gap-30 items-end">
                <span className="text-4xl font-bold">Social media:</span>
                    <div className="relative w-30 h-30 lg:w-52 lg:h-52">
                        <Link
                            href="https://www.tiktok.com/@linnnails.se?_t=ZS-8vMwmwlR3H6&_r=1" // Replace with actual links
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image 
                                src="/tiktok-icon.png"
                                alt="Facebook Icon"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Link>
                    </div>
                    <div className="relative w-30 h-30 lg:w-52 lg:h-52">
                        <Link
                            href="https://www.instagram.com/linnnails.se?igsh=bHJuYzkyYmd6N2pw"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Image 
                                src="/ig-icon.png"
                                alt="Facebook Icon"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Link>
                    </div>
                    <div className="relative w-30 h-30 lg:w-52 lg:h-52">
                    <Link
                        href="https://www.facebook.com/share/1EQcpBS2pr/?mibextid=wwXIfr" // Replace with actual links
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image 
                            src="/fb-icon.png"
                            alt="Facebook Icon"
                            fill
                            style={{ objectFit: "contain" }}
                        />
                    </Link>
                    </div>
            </div>
        </section>
    )
}


