import { div } from 'framer-motion/client';
import React from 'react'
import logo from '../assets/images/tempgamelogo.png'
import DefaultLayout from "../layouts/defaultlayout";

const GameProfile = () => {
  return (
    <div>
        <DefaultLayout>
        <div className='bg-[#2E2E2E] text-[#D4D4D4] h-screen'>
            <div>
                <img src={ logo } alt="tempgamelogo" className='w-[960px] h-[480px]'/>
            </div>
        </div>
        </DefaultLayout>
    </div>
  )
}

export default GameProfile