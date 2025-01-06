import React from 'react'
import logo from '../assets/images/tempgamelogo.png'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'

const GameCard = ({ game }) => {
  return (
    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
      <a href='http://localhost:5173/gameprofile'>
        <img src={game.image} alt='templogo' className='w-[320px] h-[160px]' />
        <div className='flex items-center p-1 gap-2'>
          <img src={game.icon} alt={game.title} className='h-10' />
          <div>
            <h1>{game.title}</h1>
            <p>{game.developer}</p>
          </div>
        </div>
        <div className='bg-[#3B3B3B] flex justify-between'>
          <div>
            <p className='pl-1 pb-1'>${game.price}</p>
          </div>
          <div className='flex gap-1 pt-1 pr-1'>
            <img src={windows} alt='Windows' className='h-[20px]' />
            <img src={ios} alt='iOS' className='h-[20px]' />
            <img src={ps4} alt='PS4' className='h-[20px]' />
            <img src={android} alt='Android' className='h-[20px]' />
          </div>
        </div>
      </a>
    </div>
    //HELLO
  )
}

export default GameCard
