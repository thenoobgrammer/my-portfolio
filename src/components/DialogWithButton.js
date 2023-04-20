import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { BsX } from 'react-icons/bs';

const DialogWithButton = ({
    title = 'Default title',
    children,
    content,
    ctaClose = 'Close',
    ctaSave = 'Save',
    noBackground = false,
    ...props
}) => {
    const [open, setOpen] = React.useState(false)

    const Modale = () => (
        <>
            <motion.div
                variants={fadeIn('down', 0, 0.5)}
                initial='hidden'
                whileInView={'show'}
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className='h3'>
                                {title}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-accent"
                                onClick={() => setOpen(false)}
                            >
                                <BsX />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            {content}
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 rounded-b">
                            <button
                                className="text-secondary background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpen(false)}
                            >

                                {ctaClose}
                            </button>
                            <button
                                className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                {ctaSave}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
    )

    return (
        <>
            {open && <Modale />}
            <Button onClick={() => setOpen(true)}>
                {children}
            </Button>
        </>
    )
}

export default DialogWithButton