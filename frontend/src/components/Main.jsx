import React, { useEffect } from 'react'
import DefaultLayout from "../layouts/defaultlayout";
import GameCard from './GameCard'
import { useGamesStore } from '../store/games';

const Main = () => {
    const { fetchGames, games } = useGamesStore()

    useEffect(() => {
        fetchGames()
    }, [fetchGames])

    return (
        <DefaultLayout>
            <main className='flex flex-col h-full text-[#D4D4D4]'>
                <div className='bg-[#2B2B2B] px-8 py-12'>
                    <div className='bg-[#171717] w-full flex flex-col py-5 rounded-t-md'>
                        <h2 className='self-center text-2xl'>Browse Games!</h2>
                    </div>
                    <div className='bg-[#171717] w-100 h-ful rounded-b-md'>
                        <div className='p-4 grid grid-cols-4 justify-start gap-4 p-5overflow-x-auto'>
                            {games.map((game) => (
                                <GameCard key={game._id} game={game} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </DefaultLayout>
    )
}

export default Main
