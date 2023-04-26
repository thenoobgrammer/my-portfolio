import React from 'react';
import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo.svg'
import { BiMenu, BiX } from 'react-icons/bi'
import { Link } from 'react-scroll';
import { Links } from '../common'
import { CV } from './CV';
import { useScreenSize } from '../hooks'
import LangSwitcher from './LangSwitcher'
import CTAButtons from './CTAButtons'
import Modale from './Modale'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [openCV, setOpenCV] = React.useState(false)
  const { t } = useTranslation()
  const isMobile = useScreenSize()

  React.useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  return (
    // <>
    //   <div className={`${mobileMenuOpen ? 'opacity-25 fixed inset-0 z-3 bg-black' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
    //   <div className='bg-white md:bg-none sticky w-full z-50'>
    //     <div className='md:flex md:justify-between md:items-center py-8 container mx-auto'>
    //       <a href='/'>
    //         <img src={Logo} alt='' />
    //       </a>
    //       <div className={`relative flex flex-col items-end my-7 ease-linear transition-all duration-300 ${mobileMenuOpen ? 'xs:h-auto' : 'xs:h-0 -top-[500px]'} md:h-fit md:static md:flex md:flex-row md:gap-x-6 md:my-0 lg:flex lg:flex-2 lg:gap-10`}
    //       >
    // {Links.map(({ path, offset = 0, description, icon }, idx) => (
    //   <div className='border-b-2 border-accent/40 mb-4 flex md:border-none md:mb-0 md:flex-none' key={idx}>
    //     <Link
    //       to={path}
    //       offset={offset}
    //       activeClass='active'
    //       smooth={true}
    //       spy={true}
    //       onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
    //       className='flex flex-col items-center justify-center cursor-pointer 
    //       text-primary href'
    //     >
    //       {icon}
    //       <span className='text-[22px] font-medium'>{t(description)}</span>
    //     </Link>
    //   </div>
    // ))}
    //       </div>
    // <div className='
    //   absolute flex top-8 right-8 gap-x-3 
    //   md:relative md:top-0
    //   lg:items-center lg:flex lg:flex-3 lg:gap-5'
    // >
    //   <LangSwitcher />
    // <Modale
    //   title={t('My CV')}
    //   buttonName={t('My CV')}
    //   open={openCV}
    //   handleOpen={() => setOpenCV(true)}
    //   handleClose={() => setOpenCV(false)}
    //   footerContent={<CTAButtons onClose={() => setOpenCV(false)} noSave />}
    // >
    //   <CV />
    // </Modale>
    //   <button className='lg:hidden md:hidden btn-not-background text-primary text-[40px]' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
    //     <BiMenuAltRight />
    //   </button>
    // </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className='flex justify-between items-center h-24 max-w-[80%] mx-auto px-4 text-primary'>
        <a href='/'>
          <img src={Logo} alt='' />
        </a>
        <div className='hidden md:flex'>
          {Links.map(({ path, offset = 0, description, icon }, idx) => (
            <Link
              to={path}
              offset={offset}
              activeClass='active'
              smooth={true}
              spy={true}
              onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
              className='flex flex-col items-center justify-center cursor-pointer text-primary href p-4'
            >
              {icon}
              <span className='text-[22px] font-medium'>{t(description)}</span>
            </Link>
          ))}
        </div>
        <div className='hidden md:flex md:gap-x-4'>
          <LangSwitcher />
          <Modale
            title={t('My CV')}
            buttonName={t('My CV')}
            open={openCV}
            handleOpen={() => setOpenCV(true)}
            handleClose={() => setOpenCV(false)}
            footerContent={<CTAButtons onClose={() => setOpenCV(false)} noSave />}
          >
            <CV />
          </Modale>
        </div>
        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='block cursor-pointer md:hidden'>
          {mobileMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </div>
        <motion.div
          variants={fadeIn('top', 0, 0.1)}
          initial='hidden'
          whileInView={'show'}
          className={mobileMenuOpen ? 'fixed flex flex-col gap-y-10 top-0 items-center left-0 w-full h-[40%] z-40 border-r-gray-900 bg-white' : 'fixed top-[-100%]'}
        >
          <div>
            {Links.map(({ path, offset = 0, description, icon }, idx) => (
              <Link
                to={path}
                offset={offset}
                activeClass='active'
                smooth={true}
                spy={true}
                onClick={() => mobileMenuOpen && setMobileMenuOpen(false)}
                className='flex flex-col items-center justify-center cursor-pointer text-primary href p-4'
              >
                {icon}
                <span className='text-[22px] font-medium'>{t(description)}</span>
              </Link>
            ))}
          </div>
          <div>
            <LangSwitcher />
          </div>
          <div>
            <Modale
              title={t('My CV')}
              buttonName={t('My CV')}
              open={openCV}
              handleOpen={() => setOpenCV(true)}
              handleClose={() => setOpenCV(false)}
              footerContent={<CTAButtons onClose={() => setOpenCV(false)} noSave />}
            >
              <CV />
            </Modale>
          </div>
        </motion.div>
      </div>
      {mobileMenuOpen && <div className="opacity-25 fixed inset-0 z-30 bg-black" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  )
};

export default Header;
