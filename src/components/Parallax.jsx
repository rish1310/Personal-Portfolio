import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';



function Parallax({ type }) {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const gradientClass =
        type === "skills"
            ? "bg-gradient-to-b from-[#111132] to-[#0c0c1d]"
            : "bg-gradient-to-b from-[#111132] to-[#505064]";
    const bgClass =
        type === "skills"
            ? "bg-[url('/planets.png')]"
            : "bg-[url('/sun.png')]";
    return (
        <div className={`${gradientClass} w-full h-full relative flex items-center justify-center overflow-hidden`} ref={ref}>
            <motion.h1 className='text-center text-7xl md:text-8xl z-[1] font-bold' style={{ y: yText }}>
                {type === 'skills' ? "What I've Learnt?" : "What I've Made?"}
            </motion.h1>
            <motion.div className="bg-[url('/mountains.png')] bg-no-repeat bg-contain md:bg-cover bg-bottom w-full h-full absolute z-[2]"></motion.div>
            <motion.div style={{ y: yBg }} className={`${bgClass} bg-no-repeat bg-contain md:bg-cover bg-bottom w-full h-full absolute z-[1]`}></motion.div>
            <motion.div style={{ x: yBg }} className="bg-[url('/stars.png')] bg-cover bg-bottom w-full h-full absolute"></motion.div>
        </div >
    )
}

export default Parallax