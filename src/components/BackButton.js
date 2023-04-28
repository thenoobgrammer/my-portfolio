import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { Link } from 'react-scroll';

const BackButton = () => {
    return (

        <Link
            to='home'
            offset={-96}
            smooth={true}
            spy={true}
            className='fixed m-auto right-10 bottom-10 rounded-full bg-[#5673aa] w-[60px] h-[60px] drop-shadow-lg cursor-pointer ease-in-out duration-75 hover:scale-110'
        >
            <div className='absolute top-[50%] left-[25%] -translate-y-[50%] w-full text-center'><FaArrowUp size={30} /></div>
        </Link>

    )
}

export default BackButton