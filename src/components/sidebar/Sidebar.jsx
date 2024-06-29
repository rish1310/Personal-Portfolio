import React, { useState } from 'react'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { animate, delay, motion } from 'framer-motion'

function Sidebar() {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: 'circle(1200px at 50px 50px)',
            transition: {
                type: 'spring',
                stiffness: 20,
            }
        },
        closed: {
            clipPath: 'circle(30px at 50px 50px)',
            transition: {
                delay: 0.5,
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div
            className='z-50 flex flex-col items-center justify-center bg-white text-black'
            animate={open ? 'open' : 'closed'}
        >
            <motion.div className='z-50 fixed top-0 left-0 bottom-0 w-80 bg-white' variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar