import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center flex-grow gap-y-10'>
            <div className='flex items-center justify-center text-center'>
                <p className='max-w-5xl text-7xl font-bold '>Your <span className='text-btn'>AI-Powered</span> Path to Standout Job Applications</p>
            </div>
            <div>
                <p className='text-2xl'>We leverage AI to optimize every aspect of your job applications.</p>
            </div>
            <div>
                <button className='text-xl px-6 py-5 bg-btn rounded-full text-white '>Get started -<span className='text-sm'>it's free</span></button>
            </div>
            <div>

            </div>
        </div >
    )
}

export default Hero