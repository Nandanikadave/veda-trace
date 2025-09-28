import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-[#FBF4EC] py-8 px-8 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side with logo and copyright below it */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <Image 
            src="/LOGO 1.png" 
            alt="VedaTrace Logo" 
            width={400} 
            height={133} 
            className="object-contain"
          />
          <div className="text-[#2C2C2C] text-sm mt-2">
            <p>India ©2025</p>
          </div>
        </div>
        
        {/* Empty div to maintain spacing in flex layout */}
        <div className="hidden md:block"></div>
        
        {/* Right side with social icons */}
        <div className="flex items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-4">
            <Link href="#" aria-label="Instagram">
              <div className="w-20 h-20 rounded-full border border-[#2C2C2C] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </Link>
            <Link href="#" aria-label="Facebook">
              <div className="w-20 h-20 rounded-full border border-[#2C2C2C] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </div>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <div className="w-20 h-20 rounded-full border border-[#2C2C2C] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
            </Link>
          </div>
          
          {/* Back to Top Button */}
          <Link href="#top" className="flex flex-col items-center">
            <div className="text-[#2C2C2C] font-medium">
                <Image src="/footerarrow.png" alt="VedaTrace Logo" width={30} height={40} />
              <span className="font-bold text-6xl">BACK</span><br/>
              <span className="font-bold text-6xl">TO TOP</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;