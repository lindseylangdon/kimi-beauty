import React from "react";
import { PopUpData } from "./PopUpData";
import PageTitle from "../PageTitle";

export default function PopUpBody() {
	return (
	<div>
        <PageTitle>
            Upcoming Locations
        </PageTitle>
		<span className="">
		{PopUpData.map((item) => (
			<div className="flex flex-col" key={item.title}>
				<div className="flex flex-row">
				{item.align === 'left' ? 
					<>
					<div>
						<span className="flex-shrink mx-4 mb-4 font-bold lg:text-xl">{item.title}</span>
                        <p className="p-4 text-gray-500">{item.body}</p>
					</div>
					<div className="flex-grow border-t border-pink-main mt-2"></div>
					</>
					: 
					<>
					<div className="flex-grow border-t border-pink-main mt-2"></div>
					<div>
						<span className="flex-shrink mx-4 mb-4 font-bold lg:text-xl">{item.title}</span>
                        <p className="p-4 text-gray-500">{item.body}</p>
					</div>
					</>
				}
				</div>
			</div>
		))}
		</span>
	</div>
  );
}