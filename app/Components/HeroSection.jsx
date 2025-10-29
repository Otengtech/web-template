"use client";

import Image from "next/image";
import HeroImage from "@/app/Assets/HeroImage.png";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 bg-gradient-to-r from-green-500 to-lime-400 text-white overflow-hidden pt-20 sm:pt-24">
      {/* Left Content */}
      <div className="flex-1 text-left space-y-5 md:space-y-6">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-md">
          Feel the <span className="text-yellow-200">Vibes</span> of Art & Sound
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-white/90 max-w-md md:max-w-lg">
          Explore my latest music, creative projects, and exclusive merch drops.  
          Join the journey — where sound meets soul.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <button className="px-5 sm:px-5 py-3 sm:py-2.5 font-semibold rounded-full bg-black/80 hover:bg-black text-lime-400 hover:text-white transition-all shadow-lg text-sm sm:text-base">
            Listen Now
          </button>
          <button className="px-5 sm:px-5 py-3 sm:py-2.5 font-semibold rounded-full border border-white/50 hover:bg-white hover:text-green-700 transition-all text-sm sm:text-base">
            View Projects
          </button>
        </div>
      </div>

      {/* Right Content - Hero Image */}
      <div className="flex-1 flex justify-center md:mt-0">
        <Image
          src={HeroImage}
          alt="Artist Hero"
          className="w-[280px] sm:w-[320px] object-cover md:w-[450px] lg:w-[550px] drop-shadow-2xl rounded-2xl hover:scale-105 transition-transform duration-500"
          priority
        />
      </div>

      {/* Subtle glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-lime-300/10 to-yellow-200/10 blur-3xl -z-10" />
    </section>
  );
}
