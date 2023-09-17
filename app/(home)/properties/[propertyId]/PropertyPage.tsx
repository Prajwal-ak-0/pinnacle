"use client";

import { SafeUser } from '@/app/types'
import toast from 'react-hot-toast'
import Image from 'next/image'
import {MdLocationOn} from 'react-icons/md'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableRow,
  } from "@/components/ui/table"  
import Button from '@/components/Button'
import Heading from '@/components/Heading';
import { Badge } from "@/components/ui/badge"

interface PropPageProps {
    title?: string
    description?: string
    imageSrc?: string
    minPrice?: number
    maxPrice?: number
    area?: number
    location?: string
    user?:string
    userImage?:string
}

const PropPage:React.FC<PropPageProps> = ({
    title="",
    description="",
    imageSrc="",
    minPrice=0,
    maxPrice=0,
    area=0,
    location="",
    user="",
    userImage=""
}) => {
    const booked = () => toast.success("Booked Successfully");
  return (
    <>
        <div
            className='
                overflow-hidden
                rounded-xl
                m-2
                flex
                md:flex-row
                flex-col
            '
        >
            <Image
                alt='Image'
                src={imageSrc}
                width={850}
                height={500}
                className='object-cover rounded-xl'
            />
            <div className='mx-auto flex-1 md:ml-4 md:mr-16 md:mt-0 mt-4 w-full'>
                <Card>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>
                            <div className='flex flex-row'>
                                <MdLocationOn />
                                <p>{location}</p>
                            </div>
                        </CardDescription>
                    </CardHeader>

                    <Separator />

                    <CardContent>
                        <div className='mt-2'>
                            <Table>
                                <TableCaption>Some Details about Prestige Elm Park</TableCaption>
                                
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="text-md font-semibold">Price</TableCell>
                                        <TableCell>Rs. {minPrice} - Rs {maxPrice}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-md font-semibold">Area</TableCell>
                                        <TableCell>{area}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-md font-semibold">Configuration</TableCell>
                                        <TableCell>3BHK & 4BHK</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className='text-md font-semibold'>Possession</TableCell>
                                        <TableCell>December 2023</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>

                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button label='Book Now' onClick={booked}/>
                    </CardFooter>
                </Card>
            </div>

            
                
        </div>

        <div className='ml-4 mt-8'>
            <Heading
                title='About Prestige Elm Park'
            />
        </div>

        <div className='mx-auto flex-1 md:ml-4 md:mr-16 md:mt-0 mt-4'>                <Card>
                <CardContent>
                    <p className='text-sm md:text-md p-4 tracking-wide leading-6 pt-8 text-justify'>
                    {description}
                    </p>
                    <div className='ml-4 mt-6 flex flex-row '>
                        <Badge variant="destructive"  className='mr-4'>
                            # villa
                        </Badge>
                        <Badge variant="destructive" className='mr-4'>
                            # luxurious
                        </Badge>
                        <Badge variant="destructive" className='mr-4' >
                            # 3BHK
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>  
    </>
  )
}

export default PropPage