import React from 'react'
import { FaBriefcase } from 'react-icons/fa'

function Experience() {
  const experiences = [
    {
      title: "Network Administrator",
      company: "Eduquity Pvt. Ltd.",
      period: "2023 – Present",
      responsibilities: [
        "Managed Windows and Linux-based servers for infrastructure operations.",
        "Configured and maintained DNS, DHCP, and network access services.",
        "Monitored network performance and ensured high availability with minimal downtime.",
        "Implemented secure access control and assisted in system hardening practices.",
        "Applied TCP/IP, routing, and load balancing concepts to optimize performance."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Vibebranza.com",
      period: "Jun 2023 – Nov 2023",
      responsibilities: [
        "Developed backend services and REST APIs using Node.js and MongoDB.",
        "Built CI/CD pipelines using GitHub Actions for automated deployments.",
        "Deployed applications on Azure ensuring scalability and performance.",
        "Improved application performance by 25% through optimization."
      ]
    },
    {
      title: "Freelance Developer",
      company: "",
      period: "Jun 2025 – Mar 2026",
      responsibilities: [
        "Delivered cloud-based applications with CI/CD pipelines and containerized environments.",
        "Used Docker to ensure consistency across development and production.",
        "Designed scalable deployment architectures.",
        "Troubleshot environment-specific issues and optimized performance."
      ]
    }
  ]

  return (
    <>
      <h1 className='text-center text-white poppins-bold md:text-5xl text-4xl md:mt-16 mt-8 mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Experience</h1>
      <div className='space-y-8 px-4 md:px-10'>
        {experiences.map((exp, index) => (
          <div className='glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-102' key={index}>
            <div className='bg-gradient-to-r from-gray-700/20 to-gray-600/20 py-6 px-6 flex items-center justify-between relative overflow-hidden'>
              <div className='absolute inset-0 bg-gradient-to-r from-white/5 to-transparent'></div>
              <div className='relative z-10 flex items-center'>
                <FaBriefcase className='text-gray-300 text-3xl mr-4' />
                <div>
                  <h2 className='text-2xl font-bold text-white'>{exp.title}</h2>
                  {exp.company && <p className='text-gray-300 text-lg'>{exp.company}</p>}
                </div>
              </div>
              <div className='relative z-10 text-white font-semibold text-lg bg-white/10 px-4 py-2 rounded-full'>
                {exp.period}
              </div>
            </div>
            <div className='p-8 bg-white/5'>
              <ul className='text-gray-200 space-y-3'>
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className='text-sm leading-relaxed flex items-start'>
                    <span className='text-gray-400 mr-3 mt-1 text-lg'>•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Experience