import React from 'react'
import { Link } from 'react-router-dom'

export default function Title( title: { title: string } ) {
  return (
    <div className="flex items-center justify-start">
        <Link to="/">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bubble outlined-text text-bright-orange ml-4">
                {title.title}
            </h1>
        </Link>
    </div>
  )
}
