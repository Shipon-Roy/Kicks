"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="w-full text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8">
          <span className="text-black">DO IT </span>
          <span className="text-blue-600">RIGHT</span>
        </h1>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative w-full h-120 lg:h-140">
            <Image
              src="/assets/home/Banner/banner.jpg"
              alt="Brown Nike Air Max on fabric background"
              fill
              priority
              className="object-cover z-0"
            />
          </div>

          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <div className="md:flex absolute -left-12 top-1/3 -translate-y-1/2 z-20">
            <div className="bg-black text-white text-xs px-2 py-6 md:py-5 rounded-lg -rotate-90 whitespace-nowrap">
              Nike product of the year
            </div>
          </div>

          <div className="absolute bottom-6 left-4 md:left-10 text-white max-w-md  z-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              NIKE AIR MAX
            </h2>
            <p className="text-xs md:text-sm mb-4 md:mb-6 text-gray-200">
              Nike introducing the new air max <br /> for everyone&apos;s
              comfort
            </p>

            <Link
              href="/shop"
              aria-label="Shop Nike Air Max"
              className="inline-block bg-[#4A69E2] hover:bg-blue-700 transition px-5 py-2 md:px-6 md:py-3 rounded-lg text-sm font-semibold"
            >
              SHOP NOW
            </Link>
          </div>

          <div className="md:flex flex-col gap-4  absolute right-4 md:right-6 bottom-6 z-20">
            <div className="relative w-20 h-20 mb-4 md:mb-0 rounded-xl overflow-hidden border-2 border-blue-500">
              <Image
                src="/assets/home/Banner/banner1.jpg"
                alt="Nike Air Max thumbnail 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-blue-500">
              <Image
                src="/assets/home/Banner/banner2.jpg"
                alt="Nike Air Max thumbnail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
