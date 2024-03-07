import React from 'react'
import { Link } from 'react-router-dom'

export default function Title( title: { title: string } ) {
  return (
    <div className="flex items-center justify-start">
        <Link to="/">
            <h1 className="text-4xl pt-4 font-bubble outlined-text text-bright-orange">
                {title.title}
            </h1>
        </Link>
    </div>
  )
}
