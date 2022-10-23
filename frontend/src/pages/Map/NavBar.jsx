import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const toggleClick = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-white/30 fixed drop-shadlow-lg backdrop-blur-md'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <h1 className='text-2xl text-white font-bold mr-4 sm:text-3xl'>Synthwave</h1>
                    <ul className='text-white hidden md:flex'>
                        <li>Countdown</li>
                        <li>Map</li>
                        <li>Progress</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='md:hidden' onClick={toggleClick}>
                    {!nav ? <svg className="w-6 stroke-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        : <svg className="w-6 h-6 stroke-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                </div>
            </div>
            {/* <Link to={"/map"}>Map</Link> */}
            <ul className={!nav ? 'hidden' : 'absolute bg-white/30 w-full px-8 fixed drop-shadlow-lg backdrop-blur-md'}>
                <li className='border-b-2 border-zinc-300 w-full py-3'><Link to={"/"}>Countdown</Link></li>
                <li className='border-b-2 border-zinc-300 w-full py-3'>Map</li>
                <li className='border-b-2 border-zinc-300 w-full py-3'>Progress</li>
                <li className='border-b-2 border-zinc-300 w-full py-3'>About</li>
            </ul>
        </div>
    )
}

export default NavBar