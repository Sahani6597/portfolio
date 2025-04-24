import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'

function Tech() {
  const technologies = [
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      description: "Server-side JavaScript runtime for building scalable network applications.",
      bgColor: "bg-gradient-to-br from-green-600 to-green-700"
    },
    {
      icon: <FaReact />,
      name: "React",
      description: "Frontend library for building interactive user interfaces with reusable components.",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      icon: <GrMysql />,
      name: "MySQL",
      description: "Relational database management system for structured data storage and queries.",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      icon: <SiExpress />,
      name: "Express",
      description: "Minimal and flexible Node.js web application framework for building APIs and web servers.",
      bgColor: "bg-gradient-to-br from-gray-700 to-gray-800"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      description: "JavaScript superset that adds static types for enhanced code quality and developer experience.",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      icon: <RiTailwindCssFill />,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for creating custom designs without leaving your HTML.",
      bgColor: "bg-gradient-to-br from-cyan-500 to-cyan-600"
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      description: "NoSQL document database providing high performance, high availability, and easy scalability.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600"
    }
  ];

  return (
    <div className='mt-10 px-2 w-full text-center'>
      <h1 className='text-4xl poppins-bold text-indigo-900 mb-6'>Technologies</h1>
      <p className='text-lg mb-8 max-w-3xl mx-auto text-gray-700'>
        My technical expertise spans across modern web technologies, enabling me to build full-stack applications with responsive interfaces and robust backends.
      </p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {technologies.map((tech, index) => (
          <div key={index} className='bg-white/90 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden'>
            <div className={`py-4 text-white ${tech.bgColor}`}>
              <div className='text-5xl flex justify-center'>{tech.icon}</div>
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2 text-indigo-800'>{tech.name}</h3>
              <p className='text-sm text-gray-600'>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tech