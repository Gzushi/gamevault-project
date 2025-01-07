import React, { useEffect } from 'react'
import { useGamesStore } from '../store/games'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import logo from '../assets/images/tempgamelogo.png'
import DefaultLayout from '../layouts/defaultlayout'
import Metrics from '../components/Metrics'
import GameColumnGrid from '../components/GameColumnGrid'
import InfoCard from '../components/InfoCard'
import CommentCard from '../components/CommentCard'

import addlist from '../assets/images/plus-circle.svg'
import report from '../assets/images/alert-triangle.svg'
import thumbsup from '../assets/images/thumbs-up.svg'
import thumbsdown from '../assets/images/thumbs-down.svg'
import profile from '../assets/images/profiletemp.jpg'
import windows from '../assets/images/windows.png'
import ios from '../assets/images/ios.png'
import ps4 from '../assets/images/ps4.png'
import android from '../assets/images/android.png'
import exit from '../assets/images/x.svg'

const GameProfile = () => {
const { fetchAllGames, fetchGameById, fetchDataForGame } = useGamesStore()
const [ game, setGame ] = useState()
const [ randomGames, setRandomGames ] = useState([])
const [ comments, setComments ] = useState([])
const [ showComments, setShowComments ] = useState(false)
const [ devLogs, setDevLogs ] = useState([])
const { id } = useParams()

function getRandomNumber(max) {
    if (max < 1) {
      throw new Error("Max value must be at least 1.");
    }
    return Math.floor(Math.random() * max) + 1;
}

useEffect(() => {
    const renderGame = async () => {
        const randomGameIds = ['677bc2bfc1c842b3cf9090ef', '677bcea36a9683b7e0e060fd'];
        const allGames = await fetchAllGames()
        const data = await fetchGameById(id);

        for (let i = 0; i < 3; i++) {
            const randomNumber = getRandomNumber(allGames.length)
            const randomGame = allGames[randomNumber - 1]
            setRandomGames((prevRandomGames) => [...prevRandomGames, randomGame]);
        }
        
        setGame(data);
        setComments(await fetchDataForGame(id, "comments"))
        setDevLogs(await fetchDataForGame(id, "devLogs"))
    };

    renderGame();
}, []);

return (
    <DefaultLayout>
        {showComments && (
            <div className='bg-[#0D0D0D] fixed w-full max-w-[800px] left-[50%] translate-x-[-50%] min-h-screen'>
                <div className='bg-[#0D0D0D] flex justify-end p-1'>
                    <button onClick={() => setShowComments(false)}>
                        <img src={ exit } alt="Exit" />
                    </button>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='bg-[#171717] relative flex flex-col justify-between w-100 min-h-screen gap-4 px-4 py-8 rounded-md'>
                        <div className='grid grid-col justify-between gap-2 p-0.5'>
                            <CommentCard />
                        </div>
                        <div className='flex items-center mb-4'>
                            <textarea name="commentArea"
                                id="commentArea"
                                className='bg-[#212121] border-2 border-[#2B2B2B] w-full resize-none outline-none rounded-md'>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        )}
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
                                <p>Platforms:</p>
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
                    <div className='bg-[#212121] flex flex-row flex-fit items-center gap-5 w-min py-2 px-[3%] rounded-2xl'>
                        <Metrics />
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
                            <button onClick={() => setShowComments(true)} className='bg-[#270E3F] p-[1.2%] rounded-md'>
                                <h1 className='bg-[#2B2B2B] p-1 flex-fit rounded-md'>Comments</h1>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row pt-3'>
                <div className='grid grid-col-[auto_1fr] pr-[5%]'>
                    <div className='bg-[#171717] flex flex-row flex-fit items-center justify-center py-5  rounded-t-md'>
                        <p className='px-2 font-bold text-lg'>Other Games!</p>
                    </div>
                    <GameColumnGrid games = { randomGames } />
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

export default GameProfile
