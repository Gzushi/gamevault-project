import React from 'react'
import DefaultLayout from '../layouts/defaultlayout'
import userprofile from '../assets/images/Aether.jpg'

const AdminProfile = () => {
return (
    <DefaultLayout>
        <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans'>
            <div className='bg-[#411769] flex flex-row items-end'>
                <div className='p-[2%] pt-[1%] pl-[6%]'>
                    <img src={ userprofile } alt="Aether" className='bg-[#411769] p-1 w-[200px] h-[200px] rounded-[50%] translate-y-[75px]'/>
                </div>
            </div>
        </div>
    </DefaultLayout>
    )
}

export default AdminProfile
