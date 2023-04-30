import React from 'react'
import { motion } from "framer-motion"


const Button = ({ children, noBackground, ...props }) => {
    const backgroundClass = noBackground ? 'btn-no-background' : 'btn'
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={backgroundClass} {...props}>
            {children}
        </motion.button>
    )
}
export default Button