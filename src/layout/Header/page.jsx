"use client";
import React from "react";
import Style from "./Style.module.scss";
import Image from "next/image";
import location from "@/assets/img header/mdi_location.svg";
import { useParams } from "next/navigation";
import Link from "next/link";
import LocationModal from "@/components/LocationCity/LocationModal";
const page = () => {
  return (
    <div className="w-[100vw] fixed h-auto bg-white z-50">
      <div className="max-w-[85rem] mx-auto flex flex-col border-b-2 mt-4 pb-4 ">
        <div className="flex flex-row  item-center justify-between ">
          <div className="cursor-pointer flex flex-row items-center mr-4">
            <Link href={"/"}>
              <h3>لوگو</h3>
            </Link>
            <LocationModal />
          </div>
          <div className="flex flex-row items-center ml-4">
            <div>
              <span className="text-[14px] ml-[16px] text-[#3e7bfa] cursor-pointer hover:">
                حساب کاربری
              </span>
            </div>
            <Link href="./Advertising">
              <div
                className={`cursor-pointer  bg-[#3e7bfa]  rounded-full px-[20px] py-[10px] ml-1`}
              >
                <span className="text-white text-[16px] ">
                  + ثبت آگهی رایگان
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="de:hidden mo:block">
          <span className={`${Style.searchInput} mt-4 mx-1 `}>
            {/* <input class="input" type="text" name="" id="" placeholder="جستجو کنید"/> */}
            دحپ
            <input
              className={`cursor-pointer border-transparent focus:border-transparent focus:ring-0 ${Style.input}`}
              type="text"
              name=""
              id=""
              placeholder="جستجو کنید"
            />
            <span className={`flex flex-row ${Style.text} mr-4`}>
              همه ی ایران <Image src={location} alt="location" width={15} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
