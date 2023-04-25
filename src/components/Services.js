import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation()
  const services = [
    {
      name: t('Hosting/Infrastructure'),
      description: 'Aliquip laboris deserunt officia consequat nulla nostrud magna duis pariatur. Voluptate sit minim excepteur ad. Id laboris officia dolor do fugiat aliquip deserunt non sint voluptate sit non cillum exercitation.',
      link: t('Learn more')
    },
    {
      name: t('Maintenance'),
      description: 'Aliquip laboris deserunt officia consequat nulla nostrud magna duis pariatur. Voluptate sit minim excepteur ad. Id laboris officia dolor do fugiat aliquip deserunt non sint voluptate sit non cillum exercitation.',
      link: t('Learn more')
    },
    {
      name: t('REST Client'),
      description: 'Aliquip laboris deserunt officia consequat nulla nostrud magna duis pariatur. Voluptate sit minim excepteur ad. Id laboris officia dolor do fugiat aliquip deserunt non sint voluptate sit non cillum exercitation.',
      link: t('Learn more')
    }
  ]
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
            variants={fadeIn('right', 0.3, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1 lg:bg-services lg:bg-bottom lg:bg-no-repeat mb-12 lg:mb-0 text-accent'
          >
            <h2 className='h2  mb-6'>{t('What I Do')}</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              {t(`I am a Freelance frontend developer with over 4 years of professional experience`)}
            </h3>
            {/* <button className='btn btn-sm'>See my work</button> */}
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2, 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
          >
            {services.map(({ name, description, link }, idx) => (
              <div className='border-b-2 border-accent/40 h-[180px] mb-[38px] flex' key={idx}>
                <div className='max-w-[467px] text-primary'>
                  <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                  <p className='leading-tight'>{description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section >
  )
};

export default Services;
