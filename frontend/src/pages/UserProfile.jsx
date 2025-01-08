import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layouts/defaultlayout'
import CommentCard from '../components/CommentCard'
import UserColumnGrid from '../components/UserColumnGrid'
import UserOrDevMetrics from '../components/UserOrDevMetrics'
import GameCard from "../components/GameCard"

import userprofile from '../assets/images/Aether.jpg'
import follow from '../assets/images/heart.svg'
import report from '../assets/images/alert-triangle.svg'
import thumbsup from '../assets/images/thumbs-up.svg'
import thumbsdown from '../assets/images/thumbs-down.svg'
import LogOut from '../assets/images/power.svg'

import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'
import { getAddedGames } from '../api/userApi'
import { getGameById } from '../api/gameApi'

const UserProfile = () => {
    const [games, setGames] = useState([])
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

    useEffect(() => {
        const getGames = async () => {
            if (user) {
                const userGames = await getAddedGames("677d337b511d9f52a07292d6", user.token)

                if (games.length) {
                    setGames([])
                }

                for (const gameId of userGames.addedGames) {
                    const game = await getGameById(gameId)
                    setGames((prevGames) => [...prevGames, game.data]);
                    console.log(game)
                }
            }
        }

        getGames()
    }, [user])

    return (
        <DefaultLayout>
            <div className='bg-[#2B2B2B] text-[#D4D4D4] font-sans'>
                <div className='bg-[#411769] flex flex-row relative items-end'>
                    <div className='p-[2%] pt-[1%] pl-[6%]'>
                        <img src={ userprofile } alt="Aether" className='bg-[#411769] p-1 w-[200px] h-[200px] rounded-[50%] translate-y-[75px]'/>
                    </div>
                    <div className='bg-[#4E1C7D] text-xl flex flex-col px-2 my-1 rounded-sm'>
                        <div>

                            <h1 className='text-2xl font-medium pb-[5%]'>{user && user.username}</h1>

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

                    <button onClick={handleLogout} className='absolute right-[10px] top-[10px]'>

                        <img src={ LogOut } alt="Log Out" />
                    </button>
                </div>
                <div className='flex flex-row pt-16 px-4'>
                    <div className='grid grid-col-[auto_1fr] mr-[5%] mb-4'>
                        <div className='flex flex-row flex-fit items-center w-min rounded-2xl'>
                            <UserOrDevMetrics />
                        </div>
                        <div className='bg-[#171717] flex flex-row justify-center items-center pt-5 rounded-t-md'>
                            <p className='px-2 font-bold text-lg'>Personally Liked</p>
                        </div>
                        <div className='bg-[#171717] w-100 h-full rounded-b-md'>
                            <div className='flex justify-items-center content-center py-3 my-2 mx-5'>
                                <div className='flex flex-col w-100 gap-4'>
                                    <UserColumnGrid />
                                    <UserColumnGrid />
                                    <UserColumnGrid />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full pl-10%'> 
                        <div className='bg-[#171717] flex flex-col w-100 gap-4 mb-2 rounded-md'>
                            <div className='flex flex-col w-100 gap-4 px-4 py-6 rounded-sm'>
                                <p className='font-bold text-lg pl-2'>Recent Comments</p>
                                <div className='grid grid-cols-3 gap-2 p-0.5'>
                                    {games.map(game => (<GameCard game={game} />))}
                                    {/* <CommentCard />
                                    <CommentCard />
                                    <CommentCard /> */}
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