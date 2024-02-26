// "use client"
import Image from 'next/image'
import vehicle2 from "@/assets/img Home/vehicle2.svg"
import RealEstate from "@/assets/img Home/RealEstate.svg"
import briefcaseType from "@/assets/img Home/briefcaseType.svg"
import briefcasecat from "@/assets/img Home/briefcasecat.svg"
import homeStaff from "@/assets/img Home/homeStaff.svg"
import Sunshade from '@/assets/img Home/Sunshade.svg'
import iMacSys from "@/assets/img Home/iMacSys.svg"
import deliveryConveyor from "@/assets/img Home/delivery-conveyor.svg"
import img1 from "@/assets/img Home/432365855_1c18b834fc225efa3b4c001cbd364d01.jpg"
import img2 from "@/assets/img Home/433659843_9206d3fa8d5cd26fcc5876e6e9f65cdf.jpg"
import Link from 'next/link'
// import { useCallback, useEffect, useState } from 'react'
// import Dialog from "@/components/Dialog"
import { usePathname, useSearchParams , useRouter, useParams} from 'next/navigation'
import Posts from '@/components/posts'
import CheckBox from '@/components/CheckBox'
import Dialog  from '@/components/Dialog'

const Home = () => {


    const Menu = [
        { title: "وسایل نقلیه", icon: vehicle2 },
        { title: "املاک", icon: RealEstate },
        { title: "استخدام", icon: briefcaseType },
        { title: "خدمات کسب و کار", icon: briefcasecat },
        { title: "لوازم خانگی", icon: homeStaff },
        { title: "ورزش فرهنگ فراغت", icon: Sunshade },
        { title: "لوازم الکترونیکی", icon: iMacSys },
        { title: "صنعتی اداری و تجاری", icon: deliveryConveyor }
    ];

    return (
        <>
            <div className=" de:mt-28 mo:mt-40">
            {/* <ul className='flex flex-row mo:flex-col   flex-wrap justify-center items-center'>
                    {Menu.map((item, index) => (
                        <li key={index} 
                        className='text-[14px] text-[#555770] px-[8px] mx-1 items-center py-2 bg-[#f2f2f5] rounded-full  mo:w-4/5 mo:text-center  cursor-pointer flex flex-row mo:items-center  mo:justify-center mt-3 '>
                            <Image src={item.icon} width={24} height={24} alt={item.title} />
                            <div className='mr-2 '>{item.title}</div>
                        </li>
                    ))}

                </ul> */}
               <Dialog  />
            <div>
               <CheckBox/>
            </div>
            <div className='mt-5'>
                    <h2 className='text-[20px] mb-4 font-medium pr-4'>آگهی های جدید در همه ایران</h2>
                    <div className='flex flex-row mo:flex-col flex-wrap justify-center items-center w-[68vw] mx-auto mo:w-[75vw]'>
                     <Posts />
                    </div>
                    {/* {posts && posts.length > displayedPosts && (
                        <div className='w-52 mx-auto mt-4 mb-20'>
                            <button onClick={loadMorePosts} className='text-[16px] w-52 text-[#3e7bfa] border-[#3e7bfa] border-[1px] rounded-full py-[8px] text-center hover:bg-[#3e7bfa] hover:text-white'>موارد بیشتر</button>
                        </div>
                    )} */}
                </div>
            </div>
        </>
    )
}
export default Home