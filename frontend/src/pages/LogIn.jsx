import React from 'react'

const LogIn = () => {
  return (
    <div className='bg-[#2E2E2E] p-8'>
        <div>
            <input type="text" placeholder='email' className='bg-[#3D3D3D]'/>
        </div>
        <div>
            <input type="text" placeholder='password' className='bg-[#3D3D3D]'/>
        </div>
        <div>
            <button className='bg-[#3D3D3D] text-[#9E9E9E]'>button</button>
        </div>
    </div>
  )
}

export default LogIn