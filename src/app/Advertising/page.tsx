import React from 'react';
import img1 from "@/assets/img Home/-2383234_3jijmK_r.jpg";
import Image from 'next/image';

const page = () => {
    const data = {
        name: "کتاب سعید",
        address: "تهران، تهران_ضلع جنوبشرقی میدان انقلاب_تالار بزرگ کتاب",
        phoneNaber: "091212345678",
        socialNetwork: {
            instagram: "اینستاگرام",
            watsapp: "واتس آپ"
        }
    };

    return (
        <div className='flex flex-row w-[100%] px-4 justify-between'>
            <div className='flex-1 w-[40%] '>
                <span className='text-[#3e7bfa]'>خانه</span> / <span className='text-[#3e7bfa]'>لوازم</span> / <span>کتاب</span>
                <div className='border-2 border-gray-500'>
                    <h2>خریدار کتاب های قدیمی و نو «غیر درسی»به بالاترین قیمت</h2>
                    <div className='flex flex-row-reverse'>
                        <div>
                            <Image src={img1} alt='img1' />
                        </div>
                        <p>
                            خریدار کتابخانه شخصی «در محل» 09124228494 ، خرید و فروش کتاب های دست دوم و نو«غیر درسی»09127018162,خریدار انواع کتب چاپی،سنگی،خطی،نفیس هنری 09124228494,خریدار کتاب های قدیمی و دست دوم رمان02166959772،ادبیات،تاریخ،دیوان اشعار،فلسفه،ادبیات نمایشی و کتاب های نایاب و کمیاب در محل،خرید و فروش کتاب،خریدار کتاب،خریدار کتاب درب منزل،خریدار کتاب غیر درسی خریدار کتاب به بالاترین قیمت
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex-1 w-[25%]'>
                <span>اطلاعات تماس:</span>
                <div className='border-2 border-gray-500'>
                    <ul>
                        <li>{data.name}</li>
                        <li>{data.address}</li>
                        <li>{data.phoneNaber}</li>
                        <li>{data.socialNetwork.watsapp}</li>
                        <li>{data.socialNetwork.instagram}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default page;
