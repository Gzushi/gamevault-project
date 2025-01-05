import { footer } from 'framer-motion/client'
import React from 'react'
import logo from '../assets/images/GameVault.png'

const Footer = () => {
  return (
    <footer className='bg-[#212121] text-[#D4D4D4] flex justify-center p-3 gap-2 w-full'>
        <p>Copyright &copy; 2025</p>
        <img src={ logo } alt='GameVault' className='h-[28px]'/>
        <p>| All Rights Reserved</p>
    </footer>
  )
}

export default Footer