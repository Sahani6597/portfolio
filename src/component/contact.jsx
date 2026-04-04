import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <h1 className='text-center text-white poppins-bold md:text-5xl text-4xl md:mt-16 mt-8 mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Get In Touch</h1>
      <div className='w-full flex justify-center items-center px-4'>
        <div className='glass shadow-2xl rounded-2xl p-8 max-w-lg w-full'>
          <div className='space-y-8'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold text-white mb-4'>Let's Connect</h2>
              <p className='text-gray-300'>I'm always open to discussing new opportunities and interesting projects.</p>
            </div>
            
            <div className='flex items-center gap-6 glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300'>
              <div className='bg-gray-600/20 p-4 rounded-full'>
                <FaPhoneAlt className='text-gray-300 text-2xl' />
              </div>
              <div>
                <h2 className='text-sm text-gray-400 font-medium'>Phone Number</h2>
                <p className='text-white font-semibold'>+91 93248 84523</p>
              </div>
            </div>
            
            <div className='flex items-center gap-6 glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300'>
              <div className='bg-gray-600/20 p-4 rounded-full'>
                <FaEnvelope className='text-gray-300 text-2xl' />
              </div>
              <div>
                <h2 className='text-sm text-gray-400 font-medium'>Email</h2>
                <p className='text-white font-semibold'>Sahani6597@gmail.com</p>
              </div>
            </div>
            
            <div className='pt-6'>
              <a 
                href='mailto:Sahani6597@gmail.com' 
                className='block w-full py-4 px-6 bg-gradient-to-r from-gray-600 to-gray-500 text-white text-center rounded-full font-semibold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact