"use client";

import Image from "next/image";

const Feedback = () => {
  return (
    <div className="text-center max-w-6xl  mx-auto box-border  py-12">
      <h2 className="text-gray-700 text-3xl font-normal">
        How are
        <strong className="font-semibold pl-1">sellers rated</strong>
      </h2>
      <p className="subtitle mt-4 text-gray-500 text-lg text-center">
        We pick the best sellers for you who are best in class in various aspects
      </p>
      <div className="sm:container sm:mt-16 sm:text-center sm:box-border sm:flex sm:flex-row sm:justify-evenly hidden">
        <div>
        <div className=" sm:top-0 sm:left-0 sm:block sm:text-right sm:w-48 hidden md:w-[350px] ">
          <h3 className="text-xl md:text-2xl  font-normal">
            High Response Rate
          </h3>
          <div className="text-sm md:text-sm">
            We pick sellers for you who give you priority. Over 90% of our top sellers respond to inquiries within the first 24 hours!
          </div>
        </div>

        <div className="sm:top-0 sm:block sm:left-0  sm:text-right sm:w-48 sm:pt-[100px] hidden md:w-[350px] ">
          <h3 className="text-xl font-normal md:text-2xl ">
            Wide Coverage
          </h3>
          <div className="text-xs md:text-sm">
            Sellers with a wide variety of properties are more likely to satisfy your demands. More options mean better decision-making.
          </div>
        </div>
        </div>

        <div className="flex flex-col gap-2 p-2 md:w-32 md:h-72 w-32 h-36 mx-auto my-auto ">
          <Image
            alt="makan"
            src="/footer/man1.png"
            width={250}
            height={250}
            className="w-full sm:block hidden h-full object-cover"
          />
          <Image
            alt="makan1"
            src="/footer/man2.png"
            width={250}
            height={250}
            className=" top-0 left-0 w-full h-full object-cover animate-imgchange"
          />
        </div>
        <div>

        <div className="top-0 right-0 text-left  sm:w-48 md:w-[350px]">
          <h3 className="text-xl font-normal md:text-2xl ">
            Deals Closed
          </h3>
          <div className="text-xs md:text-sm">
            We choose the sellers who have previously closed deals with similar requirements as yours. They will understand your needs better.
          </div>
        </div>

        <div className="top-0 right-0 text-left mt-[100px] w-48 md:w-[350px]">
          <h3 className="text-xl font-normal md:text-2xl ">
            Rated & Reviewed
          </h3>
          <div className="text-xs md:text-sm">
            Testimonials from genuine buyers are the best way to judge a seller. Better ratings lead to a better experience.
          </div>
        </div>
        </div>
      </div>
      <div className="sm:hidden mt-8">
        <div className="flex flex-col gap-2 p-2 md:w-32 md:h-72 w-32 h-36 mx-auto my-auto ">
          <Image
            alt="makan1"
            src="/footer/man2.png"
            width={250}
            height={250}
            className=" top-0 left-0 w-full h-full object-cover animate-imgchange"
          />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-normal md:text-2xl ">
            High Response Rate
          </h3>
          <div className="text-xs px-16 py-2 md:text-sm ">
            We pick sellers for you who give you priority. Over 90% of our top sellers respond to inquiries within the first 24 hours!
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-xl font-normal md:text-2xl ">
            Rated & Reviewed
          </h3>
          <div className="text-xs px-16 py-2 md:text-sm">
            Testimonials from genuine buyers are the best way to judge a seller. Better ratings lead to a better experience.
          </div>
        </div>
    </div>
    </div>
  );
};

export default Feedback;
