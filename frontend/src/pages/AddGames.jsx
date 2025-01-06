import React, { useState } from 'react'
import { useGamesStore } from '../store/games'
import Footer from '../components/Footer'
import logo from '../assets/images/GameVault.png'
import { useNavigate } from 'react-router-dom'

const AddGames = () => {
  const navigate = useNavigate()
  const [newGame, setNewGame] = useState({
    title: '',
    price: '',
    genre: [],
    desc: '',
    releaseDate: '',
    externalLink: '',
    developer: '',
    platform: [],
    image: '',
    icon: '',
    gplay1: '',
    gplay2: '',
  })

  const { createGame } = useGamesStore()

  const handleAddGame = async () => {
    const { success, message } = await createGame(newGame)
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
        navigate: navigate('/'),
      })
    }
    setNewGame({
      title: '',
      price: '',
      genre: [],
      desc: '',
      releaseDate: '',
      externalLink: '',
      developer: '',
      platform: [],
      image: '',
      icon: '',
      gplay1: '',
      gplay2: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }))
  }

  const handleArrayChange = (e) => {
    const { name, value } = e.target
    setNewGame((prevGame) => ({
      ...prevGame,
      [name]: value.split(',').map((item) => item.trim()),
    }))
  }

  return (
    <div className='bg-[#2E2E2E] text-[#D4D4D4] h-screen flex flex-col items-center pt-20'>
      <div>
        <img src={logo} alt='GameVault' className='h-[120px]' />
      </div>
      <div className='flex flex-row gap-2'>
        <div className='flex flex-col gap-2'>
          <div>
            <input
              type='text'
              placeholder='Title'
              name='title'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='number'
              placeholder='Price'
              name='price'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Genre (comma separated)'
              name='genre'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.genre.join(', ')}
              onChange={handleArrayChange}
            />
          </div>
          <div>
            <textarea
              type='text'
              placeholder='Description'
              name='desc'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md p-[24%]'
              value={newGame.desc}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <input
              type='number'
              placeholder='Year Released'
              name='releaseDate'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.releaseDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='External Link'
              name='externalLink'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.externalLink}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Developer'
              name='developer'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.developer}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Platform (comma separated)'
              name='platform'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.platform.join(', ')}
              onChange={handleArrayChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Image URL'
              name='image'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.image}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Icon URL'
              name='icon'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.icon}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Gameplay Image URL'
              name='gplay1'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.gplay1}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Gameplay Image URL'
              name='gplay2'
              className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
              value={newGame.gplay2}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              className='bg-[#842fd1] flex p-1 px-[113px] font-medium text-center border-2 border-[#5b1a87] outline-none rounded-md'
              onClick={handleAddGame}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-end w-full h-full box-border'>
        <Footer />
      </div>
    </div>
  )
}

export default AddGames
