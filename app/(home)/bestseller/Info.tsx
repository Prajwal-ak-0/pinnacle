"use client";

import { properties } from '@/public/content/BestSeller'
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
import toast from 'react-hot-toast'
import Heading from '@/components/Heading';
import { Badge } from "@/components/ui/badge"

interface InfoProps {
    index?: number
}

const Info:React.FC<InfoProps> = ({index=0}) => {
    const booked = () => toast.success('Booked Successfully')
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
                src={properties[index].image}
                width={850}
                height={500}
                className='object-cover rounded-xl'
            />
            <div className='mx-auto flex-1 md:ml-4 md:mr-16 md:mt-0 mt-4 w-full'>
                <Card>
                    <CardHeader>
                        <CardTitle>{properties[index].title}</CardTitle>
                        <CardDescription>
                            <div className='flex flex-row'>
                                <MdLocationOn />
                                <p>{properties[index].location}</p>
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
                                        <TableCell>{properties[index].price}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-md font-semibold">Area</TableCell>
                                        <TableCell>{properties[index].size}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="text-md font-semibold">Configuration</TableCell>
                                        <TableCell>{properties[index].Configurations}</TableCell>
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
                    {properties[index].info}
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

export default Info