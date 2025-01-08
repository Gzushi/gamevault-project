import React from 'react'
import { useNavigate } from 'react-router-dom'
import remove from '../assets/images/trash.svg'
import ban from '../assets/images/alert-octagon.svg'

import userprofile from '../assets/images/Aether.jpg'
const ReportedUsers = () => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => navigate('../userprofile')}
            className='bg-[#212121] p-0.5 rounded-md relative'
            >
            <div className='bg-[#2B2B2B] p-2'>
                <div className='bg-[#270E3F] p-0.5 rounded-[50%]'>
                    <img src={ userprofile } alt="tempprofile" className='w-40 rounded-[50%]'/>
                </div>
                <div className='flex justify-center pt-2 pb-4'>
                    <p className='font-bold text-[120%]'>Aether</p>
                </div>
                <div className='bg-[#212121] flex flex-row w-fit p-1 gap-1 rounded-md'>
                    <button>
                        <img src={ ban } alt="Ban" />
                    </button>
                    <button>
                        <img src={ remove } alt="Remove" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReportedUsers
