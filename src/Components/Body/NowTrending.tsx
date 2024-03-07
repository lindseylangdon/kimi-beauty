import React from 'react'
import { Link } from 'react-router-dom'

export default function NowTrending() {
  return (
    <div>
        <header>
            <h2 className="text-3xl font-bold lg:mt-4">
                Now Trending
            </h2>

            <p className="text-lg mt-4 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                dicta incidunt est ipsam, officia dolor fugit natus?
            </p>
        </header>

        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="group block overflow-hidden relative">
                <Link to="/face">
                    <img
                        src="/toner.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                </Link>
        
                <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                    <h3 className="text-xl font-medium text-white">Cushions</h3>
                    <Link to="/face">
                        <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                            Shop Now
                        </span>
                    </Link>
                </div>
            </li>

            <li className="group block overflow-hidden relative">
                <Link to="/lips">
                        <img
                            src="/toner-pad.jpg"
                            alt=""
                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                        />
                </Link>
        
                <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                    <h3 className="text-xl font-medium text-white">Lips</h3>
                    <Link to="/lips">
                        <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                            Shop Now
                        </span>
                    </Link>
                </div>
            </li>

            <li className="group block overflow-hidden relative">
                <Link to="/face">
                    <img
                        src="/cleansing-oil.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                </Link>
        
                <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                    <h3 className="text-xl font-medium text-white">Blush</h3>
                    <Link to="/face">
                        <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                            Shop Now
                        </span>
                    </Link>
                </div>
            </li>

            <li className="group block overflow-hidden relative">
                <Link to="/eyes">
                    <img
                        src="/anua-green.jpg"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />
                </Link>
        
                <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 sm:p-2">
                    <h3 className="text-xl font-medium text-white">Eyeshadow</h3>
                    <Link to="/eyes">
                        <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 sm:px-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                            Shop Now
                        </span>
                    </Link>
                </div>
            </li>
        </ul>
    </div>
  )
}
