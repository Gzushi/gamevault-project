import React, { useState } from 'react'
import logo from '../assets/images/GameVault.png'
import Footer from '../components/Footer'
import useLogin from '../hooks/useLogin'

const LogIn = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username, password)
    }

    return (
        <div className='bg-[#2E2E2E] text-[#D4D4D4] h-screen flex flex-col items-center pt-20'>
            <div>
                <img src={logo} alt='GameVault' className='h-[120px]' />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-1 justify-center'>
                <div>
                    <input
                        type='text'
                        placeholder='Username'
                        className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Password'
                        className='bg-[#2B2B2B] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div>
                    <button type='submit'
                        disabled={isLoading}
                        className='bg-[#842fd1] flex p-1 px-[113px] font-medium text-center border-2 border-[#5b1a87] outline-none rounded-md'
                    >
                        Submit
                    </button>
                    {error && <div>{error}</div>}
                </div>
            </form>
            <div className='flex flex-col gap-1 items-center'>
                <div className='flex flex-row py-5'>
                <p>__________________</p>
                <p className='px-4'>or</p>
                <p>__________________</p>
                </div>
                <div className='flex flex-row gap-2'>
                <p>Don't have an account?</p>
                <a href='http://localhost:5173/signup' className='text-[#5b1a87]'>
                    Sign Up!
                </a>
                </div>
            </div>
            <div className='flex justify-center items-end w-full h-full box-border'>
                <Footer />
            </div>
        </div>
    )
}

export default LogIn
