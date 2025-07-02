import Link from "next/link";

export default function ActionButton(){
    return (
        <Link
          href="https://www.bokadirekt.se/places/linn-nails-128988" // Replace with actual Bokadirekt link
          target="_blank"
          rel="noopener noreferrer"
        >
            <button className="w-full group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-black h-24 flex-1/2 border text-left pl-7 text-gray-50 text-3xl font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg cursor-pointer">
                Boka mig
            </button>
        </Link>
    )
}