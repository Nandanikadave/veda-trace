import React from 'react';
import Image from 'next/image';
import TheRoots from '@/components/TheRoots';
import Stories from '@/components/Stories';
import ContactUs from '@/components/ContactUs';

export default function VerifiedAuthenticityPage() {
  return (
    <div className="w-full bg-[#FBF4EC] relative ">

      <div className="relative z-10 flex flex-col lg:flex-row items-center  px-4 sm:px-8 lg:px-16 py-8 lg:py-0 mb-100 mt-20">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <div className="mb-6 lg:mb-8">
            <div className="flex items-center mb-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black uppercase leading-none">
                VERIFIED
              </h1>
              <div className="ml-2 sm:ml-4 transform rotate-12">
                <Image src="/drugs.png" alt="Vector" width={70} height={50} />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-black uppercase leading-none mb-3 lg:mb-4">
              AUTHENTICITY
            </h2>
            <p className="text-base sm:text-lg text-black font-normal max-w-lg">
              Your Ayurvedic product&apos;s journey, guaranteed from Earth to Bottle.
            </p>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div>
              <p className="text-lg  font-medium mb-1 lg:mb-2">Batch ID</p>
              <p className="text-2xl sm:text-5xl font-black text-black">ASWG-202509-B47</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-4">
              <div>
                <p className="text-xs sm:text-lg text-black font-normal mb-1 lg:mb-2">Best By:</p>
                <p className="text-xl sm:text-3xl font-black text-black font-sans">9.2026</p>
              </div>
              <div>
                <p className="text-xs sm:text-lg text-black font-normal mb-1 lg:mb-2">Manufactured by:</p>
                <p className="text-xl sm:text-3xl font-black text-black font-sans">HerbShi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative h-[600px] w-full">
          <div className="relative z-30 h-full flex items-center justify-center">
            <Image src="/dusrahero.png" alt="Vector" width={700} height={500} className="max-w-full h-auto" />
          </div>
        </div>
        <div className="lg:hidden w-full mt-8 relative">
          <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
            <Image src="/dusrahero.png" alt="Vector" width={400} height={400} className="max-w-full h-auto" />
          </div>
        </div>

        <Image 
      src="/line.png"
      alt="Hero Image"
        width={800}
        height={50}
        className='absolute -z-10 w-full top-[5rem] right-[5%]'
        />
      </div>

      <TheRoots />

      <Stories />



    </div>
  );
}