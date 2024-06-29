import { motion, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    }
}

function Contact() {
    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const isInView = useInView(ref, { margin: '-100px' });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_1ald9or', 'template_ldq2v6p', formRef.current, {
                publicKey: 'eDL48j32GNPXs8HlZ',
            })
            .then(
                () => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                },
            );
    };

    return (
        <motion.div ref={ref} className='h-full max-w-[1280px] m-auto flex flex-col md:flex-row items-center gap-6 p-4' variants={variants} initial='initial' whileInView='animate'>
            <motion.div className='flex-1 text-center md:text-left' variants={variants}>
                <motion.h1 className='text-6xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-0 mt-20' variants={variants}>Let's Work Together</motion.h1>
            </motion.div>
            <div className='flex-1 relative w-full'>
                <motion.div className='absolute inset-0 m-auto stroke-[#FFA500]' initial={{ opacity: 1 }} whileInView={{ opacity: 0, pointerEvents: 'none' }} transition={{ delay: 2, duration: 1 }}>
                    <svg width="100%" height="100%" viewBox="0 0 32.666 32.666">
                        <motion.path
                            strokeWidth={0.2}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                            C32.666,7.326,25.339,0,16.333,0z"
                        />
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className='flex flex-col gap-5 mt-2 md:mt-0 mb-16'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <input className='p-3 md:p-5 bg-transparent border border-white text-white rounded-md' type="text" placeholder='Name' name='name' required />
                    <input className='p-3 md:p-5 bg-transparent border border-white text-white rounded-md' type="email" placeholder='Email' name='email' required />
                    <textarea className='p-3 md:p-5 bg-transparent border border-white text-white rounded-md' rows={8} placeholder='Message' name='message' required />
                    <button className='p-3 md:p-5 border-none bg-[#FFA500] cursor-pointer text-black rounded-md font-medium'>Submit</button>
                    {error && <p className='text-red-500'>Something went wrong, please try again later.</p>}
                    {success && <p className='text-green-500'>Your message has been sent successfully.</p>}
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact;
