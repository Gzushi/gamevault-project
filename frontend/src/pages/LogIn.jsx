import React, { useState } from 'react'
import { useCriticStore } from '../store/critic'
import logo from '../assets/images/GameVault.png'
import Footer from "../components/Footer";

const LogIn = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const { authCritic } = useCriticStore()

  const handleLogIn = async () => {
    const { success, message } = await authCritic(credentials)
    if (!success) {
      console.log({
        title: 'Error',
        description: message,
        status: 'error',
      })
    } else {
      console.log({
        title: 'Success',
        description: message,
        status: 'success',
      })
    }
    setCredentials({ username: '', password: '' })
  }

  return (
    <div className='bg-[#2E2E2E] text-[#D4D4D4] font-sans h-screen flex flex-col items-center pt-20'>
        <div>
            <img src={ logo } alt='GameVault' className='h-[120px]'/>
        </div>
        <div className='flex flex-col gap-1 justify-center'>
            <div>
                <input
                type='text'
                placeholder='Username'
                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                value={credentials.username}
                onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                }
                />
            </div>
            <div>
                <input
                type='password'
                placeholder='Password'
                className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                value={credentials.password}
                onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                }
                />
            </div>
            <div>
                <button
                className='bg-[#842fd1] flex p-1 px-[113px] font-medium text-center border-2 border-[#5b1a87] outline-none rounded-md'
                onClick={handleLogIn}
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
                <p>Don't have an account?</p>
                <a href='http://localhost:5173/signup' className='text-[#5b1a87]'>Sign Up!</a>
            </div>
        </div>
        <div className="flex justify-center items-end w-full h-full box-border">
            <Footer />
        </div>
    </div>
  )
}

export default LogIn