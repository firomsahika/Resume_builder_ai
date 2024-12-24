import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <div className='w-full flex flex-col h-screen'>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Home