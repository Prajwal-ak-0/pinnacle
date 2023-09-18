import React from 'react'
import PropertyPage from './PropertyPage';

interface IParams{
    propertyId?: string;
}

const page =({params}:{params:IParams}) => {


  return (
    <div className='pt-16 md:pt-32'>
      <PropertyPage params={params}/>
    </div>
  )
}

export default page