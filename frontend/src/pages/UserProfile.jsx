import React from 'react'
import DefaultLayout from "../layouts/defaultlayout";
import profile from '../assets/images/Aether.jpg'

const UserProfile = () => {
  return (
    <div>
        <DefaultLayout>
        <div className='bg-[#2E2E2E] text-[#D4D4D4] h-screen'>
            <div className='p-4'>
                <img src={ profile } alt="Aether" className='w-[200px] h-[200px]'/>
            </div>
        </div>
        </DefaultLayout>
    </div>
  )
}

export default UserProfile