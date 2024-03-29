import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

import { BsClipboardData } from 'react-icons/bs'

/* Links */
export const GITHUB_PROFILE_URL = 'https://github.com/thenoobgrammer'
export const FACEBOOK_URL = 'https://www.facebook.com/antonio.hakim.39/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/antoine-hakim-359669105/'
export const PORTOFLIO_URL = 'https://thenoobgrammer.com'

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
        icon: <FaGithub size={30} />
    },
    {
        name: 'Facebook',
        ref: FACEBOOK_URL,
        icon: <FaFacebook size={30} />
    },
    {
        name: 'LinkedIn',
        ref: LINKEDIN_URL,
        icon: <FaLinkedin size={30} />
    },
]

export const Links = [
    {
        path: 'home',
        description: 'Home',
        offset: -96,
        icon: <BiHomeAlt size={20} />
    },
    {
        path: 'about',
        description: 'About',
        icon: <BiUser size={20} />
    },
    {
        path: 'services',
        description: 'Services',
        icon: <BsClipboardData size={20} />
    }
]