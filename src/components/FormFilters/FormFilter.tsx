import getCategory from '@/app/(api)/getCategory';
import React from 'react'
import { Switch } from '@headlessui/react'
import CheckBox from '../CheckBox';

const FormFilter =  async({category}:{category:string}) => {
  try {
    const [Category] = await Promise.all([
        getCategory()
    ]);
        const find = Category.map((item:any)=> {if(item.title === category ) return item.customizeFilter.map((item:any)=>item.input)})
        console.log(find);
  return (
    <div className='m-4' dir='rtl'>
        {category}
          <form action="">
              {find.length>0 && 
                 <div className='flex flex-col space-y-4'>
                   <select className="select select-bordered w-full max-w-xs">
                     <option disabled selected>از ...</option>
                     <option>Han Solo</option>
                     <option>Greedo</option>
                   </select>
                   <select className="select select-bordered w-full max-w-xs">
                     <option disabled selected>تا ...</option>
                     <option>Han Solo</option>
                     <option>Greedo</option>
                   </select>
                   {/* <CheckBox/> */}
                 </div>

              }
           </form>

    </div>
  ) }catch (error) {
    console.error("Error:", error);
    // Handle errors
    return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
}
}


export default FormFilter

