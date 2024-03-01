import React from 'react';
import CatGif from './CatGif';
import SignUpForm from './SignUp';

export default function Footer() {
    return (
        <footer className="">
            <div className="mx-auto py-6 px-4 sm:px-6 lg:px-20 font-mono bg-pink-white">
                <div className="p-4 flex flex-col text-left lg:flex-row lg:items-end">
                    <div className="lg:flex lg:items-start">
                        <div className="w-full lg:w-auto">
                            <CatGif />
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-8 w-full lg:mt-8">
                            <h2 className="text-3xl font-bold text-med-brown">
                                Get the latest news!
                            </h2>
                            <p className="mt-2 text-gray-700 mb-4 md:mb-2 lg:mb-2 sm:mb-2">
                                Sign up for our company newsletter to get first access to new products and deals!
                            </p>
                            <SignUpForm />
                        </div>
                    </div>
                </div>
      
                {/* Footer Links */}
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-med-brown">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:underline">About</a></li>
                            <li><a href="#" className="text-gray-700 hover:underline">Meet the Team</a></li>
                        </ul>
                    </div>
      
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-med-brown">Helpful Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:underline">Contact</a></li>
                            <li><a href="#" className="text-gray-700 hover:underline">FAQs</a></li>
                        </ul>
                    </div>
      
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-med-brown">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-700 hover:underline">Accessibility</a></li>
                            <li><a href="#" className="text-gray-700 hover:underline">Returns and Exchanges</a></li>
                            <li><a href="#" className="text-gray-700 hover:underline">Our Distributors</a></li>
                        </ul>
                    </div>
                </div>
      
                {/* Copyright and Social Links */}
                <div className="mt-12 flex flex-col items-center lg:flex-row lg:justify-between border-t border-gray-200 pt-8">
                    <p className="text-sm text-gray-700">&copy; 2024. Kimi Beauty LLC. All rights reserved.</p>
                    <div className="flex justify-center space-x-6 mt-4 lg:mt-0">
                        <a href="#" className="text-gray-700 hover:opacity-75">Facebook</a>
                        <a href="#" className="text-gray-700 hover:opacity-75">Instagram</a>
                        <a href="#" className="text-gray-700 hover:opacity-75">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
