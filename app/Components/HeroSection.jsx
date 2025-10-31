"use client";

import Image from "next/image";
import HeroImage from "@/app/Assets/hero-pic.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-r from-green-500 to-lime-400 text-white overflow-hidden pt-20 sm:pt-24">
      {/* Left Content */}
      <div className="flex-1 text-left space-y-5 md:space-y-6">
        <h1 className="text-5xl text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-md">
          Feel the <span className="text-white">Vibes</span> of Art & Sound
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-white/90 max-w-md md:max-w-lg">
          Explore my latest music, creative projects, and exclusive merch drops.
          Join the journey — where sound meets soul.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/music">
            <button className="px-6 sm:px-5 py-3 sm:py-2.5 cursor-pointer font-semibold bg-gray-900 hover:bg-gray-800 text-white transition-all shadow-lg text-sm sm:text-base">
              Listen Now
            </button>
          </Link>
          <Link href="/projects">
            <button className="px-6 sm:px-5 py-3 sm:py-2.5 cursor-pointer font-semibold border border-white hover:text-gray-700 hover:bg-white transition-all text-sm sm:text-base">
              View Projects
            </button>
          </Link>
        </div>
      </div>
      
      {/* Right Content - Hero Image */}
      <div className="flex-1 flex justify-center mt-3 md:mt-0">
        <Image
          src={HeroImage}
          alt="Artist Hero"
          className="w-[300px] h-[320px] sm:w-[320px] md:w-[450px] md:h-[520px] lg:w-[550px] object-cover object-top rounded-2xl drop-shadow-lg drop-shadow-white hover:scale-105 transition-transform duration-500 bg-transparent"
        />
      </div>
    </section>
  );
}
