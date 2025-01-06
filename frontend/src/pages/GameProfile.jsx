import React from 'react'
import logo from '../assets/images/tempgamelogo.png'
import DefaultLayout from '../layouts/defaultlayout'
import addlist from '../assets/images/plus-circle.svg'
import report from '../assets/images/alert-triangle.svg'
import thumbsup from '../assets/images/thumbs-up.svg'
import thumbsdown from '../assets/images/thumbs-down.svg'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'
import GameCard from '../components/GameCard'

const GameProfile = () => {
  return (
    <DefaultLayout>
      <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans px-4 py-6'>
        <div className='grid grid-cols-[60%_1fr] pb-4'>
          <img src={logo} alt='tempgamelogo' className='w-full' />
          <div className='flex flex-col justify-between items-center w-full h-full mx-2'>
            <div className='bg-[#212121] flex flex-col gap-3 min-h-60 rounded-md px-4 py-2'>
              <div className='flex flex-row gap-5 min-h-14'>
                <h1 className='text-4xl'>Genshin Impact</h1>
              </div>
              <p>Description: </p>
              <div>
                <p>Year Released: </p>
                <p>Price: </p>
                <div className='flex flex-row gap-1'>
                  <p>Platforms: </p>
                  <img src={windows} alt='Windows' className='h-[20px]' />
                  <img src={ios} alt='iOS' className='h-[20px]' />
                  <img src={ps4} alt='PS4' className='h-[20px]' />
                  <img src={android} alt='Android' className='h-[20px]' />
                </div>
              </div>
              <div className='flex flex-col'>
                <div>Genres of this Game:</div>
                <div className='flex flex-wrap gap-2'>
                  <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>
                    Action
                  </div>
                  <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>
                    Adventure
                  </div>
                  <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>
                    Fantasy
                  </div>
                  <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>
                    Multiplayer
                  </div>
                  <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>
                    RPG
                  </div>
                  <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>
                    Singleplayer
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#212121] flex flex-row gap-5 w-min py-2 px-4 rounded-2xl'>
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
              <div className='flex gap-2'>
                <button className='min-w-6'>
                  <img src={thumbsup} alt='Thumbs Up' />
                </button>
                <button className='min-w-6'>
                  <img src={thumbsdown} alt='Thumbs Down' />
                </button>
                <button className='min-w-6'>
                  <img src={addlist} alt='Add to List' />
                </button>
                <button className='min-w-6'>
                  <img src={report} alt='Report' />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-[0%] pl-[1.5%] flex flex-row'>
          <div className='grid grid-col-[auto_1fr] pr-[5%]'>
            <div className='flex flex-row justify-center pl-2 py-5'>
              <p className='px-2'>Other Games!</p>
            </div>
            <div className='bg-[#2B2B2B] w-100 h-full'>
              <div className='flex justify-items-center content-center py-3 my-2 mx-5'>
                <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                  <a href='http://localhost:5173/gameprofile'>
                    <img
                      src={logo}
                      alt='templogo'
                      className='w-[320px] h-[160px]'
                    />
                    <div className='flex items-center p-1 gap-2'>
                      <img src={profile} alt='profiletemp' className='h-10' />
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
                        <img src={windows} alt='Windows' className='h-[20px]' />
                        <img src={ios} alt='iOS' className='h-[20px]' />
                        <img src={ps4} alt='PS4' className='h-[20px]' />
                        <img src={android} alt='Android' className='h-[20px]' />
                      </div>
                    </div>
                  </a>
                </div>
            </div>
            <div className='pt-[0%] pl-[1.5%] flex flex-row'>
                <div className='grid grid-col-[auto_1fr] pr-[5%]'>
                    <div className='bg-[#171717] flex flex-row justify-center pl-2 py-5'>
                        <p className='px-2'>Other Games!</p>
                    </div>
                    <div className='bg-[#171717] w-100 h-full'>
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
                  </a>
                </div>
                <div className='w-full pl-10%'>
                    <div className='bg-[#171717] grid grid-cols-[repeat(3,1fr)] p-4 gap-2 rounded-md'>
                        <img src={ logo } alt="templogo" className='w-full' />
                        <img src={ logo } alt="templogo" className='w-full' />
                        <img src={ logo } alt="templogo" className='w-full' />
                    </div>
                    <div className='bg-[#171717] flex flex-col w-100 gap-4 mt-4 rounded-md'>
                        <div className='flex flex-col w-100 gap-4 px-4 py-6  rounded-sm'>
                            <div className='bg-[#212121] flex flex-col justify-between gap-2 p-4'>
                                <div className='pl-4'>
                                    <h1>*Title*</h1>
                                </div>
                                <div className='bg-[#2B2B2B] p-4 rounded-md'>
                                    <p>*Description*</p>
                                </div>
                            </div>
                            <div className='bg-[#212121] flex flex-col justify-between gap-2 p-4'>
                                <div className='pl-4'>
                                    <h1>*Title*</h1>
                                </div>
                                <div className='bg-[#2B2B2B] p-4 rounded-md'>
                                    <p>*Description*</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full pl-10%'>
            <div className='grid grid-cols-[repeat(3,1fr)] gap-2'>
              <img src={logo} alt='templogo' className='w-full' />
              <img src={logo} alt='templogo' className='w-full' />
              <img src={logo} alt='templogo' className='w-full' />
            </div>
            <div>
              <img src={profile} alt='profiletemp' className='w-[40%]' />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default GameProfile
