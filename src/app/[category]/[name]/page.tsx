import React from 'react'
import FormFilter from '@/components/FormFilters/FormFilter';
import Posts from '@/components/posts';


const page = ({
    params,
  }: {
    params: {
      category: string;
      name:string;
    };
  }) => {
  return (
    <>
      <div>{decodeURIComponent(params.category)} / {decodeURIComponent(params.name)}</div>
           <FormFilter category={decodeURIComponent(params.category)}/>
      <div className='flex flex-row mo:flex-col flex-wrap justify-center items-center w-[68vw] mx-auto mo:w-[75vw]'>
            <Posts />
      </div>
    </>
  )
}

export default page