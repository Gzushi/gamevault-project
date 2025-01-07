import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/GameVault.png'
import NewUploads from '../components/NewUploads'
import MostLikes from '../components/MostLikes'
import DashNotif from '../components/DashNotif'

const Dashboard = () => {
    const navigate = useNavigate()
    return (
        <div className='h-full text-[#D4D4D4]'>
            <div className='bg-[#171717] flex flex-col px-4 pt-4 pb-6 h-full'>
                <div className='flex flex-row'>
                    <div className='flex flex-col gap-2 mr-6    '>
                        <div
                            onClick={() => navigate('')}
                            >
                            <img src={ logo } alt='GameVault' className='max-h-16'/>
                        </div>
                        <div className='bg-[#212121] flex flex-col flex-fit gap-6 px-4 py-4 w-full rounded'>
                            <button className='font-medium text-lg text-left'>
                                <h1>Dashboard</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>User Management</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>Content Mod</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>Comment Mod</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>Web Issue</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>Feedback</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>Database</h1>
                            </button>
                            <button className='font-medium text-lg text-left'>
                                <h1>Website</h1>
                            </button>
                        </div>
                        <div className='bg-[#212121] flex flex-col gap-4 px-6 py-4 mt-4 w-full rounded'>
                            <h1 className='font-medium text-lg text-left'>
                                Dev Users: ##
                            </h1>
                            <h1 className='font-medium text-lg text-left'>
                                Users: ##
                            </h1>
                        </div>
                    </div>
                    <div className='bg-[#2B2B2B] flex flex-col w-full px-6 py-8 rounded-md'>
                        <div className='flex justify-center items-center mb-8'>
                            <h1 className='font-bold text-3xl'>Dashboard</h1>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <p className='font-medium text-lg text-left'>New Uploads!</p>
                            </div>
                            <div className='bg-[#171717] p-4 flex flex-fit w-min items-center rounded-md'>
                                <div className='flex flex-row w-max gap-4'>
                                    <NewUploads />
                                    <NewUploads />
                                    <NewUploads />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium text-lg text-left mt-2'>Most Likes!</p>
                            </div>
                            <div className='bg-[#171717] p-4 flex flex-fit w-min items-center rounded-md'>
                                <div className='flex flex-row w-max gap-4'>
                                    <MostLikes />
                                    <MostLikes />
                                    <MostLikes />
                                </div>
                            </div>
                            <div className='bg-[#171717] p-4 flex flex-col gap-4 w-[80%] rounded-md'>
                                <div>
                                    <p className='font-bold text-lg text-left mt-2 pl-2'>Reviews!</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <DashNotif />
                                    <DashNotif />
                                    <DashNotif />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
