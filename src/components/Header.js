import React from 'react';
import Modale from '../components/DialogWithButton'
import Logo from '../assets/logo.svg'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-scroll';
import { Links } from '../common'
import { CV } from './CV';

const Header = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <div className={`${open ? 'opacity-25 fixed inset-0 z-3 bg-black' : ''}`}></div>
      <div className='bg-white md:bg-none fixed w-full z-50'>
        <div className='md:flex md:justify-between md:items-center py-8 container mx-auto'>
          <a href='#'>
            <img src={Logo} alt='' />
          </a>
          <div className={`relative flex flex-col items-end my-7 ease-linear transition-height duration-300 ${open ? '-top-none xs:h-auto' : 'xs:h-0 -top-[500px]'} md:h-fit md:static md:flex md:flex-row md:gap-x-6 md:my-0 lg:flex lg:flex-2 lg:gap-10`}
          >
            {Links.map(({ path, offset = 0, description, icon }, idx) => (
              <div className='border-b-2 border-accent/40 mb-4 flex md:border-none md:mb-0 md:flex-none'>
                <Link
                  to={path}
                  offset={offset}
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex flex-col items-center justify-center cursor-pointer 
                  text-primary w-[60px] h-[60px] href'
                >
                  {icon}
                  <span className='text-[22px] font-medium'>{description}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className='
            absolute flex top-8 right-8 gap-x-3 
            md:relative md:top-0
            lg:items-center lg:flex lg:flex-3 lg:gap-5'
          >
            <Modale title='My CV' buttonName='My CV' noSave={true}>
              <CV />
            </Modale>
            <button className='lg:hidden md:hidden btn-not-background text-primary text-[40px]' onClick={() => setOpen(!open)}>
              <BiMenuAltRight />
            </button>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;
