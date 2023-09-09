"use client";

import {Button} from "@/components/ui/button";
import Heading from "@/components/Heading";
import Image from "next/image";
import Card from "@/components/Card";

const Hero = () => {
  const handleScroll = () => {}

  return (
    <>
    <div className="z-5">
      <Image
        src={"/image/hero.jpeg"}
        alt="Hero Image"
        width={1920}
        height={50}
      />
    </div>
    <div className="absolute top-0 left-0 w-full h-full flex flex-col md:mt-[150px] mt-[65px] items-center z-10">
      <Heading
        center
        title="Welcome to Pinnacle Pirate Estates"
        subtitle="Your Dream Home Awaits!"
      />
      <div className="flex flex-row item-center justify-evenly ">
        <Button className="mx-4">
            Buy
        </Button>
        <Button className="">
            Sell
        </Button>
      </div>
    </div>
    <hr/>
    <div className="container">
       <Card/>
    </div>
    </>
  );
};

export default Hero;
