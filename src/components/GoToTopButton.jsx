import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GoToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <motion.button
                    className="fixed bottom-10 right-10 bg-[#FFA500] rounded-full p-3 cursor-pointer text-black hover:bg-transparent hover:border hover:border-[#FFA500] hover:text-[#FFA500] z-50"
                    onClick={scrollToTop}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                        <path fillRule="evenodd" d="M12 22a1 1 0 0 1-1-1V7.414l-4.293 4.293a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 1 1-1.414 1.414L13 7.414V21a1 1 0 0 1-1 1z" clipRule="evenodd" />
                    </svg>
                </motion.button>
            )}
        </>
    );
};

export default GoToTopButton;
