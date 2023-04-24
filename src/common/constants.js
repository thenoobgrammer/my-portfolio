
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

/* Links */
export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const FACEBOOK_URL = 'https://www.facebook.com/antonio.hakim.39/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-hakim-359669105/'

const CV_CONTENT = ''

export const socialLinks = [
    {
        name: 'Github',
        ref: GITHUB_PROFILE_URL,
        icon: <FaGithub />
    },
    {
        name: 'Facebook',
        ref: FACEBOOK_URL,
        icon: <FaFacebook />
    },
    {
        name: 'LinkedIn',
        ref: LINKEDIN_URL,
        icon: <FaLinkedin />
    },
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
    // {
    //     path: 'work',
    //     description: 'Work',
    //     icon: <BsBriefcase />
    // },
    // {
    //     path: 'contact',
    //     description: 'Contact',
    //     icon: <BsChatSquare />
    // },
]