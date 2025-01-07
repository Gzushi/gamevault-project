import React, { useEffect } from 'react'
import logo from '../assets/images/tempgamelogo.png'
import DefaultLayout from '../layouts/defaultlayout'
import OneColumnGrid from '../components/OneColumnGrid'
import addlist from '../assets/images/plus-circle.svg'
import report from '../assets/images/alert-triangle.svg'
import thumbsup from '../assets/images/thumbs-up.svg'
import thumbsdown from '../assets/images/thumbs-down.svg'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'
import { useGamesStore } from '../store/games'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const GameProfile = () => {
const { fetchGameById, fetchCommentsForGame } = useGamesStore()
const [ game, setGame ] = useState()
const [ randomGames, setRandomGames ] = useState([])
const { id } = useParams()

useEffect(() => {
    const renderGame = async () => {
        const data = await fetchGameById(id);
        setGame(data);
        console.log(data)

        const randomGameIds = ['677bc2bfc1c842b3cf9090ef', '677bcea36a9683b7e0e060fd'];

        for (const id of randomGameIds) {
            const randomGame = await fetchGameById(id);
            setRandomGames((prevRandomGames) => [...prevRandomGames, randomGame]);
        }
        console.log(await fetchCommentsForGame(id))
    };


    renderGame();
}, []);

return (
    <DefaultLayout>
        <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans px-4 py-6'>
            <div className='grid grid-cols-[60%_1fr] pb-4'>
                <img src={ game?.image } alt="tempgamelogo" className='bg-[#270E3F] p-0.5 w-full rounded-sm'/>
                <div className='flex flex-col justify-between items-center w-full h-full mx-2'>
                    <div className='bg-[#212121] flex flex-col gap-3 min-h-60 rounded-md px-4 py-2'>
                        <div className='flex flex-row gap-5 min-h-14'>
                            <h1 className='text-4xl'>{game?.title}</h1>
                        </div>
                        <p>Description: {game?.desc}</p>
                        <div>
                            <p>Year Released: {game?.releaseDate}</p>
                            <p>Price: {game?.price}</p>
                            <div className='flex flex-row gap-1'>
                                <p>Platforms: </p>
                                <img src={ windows } alt="Windows" className='h-[20px]' />
                                <img src={ ios } alt="iOS" className='h-[20px]' />
                                <img src={ ps4 } alt="PS4" className='h-[20px]' />
                                <img src={ android } alt="Android" className='h-[20px]' />
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                Genres of this Game:
                            </div>
                            <div className='flex flex-wrap gap-1 mb-2'>
                                {game?.genre.map((g, i) => (
                                    <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md' key={i}>{g}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#212121] flex flex-row gap-5 w-min py-2 px-[3%] rounded-2xl'>
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
                                <img src={ thumbsup } alt="Thumbs Up" />
                            </button>
                            <button className='min-w-6'>
                                <img src={ thumbsdown } alt="Thumbs Down" />
                            </button>
                            <button className='min-w-6'>
                                <img src={ addlist } alt="Add to List" />
                            </button>
                            <button className='min-w-6'>
                                <img src={ report } alt="Report" />
                            </button>
                        </div>
                        <div className='self-center'>
                            <button>
                                <h1 className='bg-[#2B2B2B] p-1 flex-fit rounded-md'>Comments</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='grid grid-col-[auto_1fr] pr-[5%]'>
                    <div className='bg-[#171717] flex flex-row justify-center pt-5 rounded-t-md'>
                        <p className='px-2 font-bold text-lg'>Other Games!</p>
                    </div>
                    <OneColumnGrid games = { randomGames } />
                </div>
                <div className='w-full pl-10%'>
                    <div className='bg-[#171717] grid grid-cols-[repeat(3,1fr)] p-4 gap-2 rounded-md'>
                        <img src={logo} alt='templogo' className='w-full bg-[#270E3F] p-0.5 rounded-md' />
                        <img src={logo} alt='templogo' className='w-full bg-[#270E3F] p-0.5 rounded-md' />
                        <img src={logo} alt='templogo' className='w-full bg-[#270E3F] p-0.5 rounded-md' />
                    </div>
                    <div className='bg-[#171717] flex flex-col w-100 gap-4 mt-4 rounded-md'>
                        <div className='flex flex-col w-100 gap-4 px-4 py-6 rounded-sm'>
                        <p className='font-medium text-2xl pl-2'>Dev Notes!</p>
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
    </DefaultLayout>
    )
}

export default GameProfile
