import React from 'react'
import { motion } from 'framer-motion'
import Sidebar from './sidebar/Sidebar'

function Navbar() {
    return (
        <div className='h-[100px]'>
            <Sidebar />
            <div className=" max-w-[1280px] m-auto flex items-center justify-end p-5 md:justify-between h-full">
                <motion.a
                    href='#Homepage'
                    className='font-bold cursor-pointer hidden md:block'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >Rishabh's Portfolio</motion.a>
                <div className="flex gap-5">
                    <a target='_blank' href="https://github.com/rish1310"><img className='h-5' src="/github.png" alt="" /></a>
                    <a target='_blank' href="https://www.linkedin.com/in/rishabhtripathi13/"><img className='h-5' src="/linkedin.png" alt="" /></a>
                    {/* <a href="#"><img className='h-5' src="/instagram.png" alt="" /></a> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar