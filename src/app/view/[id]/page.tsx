import React from 'react';
import Image from 'next/image';

export default function VerifiedAuthenticityPage() {
  return (
    <div className="min-h-screen bg-[#FBF4EC] relative overflow-hidden">
      {/* Main background with line.png */}
      <div className="absolute inset-0 z-0 top-[20rem]" style={{
        backgroundImage: `url('/line.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} />
      
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-20 z-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url('/Texture.png')`,
          backgroundSize: '150px 150px',
          backgroundRepeat: 'repeat'
        }} />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-4 sm:px-8 lg:px-16 py-8 lg:py-0">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          {/* VERIFIED AUTHENTICITY Section */}
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
            <p className="text-base sm:text-lg text-black font-normal max-w-md">
              Your Ayurvedic product's journey, guaranteed from Earth to Bottle.
            </p>
          </div>

          {/* Product Details */}
          <div className="space-y-4 lg:space-y-6">
            {/* Batch ID */}
            <div>
              <p className="text-xs sm:text-sm text-black font-normal mb-1 lg:mb-2">Batch ID</p>
              <p className="text-2xl sm:text-3xl font-black text-black">ASWG-202509-B47</p>
            </div>

            {/* Best By and Manufacturer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
              <div>
                <p className="text-xs sm:text-sm text-black font-normal mb-1 lg:mb-2">Best By:</p>
                <p className="text-xl sm:text-2xl font-black text-black">9.2026</p>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-black font-normal mb-1 lg:mb-2">Manufactured by:</p>
                <p className="text-xl sm:text-2xl font-black text-black">HerbShi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Elements */}
        <div className="hidden lg:block relative h-[600px] w-full">
          {/* Herbal Elements Container */}
          <div className="relative z-30 h-full flex items-center justify-center">
            <Image src="/dusrahero.png" alt="Vector" width={700} height={500} className="max-w-full h-auto" />
          </div>
        </div>
        {/* Mobile Visual Elements */}
        <div className="lg:hidden w-full mt-8 relative">
          {/* Mobile herbal elements */}
          <div className="relative w-full h-64 sm:h-80 flex items-center justify-center">
            <Image src="/dusrahero.png" alt="Vector" width={400} height={400} className="max-w-full h-auto" />
          </div>
        </div>
      </div>

    </div>
  );
}