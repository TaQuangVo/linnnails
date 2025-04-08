import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  weight: ['400', '500', '600', '700'],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='hide-scrollbar '>
      <body
        className={`${geistSans.className} antialiased hide-scollbar `}
      >
        {children}
      </body>
    </html>
  );
}