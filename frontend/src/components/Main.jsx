import React, { useEffect } from 'react'
import { useGamesStore } from '../store/games'
import GameCard from './GameCard'

const Main = () => {
  const { fetchGames, games } = useGamesStore()

  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  return (
    <main className='flex flex-col h-full text-[#D4D4D4]'>
      <div className='bg-[#2B2B2B] w-full flex flex-col pt-4 pb-2'>
        <h2 className='self-center text-2xl'>Browse Games!</h2>
      </div>
      <div className='bg-[#2B2B2B] w-100 h-full'>
        <div className='p-4 grid grid-cols-4 justify-start gap-8 my-8 mx-16 overflow-x-auto'>
          {games.map((game) => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Main
