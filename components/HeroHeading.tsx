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
      <div className="text-2xl sm:text-3xl text-neutral-900 md:text-6xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-700 text-xl md:text-5xl md:mt-2">
        {subtitle}
      </div>
    </div>
   );
}
 
export default HeroHeading;