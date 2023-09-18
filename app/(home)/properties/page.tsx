import getCurrentUser from '@/app/actions/getCurrentUser';
import GetProperties from '@/app/(home)/properties/components/GetProperties';
import React from 'react'
import axios from 'axios';
import HeroHeading from '@/components/HeroHeading';

const page =async () => {

  return (

    <div className='container items-center pt-16 md:pt-32'>
        <h1 className='md:text-[40px] text-[38px] font-semibold text-neutral-950'>
          Properties for Sale
        </h1>
        <div className='z-0'>
          <GetProperties/>
        </div>
    </div>
  )
}

export default page