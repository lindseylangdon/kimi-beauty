import { Link } from "react-router-dom";

export default function ShopAll () {
    return (
        <>
            <h1>Shop All</h1>
            <Link to="/">
                <button className="bg-blue-300">Go Home</button>
            </Link>
        </>
    );
}