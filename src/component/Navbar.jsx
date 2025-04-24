import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-20 flex items-center justify-between px-2 md:px-10'>
                <div className='px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-2xl md:text-3xl poppins-bold rounded-3xl shadow-md hover:shadow-lg transition-all duration-300'>
                    <a href='#' className='font-bold'>iAmSahani</a>
                </div>
                <div className='flex justify-center items-center px-4 py-2 gap-3 rounded-3xl text-2xl md:text-3xl poppins-bold bg-white/80 shadow-md backdrop-blur-sm'>
                    <a href='https://www.linkedin.com/in/sahani6597?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='text-blue-600 hover:scale-110 transition-transform'><FaLinkedin /></a>
                    <a href='https://wa.me/9324884523' className='text-green-600 hover:scale-110 transition-transform'><FaWhatsapp /></a>
                    <a href='#' className='text-blue-800 hover:scale-110 transition-transform'><FaFacebook /></a>
                    <a href='mailto:sahani6597@gmail.com' className='text-red-500 hover:scale-110 transition-transform'><FaEnvelope /></a>
                    <a href='https://github.com/sahani6597' className='text-gray-800 hover:scale-110 transition-transform'><FaGithub /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar