import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaGlobe, FaGithub, FaLinkedin } from 'react-icons/fa'

function Bio() {
  return (
    <div className='mt-0 px-4 md:px-10 py-8'>
      <div className='w-full text-white text-center'>
        <h1 className='text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
          Sankalp Sahani
        </h1>
        <h3 className='mt-4 mb-8 poppins-bold text-3xl md:text-4xl text-gray-300'>
          DevOps Engineer / Full Stack Developer
        </h3>
        <p className='text-lg poppins-semibold leading-relaxed text-gray-400 max-w-4xl mx-auto mb-8'>
       DevOps and Cloud Engineer with experience in containerization, CI/CD automation, and scalable deployments. Skilled in Docker, Kubernetes, GitHub Actions, and Terraform, with strong foundations in networking and system administration. Experienced in building secure, highly available systems on AWS and Azure.
</br>
Also a Full Stack Developer with hands-on experience in React, React Native, Node.js, and MongoDB, building end-to-end applications and integrating them with efficient deployment pipelines.
        </p>
        
        {/* Contact Info */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto'>
          <div className='flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300'>
            <FaPhoneAlt className='text-gray-300 text-xl' />
            <div>
              <h4 className='text-sm text-gray-500 font-medium'>Phone</h4>
              <span className='text-white'>+91 93248 84523</span>
            </div>
          </div>
          <div className='flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300'>
            <FaEnvelope className='text-gray-300 text-xl' />
            <div>
              <h4 className='text-sm text-gray-500 font-medium'>Email</h4>
              <span className='text-white'>Sahani6597@gmail.com</span>
            </div>
          </div>
          <div className='flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300 md:col-span-2'>
            <FaGlobe className='text-gray-300 text-xl' />
            <div>
              <h4 className='text-sm text-gray-500 font-medium'>Website</h4>
              <a href='https://iamsahani.vercel.io' className='text-gray-300 hover:text-white transition-colors'>iamsahani.vercel.io</a>
            </div>
          </div>
          <div className='flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300'>
            <FaGithub className='text-gray-300 text-xl' />
            <a href='https://github.com/Sahani6597' className='text-gray-300 hover:text-white transition-colors'>
              <div>
                <h4 className='text-sm text-gray-500 font-medium'>GitHub</h4>
                <span>github.com/Sahani6597</span>
              </div>
            </a>
          </div>
          <div className='flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-all duration-300'>
            <FaLinkedin className='text-gray-300 text-xl' />
            <a href='https://linkedin.com/in/sahani6597' className='text-gray-300 hover:text-white transition-colors'>
              <div>
                <h4 className='text-sm text-gray-500 font-medium'>LinkedIn</h4>
                <span>linkedin.com/in/sahani6597</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className='mt-8'>
          <a href='#' className='inline-block px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
            View Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
