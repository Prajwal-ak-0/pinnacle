"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import github from "../public/icons/github.png";
import { projects } from "../app/index";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt"; // Import from react-parallax-tilt
import LinkButton from "./LinkButton";
import { useRouter } from "next/navigation";

interface Tag {
  name: string;
  color: string;
}

interface Project {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string | StaticImageData; // Accepts either a string or StaticImageData
  source_code_link: string;
}

const ProjectCard: React.FC<Project> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {

  const router=useRouter();

  return (
    <motion.div>
      
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.75}
          scale={1.02}
        >
          <div className="bg-indigo-300 p-4 rounded-2xl lg:w-[400px] w-[360px]"> 
          <div className="relative w-full h-[250px]">
            <Image src={image} alt={name} className="w-full h-full  rounded-2xl" />
            <div className="absolute inset-0 flex justify-end m-3 ">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>
        


          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-neutral-800 text-[14px]">{description}</p>
          </div>

          <div className="flex">
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className="ml-[256px] md:block hidden md:ml-[150px]  my-auto">
              <LinkButton
                title="View"
                index={index}
              />
            </div>
          </div>
          </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <>
      <div className="mt-5 sm:ml-4 ml-2">
        <h2 className="text-neutral-900 font-black md:text-[45px] sm:text-[27px] xs:text-[25px] text-[25px]">
          Explore Our Premier Properties
        </h2>
        <h2 className="text-neutral-600 md:text-[30px] sm:text-[17px] text-[15px]">
          Exceptional Homes, Exceptional Living
        </h2>
      </div>

      <div className="mt-10 md:mx-8 item-center ml-2 flex flex-wrap sm:justify-evenly md:gap-10 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
