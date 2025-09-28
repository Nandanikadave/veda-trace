import React from 'react'
import Image from 'next/image'
import { EnterpriseForm } from './EnterpriseForm'
function ContactUs() {
  return (
    <section className="relative w-full min-h-screen  mt-40 ">
         {/* Yellow Left Border */}         
         {/* Cream Vertical Stripes */}

         {/* Wavy Green Line */}
         <div className="absolute inset-0 z-20 -mt-40 right-0 w-full left-[35%]">
           <Image
        src="/Vector 13.png"
        alt="Hero Image"
        width={1000}
        height={2}
        
      />
         </div>

         {/* Left Text Block */}
         <div className="absolute left-[8%] z-30 ">
           <div className="text-[#2C2C2C] leading-tight">
             <div className="block text-5xl font-black ">PARTNER WITH US</div>
             <div className="block text-5xl font-black ">ENTERPRISE</div>
             <div className="block text-5xl font-black ">INTEGRATION</div>
             <div className='block max-w-[60%] text-lg text-justify mt-8'>Fill out the form below, and we will immediately send your API documentation.</div>
           </div>

           <div className="mt-[2rem]"> 
                <EnterpriseForm />
            </div>s
         </div>

         {/* Right Text Block */}
         <div className="absolute right-[8%]  z-30 max-w-md">
           <p className="text-lg text-[#2C2C2C] leading-relaxed text-justify">
             Need Verified Data for Your ERP? Stop wasting time on manual audits. If your business uses ERP systems , our APIs grant you direct access to real-time, standardized traceability data from the immutable ledger.
           </p>
            <Image
                className='mt-60'
        src="/contact-us.png"
        alt="Hero Image"
        width={700}
        height={700}
        
      />
         </div>
       </section>
  )
}

export default ContactUs