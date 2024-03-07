import React from "react";
import NowTrending from "./NowTrending";
import ShopByConcern from "./ShopByConcern";

export default function Body() {
    return (
        <section>
			<div className="mx-auto font-mono text-gray-700 padding-x padding-y">
				<NowTrending />
                <ShopByConcern />
			</div>
        </section>
    );
}