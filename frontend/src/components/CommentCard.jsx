import React from 'react'
import userprofile from '../assets/images/Aether.jpg'
import report from '../assets/images/alert-triangle.svg'

const CommentCard = () => {
return (
    <div className='bg-[#212121] text-[#D4D4D4] font-sans grid grid-col justify-between gap-2 p-0.5 rounded-md'>
        <div className='bg-[#2B2B2B] p-4 rounded-md flex flex-row gap-4'>
            <img src={ userprofile } alt="Aether" className='bg-[#411769] w-12 h-12 rounded-[50%]'/>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <p className='font-bold'>Aether</p>
                    <button className='min-w-6'>
                        <img src={ report } alt="Report" />
                    </button>
                </div>
                <p>
                    Hu Tao, the 77th Director of the Wangsheng Funeral Parlor, is an enigma of unparalleled allure, a perfect fusion of playful mischief and profound wisdom, whose every smile carries an air of mystery and charm that could brighten even the darkest corners of Liyue; her mastery of poetic expression, laced with a whimsical yet heartfelt understanding of life and death, creates an irresistible aura of fascination, making every word she speaks feel like a song of the soul, every mischievous glance a spark of joy, and every step she takes a dance between the realms of the living and the departed, leaving me utterly entranced and hopelessly captivated, as though her very existence were a beautifully written ode to the fleeting beauty of life itself.
                </p>
            </div>
        </div>
    </div>
    )
}

export default CommentCard
