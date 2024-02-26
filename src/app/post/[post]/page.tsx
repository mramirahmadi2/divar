import React from 'react'
import Image from 'next/image';
import img1 from "@/assets/img Home/432365855_1c18b834fc225efa3b4c001cbd364d01.jpg"
import img2 from "@/assets/img Home/433659843_9206d3fa8d5cd26fcc5876e6e9f65cdf.jpg"
import Share from "@/assets/share.svg";
import heart from "@/assets/heart.svg";
import getPost from '../api/getPost';
const page = async({ params,
}: {
  params: {
    post: string;
  };}) => {
    const url = `http://localhost:8000/posts/${params.post}`
    try {
        const [post] = await Promise.all([
            getPost({ url })
        ]);
  return (
    <div>
        <div className='mt-4'>
                <div className='flex flex-row w-[90%] mx-auto justify-between'>
                  <Image src={img1} alt={post.title} className='w-[30%]'/>
                  <Image src={img2} alt={post.title} className='w-[30%]'/>
                  <Image src={img1} alt={post.title} className='w-[30%]'/>
                </div>
                <div className='w-[100%] flex flex-row justify-between mt-10'>
                  <div>
                    <div className='flex flex-row w-full justify-between'>
                      <div>
                         <h2 className='mt-4'>
                           {post.title} {/* Display post title */}
                         </h2>
                         <h2>
                           {post.price}تومان
                         </h2>
                      </div>
                       <div className='flex flex-row'>
                        <Image src={Share} alt='Share' width={30}/>
                        <Image src={heart} alt='heart' width={20} height={10}/>
                       </div>
                    </div>
                  </div>
                  <div className='w-[35%] min-h-[20vh] border-2 border-gray-500'>
                    call
                  </div>
                </div>
            </div>
    </div>
  )  } catch (error) {
    console.error("Error:", error);
    // Handle errors
    return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
}
}

export default page