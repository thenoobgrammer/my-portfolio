import React from 'react';
import Modale from '../components/DialogWithButton'
import Logo from '../assets/logo.svg'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-scroll';
import { Links } from '../common'

const Header = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div className='py-8 bg-white md:bg-none md:fixed w-full'>
      <div className='container mx-auto'>
        <div className='relative md:flex md:justify-between md:items-center'>
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          <div className={`
            ${open ? 'hidden' : 'visible'}
            static flex flex-col items-end my-7 ease-linear transition-height duration-150
            md:flex md:flex-row md:gap-x-6 md:my-0 
            lg:flex lg:flex-2 lg:gap-10`
          }
          >
            {Links.map(({ path, offset = 0, description, icon }, idx) => (
              <Link
                to={path}
                offset={offset}
                activeClass='active'
                smooth={true}
                spy={true}
                className='
                  flex flex-col items-center justify-center cursor-pointer 
                  text-primary w-[60px] h-[60px] href
                  '
              >
                {icon}
                <span className='text-[22px] font-medium'>{description}</span>
              </Link>
            ))}
          </div>
          <div className='
            flex absolute top-0 right-0 gap-x-3 
            md:relative 
            lg:items-center lg:flex lg:flex-3 lg:gap-5'
          >
            <Modale title='My CV'>
              My CV
            </Modale>
            <button className='lg:hidden md:hidden
              btn-not-background text-primary text-[40px]' onClick={() => setOpen(!open)}>
              <BiMenuAltRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;
