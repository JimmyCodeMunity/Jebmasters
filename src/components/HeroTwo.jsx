import React from 'react'
import Navbar from './Navbar'
import { domAnimation, LazyMotion, motion } from "motion/react";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroTwo = () => {
  const bgtransparent = true;
  // scroll to services section witha smooth scroll
  
  return (
    <LazyMotion features={domAnimation}>
    
<div class="relative overflow-hidden bg-transparent h-full" id="home">
<div className="herocove">
{/* <Navbar bgtransparent={bgtransparent} /> */}
    <div class="pt-16 pb-80 sm:pt-10 sm:pb-40 lg:pt-10 lg:pb-10 ">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-16 lg:px-16">
        <div class="sm:max-w-lg">
        <div className="w-full justify-center items-center flex flex-col">
                <div className="space-y-6 animate-flip-up animate-duration-1000 animate-ease-linear animate-normal animate-fill-forwards">
                  <h1 className="md:text-5xl lg:text-5xl text-3xl text-white md:leading-[60px] leading-[40px] font-semibold tracking-wide">
                    Tailored List Development and{" "}
                    <span className="text-orange-500 animate-rotate-x">Cutting-Edge</span>{" "}
                    Escalator Solutions
                  </h1>
                  <p className="text-white text-md">
                    Jebmasters Ltd is a leading provider of escalator solutions
                    and tailored list development services. Our team of experts
                    is dedicated to delivering innovative and efficient
                    solutions to meet the needs of our clients.
                  </p>

                  <div className="py-5">
                  <a href="#services">
                  <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-orange-500 flex flex-row items-center space-x-3 rounded-md p-2 px-6 text-white ">
                    Explore Our Services <ArrowRight color="white" size={30}/>
                  </motion.button></a>
                  </div>
                  
                  

                </div>
              </div>
        </div>
        <div>
          <div class="mt-10 md:block hidden">
            <div aria-hidden="true" class="animate-fade-left animate-duration-[2000ms] animate-ease-linear animate-normal animate-fill-forwards pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src="../images/l1.jpeg" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="../images/l2.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-full">
                      <img src="../images/l3.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-full">
                      <img src="../images/l4.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="../images/l5.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="../images/l6.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="../images/l7.jpeg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </LazyMotion>
  )
}

export default HeroTwo