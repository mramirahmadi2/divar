import React from 'react'
import Image from 'next/image'
import MDy1 from "@/assets/Img Footer/1MDy1-uz.png"
import ueFIypm from "@/assets/Img Footer/2ueFIypm.png"
import sus8W3D from "@/assets/Img Footer/3sus8W3D.png"

const page = () => {
  return (
<div>
  <div className='bg-[#fafafc] w-[100vw]'>
    <div className='mo:hidden de:flex flex-row max-w-7xl mx-auto p-4 justify-between items-center'>
      <div className='flex flex-row basis-2/4 justify-between'>
        <div className='flex flex-col basis-2/4 items-start'>
          <h2 className='text-[18px]'>عنوان منو</h2>
          <ul className='flex flex-col items-start text-[16px] text-[#555770] mt-5'>
            <li>درباره ما</li>
            <li>نشانی ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div className='flex flex-col basis-2/4 items-start pr-4'>
          <h2 className='text-[18px]'>عنوان منو</h2>
          <ul className='flex flex-col items-start text-[16px] text-[#555770] mt-5'>
            <li>درباره ما</li>
            <li>نشانی ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div className='flex flex-col basis-2/4 items-start pr-4'>
          <h2 className='text-[18px]'>عنوان منو</h2>
          <ul className='flex flex-col items-start text-[16px] text-[#555770] mt-5'>
            <li>درباره ما</li>
            <li>نشانی ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row-reverse'>
        <Image src={MDy1} alt='e-nahad'/>
        <Image src={ueFIypm} alt='عضو اتحادیه کشوری'/>
        <Image src={sus8W3D} alt='سامان دهی'/>
      </div>
    </div>
    <div className='mo:flex flex-col items-center  de:hidden'>
      <div className='flex flex-row justify-between w-full mx-8 items-center'>
      <div className='flex flex-col  items-start mr-4'>
          <h2 className='text-[18px]'>عنوان منو</h2>
          <ul className='flex flex-col items-start text-[16px] text-[#555770] mt-5'>
            <li>درباره ما</li>
            <li>نشانی ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div className='flex flex-col items-start pr-4 ml-4'>
          <h2 className='text-[18px]'>عنوان منو</h2>
          <ul className='flex flex-col items-start text-[16px] text-[#555770] mt-5'>
            <li>درباره ما</li>
            <li>نشانی ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row w-full mx-8 items-center justify-between pt-4'>
        <div className='flex flex-col  items-start pr-4'>
          <h2 className='text-[18px]'>عنوان منو</h2>
          <ul className='flex flex-col items-start text-[16px] text-[#555770] mt-5'>
            <li>درباره ما</li>
            <li>نشانی ما</li>
            <li>ارتباط با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div className='flex flex-row-reverse'>
        <Image src={MDy1} alt='e-nahad'  />
        <Image src={ueFIypm} alt='عضو اتحادیه کشوری'/>
        <Image src={sus8W3D} alt='سامان دهی'/>
      </div>
      </div>
    </div>
  </div>
  <div className='bg-[#f2f2f5] w-[100vw] py-4 text-center text-[16px] text-[#555770]'>
    <span>کلیه حقوق محفوظ می باشد</span>
  </div>
</div>


  )
}

export default page