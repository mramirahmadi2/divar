import getPosts from "@/app/(api)/getPosts"; // Assuming `api` is a folder containing `getPosts.js` or similar
import Link from "next/link";

export default async function Posts() {
    // const url = "http://192.168.1.113:8001/api/post";
    const url = "http://localhost:8000/posts"
    try {
        const [posts] = await Promise.all([
            getPosts({ url })
        ]);

        return (
            <div className='flex flex-row mo:flex-col flex-wrap justify-center items-center w-[68vw] mx-auto mo:w-[75vw]'>
                {posts.map((item:any) => (
                    <div key={item.id} >
                        <img src="/assets/imgs/432365855_1c18b834fc225efa3b4c001cbd364d01.jpg" alt="" />
                      <Link href={`/post/${item.id}`}><p className="w-2/3">{item.title}</p></Link> 
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error("Error:", error);
        // Handle errors
        return <div>خطایی رخ داده است. لطفا صفحه را مجددا بارگذاری کنید.</div>;
    }
}
