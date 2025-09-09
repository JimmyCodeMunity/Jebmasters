import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <div>
      <section class="py-24">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-14 text-center">
            <span class="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
              Features
            </span>
            <h2 class="text-4xl text-center font-bold text-gray-900 py-5">
              Revolutionary Features
            </h2>
            <p class="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              Discover the innovative solutions we offer to elevate your
              building’s vertical transportation systems.
            </p>
          </div>
          <div class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {services.map((service) => {
              return (
                <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
                  <div class="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                    {service.icon}
                  </div>
                  <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
                    {service.title}
                  </h4>
                  <p class="text-sm font-normal text-gray-500">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
