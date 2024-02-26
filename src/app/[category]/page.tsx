import Posts from '@/components/posts'
import React from 'react'

const page = ({
  params,
}: {
  params: {
    category: string;
  };
}) => {
  return (
    <div>
        <h1 >{decodeURIComponent(params.category)}</h1>
        <div className='flex flex-row mo:flex-col flex-wrap justify-center items-center w-[68vw] mx-auto mo:w-[75vw]'>
            <Posts />
        </div>
    </div>
  )
}

export default page