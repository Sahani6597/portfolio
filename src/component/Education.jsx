import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'

function Education() {
  const education = [
    {
      degree: "BSc Information Technology",
      institution: "DG Ruparel College – Mumbai University",
      period: "2024 – 2025",
      details: "CGPA: 9.45 / 10"
    },
    {
      degree: "HSC (Maharashtra State Board)",
      institution: "",
      period: "2023",
      details: "Score: 91.17%"
    },
    {
      degree: "SSC (Maharashtra State Board)",
      institution: "",
      period: "2020",
      details: "Score: 84.20%"
    }
  ]

  const coursework = [
    "Cloud Computing",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Data Structures",
    "UNIX Tools and Scripting",
    "Computer Security"
  ]

  return (
    <>
      <h1 className='text-center text-white poppins-bold md:text-5xl text-4xl md:mt-16 mt-8 mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Education</h1>
      <div className='space-y-8 px-4 md:px-10'>
        {education.map((edu, index) => (
          <div className='glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-102' key={index}>
            <div className='bg-gradient-to-r from-gray-700/20 to-gray-600/20 py-6 px-6 flex items-center justify-between relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-white/5 to-transparent'></div>
              <div className='relative z-10 flex items-center'>
                <FaGraduationCap className='text-gray-300 text-3xl mr-4' />
                <div>
                  <h2 className='text-2xl font-bold text-white'>{edu.degree}</h2>
                  {edu.institution && <p className='text-gray-300 text-lg'>{edu.institution}</p>}
                </div>
              </div>
              <div className='relative z-10 text-white font-semibold text-lg bg-white/10 px-4 py-2 rounded-full'>
                {edu.period}
              </div>
            </div>
            <div className='p-8 bg-white/5'>
              <p className='text-cyan-300 font-semibold text-lg'>{edu.details}</p>
            </div>
          </div>
        ))}
        
        <div className='glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-102'>
          <div className='bg-gradient-to-r from-gray-700/20 to-gray-600/20 py-6 px-6 relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-r from-white/10 to-transparent'></div>
            <h2 className='relative z-10 text-2xl font-bold text-white flex items-center'>
              <FaGraduationCap className='text-gray-300 text-3xl mr-4' />
              Coursework
            </h2>
          </div>
          <div className='p-8 bg-white/5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {coursework.map((course, index) => (
                <div key={index} className='text-gray-200 text-sm flex items-center'>
                  <span className='text-gray-400 mr-3'>•</span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Education