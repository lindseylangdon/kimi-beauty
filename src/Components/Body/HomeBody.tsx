import React from "react";
import NowTrending from "./NowTrending";
import ShopByConcern from "./ShopByConcern";
import FeedBackBody from "./FeedbackBody";

export default function HomeBody() {
    return (
        <div className="mx-auto mb-10 font-mono text-gray-700 padding-x padding-y grid grid-cols-1 gap-12">
            <NowTrending />
            <ShopByConcern />
            <FeedBackBody />
        </div>
    );
}