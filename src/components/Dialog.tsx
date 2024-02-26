"use client"
import { useEffect, useRef, useState } from 'react';
import vehicle2 from "@/assets/img Home/vehicle2.svg";
import RealEstate from "@/assets/img Home/RealEstate.svg";
import briefcaseType from "@/assets/img Home/briefcaseType.svg";
import briefcasecat from "@/assets/img Home/briefcasecat.svg";
import homeStaff from "@/assets/img Home/homeStaff.svg";
import Sunshade from '@/assets/img Home/Sunshade.svg';
import iMacSys from "@/assets/img Home/iMacSys.svg";
import deliveryConveyor from "@/assets/img Home/delivery-conveyor.svg";
import Image from 'next/image';
import axios from 'axios';

export default function Example() {
  const [state, setState] = useState(null);
  const [menu, setMenu] = useState([]);
  const modalRef = useRef(null);
  const Menu = [
    { title: "وسایل نقلیه", icon: vehicle2, id:1 },
    { title: "املاک", icon: RealEstate, id:2 },
    { title: "استخدام", icon: briefcaseType, id:3 },
    { title: "خدمات کسب و کار", icon: briefcasecat, id:4 },
    { title: "لوازم خانگی", icon: homeStaff, id:5 },
    { title: "ورزش فرهنگ فراغت", icon: Sunshade, id:6 },
    { title: "لوازم الکترونیکی", icon: iMacSys, id:7 },
    { title: "صنعتی اداری و تجاری", icon: deliveryConveyor, id:8 }
  ];
  
  useEffect(() => {
    axios.get('http://localhost:8000/category')
      .then(response => {
        setMenu(response.data); // Set menu data in state
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, []);

  const item = menu.find(item => item.id === state);
  const filters = item ? item.filters : null;

  console.log("filters", item);
  
  return (
    <>
      <ul className='flex flex-row mo:flex-col flex-wrap justify-center items-center'>
        {Menu.map((item, index) => (
          <li key={item.id} 
            onClick={() => {
              modalRef.current.showModal();
              setState(item.id);
            }}
            className='text-[14px] text-[#555770] px-[8px] mx-1 items-center py-2 bg-[#f2f2f5] rounded-full mo:w-4/5 mo:text-center cursor-pointer flex flex-row mo:items-center mo:justify-center mt-3'>
            <Image src={item.icon} width={24} height={24} alt={item.title} />
            <div className='mr-2'>{item.title}</div>
          </li>
        ))}
      </ul>

      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {item ? item.title : ''}
          </h3>
          <p className="py-4">
            "ok"
          </p>
          <form method="dialog" className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
