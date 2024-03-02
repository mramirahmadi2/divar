import React from 'react'

const Create = () => {
  return (
    <div>
        <h2>آگهی خود را ثبت کنید</h2>
        <form action="" className='space-y-4'>
            <div>
              <div>
                <input type="text" placeholder="نام کالا" className="input input-bordered w-full max-w-xs" />
              </div>
             <div>
               <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>دسته کالا را انتخاب کنید</option>
                <option>Han Solo</option>
                <option>Greedo</option>
               </select>
              </div>
            </div>
        </form>
    </div>
  )
}

export default Create