import { motion, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect } from 'react';

function Cursor() {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const springX = useSpring(cursorX, { stiffness: 500, damping: 30 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 30 });

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };
        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className='hidden md:block w-12 h-12 rounded-full border border-white fixed z-50 pointer-events-none'
            style={{
                x: springX,
                y: springY,
                translateX: '10%',
                translateY: '10%'
            }}
        />
    );
}

export default Cursor;
