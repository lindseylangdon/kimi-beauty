import React from 'react';
import { MenuBarData } from './MenuBarData';
import { Link } from 'react-router-dom';

export default function MenuBar() {
	return (
		<div className="font-mono text-gray-700 text-base text-center mt-2 sm:mt-4 md:mt-4 lg:mt-4 xl:mt-4">
		<ul className="flex justify-center space-x-8">
			{MenuBarData.map((item, index) => (
			<li key={index} className="list-none">
				<Link to={item.path} className="hover:text-gray-500 hover:underline cursor-pointer">
				{item.title}
				</Link>
			</li>
			))}
		</ul>
		<div className="mt-2 sm:mt-4 md:mt-4 lg:mt-4 w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto">
			<hr />
		</div>
		</div>
	);
  }
  
