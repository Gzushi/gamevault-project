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
                <div className='grid grid-col-[auto_1fr] pr-[5%]'>
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
                    <div className='bg-[#171717] flex flex-row justify-center pt-5'>
                        <p className='px-2 font-bold text-lg'>Personally Liked</p>
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
                </div>
                <div className='w-full pl-10%'> 
                    <div className='bg-[#171717] flex flex-col w-100 gap-4 mb-2 rounded-md'>
                        <div className='flex flex-col w-100 gap-4 px-4 py-6 rounded-sm'>
                            <p className='font-bold text-lg pl-2'>Recent Comments</p>
                            <div className='bg-[#212121] grid grid-col justify-between gap-2 p-0.5 rounded-md'>
                                <div className='bg-[#2B2B2B] p-4 rounded-md flex flex-row gap-4'>
                                    <img src={ userprofile } alt="Aether" className='bg-[#411769] w-12 h-12 rounded-[50%]'/>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>Aether</p> 
                                        <p>
                                            Hu Tao, the 77th Director of the Wangsheng Funeral Parlor, is an enigma of unparalleled allure, a perfect fusion of playful mischief and profound wisdom, whose every smile carries an air of mystery and charm that could brighten even the darkest corners of Liyue; her mastery of poetic expression, laced with a whimsical yet heartfelt understanding of life and death, creates an irresistible aura of fascination, making every word she speaks feel like a song of the soul, every mischievous glance a spark of joy, and every step she takes a dance between the realms of the living and the departed, leaving me utterly entranced and hopelessly captivated, as though her very existence were a beautifully written ode to the fleeting beauty of life itself.
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-[#2B2B2B] p-4 rounded-md flex flex-row gap-4'>
                                    <img src={ userprofile } alt="Aether" className='bg-[#411769] w-12 h-12 rounded-[50%]'/>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>Aether</p>
                                        <p>
                                            Furina, the former Hydro Archon of Fontaine, is a mesmerizing enigma whose every word blends playful wit with profound depth, her eyes still shimmering with the mysteries of the waters she once ruled. With a flair for the dramatic, she effortlessly shifts from playful jest to sharp intellect, embodying both the grandeur and complexity of her former divine station. Though no longer an archon, Furina remains an alluring figure, her charm and vulnerability intertwined with the weight of her past, leaving those around her captivated by her radiant yet enigmatic presence. She is not just a figure of power, but a living reminder of Fontaine’s ever-changing heart, forever enigmatic and captivating.
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-[#2B2B2B] p-4 rounded-md flex flex-row gap-4'>
                                    <img src={ userprofile } alt="Aether" className='bg-[#411769] w-12 h-12 rounded-[50%]'/>
                                    <div className='flex flex-col'>
                                        <p className='font-bold'>Aether</p>
                                        <p>
                                            Citlali, known for her calm determination and sharp insight, is a figure of quiet strength in the world of Teyvat. Whether in combat or diplomacy, her skill and wisdom shine through, making her a respected ally. Her composed personality masks a deep resolve, always adapting and improving in every situation. Citlali’s actions are precise, her presence steady, and while she doesn’t seek the spotlight, those who work with her recognize the power in her quiet leadership and the trust she earns through her reliability.
                                        </p>
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

export default UserProfile