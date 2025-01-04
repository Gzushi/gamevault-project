import React from 'react'
import logo from '../assets/images/GameVault.png'
import profile from '../assets/images/profiletemp.jpg'

const Navbar = () => {
    return (
        <nav className='bg-[#2E2E2E] p-6 flex justify-between'>
            <div className='flex justify-between items-center gap-8'>
                <div>
                    <img src={ logo } alt='GameVault' className='h-[50px]'/>
                </div>
                <div>
                    <input className='bg-[#4D4D4D] flex p-1 pl-4 pr-20 border-2 border-[#4D4D4D] outline-none rounded-md' type="text" placeholder='Search'/>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <h1 className='text-white flex p-1.5'>Become a Dev!</h1>
                <img src={ profile } alt="tempprofile" className='h-10'/>
            </div>
        </nav>
    )
}

export default Navbar
