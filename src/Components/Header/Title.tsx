import React from 'react'

export default function Title() {
  return (
    <div className="flex items-center justify-start">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <h1 className="lg:text-7xl md:text-6xl md:pt-8 font-bubble outlined-text text-bright-orange mb-1">
                kimi beauty
            </h1>
            {/* <div className="flex justify-center items-center">
                <img src={`${process.env.PUBLIC_URL}/heart-banner.gif`} alt="heart-banner" className="mb-6 scale-110"/>
            </div> */}
            {/* <p className="text-l font-mono text-med-brown mb-6"> 
                Omaha's First Korean Skincare and Makeup Store
            </p> */}
        </div>
    </div>
  )
}