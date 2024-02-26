import { Link } from "react-router-dom";

export default function PopUpPage () {
    return (
        <>
            <h1>Pop up</h1>
            <Link to="/">
                <button className="bg-blue-300">Go Home</button>
            </Link>
        </>
    );
}