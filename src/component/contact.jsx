import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

function Contact() {
  return (
    <>
      <h1 className='mt-4 text-center md:text-4xl text-3xl poppins-bold text-indigo-900 mb-8'>Contact Me</h1>
      <div className='w-full flex justify-center items-center px-4'>
        <div className='bg-white/90 shadow-lg rounded-xl p-8 max-w-md w-full'>
          <div className='space-y-6'>
            <div className='flex items-center gap-4'>
              <div className='bg-indigo-100 p-3 rounded-full'>
                <FaPhoneAlt className='text-indigo-600 text-xl' />
              </div>
              <div>
                <h2 className='text-sm text-gray-500 font-medium'>Phone Number</h2>
                <p className='text-indigo-800 font-semibold'>+91 9324884523</p>
              </div>
            </div>
            
            <div className='flex items-center gap-4'>
              <div className='bg-indigo-100 p-3 rounded-full'>
                <FaEnvelope className='text-indigo-600 text-xl' />
              </div>
              <div>
                <h2 className='text-sm text-gray-500 font-medium'>Email</h2>
                <p className='text-indigo-800 font-semibold'>sahani6597@gmail.com</p>
              </div>
            </div>
            
            <div className='pt-4'>
              <a 
                href='mailto:sahani6597@gmail.com' 
                className='block w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-center rounded-lg font-medium hover:from-indigo-700 hover:to-blue-600 transition-colors shadow-md'
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