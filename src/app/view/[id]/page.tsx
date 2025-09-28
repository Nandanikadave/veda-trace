import React from 'react';
import Image from 'next/image';

export default function VerifiedAuthenticityPage() {
  return (
    <div className="min-h-screen bg-[#FBF4EC] relative overflow-hidden">
      {/* Main background with line.png */}
      {/* <div className="absolute inset-0 z-0 top-[20rem]" style={{
        backgroundImage: `url('/line.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }} /> */}
      
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

      {/* HowWeWork section - copied from component */}
      <section className="relative w-full bg-[#000000] opacity-[86%] rounded-t-[5rem] py-28 text-white mt-20 ">
       <Image src="/titlebolte.png" alt="svg" width={500} height={500} className='mx-auto my-10' />
          <Image 
          src="/Group 3.png"
          alt="svg"
          width={1000}
          height={1000}
          className="-z-10 w-full absolute top-0 min-h-screen"
          />
          <div className="flex w-full px-32 mt-90 gap-50 items-center">
              <Image src="/01.png" alt="VedaTrace Logo" width={800} height={400} />
              <div className="flex flex-col gap-6">
                <div className="flex gap-6 items-start">
                  <div className="text-8xl font-black text-white">1</div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-black text-white mb-2">Sacred Hills of Chirala:</h2>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-black text-white">Batch V-2025</h3>
                      <button className="border border-white rounded-full px-3 py-1">
                        <span className="text-green-400">↗</span>
                      </button>
                    </div>
                    <p className="text-white mb-6">Meet Farmer Raj & the Chirala Collective</p>
                    
                    <div className="space-y-3 ">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <span className="text-gray-100 text-2xl">☁</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                          <p className="text-white text-xl">Harvest Date</p>
                          <p className="text-white text-xl underline">September 18, 2025</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <span className="text-gray-100 text-2xl">📍</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                          <p className="text-white text-xl">Exact GPS</p>
                          <p className="text-white text-xl underline">15.820° N, 80.340° E</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <span className="text-gray-100 text-2xl">🌱</span>
                        </div>
                        <div className='flex gap-1 items-center'>
                          <p className="text-white text-xl">Conservation Credential</p>
                          <p className="text-white text-xl underline">NMPB guidelines</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="flex w-full px-32 mt-155 gap-50 items-center">
              
              <div className="flex flex-col gap-10">
              <div className="flex gap-10 items-center font-bold ">
              <h1 className="text-9xl">2</h1>
              <h1 className="text-5xl">CODE <br/> ENFORCED</h1>
              </div>
              <p className="max-w-[80%] font-light">Smart Contracts instantly check the data against rules like approved harvest zones and sustainability limits, permanently locking a verified record to the ledger.</p>
          </div><Image src="/02.png" alt="VedaTrace Logo" width={800} height={400} />
          </div>
          <div className="flex w-full px-32 mt-180 gap-50 items-center">
              <Image src="/03.png" alt="VedaTrace Logo" width={800} height={400} />
              <div className="flex flex-col gap-10">
              <div className="flex gap-10 items-center font-bold ">
              <h1 className="text-9xl">3</h1>
              <h1 className="text-5xl">QUALITY  <br/> ORIGIN</h1>
              </div>
              <p className="max-w-[80%] font-light">As the herb moves, certified Labs add records for DNA authentication, pesticide tests, and monitored storage conditions. Quality is proven at every checkpoint.</p>
          </div>
          </div>
          <div className="flex w-full px-32 mt-125 gap-50 items-center mb-50">
              
              <div className="flex flex-col gap-10">
              <div className="flex gap-10 items-center font-bold ">
              <h1 className="text-9xl">4</h1>
              <h1 className="text-5xl">YOUR <br/> VERIFIED STORY</h1>
              </div>
              <p className="max-w-[80%] font-light">A unique QR code is generated for the product. You scan it here to instantly retrieve the full, unchangeable Digital Provenance Story—your proof of authenticity.</p>
          </div><Image src="/04.png" alt="VedaTrace Logo" width={800} height={400} />
          </div>
        </section>

    </div>
  );
}