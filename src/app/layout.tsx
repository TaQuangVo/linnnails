import type { Metadata } from "next";
import { Kodchasan} from "next/font/google";
import "./globals.css";

const poppins = Kodchasan({
  weight: ['400', '500', '600', '700'], // whatever weights you need
  subsets: ['latin'],     // ✅ you must add this!
  preload: true,          // optional (default is true)
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='hide-scrollbar '>
      <body
        className={`${poppins.className} antialiased hide-scollbar `}
      >
        {children}
      </body>
    </html>
  );
}