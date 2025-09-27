import React from 'react'
import Navbar from './Navbar'

const HeroTwo = () => {
  const bgtransparent = true;
  return (
    
<div class="relative overflow-hidden bg-transparent h-full">
<div className="herocove">
{/* <Navbar bgtransparent={bgtransparent} /> */}
    <div class="pt-16 pb-80 sm:pt-10 sm:pb-40 lg:pt-10 lg:pb-10 ">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-16 lg:px-16">
        <div class="sm:max-w-lg">
        <div className="w-full justify-center items-center flex flex-col">
                <div className="space-y-6">
                  <h1 className="text-5xl text-white leading-[60px] font-semibold tracking-wide">
                    Tailored List Development and{" "}
                    <span className="text-orange-500">Cutting-Edge</span>{" "}
                    Escalator Solutions
                  </h1>
                  <p className="text-white text-md">
                    Jebmasters Ltd is a leading provider of escalator solutions
                    and tailored list development services. Our team of experts
                    is dedicated to delivering innovative and efficient
                    solutions to meet the needs of our clients.
                  </p>

                  <button className="bg-orange-500 rounded-md p-2 px-6 text-white">
                    Explore Our Services
                  </button>
                </div>
              </div>
        </div>
        <div>
          <div class="mt-10">
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
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
  )
}

export default HeroTwo