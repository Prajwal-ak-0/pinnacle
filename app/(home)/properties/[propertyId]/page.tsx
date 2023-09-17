import React from 'react'
import PropertyPage from './PropertyPage';

interface IParams{
    propertyId?: string;
}

const page =async ({params}:{params:IParams}) => {

  return (
    <div className='pt-16 md:pt-32'>
      <PropertyPage propertyId={params.propertyId}/>
    </div>
  )
}

export default page