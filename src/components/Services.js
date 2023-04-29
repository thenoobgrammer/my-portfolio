import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  const services = [
    {
      name: t('Project portfolio'),
      description: t('Project portfolio description'),
    },
    {
      name: t('Full-fledged application'),
      description: t('Full-fledged application description')
    },
    {
      name: t('Hosting/Infrastructure'),
      description: t('Hosting/Infrastructure description')
    },
    {
      name: t('Maintenance'),
      description: t('Maintenance description')
    }
  ]
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('', 0.3, 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
          className='text-[40px] uppercase text-primary mb-6 text-center font-semibold'
        >
          {t('Services')}
        </motion.h2>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='mb-12 lg:flex-1 lg:bg-services lg:bg-cover lg:bg-bottom lg:bg-no-repeats'
          >
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            {services.map(({ name, description }, idx) => (
              <>
                <div className='max-w-[467px] text-primary'>
                  <h4 className='xs:text-[15px] md:text-[20px] md:tracking-wider font-primary font-semibold'>{name}</h4>
                  <p className='leading-tight'>{description}</p>


                </div>
                <div className='border-b-2 border-accent/40 my-8 flex' key={idx}>
                </div>
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </section >
  )
};

export default Services;
