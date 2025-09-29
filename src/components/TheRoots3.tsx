import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, CircleCheck } from 'lucide-react'
function TheRoots3() {
  return (
    <>
    <Image src="/03.png" alt="VedaTrace Logo" width={800} height={400} />
         <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-6 items-center font-bold ">
            <h1 className="text-9xl">3</h1>
            <h1 className="text-4xl">
              An Unbroken Chain: Every 
              <br /> Mile Accounted For.
            </h1>
            <Link
              href="/"
              className="border-[.5px] rounded-full flex gap-2  items-center justify-center border-white -ml-[23%] mt-14 px-3 py-1"
            >
              <p className="text-xs">See on map</p>
              <ArrowDown className="-rotate-120 text-[#AAD475]" />
            </Link>
          </div>
          
          <div className='flex justify-between'>
            <p>
                Collector Handoff
            </p>
            <p>Chirala Village → Aggregation Center</p>
          </div>
          <div className='flex justify-between -mt-4'>
            <p className='text-2xl'>
                2025-09-18
            </p>
            <div className='flex gap-2 items-center'>
                <Image
                              src="/farmer.png"
                              alt="farmer"
                              width={30}
                              height={40}
                              className="rounded-full z-10"
                            />
                <p className='text-2xl'>Collecter ID</p>
                <CircleCheck className='w-4 h-4 -mt-5 text-[#AAD475]'/>

            </div>
          </div>
          <div className='flex justify-between'>
            <p>
Testing Transit            </p>
            <p>Quality Lab, Hyderabad</p>
          </div>
          <div className='flex justify-between -mt-4 text-2xl' >
            <p className=''>
2025-09-20            </p>
            <p className=''>RFID: (00)035790....</p>
          </div>
          <div className='flex justify-between'>
            <p>
Final Transfer            </p>
            <p>Manufactorer name, location</p>
          </div>
          <div className='flex justify-between -mt-4 text-2xl'>
            <p className=''>
2025-09-26            </p>
                        <p className=''>VedaTrace-MFG-NODE-001</p>

          </div>
        </div>
      </div>
      </>
  )
}

export default TheRoots3