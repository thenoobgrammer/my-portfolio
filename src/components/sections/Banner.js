import React from 'react';
import ContactMeForm from '../ContactMeForm'
import Modale from '../Modale'
import Profile1 from '../../assets/profile_pic_1.png'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { socialLinks } from '../../common'
import { useTranslation } from 'react-i18next';
import Button from '../Button';

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
    <section className='section flex flex-col lg:flex-row' id='home'>
      <div className='container mx-auto'>
        <div className='wrapper gap-x-12 gap-y-12 align-middle items-center'>
          <motion.div
            variants={fadeIn('', 0.3, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='mx-auto max-w-[220px] md:max-w-auto lg:hidden'>
            <img src={Profile1} alt='' />
          </motion.div>
          <div className='flex-col justify-center text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('left', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
              className='font-bold leading-[0.8] text-[30px] lg:text-[60px] xl:text-[80px] text-primary'
            >
              <span>ANTOINE HAKIM</span>
            </motion.h1>
            <motion.h1
              variants={fadeIn('right', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
              className=' text-primary border-b-2 my-3'
            >
            </motion.h1>
            <motion.div
              variants={fadeIn('left', 0.4, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
              className='mb-6 text-[25px] lg:text-[30px] xl:text-[40px] font-semibold leading-[1]'
            >
              <TypeAnimationTitle />
            </motion.div>
            <motion.p
              variants={fadeIn('right', 0.5, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: true }}
              className='mb-8 w-full lg:text-[18px] text-center lg:text-justify mx-auto lg:mx-0 text-primary'
            >
              {t(`Banner.intro`)}
            </motion.p>
            <div className='flex flex-col'>
              <motion.div
                variants={fadeIn('', 0.3, 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true }}
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
                viewport={{ once: true }}
                className='flex gap-x-4 mx-auto lg:mx-0'
              >
                {socialLinks.map(({ name, ref, icon }, idx) => (
                  <Button noBackground={true} className='p-0'>
                    <a href={ref} target="_blank" rel='noreferrer' className='text-primary href' key={idx}>
                      {icon}
                    </a>
                  </Button>
                ))}
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn('', 0.3, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: true }}
            className='hidden lg:flex lg:max-w-lg -mt-[220px]'>
            <img src={Profile1} alt='' />
          </motion.div>
        </div>
      </div>
    </section >
  )
};

export default Banner;
