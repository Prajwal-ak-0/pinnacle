"use client";

import React from 'react'

interface LinkButtonProps { 
    title?: string
    href?: string
}

const LinkButton:React.FC<LinkButtonProps> = ({
    title,
    href
}) => {
  return (
    <button
        className='border-white bg-indigo-950 border-2 px-4 py-2 rounded-md text-white hover:bg-white hover:text-black hover:border-black'
    >
        {title}
    </button>
  )
}

export default LinkButton