import React from 'react'

import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'

const OneColumnGrid = ({ games }) => {
return (
    <div className='bg-[#171717] w-100 h-full rounded-b-md'>
        <div className='flex justify-items-center content-center py-3 mb-2 mx-5'>
            <div className='flex flex-col w-100 gap-4'>
            {
                games.map(game =>(
                        <div
                            onClick={() => navigate('../gameprofile')}
                            className='bg-[#270E3F] p-0.5 rounded-md'
                            >
                            <img src={ game.image } alt="Game Image" className='w-[360px] h-[160px]'/>
                            <div className='bg-[#363636] flex items-center p-1'>
                                <img src={ game.icon } alt="Game Profile" className='h-10'/>
                                <div className='pl-2'>
                                    <h1>{ game.title }</h1>
                                    <p>{ game.developer }</p>
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
                    ))
                }
            </div>
        </div>
    </div>
    )
}

export default OneColumnGrid