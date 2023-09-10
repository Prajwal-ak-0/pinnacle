"use client";

import React from "react";
import { testimonials } from "../app/index";
import Image from "next/image";

interface Testimonial {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

const FeedbackCard: React.FC<Testimonial> = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <div
    className="bg-blue-950 flex md:flex-row md:justify-evenly p-10 rounded-3xl md:w-full w-[90%] md:mx-auto md:mt-0 mt-4 ml-4 "
  >
    <p className="text-black font-black text-[48px]">{` " `}</p>
    <div className="mt-1">
      <p className="text-black tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-black font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        <Image src={image} width={40} height={40} alt={`feedback-by-${name}`} className="w-10 h-10 rounded-full object-cover" />
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="mt-12  rounded-[20px]">
      <div className={`sm:px-16 bg-indigo-300 px-6 sm:py-16 py-10 bg-tertiary rounded-2xl min-h-[300px]`}>
        <div >
          <p className="sm:text-[18px] text-[14px] text-neutral-700 uppercase tracking-wider">What others say</p>
          <h2 className="text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Testimonials</h2>
        </div>
      </div>
      <div className={`flex flex-col -mt-20 md:flex-row gap-7 `}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
