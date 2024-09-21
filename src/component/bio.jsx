import React from 'react'
import pic from "../assets/pic.png"
function Bio() {
  return (
    <div className='mt-3 flex flex-col md:flex-row md:h-[80vh]  px-2 md:px-10'>
    <div className='w-full h-full md:w-3/5 text-slate-800 md:text-left text-center'>
      <h1 className='md:text-6xl text-4xl md:mt-20'>Sankalp Sahani</h1>
      <h3 className='mt-2 mb-6 poppins-bold md:text-5xl text-4xl bg-gradient-to-r from-slate-800 to-slate-500 w-[89%] bg-clip-text text-transparent'>Full Stack Developer</h3>
      <p className='text-lg poppins-semibold'>I am a seasoned Full Stack Developer and Software Engineer with a robust understanding of web development and advanced problem-solving skills. Currently, I am immersing myself in the dynamic field of web development, continually expanding my expertise and exploring new technologies to enhance my capabilities.</p>
    </div>
    <div className='flex items-center justify-center w-full  h-full md:w-2/5'>
      <div className='h-[40%] w-[90%] md:h-[80%] md:w-[80%] bg-black/45 backdrop-blur-3xl mt-5 md:-mt-5 rounded-xl '>
      <img src={pic} className='backdrop-brightness-75 backdrop-contrast-75 rounded-lg'/>
      </div>
    </div>
  </div>
  )
}

export default Bio