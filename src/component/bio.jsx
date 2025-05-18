import React from 'react'
import pic from "../assets/pic.png"

function Bio() {
  return (
    <div className='mt-3 flex flex-col md:flex-row md:h-[80vh] px-2 md:px-10'>
      <div className='w-full h-full md:w-3/5 text-indigo-900 md:text-left text-center'>
        <h1 className='md:text-6xl text-4xl md:mt-20 font-bold'>Sankalp Sahani</h1>
        <h3 className='mt-2 mb-6 poppins-bold md:text-5xl text-4xl bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent'>
          Full Stack Developer
        </h3>
        <p className='text-lg poppins-semibold leading-relaxed text-gray-700 max-w-2xl mx-auto md:mx-0'>
          I am a seasoned Full Stack Developer and Software Engineer with a robust understanding of web development and advanced problem-solving skills. Currently, I am immersing myself in the dynamic field of web development, continually expanding my expertise and exploring new technologies to enhance my capabilities.
        </p>
        <div className='mt-6'>
          <button href='#' className='inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md'>
            View Resume
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center w-full h-full md:w-2/5 mt-8 md:mt-0'>
        <div className='h-[40%] w-[90%] md:h-[80%] md:w-[80%] bg-gradient-to-br from-indigo-300/20 to-blue-500/20 backdrop-blur-sm mt-5 md:-mt-5 rounded-xl shadow-lg overflow-hidden'>
        <img src="/profule.png" 
     class="rounded-lg object-cover w-full h-full transform hover:scale-105 transition-transform duration-300" 
     alt="Profile" />

        </div>
      </div>
    </div>
  )
}

export default Bio