import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopByConcern() {
  return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                        dicta incidunt est ipsam, officia dolor fugit natus?
                    </p>
                    </header>

                    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                        <li className="group relative block overflow-hidden">
                            <a href="#" className="group relative block">
                                <img
                                    src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </a>

                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6 group-hover:scale-105 transition duration-500">
                                <h3 className="text-xl font-medium text-white">Casual Trainers</h3>
                                <a href="#" className="block">
                                    <span className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                                        Shop Now
                                    </span>
                                </a>
                            </div>
                        </li>

                        <li className="group block overflow-hidden relative">
                            <a href="#" className="group relative block">
                                <img
                                    src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />
                            </a>
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                                <h3 className="text-xl font-medium text-white">Winter Jumpers</h3>
                                <a href="#" className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                                    Shop Now
                                </a>
                            </div>
                        </li>

                        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 group block overflow-hidden relative">
                            <a href="#" className="group relative block">
                                <img
                                    src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgefDB8fHx8&auto=format&fit=crop&w=2672&q=80"
                                    alt=""
                                    className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                                />
                            </a>
                            <div className="absolute bottom-0 left-0 right-0 bg-med-brown bg-opacity-50 p-6">
                                <h3 className="text-xl font-medium text-white">Skinny Jeans Blue</h3>
                                <a href="#" className="mt-1.5 inline-block bg-med-brown px-5 py-3 text-xs font-medium uppercase tracking-wide text-white hover:bg-pale-brown hover:scale-105 transition-all duration-500 cursor-pointer">
                                    Shop Now
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
