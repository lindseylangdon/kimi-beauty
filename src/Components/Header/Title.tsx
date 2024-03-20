import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface TitleProps {
    children: ReactNode;
}

export default function Title( {children} : TitleProps ) {
    return (
        <Link to="/">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bubble outlined-text text-bright-orange ml-2 pt-2">
                {children}
            </h1>
        </Link>
  )
}
