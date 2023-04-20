
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'

export const socialLinks = [
    {
        name: 'Github',
        ref: '#',
        icon: <FaGithub />
    },
    {
        name: 'Instagram',
        ref: '#',
        icon: <FaInstagram />
    },
    {
        name: 'Facebook',
        ref: '#',
        icon: <FaFacebook />
    }
]

export const Links = [
    {
        path: 'home',
        description: 'Home',
        icon: <BiHomeAlt />
    },
    {
        path: 'about',
        description: 'About',
        icon: <BiUser />
    },
    {
        path: 'services',
        description: 'Services',
        icon: <BsClipboardData />
    },
    {
        path: 'work',
        description: 'Work',
        icon: <BsBriefcase />
    },
    {
        path: 'contact',
        description: 'Contact',
        icon: <BsChatSquare />
    },
]
