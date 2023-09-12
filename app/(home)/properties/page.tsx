import getCurrentUser from '@/app/actions/getCurrentUser';
import getProperties from '@/app/actions/getProperties';
import React from 'react'

const page =async () => {
    const currentUser=await getCurrentUser();

    const userId=currentUser?.id || "";
    const properties=await getProperties({userId});
  return (
    <div className='container items-center'>
        Displaying the listed properties
    </div>
  )
}

export default page