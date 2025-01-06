import React from 'react'
import logo from '../assets/images/tempgamelogo.png'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'

const Main = () => {
    return (
        <main className='flex flex-col h-full text-[#D4D4D4] font-sans'>
            <div className='bg-[#2B2B2B] w-full flex flex-col pt-4 pb-2'>
                <h2 className='self-center text-2xl'>Browse Games!</h2>
            </div>
            <div className='bg-[#2B2B2B] flex pl-20 gap-2'>
                <h1>|</h1>
                <a href="">
                    <h1>Featured</h1>
                </a>
                <h1>|</h1>
                <a href="">
                    <h1>New</h1>
                </a>
                <h1>|</h1>
                <a href="">
                    <h1>Hot</h1>
                </a>
                <h1>|</h1>
            </div>
            <div className='bg-[#2B2B2B] w-100 h-full'>
                <div className='p-4 grid grid-cols-4 justify-items-center content-center gap-8 gap-x-8 gap-y-12 my-8 mx-16'>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="http://localhost:5173/gameprofile">
                            <img src={ logo } alt="templogo" className='w-[320px] h-[160px]'/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                            <div className='bg-[#3B3B3B] flex justify-between'>
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
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main