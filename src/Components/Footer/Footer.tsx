import React from 'react';
import { Link } from 'react-router-dom';
import CatGif from './CatGif';
import SignUpForm from './SignUp';

export default function Footer() {
  return (
	<footer className="font-mono bg-pink-white text-gray-700">
		<div className="mx-auto px-4 sm:px-6">
			<div className="flex flex-col lg:items-center lg:justify-between">
				<div className="lg:flex">
					<CatGif />
					<div className="mt-4">
						<h2 className="text-2xl font-bold mt-4">
							Get the latest news!
						</h2>
						<p className="mt-2 mb-4">
							Sign up for our company newsletter to get first access to new products and deals!
						</p>
						<SignUpForm />
					</div>
				</div>
			</div>

			{/* Footer Links */}
			<div className="grid grid-cols-2 mt-6 gap-8 sm:grid-cols-2 sm:place-items-left md:grid-cols-3 md:place-items-left lg:grid-cols-3 lg:place-items-center">
				<div className="space-y-4">
				<h3 className="text-lg font-bold">Company</h3>
				<ul className="space-y-2">
					<li><Link to="/about-us" className="text-gray-700 hover:underline hover:text-gray-500">About</Link></li>
					<li><Link to="/meet-the-team" className="text-gray-700 hover:underline hover:text-gray-500">Meet the Team</Link></li>
				</ul>
				</div>

				<div className="space-y-4">
				<h3 className="text-lg font-bold">Helpful Links</h3>
				<ul className="space-y-2">
					<li><Link to="/contact" className="text-gray-700 hover:underline hover:text-gray-500">Contact</Link></li>
					<li><Link to="/faqs" className="text-gray-700 hover:underline hover:text-gray-500">FAQs</Link></li>
				</ul>
				</div>

				<div className="space-y-4">
				<h3 className="text-lg font-bold">Legal</h3>
				<ul className="space-y-2">
					<li><Link to="/accessibility" className="text-gray-700 hover:underline hover:text-gray-500">Accessibility</Link></li>
					<li><Link to="/returns-exchanges" className="text-gray-700 hover:underline hover:text-gray-500">Returns and Exchanges</Link></li>
					<li><Link to="/our-distributors" className="text-gray-700 hover:underline hover:text-gray-500">Our Distributors</Link></li>
				</ul>
				</div>
			</div>

			{/* Copyright and Social Links */}
			<div className="mt-12 border-t border-gray-200 pt-8 lg:flex lg:justify-between">
				<p className="text-sm text-center lg:text-left text-gray-700">
				&copy; 2024 Kimi Beauty LLC. All rights reserved.
				</p>
				<div className="flex justify-center space-x-6 mt-4 lg:mt-0">
				<a href="#" className="text-gray-700 hover:opacity-75">Facebook</a>
				<a href="#" className="text-gray-700 hover:opacity-75">Instagram</a>
				</div>
			</div>
		</div>
	</footer>
  );
}
