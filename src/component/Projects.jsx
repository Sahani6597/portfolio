import React from 'react'

const Data = [
    {
        p_no: 1,
        title: "LMS Mobile Application",
        desc: "Built a scalable LMS platform with course delivery and AI-based monitoring. Containerized backend using Docker and deployed on cloud infrastructure. Implemented CI/CD pipelines using GitHub Actions. Applied Infrastructure as Code concepts using Terraform (basic). Focused on system reliability, performance, and secure API design.",
        tags: ["React Native", "Node.js", "MongoDB", "Docker", "GitHub Actions", "Terraform"],
        site: "#"
    },
    {
        p_no: 2,
        title: "Clothing E-Commerce Platform",
        desc: "Developed full-stack e-commerce platform with authentication and payment integration. Optimized database queries and improved performance. Deployed using cloud platforms with CI/CD workflows. Followed secure coding practices aligned with DevSecOps basics.",
        tags: ["React.js", "Node.js", "MongoDB", "CI/CD", "Cloud Platforms"],
        site: "#"
    }
]

const Project = () => {
    return (
        <>
            <h1 className='text-center text-white poppins-bold md:text-5xl text-4xl md:mt-16 mt-8 mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10'>
                {Data.map((item, index) => (
                    <div className='glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:scale-105 hover:-translate-y-2 relative group' key={index}>
                        {/* Geometric elements */}
                        <div className='absolute inset-0 rounded-2xl border border-gray-400/20 group-hover:border-gray-300/40 transition-all duration-300'></div>
                        <div className='absolute top-6 left-6 w-8 h-8 bg-gray-400/10 clip-hexagon group-hover:bg-gray-300/20 transition-all duration-300'></div>
                        <div className='absolute bottom-6 right-6 w-6 h-6 bg-gray-500/10 rotate-45 group-hover:bg-gray-400/20 transition-all duration-300'></div>
                        <div className='bg-gradient-to-r from-gray-700/20 to-gray-600/20 py-6 px-6 flex items-center relative overflow-hidden'>
                            <div className='absolute inset-0 bg-gradient-to-r from-white/5 to-transparent'></div>
                            <div className='relative z-10 text-4xl font-bold text-gray-300 mr-4 bg-white/20 rounded-full w-12 h-12 flex items-center justify-center'>{item.p_no}</div>
                            <h2 className='relative z-10 text-2xl font-bold text-white'>{item.title}</h2>
                        </div>
                        <div className='p-8 bg-white/5'>
                            <p className='text-gray-200 mb-6 leading-relaxed'>{item.desc}</p>
                            <div className='flex flex-wrap gap-3 mb-6'>
                                {item.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className='px-4 py-2 bg-gradient-to-r from-gray-700/20 to-gray-600/20 text-gray-300 text-sm font-medium rounded-full border border-gray-400/30'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='mt-6'>
                                <a href={item.site} className='inline-block px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
                                    View Project
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Project