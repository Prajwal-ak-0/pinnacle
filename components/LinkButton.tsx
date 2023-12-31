"use client";

import { useRouter } from 'next/navigation';
import React from 'react'

interface LinkButtonProps { 
    title?: string
    href?: string
    index?: number
}

const LinkButton:React.FC<LinkButtonProps> = ({
    title,
    href,
    index=0
}) => {
  const router=useRouter();
  return (
    <button
        className='border-white bg-indigo-950 border-2 px-4 py-2 rounded-md text-white hover:bg-white hover:text-black hover:border-black'
        onClick={() => router.push(`/bestseller/prop${index+1}`)}
    >
        {title}
    </button>
  )
}

export default LinkButton