import React, { useState } from 'react'
import { useCriticStore } from '../store/critic'

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
    <div className='bg-[#2E2E2E] p-8'>
      <div>
        <input
          type='text'
          placeholder='username'
          className='bg-[#3D3D3D]'
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='password'
          placeholder='password'
          className='bg-[#3D3D3D]'
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <div>
        <button className='bg-[#3D3D3D] text-[#9E9E9E]' onClick={handleLogIn}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default LogIn
