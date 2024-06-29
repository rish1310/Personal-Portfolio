import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const containerVariants = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            staggerChildren: 0.3,
        },
    },
};

const textVariants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};

const skillVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const hoverEffect = {
    whileHover: {
        scale: 1.2,
        // rotate: -5,
        boxShadow: "0px 0px 10px rgba(255, 165, 0, 0.5)",
        transition: {
            duration: 0.2,
        },
    },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
};

const skillsData = {
    frontend: [
        { name: "HTML", logo: "/html-logo.png" },
        { name: "CSS", logo: "/css-logo.png" },
        { name: "EJS", logo: "/ejs-logo.png" },
        { name: "React", logo: "/react-logo.png" },
        { name: "Redux", logo: "/redux-logo.png" },
        { name: "Tailwind", logo: "/tailwind-logo.png" },
    ],
    backend: [
        { name: "Node.js", logo: "/nodejs-logo.png" },
        { name: "Express", logo: "/expressjs-logo.png" },
        { name: "MongoDB", logo: "/mongodb-logo.png" },
        { name: "SQL", logo: "/sql-logo.png" },
    ],
    languages: [
        { name: "C", logo: "/c-logo.png" },
        { name: "C++", logo: "/cpp-logo.png" },
        { name: "JavaScript", logo: "/javascript-logo.png" },
    ],
};

const Skills = () => {
    const ref = useRef();
    const isInView = useInView(ref, { threshold: 0.5 });

    return (
        <motion.div
            className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#1d1d42] to-[#0c0c1d] p-8"
            variants={containerVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            ref={ref}
        >
            <motion.div className="flex flex-col items-center gap-8" variants={containerVariants}>
                <motion.h1 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-2 tracking-widest" variants={textVariants}>
                    MY SKILLS
                </motion.h1>
                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center mb-8">
                        <motion.h2 className="text-2xl md:text-3xl font-semibold text-[#FFA500] mb-4" variants={textVariants}>
                            Frontend Development
                        </motion.h2>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {skillsData.frontend.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center bg-white rounded-lg shadow-lg p-2 md:p-4 mb-2 md:mb-4 mx-1 md:mx-2"
                                    variants={skillVariants}
                                    whileHover={hoverEffect.whileHover}
                                    animate={hoverEffect.animate}
                                >
                                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2" />
                                    <p className="text-sm md:text-lg font-semibold text-gray-900">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <motion.h2 className="text-2xl md:text-3xl font-semibold text-[#FFA500] mb-4" variants={textVariants}>
                            Backend Development
                        </motion.h2>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {skillsData.backend.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center bg-white rounded-lg shadow-lg p-2 md:p-4 mb-2 md:mb-4 mx-1 md:mx-2"
                                    variants={skillVariants}
                                    whileHover={hoverEffect.whileHover}
                                    animate={hoverEffect.animate}
                                >
                                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2" />
                                    <p className="text-sm md:text-lg font-semibold text-gray-900">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center mb-8">
                        <motion.h2 className="text-2xl md:text-3xl font-semibold text-[#FFA500] mb-4" variants={textVariants}>
                            Languages
                        </motion.h2>
                        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                            {skillsData.languages.map((language, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center bg-white rounded-lg shadow-lg p-2 md:p-4 mb-2 md:mb-4 mx-1 md:mx-2"
                                    variants={skillVariants}
                                    whileHover={hoverEffect.whileHover}
                                    animate={hoverEffect.animate}
                                >
                                    <img src={language.logo} alt={`${language.name} logo`} className="w-8 h-8 md:w-12 md:h-12 mr-1 md:mr-2" />
                                    <p className="text-sm md:text-lg font-semibold text-gray-900">{language.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
