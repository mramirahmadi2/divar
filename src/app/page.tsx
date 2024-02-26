import Posts from '@/components/posts'
import CheckBox from '@/components/CheckBox'
import Dialog  from '@/components/Dialog'

const Home = () => {

    return (
        <>
            <div className="  mo:mt-40">
               <Dialog  />
            <div>
               <CheckBox/>
            </div>
            <div className='mt-5'>
                    <h2 className='text-[20px] mb-4 font-medium pr-4'>آگهی های جدید در همه ایران</h2>
                    <div className='flex flex-row mo:flex-col flex-wrap justify-center items-center w-[68vw] mx-auto mo:w-[75vw]'>
                     <Posts />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home