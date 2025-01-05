import React from 'react'
import logo from '../assets/images/GameVault.png'
import profile from '../assets/images/Aether.jpg'

const Navbar = () => {
    return (
        <nav className='bg-[#212121] text-[#D4D4D4] p-[2%] flex justify-between'>
            <div className='flex justify-between items-center gap-8'>
                <div>
                    <a href="http://localhost:5173">
                        <img src={ logo } alt='GameVault' className='h-[50px]'/>
                    </a>
                </div>
                <div>
                    <input className='bg-[#212121] flex p-[1dvh] pl-[4dvh] pr-[20dvh] border-2 border-[#2B2B2B] outline-none rounded-md' type="text" placeholder='Search'/>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <a href="" className='flex p-1.5'>Become a Dev!</a>
                <a href="http://localhost:5173/userprofile">
                    <img src={ profile } alt="Aether" className='h-10'/>
                </a>
            </div>
        </nav>
    )
}

export default Navbar