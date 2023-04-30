import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useTranslation } from 'react-i18next'
import Bell from '../../assets/Bell-white.png'
import Desjardins from '../../assets/Desjardins-white.png'
import GoTo from '../../assets/Goto-white.png'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })
  const { t } = useTranslation()

  const RenderStat = ({ topText, bottomText, start, end, fadeInMs }) => (
    <motion.div
      variants={fadeIn('up', fadeInMs, 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className="w-fit flex gap-x-4 text-[#efefef]"
    >
      <div className='text-[40px] md:text-[60px] font-primary font-semibold leading-10'>
        {
          inView ?
            <CountUp start={start} end={end} duration={2} className='font-medium' />
            :
            null
        }
      </div>
      <div className='font-primary text-sm tracking-[2px] flex flex-col text-start align-start'>
        <span className='text-[15px] md:text-[20px]'>
          {topText}
        </span>
        <span className='text-[15px] md:text-[20px]'>
          {bottomText}
        </span>
      </div>
    </motion.div>
  )

  const RenderIcon = ({ icon, fadeInMs }) => (
    <motion.div
      variants={fadeIn('up', fadeInMs, 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
    >
      <span className=''><img src={icon} alt='' /></span>
    </motion.div>
  )

  return (
    <section className='bg-primary section' id='about' ref={ref}>
      <div className='container mx-auto text-[#efefef] text-center max-w-3xl'>
        <div className='wrapper flex flex-col align-middle items-center m-auto gap-x-20 gap-y-0'>
          <div className='border-b mb-6'>
            <h2 className='h2 font-semibold'>{t('Little more about me')}</h2>
            <p className='mb-6'>
              {t(`About me content`)}
            </p>
          </div>
          <div className='flex items-center align-middle'>
            <RenderStat topText={t('Years')} bottomText={t('Experience')} start={0} end={4} fadeInMs={0.1} />
            <div className='border-r h-[60px] ml-6 opacity-30'></div>
            <div className='flex'>
              <RenderIcon icon={Bell} fadeInMs={0.1} />
              <RenderIcon icon={Desjardins} fadeInMs={0.3} />
              <RenderIcon icon={GoTo} fadeInMs={0.4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
