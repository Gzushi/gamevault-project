import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/GameVault.png'
import profile from '../assets/images/User.png'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className='bg-[#212121] text-[#D4D4D4] font-sans p-[1.5%] w-full flex justify-between'>
            <div className='flex justify-between items-center gap-8'>
                <div
                    onClick={() => navigate('../')}
                    >
                    <img src={ logo } alt='GameVault' className='max-h-[8vh]'/>
                </div>
                <div>
                    <input className='bg-[#212121] flex w-full max-w-[12rem] px-3 py-0.5 border-2 border-[#2B2B2B] outline-none rounded-md' type="text" placeholder='Search'/>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div
                    onClick={() => navigate('')}
                    className='p-1.5'
                    >
                    <p>Become a Dev!</p>
                </div>
                <div
                    onClick={() => navigate('../userprofile')}
                    >
                    <img src={ profile } alt="Aether" className='bg-[#270E3F] h-10 p-0.5 rounded-[50%]'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
