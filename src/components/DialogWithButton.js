import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { BsX } from 'react-icons/bs';

const DialogWithButton = ({
    title = 'Default title',
    children,
    buttonName = 'Default button',
    ctaClose = 'Close',
    ctaSave = 'Save',
    noSave = false,
    noBackground = false,
    ...props
}) => {
    const [open, setOpen] = React.useState(false)

    const Modale = () => (
        <>
            <motion.div
                variants={fadeIn('down', 0, 0.1)}
                initial='hidden'
                whileInView={'show'}
                className="fixed justify-center items-center flex inset-0 m-auto z-50 outline-none focus:outline-none max-w-[1000px] max-h-[1000px]"
            >
                <div className="relative w-auto my-6 mx-auto">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-[900px]">
                        {/*header*/}
                        <div className="flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <span className='h3 mb-0'>
                                {title}
                            </span>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:text-accent"
                                onClick={() => setOpen(false)}
                            >
                                <BsX />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="p-6 flex-1 overflow-y-scroll scrollable">
                            {children}
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 rounded-b">
                            <button
                                className="text-accent background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpen(false)}
                            >

                                {ctaClose}
                            </button>
                            {!noSave && <button
                                className="bg-primary text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setOpen(false)}
                            >
                                {ctaSave}
                            </button>
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setOpen(false)}></div>
        </>
    )

    return (
        <>
            {open && <Modale />}
            <Button onClick={() => setOpen(true)}>
                {buttonName}
            </Button>
        </>
    )
}

export default DialogWithButton