import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import { BsX } from 'react-icons/bs';
import { fadeIn } from '../variants'

const Modale = ({
    title = 'Default title',
    children,
    buttonName = 'Default button',
    open,
    handleOpen,
    handleClose,
    footerContent,
}) => {

    const Dialog = () => {
        return (
            <>
                <motion.div
                    variants={fadeIn('down', 0, 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 m-auto xs:max-w-[100%] md:xs:max-w-[90%] lg:max-w-[170%]">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between px-6 py-4 border-b border-solid border-slate-200 rounded-t">
                                <span className="h3 mb-0">
                                    {title}
                                </span>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-accent"
                                    onClick={handleClose}
                                >
                                    <BsX />
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                {children}
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                                {footerContent}
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={handleClose}></div>
            </>
        )
    }

    return (
        <>
            {open && <Dialog />}
            <Button onClick={handleOpen}>
                {buttonName}
            </Button>
        </>
    )

}

export default Modale