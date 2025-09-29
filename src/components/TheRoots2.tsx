import React from "react";
import Image from "next/image";
import { Sprout, ArrowDown, LocateIcon, CloudRain } from "lucide-react";
import Link from "next/link";

function TheRoots2() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 items-center font-bold ">
            <h1 className="text-9xl">2</h1>
            <h1 className="text-5xl">
              Science Certified:
              <br /> Purity Tested.
            </h1>
            <Link
              href="/"
              className="border-[.5px] rounded-full flex gap-2  items-center justify-center border-white -ml-[22%] mt-14 px-3 py-1"
            >
              <p className="text-xs">See on map</p>
              <ArrowDown className="-rotate-120 text-[#AAD475]" />
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-sans font-normal text-lg">
                Tested for over 300 residues
              </p>
              <p className="font-sans font-medium text-3xl">
                Status: <span className="text-[#AAD475]">Negative</span>
              </p>
            </div>
            <button className="bg-[#AAD475] px-10 py-2 rounded-full text-white font-semibold mt-5 mb-5">
              View Certificate
            </button>
          </div>
          <div className="flex justify-between -mt-8">
            <div className="flex flex-col">
              <p className="font-sans font-normal text-lg">
Lead, Arsenic, Mercury (etc.) results              </p>
              <p className="font-sans font-medium text-3xl text-[#AAD475] ">
                Well Within<span className="text-white"> Global Limits</span>
              </p>
            </div>
            <button className="bg-[#AAD475] px-10 py-2 rounded-full text-white font-semibold mt-5 mb-5">
              View Certificate
            </button>
          </div>
          <div className="flex justify-between -mt-8">
            <div className="flex flex-col">
              <p className="font-sans font-normal text-lg">
Botanical Confirmation           </p>
              <p className="font-sans font-medium text-3xl">
                100% Ashwagandha
              </p>
            </div>
            <button className="bg-[#AAD475] px-10 py-2 rounded-full text-white font-semibold mt-5 mb-5">
              View Certificate
            </button>
          </div>
        </div>
      </div>
      <Image src="/02.png" alt="VedaTrace Logo" width={800} height={400} />
    </>
  );
}

export default TheRoots2;
