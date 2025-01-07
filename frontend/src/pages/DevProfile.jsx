import React from 'react'
import DefaultLayout from '../layouts/defaultlayout'
import DevColumnGrid from '../components/DevColumnGrid'
import UserOrDevMetrics from '../components/UserOrDevMetrics'
import InfoCard from '../components/InfoCard'

import userprofile from '../assets/images/Aether.jpg'
import follow from '../assets/images/heart.svg'
import report from '../assets/images/alert-triangle.svg'
import thumbsup from '../assets/images/thumbs-up.svg'
import thumbsdown from '../assets/images/thumbs-down.svg'

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
                <div className='grid grid-col-[auto_1fr] mr-[5%] mb-4'>
                    <div className='flex flex-row flex-fit items-center w-min rounded-2xl'>
                        <UserOrDevMetrics />
                    </div>
                    <div className='bg-[#171717] flex flex-row justify-center items-center pt-5 pb-2 rounded-t-md'>
                        <p className='px-2 font-bold text-lg'>Games Developed</p>
                    </div>
                    <div className='bg-[#171717] w-100 h-full rounded-b-md'>
                        <div className='flex justify-items-center content-center py-3 mb-2 mx-5'>
                            <div className='flex flex-col w-100 gap-4'>
                                <DevColumnGrid />
                                <DevColumnGrid />
                                <DevColumnGrid />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full pl-10%'> 
                    <div className='bg-[#171717] flex flex-col w-100 gap-4 rounded-md'>
                        <div className='flex flex-col w-100 gap-4 px-4 py-6 rounded-sm'>
                            <p className='font-medium text-2xl pl-2'>Recent Updates</p>
                            <div className='flex flex-col justify-between gap-2 p-0.5'>
                                <InfoCard />
                                <InfoCard />
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