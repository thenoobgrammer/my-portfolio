import React from 'react';
import BackButton from './BackButton'
import { useTranslation } from 'react-i18next'
import Logo from '../assets/logo.svg'
import { BiMenu, BiX } from 'react-icons/bi'
import { Link } from 'react-scroll';
import { Links } from '../common'
import { CV } from './CV';
import { useOnScreen, useScreenSize } from '../hooks'
import LangSwitcher from './LangSwitcher'
import CTAButtons from './CTAButtons'
import Modale from './Modale'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const ref = React.useRef()
  const [openCV, setOpenCV] = React.useState(false)
  const { t } = useTranslation()
  const isMobile = useScreenSize()
  const onScreen = useOnScreen(ref)

  React.useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false)
    }
  }, [isMobile])

  return (
    <>
      <div className={`flex justify-between items-center h-24 max-w-[80%] md:max-w-[90%] mx-auto px-4 text-primary`} ref={ref}>
        <a href='/' className='w-10 h-6 md:w-16 md:h-8'>
          <img src={Logo} alt='' />
        </a>
        <div className='hidden md:flex'>
          {Links.map(({ path, offset = 0, description, icon }, idx) => (
            <Link
              key={idx}
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
        <div className='flex gap-x-4'>
          <LangSwitcher />
          <Modale
            title={t('Antoine Hakim, Senior Frontend Engineer')}
            buttonName={t('My CV')}
            open={openCV}
            handleOpen={() => setOpenCV(true)}
            handleClose={() => setOpenCV(false)}
            footerContent={<CTAButtons onClose={() => setOpenCV(false)} noSave />}
          >
            <CV />
          </Modale>
        </div>
        <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='block cursor-pointer z-0 md:hidden'>
          {mobileMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </div>
        <motion.div
          variants={fadeIn('top', 0, 0.1)}
          initial='hidden'
          whileInView={'show'}
          className={mobileMenuOpen ? 'fixed p-20 flex flex-col gap-y-5 top-24 items-center left-0 w-full h-auto z-30 border-r-gray-900 bg-white' : 'fixed top-[-100%]'}
        >
          <div>
            {Links.map(({ path, offset = 0, description, icon }, idx) => (
              <Link
                key={idx}
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

        </motion.div>
      </div>
      {!onScreen &&
        <motion.div
          variants={fadeIn('top', 0.2, 0.6)}
          whileInView={'show'}
        >
          <BackButton />
        </motion.div>
      }
      {mobileMenuOpen && <div className="opacity-25 fixed top-24 inset-0 z-20 bg-black" onClick={() => setMobileMenuOpen(false)}></div>}
    </>
  )
};

export default Header;
