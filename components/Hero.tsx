"use client";

import Image from 'next/image'
import React from 'react'
import HeroHeading from './HeroHeading'
import {Button} from './ui/button'
import useSellModal from '@/app/hooks/useSellModal'
import SellModal from './modals/SellModal'
import { SafeUser } from '@/app/types'
import toast from 'react-hot-toast'
import useLoginModal from '@/app/hooks/useLoginModal'
import { useRouter } from 'next/navigation';

interface HeroProps {
    currentUser?: SafeUser | null;
}

const Hero:React.FC<HeroProps> = ({
    currentUser
}) => {
    const sellModal = useSellModal()
    const loginModal=useLoginModal();

    const router=useRouter();

    const sell = () => {
        if(currentUser){
            sellModal.onOpen();
            return;
        }
        toast.error("You must be logged in to sell a house");
        loginModal.onOpen();
    }
    
  return (
    <>
        <div className="z-2">
      <Image
        src={"/image/hero.jpg"}
        alt="Hero Image"
        width={1920}
        height={50}
      />
    </div>
    <div className="absolute sm:top-0 -top-4 left-0 w-full h-full flex flex-col sm:mt-[75px]  lg:mt-[150px] md:mt-[100px] mt-[35px] sm:[mt-50px] items-center z-3">
      <HeroHeading
        center
        title="Welcome to Pinnacle Park Estates"
        subtitle="Your Dream Home Awaits!"
      />
      <div className="flex flex-row item-center justify-evenly ">
        <Button className="mx-4" onClick={() => router.push("properties")}>
            Buy
        </Button>
        <Button onClick={sell}>
            Sell
        </Button>
      </div>
    </div>
    <div>
      <SellModal/>
    </div>
    </>
  )
}

export default Hero