import React from 'react'
import logo from '../assets/images/tempgamelogo.png'
import profile from '../assets/images/profiletemp.jpg'

const Main = () => {
    return (
        <main className='flex flex-col'>
            <div className='bg-[#3D3D3D] w-full flex flex-col pt-4 pb-2'>
                <h2 className='text-white self-center text-2xl'>Browse Games!</h2>
            </div>
            <div className='bg-[#3D3D3D] text-white w-100'>
                <div className='p-4 grid grid-cols-4 justify-items-center content-center gap-8 gap-x-8 gap-y-12 my-8 mx-16'>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="https://vyvymanga.net/manga/imouto-sae-ireba-ii-comic">
                            <img src={ logo } alt="templogo"/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="https://vyvymanga.net/manga/imouto-sae-ireba-ii-comic">
                            <img src={ logo } alt="templogo"/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="https://vyvymanga.net/manga/imouto-sae-ireba-ii-comic">
                            <img src={ logo } alt="templogo"/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="https://vyvymanga.net/manga/imouto-sae-ireba-ii-comic">
                            <img src={ logo } alt="templogo"/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="https://vyvymanga.net/manga/imouto-sae-ireba-ii-comic">
                            <img src={ logo } alt="templogo"/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='bg-[#363636] flex flex-col w-100 gap-4'>
                        <a href="https://vyvymanga.net/manga/imouto-sae-ireba-ii-comic">
                            <img src={ logo } alt="templogo"/>
                            <div className='flex items-center p-1 gap-2'>
                                <img src={ profile } alt="profiletemp" className='h-10'/>
                                <div>
                                    <h1>Genshin Impact</h1>
                                    <p>Hoyoverse</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
