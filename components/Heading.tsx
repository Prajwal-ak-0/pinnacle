'use client';

interface HeadingProps {
  title?: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
}) => {
  return ( 
    <div className="text-center">
      <div className="text-xl text-neutral-900 md:text-6xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-700 text-xl md:text-5xl md:mt-2">
        {subtitle}
      </div>
    </div>
   );
}
 
export default Heading;