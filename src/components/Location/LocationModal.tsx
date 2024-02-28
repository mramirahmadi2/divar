import React, { useState } from 'react';
import Style from './Style.module.scss';
import Image from 'next/image';
import location from '@/assets/img header/mdi_location.svg';
import useFetchData from '@/hooks/useFetchData';

const LocationModal = () => {
  const { data: cities } = useFetchData('http://192.168.1.113:8001/api/locations/iran');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCities = cities?.data?.filter((city: any) =>
    city.name.includes(searchQuery)
  );

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className='mo:hidden'>
          <span className={`${Style.searchInput} mr-5 `} >
            <input
              className={`cursor-pointer border-transparent focus:border-transparent focus:ring-0 ${Style.input}`}
              type="text"
              placeholder="جستجو کنید"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className={`flex flex-row ${Style.text} mr-4`}>همه ی ایران <Image src={location} alt='location' width={15} /></span>
          </span>
        </div>
        <ul tabIndex={0} className="dropdown-content mt-4 z-[1] menu p-2 shadow bg-base-100 rounded-box w-[23rem]">
          {filteredCities && filteredCities.map((item: any) => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LocationModal;
