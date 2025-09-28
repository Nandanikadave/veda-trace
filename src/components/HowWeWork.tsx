import Image from "next/image";
import React from "react";

function HowWeWork() {
  return (
    <section className="relative w-full bg-[#000000] opacity-[86%] rounded-t-[5rem] py-28 text-white mt-20 ">
      <p className="text-center text-white text-xl">how we work.</p>
      <div className="flex flex-col items-center justify-center mt-10 text-6xl font-black gap-5">
        <div className="flex gap-5">
          <h1>OUR</h1>
          <h1 className="rotate-4 mt-2">PROCESS</h1>
        </div>
        <div className="flex gap-5">
          <h1>GUARANTEES</h1>
          <h1 className="-rotate-4"> WHAT</h1>
        </div>
        <h1>YOU HOLD.</h1>
      </div>
        <Image 
        src="/Group 3.png"
        alt="svg"
        width={1000}
        height={1000}
        className="-z-10 w-full absolute top-0 min-h-screen"
        />
        <div className="flex w-full px-32 mt-90 gap-50 items-center">
            <Image src="/01.png" alt="VedaTrace Logo" width={800} height={400} />
            <div className="flex flex-col gap-10">
            <div className="flex gap-10 items-center font-bold ">
            <h1 className="text-9xl">1</h1>
            <h1 className="text-5xl">PINPOINT <br/> ORIGIN</h1>
            </div>
            <p className="max-w-[80%] font-light">Farmers use GPS to record the exact location, time, and identity for the harvest. This initial "Collection Event" is digitally sealed.</p>
        </div>
        </div>
        <div className="flex w-full px-32 mt-120 gap-50 items-center">
            
            <div className="flex flex-col gap-10">
            <div className="flex gap-10 items-center font-bold ">
            <h1 className="text-9xl">1</h1>
            <h1 className="text-5xl">PINPOINT <br/> ORIGIN</h1>
            </div>
            <p className="max-w-[80%] font-light">Farmers use GPS to record the exact location, time, and identity for the harvest. This initial "Collection Event" is digitally sealed.</p>
        </div><Image src="/01.png" alt="VedaTrace Logo" width={800} height={400} />
        </div>
        <div className="flex w-full px-32 mt-180 gap-50 items-center">
            <Image src="/01.png" alt="VedaTrace Logo" width={800} height={400} />
            <div className="flex flex-col gap-10">
            <div className="flex gap-10 items-center font-bold ">
            <h1 className="text-9xl">1</h1>
            <h1 className="text-5xl">PINPOINT <br/> ORIGIN</h1>
            </div>
            <p className="max-w-[80%] font-light">Farmers use GPS to record the exact location, time, and identity for the harvest. This initial "Collection Event" is digitally sealed.</p>
        </div>
        </div>
        <div className="flex w-full px-32 mt-150 gap-50 items-center mb-50">
            
            <div className="flex flex-col gap-10">
            <div className="flex gap-10 items-center font-bold ">
            <h1 className="text-9xl">1</h1>
            <h1 className="text-5xl">PINPOINT <br/> ORIGIN</h1>
            </div>
            <p className="max-w-[80%] font-light">Farmers use GPS to record the exact location, time, and identity for the harvest. This initial "Collection Event" is digitally sealed.</p>
        </div><Image src="/01.png" alt="VedaTrace Logo" width={800} height={400} />
        </div>
      </section>
  )
}

export default HowWeWork;