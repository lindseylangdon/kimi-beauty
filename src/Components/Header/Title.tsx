import React from 'react'
import { Link } from 'react-router-dom'

export default function Title( title: { title: string } ) {
    return (
        <Link to="/">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bubble outlined-text text-bright-orange ml-2 pt-2">
                {title.title}
            </h1>
        </Link>
  )
}
