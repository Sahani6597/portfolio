import React from 'react'

const Data = [
    {
        p_no: 1,
        title: "Learning Management - Application",
        desc: "This LMS app, built with React Native, Node.js, and MongoDB, provides cross-platform learning, secure enrollment, and progress tracking. It supports offline access and interactive features for a seamless education experience.",
        tags: ["React Native", "Node.js", "MongoDB"],
        site:"#"
    },
    {
        p_no: 2,
        title: "Blog420 - Website", 
        desc: "A cross-platform e-commerce application built with React.js, Node.js, and MongoDB. It offers a seamless shopping experience with secure transactions, real-time order tracking, and offline support. Designed for performance and interactivity, it features intuitive navigation, personalized user interfaces, and robust backend integration to ensure reliability and scalability across devices.",
        tags: ["Next Js", "Supabase", "PostgreSQL"],
        site:"https://Blog420.site"
    },
    {
        p_no: 2,
        title: "Vibranze E-commerce - Website", 
        desc: "This is built with React JS, Node.js, and MongoDB, provides cross-platform shopping, secure transactions, and order tracking. It supports offline access and interactive features for a seamless shopping experience.",
        tags: ["React", "Node.js", "MongoDB"],
        site:"#"
    },
    
]

const Project = () => {
    return (
        <>
            <h1 className='text-center text-indigo-900 poppins-bold md:text-4xl text-3xl md:mt-10 mt-5 mb-8'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-10'>
                {Data.map((item, index) => (
                    <div className='bg-white/90 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1' key={index}>
                        <div className='bg-gradient-to-r from-indigo-600 to-blue-500 py-4 px-6 flex items-center'>
                            <div className='text-3xl font-bold text-white'>{item.p_no}</div>
                            <h2 className='text-xl font-bold text-white ml-4'>{item.title}</h2>
                        </div>
                        <div className='p-6'>
                            <p className='text-gray-700 mb-4'>{item.desc}</p>
                            <div className='flex flex-wrap gap-2'>
                                {item.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className='px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full'>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className='mt-4'>
                                <a href={item.site} className='inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors'>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Project