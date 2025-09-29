
"use client"; 

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import Image from 'next/image';

const DUMMY_CARD_DATA = [
  { id: 1, title: "The DNA of Trust: Why Your Ayurvedic Herbs Are Now Scan-Verified.", date: "11.09.25", readTime: "3 min", image: "/03.png" },
  { id: 2, title: "Next Level Health: How Technology is Verifying Ancient Wisdom.", date: "12.09.25", readTime: "5 min", image: "/01.png" },
  { id: 3, title: "Ancient Secrets, Modern Proof: Scanning Herbs for Authenticity.", date: "13.09.25", readTime: "4 min", image: "/04.png" },
  { id: 4, title: "The Power of Purity: Traceability in Modern Ayurvedic Medicine.", date: "14.09.25", readTime: "3 min", image: "/02.png" },
];

interface CardData {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

interface StoryCardProps {
  data: CardData;
  position: "left" | "center" | "right" | "hidden";
  onClick: () => void;
}

const StoryCard: React.FC<StoryCardProps> = ({ data, position, onClick }) => {
  let cardClasses = 'bg-white rounded-[25px] shadow-2xl p-6 w-[400px] h-[480px] flex flex-col justify-between transition-all duration-500 ease-in-out cursor-pointer hover:shadow-xl absolute top-0';

  if (position === 'left') {
    cardClasses += ' -rotate-3 translate-x-[-95%] opacity-70 scale-95 z-10'; 
  } else if (position === 'right') {
    cardClasses += ' rotate-3 translate-x-[95%] opacity-70 scale-95 z-10';
  } else if (position === 'center') {
    cardClasses += ' bg-gray-50 scale-100 z-20 shadow-3xl translate-x-0'; 
  } else {
    cardClasses += ' translate-x-[-100vw] opacity-0 z-0 pointer-events-none';
  }
  
  return (
    <div 
      className={cardClasses} 
      style={{ left: '50%', transform: position === 'center' ? 'translateX(-50%)' : (position === 'left' ? 'translateX(-50%) rotate(-3deg)' : (position === 'right' ? 'translateX(-50%) rotate(3deg)' : 'translateX(-50%)')) }} 
      onClick={onClick}
    >
      <div className="w-full h-52 relative rounded-xl ">
        <Image 
          src={data.image} 
          alt={data.title} 
          layout="fill" 
          objectFit="cover"
          className="transition duration-500 hover:scale-105"
        />
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 px-3 py-1 text-sm font-semibold bg-[#a0d89c] text-green-800 rounded-full shadow-md z-10">
          Blog
        </span>
      </div>
      <div className="text-center flex flex-col items-center">
        <p className="text-gray-800 text-base font-medium leading-tight mb-2">
          {data.title}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {data.date} | {data.readTime}
        </p>
        <button className="bg-gray-800 text-white text-sm font-bold py-3 px-8 rounded-full hover:bg-black transition duration-150">
          Read
        </button>
      </div>
    </div>
  );
};


export default function Stories() {
  const numCards = DUMMY_CARD_DATA.length;
  const [centerIndex, setCenterIndex] = useState(1); 

  const handlePrev = () => {
    setCenterIndex((prev) => (prev - 1 + numCards) % numCards);
  };

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % numCards);
  };

  const getCardPosition = (index: number): StoryCardProps['position'] => {
    if (index === centerIndex) return 'center';
    
    const relativeIndex = (index - centerIndex + numCards) % numCards;

    if (relativeIndex === (numCards - 1)) return 'left';
    if (relativeIndex === 1) return 'right';
    
    return 'hidden'; 
  };

  return (
    <section className='w-full bg-[#f5f0e3] min-h-screen py-20 relative'> 
      <div className='justify-center flex flex-col items-center gap-5 '>
        <h1 className='text-6xl font-extrabold mt-10 text-gray-800'>STORIES</h1>
        <p className='max-w-md text-center text-gray-600 mb-10'>Updates, insights and stories of those who have guaranteed purity at the source.</p>
      </div>

      <div className="flex justify-center items-center w-full relative mt-20">
        <div className="relative flex items-center justify-center w-full max-w-4xl">
          
          <div className="flex justify-center items-center w-full h-[500px] relative">
            
            {DUMMY_CARD_DATA.map((data, index) => {
              const position = getCardPosition(index);
              
              return (
                <StoryCard 
                  key={data.id}
                  data={data} 
                  position={position}
                  onClick={() => setCenterIndex(index)} 
                />
              );
            })}
          </div>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 mt-20 -translate-y-1/2 ml-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-30 text-gray-700 w-20 h-20 flex items-center justify-center"
        aria-label="Previous story"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 mt-20 -translate-y-1/2 mr-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-30 text-gray-700 w-20 h-20 flex items-center justify-center"
        aria-label="Next story"
      >
        <ChevronRight size={24} />
      </button>
<div className='w-full items-center justify-center flex mt-20'>
<button className="bg-[#AAD475] px-12 py-4 rounded-full text-white font-semibold">
            Learn more
          </button>
          </div>
    </section>
  );
}