import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import HeartButton from './HeartButton';

// Define the type for a single property
interface Property {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  place: string;
  area: number;
  minPrice: number;
  maxPrice: number;
  category: string;
  user: {
    id: string;
    name: string;
    email: string;
    emailVerified: string | null;
    image: string;
  };
}

// Define the type for the properties array
interface PropertiesProps {
  properties: Property[];
}

const Properties: React.FC<PropertiesProps> = ({ properties }) => {
  const router = useRouter();
  return (
    <div className='
    pt-24
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:gris-cols-4
    xl:grid-cols-5
    2xl:grid-cols-6
    gap-8
    '>
      {properties.map((property) => (
        <div
        key={property.id}
        onClick={()=> router.push(`/properties/${property.id}`)}
        className="
            cols-span-1
            cursor-pointer
            group
        "
    >
        <div className="flex flex-col gap-2 ">
            <div
                className="
                    aspect-square
                    relative
                    overflow-hidden
                    rounded-xl
                "
            >
                <Image
                    fill
                    alt="Listing"
                    src={property.imageSrc}
                    className="
                        object-cover
                        group-hover:scale-110
                        transition
                    "   
                />
                <div className="absolute top-3 right-3">
                    <HeartButton
                        listingId={property.id}
                        currentUserId={property.user.id}
                    />
                </div>
            </div>

            <div className="fontsemibold text-lg">
                {property?.place} 
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="font-semibold">
                    $ {property?.minPrice}
                </div>
            </div>
        </div>
    </div>
      ))}
      </div>
  );
};

export default Properties;
