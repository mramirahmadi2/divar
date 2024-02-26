import getCategory from '@/app/(api)/getCategory';
import React from 'react'

const getdata = async () => {
    try {
        const [Category] = await Promise.all([
            getCategory()
        ]);
  return  Category
   } catch (error) {
    console.error("Error:", error);
    // Handle errors
    return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
}
}

export default getdata;