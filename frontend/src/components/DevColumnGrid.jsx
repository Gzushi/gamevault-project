import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/tempgamelogo.png'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'

const DevColumnGrid = () => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate('../gameprofile')}
            className='bg-[#270E3F] p-0.5 rounded-md'
            >
            <img src={ logo } alt="templogo" className='w-[320px] h-[160px]'/>
            <div className='bg-[#363636] flex items-center p-1'>
                <img src={ profile } alt="profiletemp" className='h-10'/>
                <div className='pl-2'>
                    <h1>Genshin Impact</h1>
                    <p>Hoyoverse</p>
                </div>
            </div>
            <div className='bg-[#2B2B2B] flex justify-between'>
                <div>
                    <p className='pl-1 pb-1'>Free</p>
                </div>
                <div className='flex gap-1 pt-1 pr-1'>
                    <img src={ windows } alt="Windows" className='h-[20px]' />
                    <img src={ ios } alt="iOS" className='h-[20px]' />
                    <img src={ ps4 } alt="PS4" className='h-[20px]' />
                    <img src={ android } alt="Android" className='h-[20px]' />
                </div>
            </div>
        </div>
    )
}

export default DevColumnGrid
