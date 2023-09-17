import getCurrentUser from '@/app/actions/getCurrentUser';
import getProperties from '@/app/actions/getProperties';
import React from 'react'
import PropertyPage from './components/PropertyPage';
import { create } from 'domain';

const page =async () => {
    const currentUser=await getCurrentUser();
    const userId=currentUser?.id || "";

    const properties=await getProperties({userId});

    console.log(currentUser)
    console.log(properties)


  return (

    <div className='container items-center'>
        Displaying the listed properties
        <div>
          <PropertyPage properties={properties} />
        </div>
    </div>
  )
}

export default page