import React, { useState } from 'react'
import { useCriticStore } from '../store/critic'
import logo from '../assets/images/GameVault.png'
import Footer from "../components/Footer";

const createCritic = () => {
  const [newCritic, setNewCritic] = useState({
    username: '',
    password: '',
    email: '',
  })

  const { createCritic } = useCriticStore()

  const handleAddCritic = async () => {
    const { success, message } = await createCritic(newCritic)
    if (!success) {
      console.log({
        title: 'Error',
        description: 'message',
        status: 'error',
      })
    } else {
      console.log({
        title: 'Success',
        description: 'message',
        status: 'success',
      })
    }
    setNewCritic({ username: '', password: '', email: '' })
  }

  return (
    <div className='bg-[#2E2E2E] text-[#D4D4D4] h-screen flex flex-col items-center pt-20'>
        <div>
            <img src={ logo } alt='GameVault' className='h-[120px]'/>
        </div>
        <div className='flex flex-col gap-1 justify-center'>
            <div>
                <input
                type='text'
                placeholder='Username'
                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                value={newCritic.username}
                onChange={(e) =>
                    setNewCritic({ ...newCritic, username: e.target.value })
                }
                />
            </div>
            <div>
                <input
                type='password'
                placeholder='Password'
                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                value={newCritic.password}
                onChange={(e) =>
                    setNewCritic({ ...newCritic, password: e.target.value })
                }
                />
            </div>
            <div>
                <input
                type='text'
                placeholder='Email'
                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                value={newCritic.email}
                onChange={(e) =>
                    setNewCritic({ ...newCritic, email: e.target.value })
                }
                />
            </div>
            <div>
                <button
                className='bg-[#842fd1] flex p-1 px-[113px] font-medium text-center border-2 border-[#5b1a87] outline-none rounded-md'
                onClick={handleAddCritic}
                >
                Submit
                </button>
            </div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <div className='flex flex-row py-5'>
                <p>__________________</p>
                <p className='px-4'>or</p>
                <p>__________________</p>
            </div>
            <div className='flex flex-row gap-2'>
                <p>Already have an account?</p>
                <a href='http://localhost:5173/login' className='text-[#5b1a87]'>Log In!</a>
            </div>
        </div>
        <div className="flex justify-center items-end w-full h-full box-border">
            <Footer />
        </div>
    </div>
  )
}

export default createCritic