import React from 'react'

const Navbar = () => {
  return (
      <div>
        <nav className='bg-[#2E2E2E] p-6 flex justify-between'>
          <div className='flex justify-between w-96'>
            <div>
              <h1 className='text-white p-1.5'>GameVault</h1>
            </div>
            <div>
              <input className='bg-[#4D4D4D] flex p-1 pl-4 pr-20 border-2 border-[#4D4D4D] outline-none rounded-md' type="text" placeholder='Search'/>
            </div>
          </div>
          <div>
            <h1 className='text-white flex p-1.5'>Become a Dev!</h1>
          </div>
        </nav>
      </div>
  )
}

export default Navbar
