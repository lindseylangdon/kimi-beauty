import React from "react";
import { Link } from "react-router-dom";
import NowTrending from "./NowTrending";
import ShopByConcern from "./ShopByConcern";

export default function Body() {
    return (
        <section>
			<div className="mx-auto font-mono text-gray-700 px-4 py-8 sm:px-6 sm:py-12 lg:px-20">
				<NowTrending />
                <ShopByConcern />
			</div>
        </section>
    );
}