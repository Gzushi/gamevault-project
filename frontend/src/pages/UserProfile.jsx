import React from 'react'
import DefaultLayout from '../layouts/defaultlayout'
import userprofile from '../assets/images/User.png'
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

const UserProfile = () => {
  const user = localStorage.getItem('displayName')
  return (
    <DefaultLayout>
      <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans'>
        <div className='bg-[#D4A35E] flex flex-row items-end'>
          <div className='p-[2%] pt-[1%] pl-[4%]'>
            <img
              src={userprofile}
              alt='Aether'
              className='w-[200px] h-[200px] rounded-[50%] translate-y-[75px]'
            />
          </div>
          <div className='text-xl  flex flex-col pb-[1%]'>
            <div>
              <h1 className='text-2xl font-medium pb-[5%]'>{user}</h1>
            </div>
            <div className='flex flex-row-8 pl-[1%] pb-[5%] gap-2'>
              <button>
                <img src={thumbsup} alt='Thumbs Up' />
              </button>
              <button>
                <img src={thumbsdown} alt='Thumbs Down' />
              </button>
              <button>
                <img src={follow} alt='Follow' />
              </button>
              <button>
                <img src={report} alt='Report' />
              </button>
            </div>
          </div>
        </div>
        <div className='pt-[5%] pl-[1.5%] flex flex-row'>
          <div className='grid grid-col-[auto_1fr] pr-[5%]'>
            <div className='bg-[#212121] flex flex-row gap-5 py-2 px-4 w-min rounded-2xl'>
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
            <div className='flex flex-row pl-2 py-5'>
              <p>______________</p>
              <p className='px-2'>Other Games!</p>
              <p>______________</p>
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
            </div>
          </div>
          <div className='w-full pl-10%'>
            <img src={profile} alt='profiletemp' className='w-[80%] h-[80%]' />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default UserProfile
