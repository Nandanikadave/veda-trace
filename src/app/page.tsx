import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import HowWeWork from "@/components/HowWeWork";
import Stories from "@/components/Stories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="w-full flex items-center min-h-screen justify-center px-4">
        <Image
          src="/section2.png"
          alt="Hero Image"
          width={600}
          height={200}
          className="max-w-full h-auto mt-50"
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
        <div className="absolute left-[4%] sm:left-[8%] top-[45%] sm:top-[55%] z-30 px-4 sm:px-0">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#2C2C2C] leading-tight">
            <div className="block">INTEGRITY IS</div>
            <div className="block">OUR INGREDIENT.</div>
            <div className="block">WE CONTROL THE</div>
            <div className="block">UNSEEN.</div>
          </div>
        </div>

        {/* Right Text Block - FIXES APPLIED HERE */}
        <div className="absolute right-[4%] sm:right-[8%] top-[65%] sm:top-[55%] z-30 max-w-xs sm:max-w-sm md:max-w-md px-4 sm:px-0">
          <p className="text-sm sm:text-base md:text-lg text-[#2C2C2C] leading-relaxed text-justify">
            Unlike opaque supply chains, we&apos;ve built a system that permanently verifies 
            every step—from the soil the herb grew in, 
            to the final lab certificate. You don&apos;t just get a product; you get its 
            complete, immutable history.
          </p>
        </div>
      </section>
      <section id="how-we-work">
        <HowWeWork />
      </section>
      <section id="stories">
        <Stories />
      </section>

      {/* Connect With Us Preview / Footer Top Section */}
      <section className="bg-[#000000] opacity-86 w-[95%] sm:w-[90%] h-[60vh] sm:h-[70vh] mx-auto rounded-[2rem] sm:rounded-[3rem] md:rounded-[5rem] flex items-center flex-col justify-between pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-10 px-4">
        <div className="flex justify-center w-full">
          <Image
            src="/Group 4.png"
            alt="Connect With Us Title Graphic"
            width={600}
            height={150}
            className="mx-auto max-w-full h-auto"
          />
        </div>

        <Image
          src="/Vector 11.png"
          alt="Divider Graphic"
          width={20}
          height={2}
          className="mt-4"
        />
      </section>
      <section id="contact-us">
        <ContactUs />
      </section>
    </div>
  );
}