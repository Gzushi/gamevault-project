import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DevProfile = () => {
  return (
    <div>
        <div className='w-full h-full box-border'>
            <Navbar />
        </div>
        <div className='bg-[#2E2E2E] text-[#D4D4D4] h-screen'>
            <div>
                
            </div>
        </div>
        <div className="flex justify-center items-end w-full h-full box-border">
            <Footer />
        </div>    
    </div>
  )
}

export default DevProfile