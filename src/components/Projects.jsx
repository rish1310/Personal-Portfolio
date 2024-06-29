import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Palzone',
        img: './palzone.png',
        desc: 'A vibrant social media platform designed to connect people from all walks of life.',
        demo: 'https://palzone.vercel.app/',
        github: 'https://github.com/rish1310/PalZone',
    },
    {
        id: 2,
        title: 'Appwrite Blog',
        img: './appwriteblog.png',
        desc: 'A Blogging Website using React for frontend and Appwrite for backend.',
        demo: 'https://react-appwrite-blog-one.vercel.app/',
        github: 'https://github.com/rish1310/React-Appwrite-Blog',
    },
    {
        id: 3,
        title: 'Currency Converter',
        img: './currency.png',
        desc: 'Currency Convertor using React.js & Tailwind CSS with real-time data from API.',
        demo: 'https://currency-convertor-nine-chi.vercel.app/',
        github: 'https://github.com/rish1310/Currency-Convertor',
    },
    {
        id: 4,
        title: 'BlogIT',
        img: './blogit.png',
        desc: 'A simple Blog Website where you can post, edit and delete your blogs. Built using EJS & Bootstrap CSS.',
        demo: 'https://blog-it-f51h.onrender.com/',
        github: 'https://github.com/rish1310/Blog-IT',
    },
    {
        id: 5,
        title: 'Simon Game',
        img: './simon.png',
        desc: 'An entertaining memory game based on "Simon Says" but using colors.',
        demo: 'https://rish1310.github.io/Simon-Game/',
        github: 'https://github.com/rish1310/Simon-Game',
    },
    {
        id: 6,
        title: 'Todo List',
        img: './todo.png',
        desc: 'A functioning ToDo List website where you add & delete items in your list.',
        demo: 'https://todo-list-bvsk.onrender.com/',
        github: 'https://github.com/rish1310/ToDo-List',
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section className='h-auto md:h-screen snap-center'>
            <div className='flex flex-col md:flex-row items-center justify-center w-full h-full overflow-hidden'>
                <div className='max-w-[1280px] h-full m-auto flex flex-col md:flex-row mt-32 md:mt-0 gap-32 md:gap-12 items-center justify-center px-4 md:px-0'>
                    <div className='flex-1 h-1/2 md:h-auto' ref={ref}>
                        <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                    </div>
                    <motion.div className='flex flex-1 flex-col gap-4 md:gap-7 mt-20 md:mt-0' style={{ y }}>
                        <h2 className='text-4xl md:text-7xl font-semibold'>{item.title}</h2>
                        <p className='text-gray-500 text-lg md:text-xl'>{item.desc}</p>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-4'>
                            <a href={item.demo} target='_blank'>
                                <button className='bg-[#FFA500] rounded-[10px] p-2 w-full md:w-44 cursor-pointer text-black hover:bg-transparent hover:border hover:border-[#FFA500] hover:text-[#FFA500]'>See Demo</button>
                            </a>
                            <a href={item.github} target='_blank'>
                                <button className='bg-none border border-[#FFA500] rounded-[10px] p-2 w-full md:w-44 cursor-pointer text-[#FFA500] hover:bg-[#FFA500] hover:text-black'>GitHub Repo</button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function Projects() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 30,
    });

    return (
        <div ref={ref} className='relative'>
            <div className='sticky top-0 left-0 pt-12 pb-4 text-center text-[#FFA500] text-3xl md:text-5xl font-bold'>
                <h1 className='tracking-wider mb-2'>MY PROJECTS</h1>
                <motion.div style={{ scaleX }} className='h-1 md:h-2 bg-white'></motion.div>
            </div>
            {items.map((item) => <Single key={item.id} item={item} />)}
        </div>
    )
}

export default Projects;
