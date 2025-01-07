import React from 'react'
import DefaultLayout from '../layouts/defaultlayout'
import userprofile from '../assets/images/Aether.jpg'
import follow from '../assets/images/heart.svg'
import report from '../assets/images/alert-triangle.svg'
import thumbsup from '../assets/images/thumbs-up.svg'
import thumbsdown from '../assets/images/thumbs-down.svg'

import logo from '../assets/images/tempgamelogo.png'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'

const DevProfile = () => {
  return (
    <DefaultLayout>
        <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans'>
            <div className='bg-[#411769] flex flex-row items-end'>
                <div className='p-[2%] pt-[1%] pl-[6%]'>
                    <img src={ userprofile } alt="Aether" className='bg-[#411769] p-1 w-[200px] h-[200px] rounded-[50%] translate-y-[75px]'/>
                </div>
                <div className='bg-[#4E1C7D] text-xl flex flex-col px-2 my-1 rounded-sm'>
                    <div>
                        <h1 className='text-2xl font-medium pb-[5%]'>Aether</h1>
                    </div>
                    <div className='flex flex-row-8 pl-[1%] pb-[5%] gap-2'>
                        <button>
                            <img src={ thumbsup } alt="Thumbs Up" />
                        </button>
                        <button>
                            <img src={ thumbsdown } alt="Thumbs Down" />
                        </button>
                        <button>
                            <img src={ follow } alt="Follow" />
                        </button>
                        <button>
                            <img src={ report } alt="Report" />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-row pt-[5%] pl-[1.5%]'>
                <div className='grid grid-col-[auto_1fr] mr-[5%] mb-8'>
                    <div className='bg-[#212121] flex flex-row gap-5 py-2 px-4 mb-6 w-min rounded-2xl'>
                        <div className='flex flex-col items-center'>
                            <p>##</p>
                            <p>Following</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>##</p>
                            <p>Followers</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>##</p>
                            <p>Likes</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p>##</p>
                            <p>Dislikes</p>
                        </div>
                    </div>
                    <div className='bg-[#171717] flex flex-row justify-center pt-5 rounded-t-md'>
                        <p className='px-2 font-bold text-lg'>Games Developed</p>
                    </div>
                    <div className='bg-[#171717] w-100 h-full rounded-b-md'>
                        <div className='flex justify-items-center content-center py-3 my-2 mx-5'>
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
                </div>
                <div className='w-full pl-10%'> 
                    <div className='bg-[#171717] flex flex-col w-100 gap-4 mb-2 rounded-md'>
                        <div className='flex flex-col w-100 gap-4 px-4 py-6 rounded-sm'>
                            <p className='font-bold text-lg pl-2'>Recent Updates</p>
                            <div className='bg-[#171717] flex flex-col w-100 gap-4 mt-4 rounded-md'>
                                <div className='flex flex-col w-100 gap-4 px-4 py-6  rounded-sm'>
                                    <div className='bg-[#270E3F] flex flex-col justify-between gap-2 p-0.5 rounded-md'>
                                        <div className='bg-[#2B2B2B] flex flex-col gap-3 p-3 rounded-md'>
                                            <div className='bg-[#383838] font-medium text-[110%] w-fit px-2 py-1.5 rounded-md'>
                                                <h1>*Title*</h1>
                                            </div>
                                            <p className='p-2'>*Description*</p>
                                        </div>
                                    </div>
                                    <div className='bg-[#270E3F] flex flex-col justify-between gap-2 p-0.5 rounded-md'>
                                        <div className='bg-[#2B2B2B] flex flex-col gap-3 p-3 rounded-md'>
                                            <div className='bg-[#383838] font-medium text-[110%] w-fit px-2 py-1.5 rounded-md'>
                                                <h1>*Title*</h1>
                                            </div>
                                            <p className='p-2'>*Description*</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
  )
}

export default DevProfile