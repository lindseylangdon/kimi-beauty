import React from 'react'
import { Link } from 'react-router-dom'

export default function Title() {
  return (
    <div className="flex items-center justify-start">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <Link to="/">
                <h1 className="text-5xl lg:text-6xl mb-1 md:text-5xl pt-8 mb-1 sm:text-5xl font-bubble outlined-text text-bright-orange">
                    kimi beauty
                </h1>
            </Link>
        </div>
    </div>
  )
}
