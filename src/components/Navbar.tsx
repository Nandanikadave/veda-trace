import { Mail, HelpCircle, BookOpen } from 'lucide-react';
import React from 'react';

// Navbar Component
function Navbar() {
  // Placeholder URL for the logo, as local image paths like '/logo.png' are not supported in this environment.
  const buttonStyle = 'bg-[#F0E3D5] text-[#2c2c2c] px-3 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#C9BAA8] transition-colors flex items-center gap-2 font-sans shadow-sm';
  const iconWrapper = 'p-[5px] rounded-full flex items-center justify-center';

  const FillButton = ({ children, hoverBgColor, textColor, baseBgColor }) => (
      <button 
          className={`group relative overflow-hidden ${baseBgColor} ${textColor} px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-shadow duration-300 shadow-sm hover:shadow-lg flex items-center gap-2 font-sans`}
      >
          {/* Fill Layer - Slides from the left (scale-x-0 to scale-x-100) */}
          <div 
              className={`absolute inset-0 ${hoverBgColor} transition-all duration-300 ease-out transform scale-x-0 origin-left group-hover:scale-x-100`}
          ></div>
          
          {/* Content Wrapper - Needs to be relative and z-indexed to sit above the fill layer */}
          <div className="relative z-10 flex items-center gap-2">
            {children}
          </div>
      </button>
  );

  // --- Button Contents ---

  const howWeWorkContent = (
    <>
      {/* Icon background changes to white on hover for better contrast */}
      <div className={`${iconWrapper} bg-[#C9BAA8]`}>
        <HelpCircle size={12} className="text-[#2c2c2c]" />
      </div>
      <span className="hidden sm:inline">How we work</span>
    </>
  );

  const storiesContent = (
    <>
      {/* Icon background changes to white on hover for better contrast */}
      <div className={`${iconWrapper} bg-[#C9BAA8]`}>
        <BookOpen size={12} className="text-[#2c2c2c]" />
      </div>
      <span className="hidden sm:inline">Stories</span>
    </>
  );

  const contactUsContent = (
    <>
      {/* Icon background changes to white on hover for better contrast */}
      <div className={`${iconWrapper} bg-[#62625E] text-white`}>
        <Mail size={12} />
      </div>
      <span className="hidden sm:inline">Contact us</span>
      <span className="sm:hidden">Mail</span>
    </>
  );

  return (
    // CRITICAL FIX: The 'fixed' position is maintained, and 'relative' is removed for clarity.
    // Added background, blur, and shadow to ensure the fixed bar is clearly visible over content.
    <nav className='w-full z-50 top-0 fixed p-4 flex justify-between items-center bg-[#FBF4EC]'>
      
      {/* Navigation Links */}
     <div className='flex gap-2 sm:gap-4'>
        {/* How We Work Button */}
        <FillButton
          hoverBgColor="bg-[#C9BAA8]" // The color that fills
          baseBgColor="bg-[#F0E3D5]" // The initial background color
          textColor="text-[#2c2c2c]"
        >
          {howWeWorkContent}
        </FillButton>

        {/* Stories Button */}
        <FillButton
          hoverBgColor="bg-[#C9BAA8]" // The color that fills
          baseBgColor="bg-[#F0E3D5]" // The initial background color
          textColor="text-[#2c2c2c]"
        >
          {storiesContent}
        </FillButton>
      </div>


      {/* Logo - Responsive Centering */}
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        {/* Using a standard img tag with a placeholder source for portability */}
        <img 
          src="/logo.png" 
          alt='VedaTrace Logo' 
          width={120} 
          height={120} 
        />
      </div>

      {/* Contact Button */}
      <FillButton
        hoverBgColor="bg-[#62625E]" // The color that fills
        baseBgColor="bg-[#3B3B3A]" // The initial background color
        textColor="text-white"
      >
        {contactUsContent}
      </FillButton>
    </nav>
  );
}

export default Navbar;