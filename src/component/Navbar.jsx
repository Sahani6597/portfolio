import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-20 flex items-center justify-between px-4 md:px-10'>
                <div className='px-6 py-3 glass text-white text-2xl md:text-3xl poppins-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105'>
                    <a href='#' className='font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>iAmSahani</a>
                </div>
                <div className='flex justify-center items-center px-6 py-3 gap-4 rounded-full text-2xl md:text-3xl poppins-bold glass shadow-2xl backdrop-blur-sm'>
                    <a href='https://www.linkedin.com/in/sahani6597?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='text-gray-300 hover:text-white hover:scale-110 transition-all duration-300'><FaLinkedin /></a>
                    <a href='https://wa.me/9324884523' className='text-gray-300 hover:text-white hover:scale-110 transition-all duration-300'><FaWhatsapp /></a>
                    <a href='#' className='text-gray-300 hover:text-white hover:scale-110 transition-all duration-300'><FaFacebook /></a>
                    <a href='mailto:sahani6597@gmail.com' className='text-gray-300 hover:text-white hover:scale-110 transition-all duration-300'><FaEnvelope /></a>
                    <a href='https://github.com/sahani6597' className='text-gray-300 hover:text-white hover:scale-110 transition-all duration-300'><FaGithub /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar