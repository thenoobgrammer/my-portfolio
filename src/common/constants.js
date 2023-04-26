
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsClipboardData } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

/* Links */
export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const FACEBOOK_URL = 'https://www.facebook.com/antonio.hakim.39/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-hakim-359669105/'

export const EMAIL_DESTINATION = 'thenoobgrammer@gmail.com'
export const EMAIL_SUBJECT = 'CLIENT INQUIRY'
export const EMAIL_PUBLIC_KEY = 'gdUsqVZJvLcgL1JXC'
export const EMAIL_SERVICE_ID = 'service_gbfzv1f'
export const EMAIL_TEMPLATE_ID = 'template_k1dy7ba'

export const EMAIL_REGEX_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

export const supportedLangs = ['en', 'fr']


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