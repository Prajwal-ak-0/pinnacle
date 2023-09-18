import Image from "next/image";
import { copyrightSign } from "../public/icons";
import { footerLinks, socialMedia } from "../app/index";

const Footer = () => {
  return (
    <footer className='max-container rounded-md bg-indigo-200 '>
      <div className='flex justify-between items-start md:gap-20 gap-10 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col md:items-start mx-auto items-center'>
          <a href='/'>
            <Image
              src='/logo2.png'
              alt='logo'
              width={150}
              height={46}
              className='m-1 rounded-full '
            />
          </a>
          <p className='mt-6 px-4 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex md:items-center mx-auto my-auto gap-5 md:mt-8 mt-4 '>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-evenly items-center w-12 h-12 bg-white rounded-full'
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20  flex-wrap md:mt-20 -mt-6 mx-4'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium sm:mb-6 mb-2 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='sm:mt-3 mt-2 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex items-center sm:mt-12 mt-8 pb-8 flex-col'>
        <div className='flex gap-2 font-montserrat cursor-pointer'>
          <Image
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0 font-semibold'
          />
          <p className="text-lg font-semibold">Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat text-neutral-700 font-medium cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
