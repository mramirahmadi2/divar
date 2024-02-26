"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Switch } from '@headlessui/react'
const CheckBox = () => {
  const searchParams = useSearchParams();
  const checkboxParam = searchParams.get('checkbox');
  const [isChecked, setIsChecked] = useState(checkboxParam === 'true');

  // Update URL parameter when checkbox state changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('checkbox', isChecked.toString());
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [isChecked]);

  // Initialize checkbox state based on URL parameter
  useEffect(() => {
    if (checkboxParam === 'true') {
      setIsChecked(true);
    }
  }, [checkboxParam]);

  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <div className="py-16">
    <Switch
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
  </div>
  );
};

export default CheckBox;


 