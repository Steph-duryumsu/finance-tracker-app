'use client';

import { useState } from "react";
import {motion} from "framer-motion";
import LandingSlide from "./landing/LandingSlide";
import { Player } from '@lottiefiles/react-lottie-player';
import WelcomeAnim from './lotties/welcome.json';
import infoAnim from './lotties/info.json';
import startAnim from './lotties/start.json';
import {ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';

const slides = [
  {
    title: "Welcome to Money App",
    lottie: WelcomeAnim
  },
  {
    title: "Smart Budgeting, Personalized",
    lottie: infoAnim,
  },
  {
    title: "Ready to plan your Finances?",
    lotties: startAnim,
  },
];


export default function HomePage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };


  return (
    <div className="relative h-screen overflow-hidden font-[Poppins] bg-[#f0f8ff]">
      <motion.div 
        className="flex h-full transition-transform"
        animate={{x: `${index * 100}%`}}
        transition={{ type: "string, stiffness:100"}}
      >
        {slides.map((slides, i) => (
          <LandingSlide key={i}>
            <player autoplay loop src={slides.lottie} style={{height: '300px', width: '300px' }} />
            
            <h1 className="text-3xl font-bold mt-6 text-[#5f9ea0]">{slides.title}</h1>

            {i === 2 && (
              <div className="mt-10 flex gap-4">
                <Link href={"/auth/login"} className="px-6 py-2 bg-[#5f9ea0] text-white rounded-full">
                  Login
                </Link>
                 <Link href={"/auth/signup"} className="px-6 py-2 border-2 border-[#5f9ea0] rounded-full text-[#5f9ea0]">
                  Sign Up
                 </Link>
              </div>
            )}
          </LandingSlide>
        ))}
      </motion.div>

      {index > 0 && (
        <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronLeft size={24}/>
        </button>
      )}

      {index < slides.length - 1 && (
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}

//monuvu
//Evomon