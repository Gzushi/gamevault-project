import React from 'react'
import { useNavigate } from 'react-router-dom'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'
import { div } from 'framer-motion/client'

const GameCard = ({ game }) => {
  const navigate = useNavigate()

  return (
    <div className='bg-[#270E3F] p-[1%] rounded-md'>
        <div
        onClick={() => navigate('/gameprofile/' + game._id)}
        className='bg-[#363636] flex flex-col w-100 gap-2'
        >
        <img src={game.image} alt='templogo' className='w-full aspect-video' />
        <div className='flex flex-col justify-between'>
            <div className='flex items-center px-1 gap-2'>
            <img
                src={game.icon}
                alt={game.title}
                className='w-full max-w-[25%] aspect-video'
            />
            <div>
                <h1>{game.title}</h1>
                <p>{game.developer}</p>
            </div>
            </div>
            <div className='bg-[#363636] flex justify-between'>
            <p className='pl-1 pb-1'>${game.price}</p>
            <div className='flex gap-1 pt-1 pr-1'>
                <img src={windows} alt='Windows' className='h-[20px]' />
                <img src={ios} alt='iOS' className='h-[20px]' />
                <img src={ps4} alt='PS4' className='h-[20px]' />
                <img src={android} alt='Android' className='h-[20px]' />
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default GameCard
