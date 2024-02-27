"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // Import useRouter
import { Switch } from '@headlessui/react';
import MyModal from './MyModal';
const FormFilter = ({ category, name, customizeFilter }: { category: string, name: string, customizeFilter: any }) => {
  const router = useRouter(); // Using useRouter from Next.js

  // Getting URL parameters
  const searchParams = new URLSearchParams(router.asPath?.split('?')[1]);
  const minCheckboxParam = searchParams.get(`${category}-min`);
  const maxCheckboxParam = searchParams.get(`${category}-max`);
  const imgParam = searchParams.get('hasImage');

  // Setting initial states
  const [selectedValueMin, setSelectedValueMin] = useState<string>(minCheckboxParam || 'min');
  const [selectedValueMax, setSelectedValueMax] = useState<string>(maxCheckboxParam || 'max');
  const [isChecked, setIsChecked] = useState(imgParam === "true" ? true : false);
  //show modal 
  const [show,setShow] = useState(false)
  // Handle select change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, isMin: boolean) => {
    if (isMin) {
      setSelectedValueMin(e.target.value);
    } else {
      setSelectedValueMax(e.target.value);
    }
  };

  // Handle switch toggle
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    // Update URL parameters when selectedValueMin, selectedValueMax, or isChecked changes
    const params = new URLSearchParams();
    params.set(`${category}-min`, selectedValueMin);
    params.set(`${category}-max`, selectedValueMax);
    params.set('hasImage', isChecked ? 'true' : 'false'); // Use 'true' or 'false' for consistency
    router.push(`/${category}/${name}/?${params.toString()}`);
  }, [selectedValueMin, selectedValueMax, isChecked]);

  return (
    <div className="py-16 flex flex-col w-full">
      {category}
      <MyModal Show={show}/>
      <div className='flex flex-row justify-between items-start w-full'>
        <div className='flex flex-col  space-y-2'>
          <label className='space-x-2 w-full flex flex-row items-center'>
            <span className='ml-1'>از</span>
            <select
              className="select select-bordered select-lg w-[20vw] max-w-xs"
              value={selectedValueMin}
              onChange={(e) => handleSelectChange(e, true)}
            >
              <option disabled value="min">...</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
            </select>
          </label>

          <label className='space-x-1 w-full flex flex-row items-center'>
            <span className='ml-1'>تا </span>
            <select
              className="select select-bordered select-lg w-full max-w-xs"
              value={selectedValueMax}
              onChange={(e) => handleSelectChange(e, false)}
            >
              <option disabled value="max">...</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
            </select>
          </label>
        </div>
        <div className='' >
             <label className="input input-bordered flex items-center gap-2" >
               {/* <input type="text" className="" placeholder="محل" /> */}
              <button onClick={() => setShow(prevState => !prevState)}> <span className=' w-[15vw] text-right'>محل</span>
              <div > <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z"/></g></svg>
              </div>
              </button>
            </label>
        </div>
        <div>
        <label htmlFor="switch" className='flex flex-row items-center'>
          <span>عکس / بدون عکس</span>
          <Switch
            id="switch"
            checked={isChecked}
            onChange={handleToggle}
            className={`${isChecked ? 'bg-teal-900' : 'bg-teal-700'}
              relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${isChecked ? '-translate-x-9' : 'translate-x-0'}
                pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </label>
        </div>
      
      </div>
    </div>
  );
};

export default FormFilter;

  // const max = customizeFilter.map((item:any)=> {return item.{max-metra}})
  // console.log("customizeFilter 458",customizeFilter);