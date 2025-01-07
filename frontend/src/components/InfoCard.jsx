import React from 'react'

const InfoCard = () => {
return (
    <div className=''>
        <div className='bg-[#270E3F] flex flex-col justify-between gap-2 p-0.5 rounded-md'>
            <div className='bg-[#2B2B2B] flex flex-col gap-3 p-3 rounded-md'>
                <div className='bg-[#383838] font-medium text-[110%] w-fit px-2 py-1.5 rounded-md'>
                    <h1>*Title*</h1>
                </div>
                <p className='p-2'>*Description*</p>
            </div>
        </div>
    </div>
    )
}

export default InfoCard
