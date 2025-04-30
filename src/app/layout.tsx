import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Arya Veer",
  description: "Know more about me",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:h-[70px] h-0 w-full absolute -z-50 bg-[#000000]"></div>
        <div className="text-white flex md:flex-row flex-col md:px-10 z-30 px-2 h-full w-full pb-2">
          <Image
            src="/about/aboutbg.png"
            quality={100}
            fill
            alt="background"
            className="fixed -z-30 top-0 right-0 mt-[130px] md:mt-[70px] md:bg-contain bg-cover"
          />
          <div className="absolute h-screen w-screen -z-20 top-0 right-0 mt-[130px] md:mt-[70px] bg-black opacity-50"></div>
          <div className="md:w-1/4 w-full h-full ">
            <Sidebar />
          </div>
          <div className="md:w-3/4 w-full h-full">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
