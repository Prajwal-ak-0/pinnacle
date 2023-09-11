'use client';

interface HeroHeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
}

const HeroHeading: React.FC<HeroHeadingProps> = ({ 
  title, 
  subtitle,
  center
}) => {
  return ( 
    <div className={center ? "text-center" :""}>
      <div className="text-lg sm:text-3xl text-neutral-900 lg:text-6xl md:text-4xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-700 text-lg lg:text-5xl md:text-3xl -mt-2  md:mt-2">
        {subtitle}
      </div>
    </div>
   );
}
 
export default HeroHeading;