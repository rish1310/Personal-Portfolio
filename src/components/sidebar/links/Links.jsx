import { motion } from 'framer-motion'
import React from 'react'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}

function Links() {
    const items = [
        "Homepage",
        "Skills",
        "Projects",
        "Contact",
        // "About",
    ]

    return (
        <motion.div
            className='z-50 absolute w-full h-full flex flex-col items-center justify-center gap-5 text-4xl'
            variants={variants}
        >
            {items.map((item) => (
                <motion.a key={item} href={`#${item}`} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    {item}
                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links