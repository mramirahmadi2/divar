import React, { useState, useEffect, Fragment, use } from "react";
import Style from "./Style.module.scss";
import Image from "next/image";
import location from "@/assets/img header/mdi_location.svg";
import useFetchData from "@/hooks/useFetchData";
import usePostData from "@/hooks/usePostData";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
// import Dialog from "../MyDialog/Dialog"
import { Dialog, Transition } from "@headlessui/react";
const LocationModal = () => {
  const url = "http://192.168.1.113:8001";
  const searchParams = useSearchParams();
  const { data: cities } = useFetchData(`${url}/api/locations/iran`);
  const [searchQuery, setSearchQuery] = useState("");
  const [provinceId, setProvinceId] = useState(0); // State for province_id
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<any>([]);
  const [allCities, setAllCities] = useState<boolean>(true);
  const [check, setCheck] = useState<{ [key: number]: boolean }>({ 0: true });
  const { data: provinc } = useFetchData(
    `${url}/api/locations/province-city/${provinceId}`
  );

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    // Set all keys to true when the component mounts (user logs in for the first time)
    if (provinc && provinc.data) {
      const initialCheckState: { [key: number]: boolean } = {};
      provinc.data.forEach((itemCity: any) => {
        if (allCities === true) {
          initialCheckState[itemCity.id] = true;
        } else {
          initialCheckState[itemCity.id] = false;
        }
      });
      setCheck(initialCheckState);
    }
  }, [provinc, allCities]);
  useEffect(()=>{
    let allChecked = Object.values(check).every((value) => value);
    console.log("allChecked",allChecked);
    if(allChecked === false){
      setSelect(select.filter((item: string) => item !== searchQuery)); 
    }else{
      setSelect([...select, searchQuery]);
    }
  },[check])
  const pathname = usePathname();
  const { replace } = useRouter();

  const filteredCities = cities?.data?.filter((city: any) =>
    city.name.includes(searchQuery)
  );

  // Inside the LocationModal component

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
      setSearchQuery(term);
    } else {
      params.delete("query");
      params.delete("province_id"); // Remove province_id from the query if it exists
      setSearchQuery("");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 150);
  const handelCheck = (itemId: number) => {
    setCheck((prevCheck) => ({
      ...prevCheck,
      [itemId]: !prevCheck[itemId], // Toggle the state for the clicked item
    }));
    // setAllCities(prevState => !prevState);
  };

  const handleSetFilter = (name: any) => {
    if (!select.includes(name)) {
      setSelect([...select, name]);
    }
  };
  const handleCheckboxClick = (name: string) => {
    if (select.includes(name)) {
      setSelect(select.filter((item: string) => item !== name)); // Remove the name from select array
      setAllCities(false);
    } else {
      setSelect([...select, name]); // Add the name to select array
      // setSearchQuery(name); // Set the input value to the clicked name
      setAllCities(true);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <div className="mo:hidden ">
          <span className={`${Style.searchInput} mr-5 `}>
            <div className="">
              <input
                tabIndex={0}
                role="button"
                className={`dropdown cursor-pointer border-transparent focus:border-transparent focus:ring-0 ${Style.input}`}
                type="text"
                placeholder="جستجو کنید"
                value={searchQuery}
                onChange={(e) => {
                  handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get("query")?.toString()}
              />
            </div>

            <span
              onClick={openModal}
              className={`flex flex-row ${Style.text} mr-4`}
            >
              همه ی ایران <Image src={location} alt="location" width={15} />
            </span>
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {filteredCities &&
            filteredCities.map((item: any) => (
              <li
                key={item.id}
                onClick={() => {
                  handleSearch(item.name); // Pass province_id as the second argument
                  setProvinceId(item.id);
                  console.log(item.id);
                }}
              >
                {item.name}
              </li>
            ))}
        </ul>
      </div>
      {/* it is show modall location */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full mt-auto items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-right align-middle shadow-xl transition-all">
                  <div dir="rtl">
                    <div className="my-2 py-2">
                      {select.length > 0 && (
                        <span
                          onClick={() => {
                            setSelect([]);
                          }}
                        >
                          del
                        </span>
                      )}

                      {select.map((item: string, index: number) => (
                        <span
                          key={index}
                          className="bg-red-400 p-1 mx-2 my-2 rounded-full h-auto "
                        >
                          {item}{" "}
                        </span>
                      ))}
                    </div>
                    <div tabIndex={0} role="button" className="mo:hidden">
                      <span className={`${Style.searchInput}  `}>
                        <input
                          className={`cursor-pointer border-transparent focus:border-transparent focus:ring-0 ${Style.input}`}
                          type="text"
                          placeholder="جستجو کنید"
                          value={searchQuery}
                          onChange={(e) => {
                            handleSearch(e.target.value);
                          }}
                          defaultValue={searchParams.get("query")?.toString()}
                        />
                        <span className={`flex flex-row ${Style.text} `}>
                          همه ی ایران{" "}
                          <Image src={location} alt="location" width={15} />
                        </span>
                      </span>
                    </div>
                    <div
                      className="overflow-auto h-[50vh] text-right"
                      dir="rtl"
                    >
                      <ul>
                        <li key={1} className="border-b-2 py-4 text-right">
                          {provinceId >= 1 ? (
                            <div className="flex flex-row w-full justify-between">
                              <div
                                className="flex  space-x-2  w-full "
                                onClick={() => handleCheckboxClick(searchQuery)}
                              >
                                <input
                                  type="checkbox"
                                  checked={select.includes(searchQuery)}
                                  className="checkbox checkbox-primary"
                                />
                                <span className="pr-4">{searchQuery}</span>
                              </div>
                              <div
                                onClick={() => {
                                  // for back modal
                                  setProvinceId(0);
                                  handleSearch("");
                                }}
                              >
                                <span>back</span>
                              </div>
                            </div>
                          ) : (
                            <div>تمام ایران</div>
                          )}
                        </li>
                        {filteredCities?.map((item: any) => (
                          <li
                            key={item.id}
                            onClick={() => {
                              // setCheck(prevState => !prevState);
                            }}
                            className={
                              provinceId === 0 ? "border-b-2 py-4" : "py-4"
                            }
                          >
                            <label className="label cursor-pointer">
                              {provinceId === 0 && (
                                <div
                                  className="flex flex-row-reverse space-x-2"
                                  onClick={() => {
                                    // handelCheck(0);
                                    handleSearch(item.name);
                                    setProvinceId(item.id);
                                    handleSetFilter(item.name);
                                  }}
                                >
                                  <span className="label-text">
                                    {provinceId === 0 && item.name}
                                  </span>
                                  <input
                                    type="checkbox"
                                    // defaultChecked
                                    checked={select.includes(item.name)}
                                    className="checkbox checkbox-primary"
                                  />
                                </div>
                              )}
                            </label>
                            {provinceId !== 0 && (
                              <ul>
                                {provinc?.data.map((itemCity: any) => (
                                  <li
                                    key={itemCity.id}
                                    className="py-2 space-x-4"
                                    onClick={() => handelCheck(itemCity.id)}
                                  >
                                    <div className="flex flex-row space-x-4">
                                      <input
                                        type="checkbox"
                                        checked={check[itemCity.id] || false}
                                        className="checkbox checkbox-primary"
                                      />
                                      <span className="pr-4">
                                        {itemCity.name}
                                      </span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div>
                    <button className="btn m-1">ثبت</button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default LocationModal;
