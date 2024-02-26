import React from 'react'
import Header from './Header/page'
import Footer from './Footer/page'
const page = ({ children }) => {
  return (
    <div className='flex flex-col  h-screen justify-between'>
      <div>
           <Header/>
           <div className='max-w-7xl mx-auto de:mt-28'>
             { children }
           </div>
      </div>
         <Footer/>
    </div>
  )
}

export default page