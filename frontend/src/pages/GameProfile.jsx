import React, { useEffect } from 'react'
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
import { useGamesStore } from '../store/games'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const GameProfile = () => {
const { fetchGameById } = useGamesStore()
const [ game, setGame ] = useState()
const [ randomGames, setRandomGames ] = useState([])
const { id } = useParams()

useEffect(() => {
    const renderGame = async () => {
        const data = await fetchGameById(id);
        setGame(data);

        const randomGameIds = ['677bc2bfc1c842b3cf9090ef', '677bcea36a9683b7e0e060fd'];

        for (const id of randomGameIds) {
            const randomGame = await fetchGameById(id);
            setRandomGames((prevRandomGames) => [...prevRandomGames, randomGame]);
        }
    };

    renderGame();
}, []);

  return (
    <DefaultLayout> 
        <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans px-4 py-6'>
            <div className='grid grid-cols-[60%_1fr] pb-4'>
                <img src={ logo } alt="tempgamelogo" className='bg-[#212121] p-0.5 w-full rounded-sm'/>
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
                            <div className='flex flex-wrap gap-1'>
                                <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>Action</div>   
                                <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>Adventure</div>
                                <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>Fantasy</div>
                                <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>Multiplayer</div>
                                <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>RPG</div>
                                <div className='bg-[#363636] w-min px-1 py-0.5 rounded-md'>Singleplayer</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#212121] flex flex-row gap-5 w-min py-2 px-[1%] rounded-2xl'>
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
                    </div>
                </div>
                <div>
                {
                randomGames.map(game => (
                    <div className='flex justify-items-center content-center py-3 my-2 mx-5'>
                        <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href='http://localhost:5173/gameprofile'>
                            <img
                            src={game.image}
                            alt='templogo'
                            className='w-[320px] h-[160px]'
                            />
                            <div className='flex items-center p-1 gap-2'>
                            <img src={game.icon} alt='profiletemp' className='h-10' />
                            <div>
                                <h1>{game.title}</h1>
                                <p>{game.developer}</p>
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
                ))
            }
                </div>
            </div>
            <Grid />
        </div>
    </DefaultLayout>
)
}

export default GameProfile
