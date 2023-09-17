"use client";

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
import {Listing} from "@prisma/client";
import { SafeListing } from '@/app/types';
interface InfoProps {
    properties:any;
}

const Info:React.FC<InfoProps> = ({
    properties,
}) => {

    console.log(properties)
    
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
            
        </div>  
        </>
  )
}

export default Info