"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

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
    <div>
      <input 
        type="checkbox" 
        className="toggle toggle-lg" 
        checked={isChecked} 
        onChange={handleToggle} 
      />
    </div>
  );
};

export default CheckBox;


 