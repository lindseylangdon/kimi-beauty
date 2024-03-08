import React from "react";
import { PopUpData } from "./PopUpData";

export default function PopUpBody() {
	return (
	<div>
		<span className="flex flex-col bg-white mx-auto px-4 py-8 sm:px-6 lg:px-8">
		{PopUpData.map((item) => (
			<div className="font-mono text-med-brown flex flex-col" key={item.title}>
				<div className="flex flex-row">
				{item.align === 'left' ? 
					<>
					<div className="flex flex-col">
						<span className="flex-shrink mx-4 mb-4 font-bold lg:text-xl">{item.title}</span>
						<p className="mx-4 mb-6">Date: {item.date} from {item.time}</p>
                        <img alt={item.title} src={`${process.env.PUBLIC_URL}/${item.image}`} className="w-1/3 ml-2"/>
					</div>
					<div className="flex-grow border-t border-pink-main mt-2"></div>
					</>
					: 
					<>
					<div className="flex-grow border-t border-pink-main mt-2"></div>
					<div className="flex flex-col">
						<span className="flex-shrink mx-4 mb-4 font-bold lg:text-xl">{item.title}</span>
						<p className="mx-4 mb-6">Date: {item.date} from {item.time}</p>
                        <img alt={item.title} src={`${process.env.PUBLIC_URL}/${item.image}`} className="w-1/3 mr-2"/>
					</div>
					</>
				}
				</div>
			<p className="mx-4 mb-2">{item.body}</p>
			</div>
		))}
		</span>
	</div>
  );
}