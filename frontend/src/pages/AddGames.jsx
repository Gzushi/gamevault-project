import React, { useState } from 'react'
import { useGamesStore } from '../store/games'

const AddGames = () => {
  const [newGame, setNewGame] = useState({
    title: '',
    price: '',
    genre: '',
    desc: '',
    releaseDate: '',
    externalLink: '',
    developer: '',
    systemRequire: '',
    image: '',
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
      })
    }
    setNewGame({
      title: '',
      price: '',
      genre: '',
      desc: '',
      releaseDate: '',
      externalLink: '',
      developer: '',
      systemRequire: '',
      image: '',
    })
  }

  return (
    <div className='bg-[#2E2E2E] p-8'>
      <div>
        <input
          type='text'
          placeholder='Title'
          className='bg-[#3D3D3D]'
          value={newGame.title}
          onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='Price'
          className='bg-[#3D3D3D]'
          value={newGame.price}
          onChange={(e) => setNewGame({ ...newGame, price: e.target.value })}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Genre'
          className='bg-[#3D3D3D]'
          value={newGame.genre}
          onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Description'
          className='bg-[#3D3D3D]'
          value={newGame.desc}
          onChange={(e) => setNewGame({ ...newGame, desc: e.target.value })}
        />
      </div>
      <div>
        <input
          type='number'
          placeholder='Year Released'
          className='bg-[#3D3D3D]'
          value={newGame.releaseDate}
          onChange={(e) =>
            setNewGame({ ...newGame, releaseDate: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='External Link'
          className='bg-[#3D3D3D]'
          value={newGame.externalLink}
          onChange={(e) =>
            setNewGame({ ...newGame, externalLink: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Developer'
          className='bg-[#3D3D3D]'
          value={newGame.developer}
          onChange={(e) =>
            setNewGame({ ...newGame, developer: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='System Requirements'
          className='bg-[#3D3D3D]'
          value={newGame.systemRequire}
          onChange={(e) =>
            setNewGame({ ...newGame, systemRequire: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Image URL'
          className='bg-[#3D3D3D]'
          value={newGame.image}
          onChange={(e) => setNewGame({ ...newGame, image: e.target.value })}
        />
      </div>
      <div>
        <button className='bg-[#3D3D3D] text-[#9E9E9E]' onClick={handleAddGame}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddGames
