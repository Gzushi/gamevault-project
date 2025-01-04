import React, { useState } from 'react'
import { useCriticStore } from '../store/critic'

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
    <div className='bg-[#2E2E2E] p-8'>
      <div>
        <input
          type='text'
          placeholder='username'
          className='bg-[#3D3D3D]'
          value={newCritic.username}
          onChange={(e) =>
            setNewCritic({ ...newCritic, username: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='password'
          placeholder='password'
          className='bg-[#3D3D3D]'
          value={newCritic.password}
          onChange={(e) =>
            setNewCritic({ ...newCritic, password: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='email'
          className='bg-[#3D3D3D]'
          value={newCritic.email}
          onChange={(e) =>
            setNewCritic({ ...newCritic, email: e.target.value })
          }
        />
      </div>
      <div>
        <button
          className='bg-[#3D3D3D] text-[#9E9E9E]'
          onClick={handleAddCritic}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default createCritic
