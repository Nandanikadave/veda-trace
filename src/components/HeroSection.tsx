import React from 'react'
import Image from 'next/image'
import { Sparkle } from 'lucide-react'

function HeroSection() {
  return (
    <div className='w-full min-h-screen justify-center flex items-center'>
        <Image
        src="/hero.png"
        alt="Hero Image"
        width={700}
        height={200}
        className="mt-[8rem]"
      />
      <div className="text-[6rem] font-bold text-black font-merriweather">
        <h1 className='-ml-50 -mt-50'>TRACING</h1>
        <h1 className="rotate-5 -mt-12 -ml-30">ANCIENT</h1>
        <h1 className="-mt-12 -ml-30">WISDOM</h1>
      </div>

      <Image
        src="/leafs.png"
        alt="Hero Image"
        width={140}
        height={50}
        className="relative -mt-90 -ml-16"
      />

      <div className="absolute top-[31rem] left-[50rem]">
        <div className="flex gap-3 items-center mb-3 ">
          <p className="text-[#9C8F81] font-medium">Ethically Grown</p>
          <Sparkle size={10} className="text-[#9C8F81]" />
          <p className="text-[#9C8F81] font-medium">Zero Waste</p>
        </div>
        <h2 className="text-lg font-semibold">From seed to solution, </h2>
        <h2 className="text-lg font-semibold">
          we guarantee unmatched transparency.
        </h2>

        <div className="flex items-center space-x-4 mt-6">
          <button className="bg-[#AAD475] px-12 py-4 rounded-full text-white font-semibold">
            Learn more
          </button>
          <button className="border-[.5px] border-[#9C8F81] px-12 py-4 text-[#9C8F81] font-semibold rounded-full">
            Get in touch{" "}
          </button>
        </div>
      </div>

      <Image 
      src="/Vector 2.png"
      alt="Hero Image"
        width={800}
        height={50}
        className='absolute -z-10 top-[25rem] w-full left-[1%]'
        />
    </div>
  )
}

export default HeroSection