import React from "react";

const Gallery = () => {
    return (
        <div>
            <section class="py-24 relative md:block hidden">
                <div class="w-full max-w-7xl px-6 lg:px-8 mx-auto">

                    <h1 class="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
                    <p class="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>
                    <div class="flex items-center gap-2 h-[400px] w-full max-w-4xl mt-10 mx-auto">
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/l1.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/l5.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/d1.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/d2.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/d3.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/d4.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/d5.jpeg"
                                alt="image" />
                        </div>
                        <div class="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full">
                            <img class="h-full w-full object-cover object-center"
                                src="../images/d6.jpeg"
                                alt="image" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative md:hidden block px-5">
            <div className="py-3">
            <h1 class="text-3xl font-semibold text-center mx-auto">Our Latest Creations</h1>
            <p class="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent works - each piece crafted with intention, emotion, and style.</p>

            </div>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d1.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d2.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d3.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d4.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d5.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d6.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d7.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/d8.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/l1.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/l3.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/l4.jpeg" alt="" />
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" src="images/l5.jpeg" alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Gallery;
