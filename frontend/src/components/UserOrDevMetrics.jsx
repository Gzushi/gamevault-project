import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

const UserOrDevMetrics = () => {
const { user } = useAuthContext()
  return (
    <div className='bg-[#212121] flex flex-row flex-fit items-center gap-5 px-4 py-2 mb-6 w-min rounded-2xl'>
        <div className='flex flex-col items-center'>
            <p>{user && user.dislikes}</p>
            <p>Following</p>
        </div>
        <div className='flex flex-col items-center'>
            <p>##</p>
            <p>Followers</p>
        </div>
        <div className='flex flex-col items-center'>
            <p>{user && user.username}</p>
            <p>Likes</p>
        </div>
        <div className='flex flex-col items-center'>
            <p>##</p>
            <p>Dislikes</p>
        </div>
    </div>
  )
}

export default UserOrDevMetrics
