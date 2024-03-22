import React from 'react'
import { Link } from 'react-router-dom';

export default function ShopByConcern() {
  return (
        <div className="mx-auto px-5% py-2% sm:px-5% sm:py-3% lg:px-3% max-w-screen-lg mb-10">
            <header className="text-center">
            <h2 className="text-2xl font-bold text-gray-700 mt-8">Skin Concerns?</h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
            </header>

            <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 md:grid-cols-2">
                <li className="group relative block overflow-hidden">
                    <Link to="/skincare">
                        <img
                            src="/anua-green.jpg"
                            alt=""
                            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                        />
                    </Link>

                    <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                        <h3 className="text-xl font-medium text-white">Oily Skin</h3>
                        <a href="#" className="block">
                            <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                                Shop Now
                            </span>
                        </a>
                    </div>
                </li>

                <li className="group block overflow-hidden relative">
                    <Link to="/skincare">
                        <img
                            src="/cleansing-oil.jpg"
                            alt=""
                            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                        />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                        <h3 className="text-xl font-medium text-white">Dry Skin</h3>
                        <a href="#" className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                            Shop Now
                        </a>
                    </div>
                </li>

                <li className="col-span-2 col-start-1 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 md:col-span-2 md:col-start-1 group block overflow-hidden relative">
                    <Link to="/skincare">
                        <img
                            src="/toner.jpg"
                            alt=""
                            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                        />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                        <h3 className="text-xl font-medium text-white">Sensitive Skin</h3>
                        <a href="#" className="sm:mt-1 md:mt-1.5 lg:mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                            Shop Now
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}
