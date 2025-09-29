import { Mail, HelpCircle, BookOpen } from 'lucide-react';
import React, { ReactNode } from 'react'; 

interface FillButtonProps {
    children: ReactNode; 
    hoverBgColor: string;
    textColor: string;
    baseBgColor: string;
    href: string; 
}


function Navbar() {
  const buttonStyle = 'bg-[#F0E3D5] text-[#2c2c2c] px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#C9BAA8] transition-colors flex items-center gap-2 font-sans shadow-sm ';
  const iconWrapper = 'p-[5px] rounded-full flex items-center justify-center';

  const FillButton = ({ children, hoverBgColor, textColor, baseBgColor, href }: FillButtonProps) => (
      <a 
        href={href} 
        className={`group relative overflow-hidden ${baseBgColor} ${textColor} px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-shadow duration-300 shadow-sm hover:shadow-lg flex items-center gap-2 font-sans`}
      >
          <div 
              className={`absolute inset-0 ${hoverBgColor} transition-all duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100`}
          ></div>
          
          <div className="relative z-10 flex items-center gap-2">
            {children}
          </div>
      </a>
  );


  const howWeWorkContent = (
    <>
      <div className={`${iconWrapper} bg-[#C9BAA8]`}>
        <HelpCircle size={12} className="text-[#2c2c2c]" />
      </div>
      <span className="hidden sm:inline">How we work</span>
    </>
  );

  const storiesContent = (
    <>
      <div className={`${iconWrapper} bg-[#C9BAA8]`}>
        <BookOpen size={12} className="text-[#2c2c2c]" />
      </div>
      <span className="hidden sm:inline">Stories</span>
    </>
  );

  const contactUsContent = (
    <>
      <div className={`${iconWrapper} bg-[#62625E] text-white`}>
        <Mail size={12} />
      </div>
      <span className="hidden sm:inline">Connect with Us</span> {/* Corrected for clarity */}
      <span className="sm:hidden">Mail</span>
    </>
  );

  return (
    
    <nav className='w-full z-50 top-0 fixed p-4 flex justify-between items-center bg-[#FBF4EC]'> 
      
      <div className='flex gap-2 sm:gap-4'>
        <FillButton
          href="/#how-we-work" 
          hoverBgColor="bg-[#C9BAA8]" 
          baseBgColor="bg-[#F0E3D5]" 
          textColor="text-[#2c2c2c]"
        >
          {howWeWorkContent}
        </FillButton>

        <FillButton
          href="/#stories" 
          hoverBgColor="bg-[#C9BAA8]" 
          baseBgColor="bg-[#F0E3D5]" 
          textColor="text-[#2c2c2c]"
        >
          {storiesContent}
        </FillButton>
      </div>


      <div className='absolute left-1/2 transform -translate-x-1/2 -mt-5'>
        <img

          src="/logo.png"

          alt='VedaTrace Logo'

          width={180}

          height={120}

        />
      </div>

      <FillButton
      href="/#contact-us" 
        hoverBgColor="bg-[#62625E]" 
        baseBgColor="bg-[#3B3B3A]" 
        textColor="text-white"
      >
        {contactUsContent}
      </FillButton>
    </nav>
  );
}

export default Navbar;