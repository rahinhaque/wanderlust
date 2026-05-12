import { Separator } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/assets/banner.png')] text-white flex justify-between flex-col items-center gap-5 h-200 relative overflow-hidden">
      {/* Animated overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/30 animate-pulse"></div>
      
      <div className="p-10 text-center space-y-3 flex justify-center flex-col items-center gap-3.5 flex-1 relative z-10">
        <h1 className="text-7xl font-bold transition-all duration-500 hover:scale-105 hover:text-cyan-200 animate-fade-in">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-2xl transition-all duration-500 hover:scale-105 hover:text-cyan-100 animate-fade-in-delay">
          Explore breathtaking destinations and create unforgettable memories
          with <br /> our curated travel experiences.
        </p>

        <div className="flex gap-5">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer transition-all duration-300 hover:bg-cyan-600 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/50 transform hover:-translate-y-1">
            Explore Now
          </button>

          <Link href={"/destinations"} className="uppercase px-5 py-3 bg-white/50 cursor-pointer transition-all duration-300 hover:bg-white/70 hover:scale-110 hover:shadow-xl hover:shadow-white/30 transform hover:-translate-y-1">
            View Destination
          </Link>
        </div>
      </div>

      <div className="bg-white/30 backdrop-blur-sm flex justify-between gap-5 w-full items-center transition-all duration-300 hover:bg-white/40 hover:shadow-lg">
        <div className="px-3 group cursor-pointer transition-all duration-300 hover:scale-105">
          <h3 className="text-sm group-hover:text-cyan-200 transition-colors">Location</h3>
          <p className="text-xs group-hover:text-white transition-colors">Address, City or Zip</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
          <h3 className="text-sm group-hover:text-cyan-200 transition-colors">Date/Duration</h3>
          <p className="text-xs group-hover:text-white transition-colors">Anytime/3 Days</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
          <h3 className="text-sm group-hover:text-cyan-200 transition-colors">Budget</h3>
          <p className="text-xs group-hover:text-white transition-colors">$0-$3000</p>
        </div>

        <Separator variant="tertiary" orientation="vertical" />

        <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
          <h3 className="text-sm group-hover:text-cyan-200 transition-colors">People</h3>
          <p className="text-xs group-hover:text-white transition-colors">5-10</p>
        </div>

        <div className="bg-cyan-500 py-2 px-4 transition-all duration-300 hover:bg-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 cursor-pointer transform hover:-translate-y-1">
          <h3 className="font-semibold">Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
