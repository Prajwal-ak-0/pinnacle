import getCurrentUser from '@/app/actions/getCurrentUser';
import etProperties from '@/app/actions/getProperties';
import GetProperties from '@/app/(home)/properties/components/GetProperties';
import React from 'react'
import axios from 'axios';

const page =async () => {
    // const currentUser=await getCurrentUser();
    // const userId=currentUser?.id || "";

    // const properties=await getProperties({userId})

  return (

    <div className='container items-center pt-16 md:pt-32'>
        Displaying the listed properties
        <div>
          <GetProperties/>
        </div>
    </div>
  )
}

export default page