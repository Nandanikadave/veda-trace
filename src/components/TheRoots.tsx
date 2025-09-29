import { ArrowDown, CloudRain, LocateIcon, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TheRoots2 from "./TheRoots2";
import TheRoots3 from "./TheRoots3";
function TheRoots() {
  return (
    <section className="relative w-full bg-[#000000] opacity-[86%] rounded-t-[5rem] py-28 text-white mt-20 ">
      <div className="flex flex-col items-center justify-center ">
        <Image
          src="/titlebolte.png"
          alt="How We Work Header"
          width={550}
          height={100}
        />
      </div>
      <Image
        src="/Group 9.png"
        alt="svg"
        width={1000}
        height={1000}
        className="-z-10 w-full absolute top-0 min-h-screen"
      />
      <div className="flex w-full px-20 mt-90 gap-30 ">
        <Image src="/01.png" alt="VedaTrace Logo" width={800} height={400} />
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 items-center font-bold ">
            <h1 className="text-9xl">1</h1>
            <h1 className="text-5xl">
              Sacred Hills of Chirala:
              <br /> Batch V-2025
            </h1>
            <Link
              href="/"
              className="border-[.5px] rounded-full flex gap-2  items-center justify-center border-white -ml-[30%] mt-14 px-3 py-1"
            >
              <p className="text-xs">See on map</p>
              <ArrowDown className="-rotate-120 text-[#AAD475]" />
            </Link>
          </div>
          <div className="flex justify-between">
            <p className="text-3xl max-w-xs font-sans">
              Meet farmer Raj & Chirala Collectives
            </p>
            <Image
              src="/farmer.png"
              alt="farmer"
              width={70}
              height={70}
              className="rounded-full z-10 -ml-10"
            />
            <Image
              src="/farmer.png"
              alt="farmer"
              width={70}
              height={70}
              className="rounded-full -ml-65"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-8">
              <CloudRain className="w-8 h-8" />
              <p className="font-medium text-xl">Harvest Date</p>
            </div>
            <p className="font-merriweather font-bold text-xl">
              September 18, 2025
            </p>
          </div>
          <div className="flex justify-between -mt-8">
            <div className="flex gap-8">
              <LocateIcon className="w-8 h-8" />
              <p className="font-medium text-xl">Exact GPS</p>
            </div>
            <p className="font-merriweather font-bold text-xl ">
15.820∘ N,80.340∘ E            </p>
          </div>
          <div className="flex justify-between -mt-8">
            <div className="flex gap-8">
              <Sprout className="w-8 h-8" />
              <p className="font-medium text-xl">Conservation Credential</p>
            </div>
            <p className="font-merriweather font-bold text-xl ">
NMPB guidelines          </p>
          </div>
          <p className="w-full font-light">
            
          </p>
        </div>
      </div>
      <div className="flex w-full px-20 mt-155 gap-30 items-center">
        <TheRoots2 />
        </div>
      <div className="flex w-full px-20 mt-130 gap-30 items-center mb-150">
        <TheRoots3 />
      </div>
    </section>
  );
}

export default TheRoots;
