import React from 'react'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <div className='w-full h-20 flex items-center justify-between px-2 md:px-10 '>
                <div className='px-4 py-2 bg-slate-500 text- text-2xl md:text-3xl  poppins-bold rounded-3xl pointer-cursor'><a href='#'>Skillbot</a></div>
                <div className='flex justify-center items-center px-4 py-2 gap-3 rounded-3xl text-2xl md:text-3xl poppins-bold bg-slate-500 text-white'>
                    <a href='https://www.linkedin.com/in/sahani6597?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='hover:scale-110'><FaLinkedin /></a>
                    <a href='https://wa.me/9324884523
'  className='hover:scale-110'><FaWhatsapp /></a>
                    <a href='#' className='hover:scale-110'><FaFacebook /></a>
                    <a href='mailto:sahani6597@gmail.com' className='hover:scale-110'><FaEnvelope /></a>
                    <a href='https://github.com/sahani6597
' className='hover:scale-110'><FaGithub /></a>
                </div>
            </div>
        </>
    )
}

export default Navbar