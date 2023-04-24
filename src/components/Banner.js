import React from 'react';
import Image from '../assets/avatar.svg'
import ContactMeForm from './ContactMeForm'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { socialLinks } from '../common'

const Banner = () => {
  return (
    <section className='min-h-[95vh] lg:min-h-[90vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1
              variants={fadeIn('down', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[90px] text-primary'
            >
              ANTOINE <span>HAKIM</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('down', 0.4, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:text-[60px] font-semibold uppercase leading-[1]'
            >
              <span className='text-accent mr-2'>
                I am a
              </span>
              <TypeAnimation
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
                sequence={[
                  'Senior Fullstack developer',
                  2000
                ]}
                speed={50}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('right', 0.5, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 text-primary'
            >
              Culpa aliquip in labore esse ex labore excepteur sint est. Eu sunt esse amet cupidatat nulla ad mollit consequat. Incididunt aliquip in sit quis. Fugiat nisi irure occaecat est aliqua cupidatat culpa labore fugiat qui eu non sunt.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <ContactMeForm />
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.3, 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              {socialLinks.map(({ name, ref, icon }, idx) => (
                <a href={ref} target="_blank" rel='noreferrer' className='text-primary href' key={idx}>
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>
          <div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section >
  )
};

export default Banner;
