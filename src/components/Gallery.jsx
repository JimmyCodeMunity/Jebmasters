import React from "react";

const Gallery = () => {
  return (
    <div>
      <section class="py-24 relative">
        <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div class="flex items-center justify-center flex-col gap-5 mb-14">
            <span class="bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
              Our Works
            </span>
            <h2 class="font-manrope font-bold text-4xl text-gray-900 text-center">
              Structural Elegance
            </h2>
            <p class="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
              {" "}
              In the world of architecture or organization, structure provides
              the backbone for a purposeful and harmonious existence.
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
            <div
              class="sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6"
              style={{
                backgroundImage: "url(../images/esc6.jpeg)",
              }}
            >
              {/* <h6 class="font-medium text-xl leading-8 text-white mb-4">
                Architecture Designer
              </h6>
              <p class="text-base font-normal text-white/70">
                where knowledge meets innovation, and success is sculpted
                through a blend of skill and vision.
              </p> */}
            </div>
            <div class="block">
              <img
                src="../images/lift.jpg"
                alt="Building structure image"
                class="w-full rounded-lg object-cover"
              />
            </div>
            <div class="block">
              <img
                src="../images/esc2.jpg"
                alt="Building structure image"
                class="w-full rounded-lg object-cover"
              />
            </div>
            <div class="block">
              <img
                src="../images/lift1.jpg"
                alt="Building structure image"
                class="w-full rounded-lg object-cover"
              />
            </div>
            <div
              class=" bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6"
              style={{ backgroundImage: "url(../images/esc7.jpg)" }}
            >
              <h6 class="font-medium text-xl leading-8 text-white mb-4"></h6>
              <p class="text-base font-normal text-white/70"></p>
            </div>
            <div class="block">
              <img
                src="../images/esc5.jpeg"
                alt="Building structure image"
                class="w-full rounded-lg object-cover"
              />
            </div>
            <div
              class=" bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6"
              style={{ backgroundImage: "url(../images/esc4.jpeg)" }}
            >
              {/* <h6 class="font-medium text-xl leading-8 text-white mb-4">
                Business Building
              </h6>
              <p class="text-base font-normal text-white/70">
                Architecting business success through innovation, resilience,
                and strategic leadership.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
