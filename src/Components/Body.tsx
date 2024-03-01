import React from "react";
import { Link } from "react-router-dom";

export default function Body() {
    return (
        <section className="bg-ivory">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <header className="text-left">
                    <h2 className="text-xl lg:text-2xl font-bold font-mono text-med-brown">New In</h2>
                    <p className="text-med-brown font-mono text-base lg:text-lg sm:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus?
                    </p>
                </header>

                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                <li>
                    <div className="group relative block">
                    <Link to="/lips">
                        <img
                        src="/swatches.jpg"
                        alt="Swatches"
                        className="aspect-square w-3/4 mx-auto lg:w-full md:w-full sm:w-full object-cover transition duration-500 group-hover:opacity-90 hover:scale-110 cursor-pointer"
                        />
                    </Link>
                        <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                            <h3 className="text-xl font-medium text-white">
                                Lip Tints
                            </h3>
                            <Link to="/lips" className="block">
                            <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 sm:py-2 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                Shop Now
                            </span>
                            </Link>
                        </div>
                    </div>
                </li>

                    <li>
                        <div className="group relative block">
                            <Link to="/skincare">
                                <img
                                    src="/anua.jpg"
                                    alt="Anua"
                                    className="aspect-square w-3/4 mx-auto lg:w-full md:w-full sm:w-full object-cover transition duration-500 group-hover:opacity-90 hover:scale-110 cursor-pointer"
                                />
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                                <h3 className="text-xl font-medium text-white">Serums</h3>
                                <Link to="/skincare">
                                    <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                        Shop Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </li>

                    <li className="md:col-span-2 md:col-start-1 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                        <div className="group relative block">
                            <Link to="/skincare">
                                <img
                                    src="/roundlabs.webp"
                                    alt="RoundLabs"
                                    className="aspect-square w-3/4 mx-auto lg:w-full md:w-3/4 mx-auto sm:w-full object-cover transition duration-500 group-hover:opacity-90 hover:scale-110 cursor-pointer"
                                />
                            </Link>
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                                <h3 className="text-xl font-medium text-white">Toners</h3>
                                <Link to="/skincare">
                                    <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                        Shop Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}