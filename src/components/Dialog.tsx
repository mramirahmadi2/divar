"use client"
import { useEffect, useRef, useState, Fragment } from 'react';
import homeStaff from "@/assets/img Home/homeStaff.svg";
import Image from 'next/image';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link';

export default function Example() {
  const [state, setState] = useState(null);
  const [menu, setMenu] = useState([]);
  const modalRef = useRef(null);
 
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    axios.get('http://localhost:8000/category')
      .then(response => {
        setMenu(response.data); // Set menu data in state
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, []);
console.log(menu);

  return (
    <>
      <ul className='flex flex-row mo:flex-col flex-wrap justify-center items-center'>
        {menu?.map((item:any, index) => (
          <li key={item.id} 
            onClick={() => {
              // modalRef.current.showModal();
              setState(item);
              setIsOpen(true)
            }}
            className='text-[14px] text-[#555770] px-[8px] mx-1 items-center py-2 bg-[#f2f2f5] rounded-full mo:w-4/5 mo:text-center cursor-pointer flex flex-row mo:items-center mo:justify-center mt-3'>
            <Image src={homeStaff} width={24} height={24} alt={item.title} />
            <div className='mr-2'>{item.title}</div>
          </li>
        ))}
      </ul>
      <Transition appear show={isOpen} as={Fragment} >
        <Dialog as="div" className="relative z-10" onClose={closeModal} >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto " >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-right text-gray-900"
                  >
                    {state?.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-right cursor-pointer text-gray-500">
                     <ul>
                      {
                        state?.filters?.map((item:any)=>(
                            <li key={item.id}>
                             <Link href={`/${state.title}/${item.title}`}>{item.title}</Link>  
                            </li>
                        ))
                      }
                     </ul>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      بستن 
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
