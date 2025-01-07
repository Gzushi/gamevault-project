import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/images/GameVault.png'
import ReportedContent from '../components/ReportedContent'
import ReportedUsers from '../components/ReportedUsers'
import ReportedComments from '../components/ReportedComments'

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
                            <div className='flex flex-col gap-2'>
                                <h1 className='font-medium text-lg text-left'>
                                    Dev Users: ##
                                </h1>
                                <h1 className='font-medium text-lg text-left'>
                                    Users: ##
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#2B2B2B] flex flex-col w-full px-6 py-8 rounded-md'>
                        <div className='flex justify-center items-center mb-8'>
                            <h1 className='font-bold text-3xl'>Dashboard</h1>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <p className='font-medium text-lg text-left'>Reported Content</p>
                            </div>
                            <div className='bg-[#171717] p-4 flex flex-fit w-min items-center rounded-md'>
                                <div className='flex flex-row w-max gap-4'>
                                    <ReportedContent />
                                    <ReportedContent />
                                    <ReportedContent />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium text-lg text-left mt-2'>Reported Users</p>
                            </div>
                            <div className='bg-[#171717] p-4 gap-4 font-sans flex w-fit gap-2 rounded-md'>
                                <ReportedUsers />
                                <ReportedUsers />
                                <ReportedUsers />
                            </div>
                            <div className='bg-[#171717] p-4 flex flex-col gap-4 w-[80%] rounded-md'>
                                <div>
                                    <p className='font-bold text-lg text-left mt-2 pl-2'>Reported Comments</p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <ReportedComments />
                                    <ReportedComments />
                                    <ReportedComments />
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
