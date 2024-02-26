import { Link } from "react-router-dom";
import Announcements from "../Components/Announcements";
import Header from "../Components/Header";

export default function PopUpPage () {
    return (
        <div>
            <Announcements />
            <Header />
            <h1>Pop up</h1>
            <Link to="/">
                <button className="bg-blue-300">Go Home</button>
            </Link>
        </div>
    );
}