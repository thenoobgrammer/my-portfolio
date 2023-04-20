import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { BsArrowUpRight } from 'react-icons/bs';


const Button = ({ children, noBackground, ...props }) => {
    const backgroundClass = noBackground ? 'btn-no-background' : 'btn'
    return (
        <button className={backgroundClass} {...props}>
            {children}
        </button>
    )
}
export default Button