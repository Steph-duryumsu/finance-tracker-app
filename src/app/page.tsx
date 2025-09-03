'use client';

import { useState, useEffect } from "react";
import {motion, vw} from "framer-motion";
import LandingSlide from "./landing/LandingSlide";
import { Player } from '@lottiefiles/react-lottie-player';
import WelcomeAnim from './lotties/welcome.json';
import infoAnim from './lotties/info.json';
import startAnim from './lotties/start.json';
import {ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';

const slides = [
  {
    title: "Welcome to Evomon",
    subtitle: "Your smart way to plan and track expenses easily.",
    lottie: WelcomeAnim
  },
  {
    title: "Smart Budgeting, Personalized",
    subtitle: "Plan daily, weekly or monthly budgets with ease.",
    lottie: infoAnim,
  },
  {
    title: "Ready to plan your Finances?",
    subtitle: "Login or sign up to get started today.",
    lottie: startAnim,
  },
];


export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [vw, setvw] = useState(0);


  useEffect (() => {
    const update = () => setvw(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);


  const handleNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };


  return (
    <div className="relative h-screen overflow-hidden font-[Poppins] bg-[#f0f8ff]">

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#5f9ea0] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <motion.div 
        className="flex h-full"
        //transition-transform
        animate={{ x: -index * vw}}
        transition={{ type: "spring", stiffness:120, damping: 20}}
      >
        {slides.map((slides, i) => (
          <LandingSlide key={i}>
            <Player 
              autoplay 
              loop 
              src={slides.lottie} 
              style={{height: '250px', width: '250px' }} 
            />
            
            <h1 
              className="text-3xl font-bold mt-6 text-[#5f9ea0] text-center">
                {slides.title}
            </h1>

            <p className="text-gray-600 mt-2 text-center px-4">
              {slides.subtitle}
            </p>

            {i === 2 && (
              <div className="mt-10 flex gap-4">
                <Link 
                  href={"/auth/login"} 
                  className="px-6 py-2 bg-[#5f9ea0] text-white rounded-full shadow hover:scale-105 transition"
                >
                  Login
                </Link>
                 <Link 
                  href={"/auth/signup"} 
                  className="px-6 py-2 border-2 border-[#5f9ea0] rounded-full text-[#5f9ea0] hover:bg-[#5f9ea0] hover:text-white transition"
                  >
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