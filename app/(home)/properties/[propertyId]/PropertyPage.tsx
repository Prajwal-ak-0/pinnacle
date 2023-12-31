"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import Button from "@/components/Button";
import toast from "react-hot-toast";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { properties } from "@/public/content/BestSeller";
interface IParams {
  propertyId?: string;
}

interface Property {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  place: string;
  area: string;
  minPrice: string;
  maxPrice: string;
  category: string;
  userId: string;
}

const PropertyPage = ({ params }: { params: IParams }) => {
  const [property, setProperty] = useState<Property[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (params.propertyId) {
          const result = await axios.get(`/api/properties/${params.propertyId}`);
          console.log(result.data);
          setProperty(result.data);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      }
    };
    fetchData();
  }, [params.propertyId]);

  const booked = () => toast.success("Booked Successfully");

  if (!property) {
    // Property data is still being fetched
    return <div>Loading...</div>;
  }
  return (
    <>
      <div
        className="
                overflow-hidden
                rounded-xl
                m-2
                flex
                md:flex-row
                flex-col
            "
      >
        <Image
          alt="Image"
          src={property[0].imageSrc}
          width={850}
          height={500}
          className="object-cover rounded-xl"
        />
        <div className="mx-auto flex-1 md:ml-4 md:mr-16 md:mt-0 mt-4 w-full">
          <Card>
            <CardHeader>
              <CardTitle>{property[0].title}</CardTitle>
              <CardDescription>
                <div className="flex flex-row">
                  <MdLocationOn />
                  <p>{property[0].place}</p>
                </div>
              </CardDescription>
            </CardHeader>

            <Separator />

            <CardContent>
              <div className="mt-2">
                <Table>
                  <TableCaption>
                    Some Details about Prestige Elm Park
                  </TableCaption>

                  <TableBody>
                    <TableRow>
                      <TableCell className="text-md font-semibold">
                        Price
                      </TableCell>
                      <TableCell>{property[0].minPrice}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-md font-semibold">
                        Area
                      </TableCell>
                      <TableCell>{property[0].area}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-md font-semibold">
                        Configuration
                      </TableCell>
                      <TableCell> 3BHK - 4BHK</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="text-md font-semibold">
                        Possession
                      </TableCell>
                      <TableCell>December 2023</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Button label="Book Now" onClick={booked} />
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="ml-4 mt-8">
        <Heading title="About our Property" />
      </div>

      <div className="mx-auto flex-1 md:ml-4 md:mr-16 md:mt-0 mt-4">
        {" "}
        <Card>
          <CardContent>
            <p className="text-sm md:text-md p-4 tracking-wide leading-6 pt-8 text-justify">
              {property[0].description}
            </p>
            <div className="ml-4 mt-6 flex flex-row ">
              <Badge variant="destructive" className="mr-4">
                # villa
              </Badge>
              <Badge variant="destructive" className="mr-4">
                # luxurious
              </Badge>
              <Badge variant="destructive" className="mr-4">
                # 3BHK
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PropertyPage;
