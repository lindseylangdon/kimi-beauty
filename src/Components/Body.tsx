import React from "react";

export default function Body() {
    return (
        <section className="bg-ivory">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-left">
                    <h2 className="text-xl font-bold font-mono text-med-brown sm:text-3xl">New In</h2>
                    <p className="text-med-brown text-lg font-mono">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus?
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src="/swatches.jpg"
                                alt="Swatches"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 md:w-3/4 md:mx-auto hover:scale-110 transition-all duration-500 cursor-pointer"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                                <h3 className="text-xl font-medium text-white">Lip Tints</h3>
                                <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#" className="group relative block">
                            <img
                                src="/anua.jpg"
                                alt="Anua"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 md:w-3/4 md:mx-auto hover:scale-110 transition-all duration-500 cursor-pointer"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                                <h3 className="text-xl font-medium text-white">Serums</h3>
                                <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>

                    {/* Adjusted li for toner image */}
                    <li className="md:col-span-2 md:col-start-1 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <a href="#" className="group relative block">
                            <img
                                src="/roundlabs.webp"
                                alt="RoundLabs"
                                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 md:w-3/4 md:mx-auto hover:scale-110 transition-all duration-500 cursor-pointer"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                                <h3 className="text-xl font-medium text-white">Toners</h3>
                                <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                    Shop Now
                                </span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}