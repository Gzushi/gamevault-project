import React, { useState } from 'react'
import { useGamesStore } from '../store/games'
import Footer from "../components/Footer";
import logo from '../assets/images/GameVault.png'

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
        <div className='bg-[#2E2E2E] text-[#D4D4D4] font-sans h-screen flex flex-col items-center pt-20'>
            <div>
                <img src={ logo } alt='GameVault' className='h-[120px]'/>
            </div>
            <div className='flex flex-row gap-2'>
                <div className='flex flex-col gap-2'>
                    <div>
                        <input
                        type='text'
                        placeholder='Title'
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        value={newGame.title}
                        onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                        type='number'
                        placeholder='Price'
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        value={newGame.price}
                        onChange={(e) => setNewGame({ ...newGame, price: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                        type='text'
                        placeholder='Genre'
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        value={newGame.genre}
                        onChange={(e) => setNewGame({ ...newGame, genre: e.target.value })}
                        />
                    </div>
                    <div>
                        <input
                        type='text'
                        placeholder='Description'
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md p-[24%]  '
                        value={newGame.desc}
                        onChange={(e) => setNewGame({ ...newGame, desc: e.target.value })}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <input
                        type='number'
                        placeholder='Year Released'
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
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
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
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
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
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
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
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
                        className='bg-[#212121] flex p-1 pl-4 pr-20 border-2 border-[#363636] outline-none rounded-md'
                        value={newGame.image}
                        onChange={(e) => setNewGame({ ...newGame, image: e.target.value })}
                        />
                    </div>
                    <div>
                        <button className='bg-[#842fd1] flex p-1 px-[113px] font-medium text-center border-2 border-[#5b1a87] outline-none rounded-md'
                        onClick={handleAddGame}
                        >
                        Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-end w-full h-full box-border">
                <Footer />
            </div>
        </div>
    )
}

export default AddGames
