"use client";

import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {}

  return (
    <div className="z-10 mt-0 pt-0">
      <Image
        src={"/image/hero.jpeg"}
        alt="Hero Image"
        width={1920}
        height={50}
      />
    </div>
  );
};

export default Hero;
