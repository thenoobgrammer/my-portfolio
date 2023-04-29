import React from 'react';
import ContactMeForm from './ContactMeForm'
import Modale from './Modale'
import Profile1 from '../assets/profile_pic_1.png'
import Profile2 from '../assets/profile_pic_2.png'
import Profile3 from '../assets/profile_pic_3.png'
import Profile4 from '../assets/profile_pic_4.png'
import Profile5 from '../assets/profile_pic_5.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { socialLinks } from '../common'
import { useScreenSize } from '../hooks'
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)

  const TypeAnimationTitle = () => React.useMemo(() => (
    <TypeAnimation
      className='text-accent'
      wrapper='span'
      repeat={Infinity}
      sequence={[
        t('Senior Fullstack Developer') + '...',
        2000
      ]}
      speed={50}
    />
  ), [])

  return (
    <section className='section flex flex-col lg:flex-row items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 justify-between'>
          <motion.div
            variants={fadeIn('', 0.3, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mx-auto max-w-[220px] md:max-w-auto lg:hidden'>
            <img src={Profile1} alt='' />
          </motion.div>
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('down', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='font-bold leading-[0.8] text-[30px] lg:text-[90px] text-primary'
            >
              ANTOINE <span>HAKIM</span>
            </motion.h1>
            <motion.h1
              variants={fadeIn('right', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className=' text-primary border-b-2 my-3'
            >
            </motion.h1>
            <motion.div
              variants={fadeIn('down', 0.4, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[25px] lg:text-[60px] font-semibold leading-[1]'
            >
              <TypeAnimationTitle />
            </motion.div>
            <motion.p
              variants={fadeIn('right', 0.5, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 w-full text-[15px] sm:text-[20px] text-center lg:text-justify mx-auto lg:mx-0 text-primary'
            >
              {t(`Banner.intro`)}
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 mx-auto lg:mx-0'
            >
              <Modale
                ctaSave={t('Send email')}
                title={t('Your request')}
                buttonName={t('Contact me')}
                open={open}
                handleOpen={() => setOpen(true)}
                handleClose={() => setOpen(false)}
              >
                <ContactMeForm onClose={() => setOpen(false)} />
              </Modale>

            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              {socialLinks.map(({ name, ref, icon }, idx) => (
                <a href={ref} target="_blank" rel='noreferrer' className='text-primary href' key={idx}>
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('', 0.3, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='hidden -mt-[200px] lg:flex max-w-[450px] lg:max-w-[482px]'>
            <img src={Profile1} alt='' />
          </motion.div>
        </div>
      </div>
    </section >
  )
};

export default Banner;
