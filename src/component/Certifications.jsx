import React from 'react'
import { FaCertificate } from 'react-icons/fa'

function Certifications() {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      status: "In Progress"
    },
    {
      title: "Docker Essentials – IBM",
      status: "Completed"
    }
  ]

  return (
    <>
      <h1 className='text-center text-white poppins-bold md:text-5xl text-4xl md:mt-16 mt-8 mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Certifications</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10'>
        {certifications.map((cert, index) => (
          <div className='glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:-translate-y-2' key={index}>
            <div className='bg-gradient-to-r from-gray-700/20 to-gray-600/20 py-6 px-6 flex items-center relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent'></div>
              <FaCertificate className='relative z-10 text-gray-300 text-4xl mr-4' />
              <h2 className='relative z-10 text-2xl font-bold text-white'>{cert.title}</h2>
            </div>
            <div className='p-8 bg-white/5'>
              <span className={`px-6 py-3 rounded-full text-sm font-semibold ${
                cert.status === 'Completed' 
                  ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                  : 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
              }`}>
                {cert.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Certifications