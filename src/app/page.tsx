import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import Stories from "@/components/Stories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="w-full flex items-center min-h-screen justify-center">
      <Image
        src="/section2.png"
        alt="Hero Image"
        width={600}
        height={200}
      />
      </div>
      <section className="relative w-full min-h-screen overflow-hidden -mt-60">
         {/* Yellow Left Border */}         
         {/* Cream Vertical Stripes */}

         {/* Wavy Green Line */}
         <div className="absolute inset-0 z-20">
           <svg width="100%" height="100%" viewBox="0 0 1440 812" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path 
               d="M-142.5 794.5C304 827.5 236.882 487.9 475.733 412.502C670.733 350.947 559.008 676.633 882 339.504C1324.09 -121.94 2014.39 370.82 1866.47 6" 
               stroke="#BCD49E" 
               strokeWidth="30"
               fill="none"
               strokeLinecap="round"
             />
           </svg>
         </div>

         {/* Left Text Block */}
         <div className="absolute left-[8%] top-[55%] z-30">
           <div className="text-5xl font-black text-[#2C2C2C] leading-tight">
             <div className="block">INTEGRITY IS</div>
             <div className="block">OUR INGREDIENT.</div>
             <div className="block">WE CONTROL THE</div>
             <div className="block">UNSEEN.</div>
           </div>
         </div>

         {/* Right Text Block */}
         <div className="absolute right-[8%] top-[55%] z-30 max-w-md">
           <p className="text-lg text-[#2C2C2C] leading-relaxed text-justify">
             Unlike opaque supply chains, we've built a system that permanently verifies 
             every step—from the soil the herb grew in, 
             to the final lab certificate. You don't just get a product; you get its 
             complete, immutable history.
           </p>
         </div>
       </section>

       <HowWeWork />
       <Stories />
    </div>
  );
}
