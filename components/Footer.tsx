import Image from "next/image";
import { copyrightSign } from "../public/icons";
import { footerLogo } from "../public/image";
import { footerLinks, socialMedia } from "../app/index";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <Image
              src="images/logo.svg"
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat sm:max-w-sm'>
          Pinnacle Name Estates is your trusted partner in finding the perfect property for your dreams. With a commitment to excellence and a passion for real estate, we strive to provide you with the finest listings and services in the industry.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-12 h-12 rounded-full'
                key={icon.alt}
              >
                <Image src={icon.src} alt={icon.alt} width={24} height={24} className="cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 '>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal'
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

      <div className='flex justify-between mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <Image
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
        </div>
        <div className="flex flex-row items-center justify-evenly ">
          <p className="text-center px-4">Copyright. All rights reserved.</p>
          <p className='font-montserrat px-4 cursor-pointer'>Terms & Conditions</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
