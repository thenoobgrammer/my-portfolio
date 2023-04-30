import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll';
import { motion } from "framer-motion"

const BackButton = () => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='fixed m-auto right-10 bottom-10 rounded-full bg-[#5673aa] w-[40px] h-[40px] drop-shadow-lg cursor-pointer'>
            <Link
                to='home'
                offset={-96}
                smooth={true}
                spy={true}
                className='absolute top-[50%] left-[25%] -translate-y-[50%] w-full text-center'
            >
                <FaArrowUp size={20}/>
            </Link>
        </motion.button>

    )
}

export default BackButton