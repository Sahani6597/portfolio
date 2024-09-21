
import React from 'react'

const Project = () => {
    return (
        <>
            <h1 className='text-center text-slate-800 poppins-bold md:text-4xl text-3xl md:mt-10 mt-5 mb-4 '>Projects</h1>

            <div className='w-full h-32 flex items-center justify-center px-3 md:px-20 my-3 '>
                <div className='h-32 w-1/6 bg-slate-500 text-6xl flex items-center justify-center poppins-bold'>1.</div>
                <div className='h-32 px-2 py-1 bg-white/70 text-slate-700 -400 w-5/6 '>
                <h1 className='md:text-2xl text-lg poppins-semibold'>Learning Managemnet - Application</h1>
                <div className='text-slate-900 text-[13px] md:text-lg'>
                This LMS app, built with React Native, Node.js, and MongoDB, provides cross-platform learning, secure enrollment, and progress tracking. It supports offline access and interactive features for a seamless education experience.
                </div>
                </div>
            </div>
            <div className='w-full h-32 flex items-center justify-center px-3 md:px-20 my-3 '>
                <div className='h-32 w-1/6 bg-slate-500 text-6xl flex items-center justify-center poppins-bold'>2.</div>
                <div className='h-32 px-2 py-1 bg-white/70 text-slate-700 -400 w-5/6 '>
                <h1 className='md:text-2xl text-lg poppins-semibold'>Vibranze E-commerce - Website</h1>
                <div className='text-slate-900 text-[13px] md:text-lg'>
                This is built with React JS, Node.js, and MongoDB, provides cross-platform shopping, secure transactions, and order tracking. It supports offline access and interactive features for a seamless shopping experience.
                </div>
                </div>
            </div>
            <h3 className='relative left-[46%] w-24 text-center px-3 py-1 text-2xl bg-slate-700 rounded-2xl poppins-bold cursor-pointer text-white mt-3 mb-4'>More</h3>
        </>
    )
}

export default Project