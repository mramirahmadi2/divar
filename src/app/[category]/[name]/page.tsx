import React from 'react'
import FormFilter from '@/components/FormFilters/FormFilter';
import Posts from '@/components/posts';
import getCategory from '@/app/(api)/getCategory';


const page = async({
    params,
  }: {
    params: {
      category: string;
      name:string;
    };
  }) => {
    try {
      const [data] = await Promise.all([
          getCategory()
      ]);
      return (
    <>
      <div>{decodeURIComponent(params.category)} / {decodeURIComponent(params.name)}</div>
           <FormFilter category={decodeURIComponent(params.category)} name={decodeURIComponent(params.name)} customizeFilter={data.map((item: any) => {if(item.title === decodeURIComponent(params.category)) return item.customizeFilter.find((item:any)=> item.id)})}/>
      <div className='flex flex-row mo:flex-col flex-wrap justify-center items-center w-[68vw] mx-auto mo:w-[75vw]'>
            <Posts />
      </div>
    </>
      )
 } catch (error) {
  console.error("Error:", error);
  // Handle errors
  return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
}

  }
export default page