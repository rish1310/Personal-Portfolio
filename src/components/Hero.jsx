import { motion } from 'framer-motion';
import React from 'react';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
        }
    },
};

const imageVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
};

function Hero() {
    return (
        <div className='h-full bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative max-w-[100vw] overflow-x-hidden'>
            <div className='max-w-[1280px] h-full m-auto'>
                <motion.div className='md:h-full md:w-1/2 flex flex-col md:justify-center md:items-start md:text-left items-center text-center gap-5 md:gap-10 h-1/2 w-full md:mb-auto' variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 className='text-2xl text-[#FFA500] tracking-[10px] font-bold' variants={textVariants}>RISHABH TRIPATHI</motion.h2>
                    <motion.h1 className='text-4xl md:text-7xl font-semibold' variants={textVariants}>Full Stack <br />Web Developer</motion.h1>
                    <motion.div>
                        <a href="#Projects">
                            <motion.button
                                className='w-2/3 md:w-auto md:mb-auto mb-5 p-4 border border-white rounded-[10px] bg-transparent text-white mr-5 cursor-pointer font-[300] hover:text-black hover:bg-white' variants={textVariants}>
                                See my Latest Works
                            </motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button
                                className='w-2/3 md:w-auto p-4 border border-white rounded-[10px] bg-white text-black mr-5 cursor-pointer font-[300] hover:text-white hover:bg-transparent' variants={textVariants}>
                                Contact Me
                            </motion.button>
                        </a>
                    </motion.div>
                    <motion.img className='w-[50px]' variants={textVariants} animate='scrollButton' src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className='absolute text-[20vh] bottom-16 whitespace-nowrap text-opacity-15 text-gray-700 font-bold w-1/2' variants={sliderVariants} initial='initial' animate='animate'>
                Front End Back End MongoDB Express React Node
            </motion.div>
            <div className='overflow-hidden md:h-full m-0 p-0 absolute md:top-0 md:right-[100px] md:w-auto h-1/2 w-full bottom-0'>
                <motion.img className='md:mt-[100px] md:h-[200%] md:w-auto w-full select-none pointer-events-none' src="./hero.png" alt="" variants={imageVariants} initial='initial' animate='animate' />
            </div>
        </div>
    );
}

export default Hero;
