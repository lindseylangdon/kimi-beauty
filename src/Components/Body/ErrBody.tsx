import React from "react";

export default function ErrBody () {
    return(
        <div className="bg-white flex flex-col items-center justify-center">
            <br>
            </br>
            <div className="flex flex-row">
                <h1 className="font-mono font-bold text-xl text-med-brown text-center">
                    404: 
                </h1>
                <h1 className="font-mono text-xl text-med-brown text-center">
                    The page you are looking for doesn't exist!
                </h1>
            </div>
            <br>
            </br>
            <img src={`${process.env.PUBLIC_URL}/erm.jpg`} alt="hermph" />
            <br>
            </br>
        </div>
    );
}