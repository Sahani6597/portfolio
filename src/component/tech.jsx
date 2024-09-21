import React from 'react'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb, SiTypescript } from 'react-icons/si'

function Tech() {
  return (
    <div className='mt-10 px-2 h- w-full text-center'>
        <h1 className='text-4xl poppins-bold text-slate-800 mb-4'>Technologies</h1>
        <div className='flex justify-center h-20 gap-2 md:gap-4 items-center '>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><FaNodeJs/></div>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><FaReact/></div>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><GrMysql/></div>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><SiExpress/></div>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><SiTypescript/></div>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><RiTailwindCssFill/></div>
        <div className='text-3xl md:text-5xl px-3 py-3 rounded-2xl bg-slate-700 text-white'><SiMongodb/>
        </div>
        </div>
    </div>
  )
}

export default Tech