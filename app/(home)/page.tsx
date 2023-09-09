"use client";

import {Button} from "@/components/ui/button";
import HeroHeading from "@/components/HeroHeading";
import Image from "next/image";
import Card from "@/components/Card";
import SellModal from "@/components/modals/SellModal";
import useSellModal from "../hooks/useSellModal";

const Hero = () => {
  const handleScroll = () => {}
  const sellModal=useSellModal();

  return (
    <>
    <div className="z-2">
      <Image
        src={"/image/hero.jpeg"}
        alt="Hero Image"
        width={1920}
        height={50}
      />
    </div>
    <div className="absolute top-0 left-0 w-full h-full flex flex-col md:mt-[150px] mt-[65px] items-center z-3">
      <HeroHeading
        center
        title="Welcome to Pinnacle Park Estates"
        subtitle="Your Dream Home Awaits!"
      />
      <div className="flex flex-row item-center justify-evenly ">
        <Button className="mx-4">
            Buy
        </Button>
        <Button onClick={sellModal.onOpen}>
            Sell
        </Button>
      </div>
    </div>
    <div>
      <SellModal/>
    </div>
    <hr/>
    <div className="container">
       <Card/>
    </div>
    </>
  );
};

export default Hero;
