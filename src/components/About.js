import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  })

  const RenderStat = ({ topText, bottomText, start, end, fadeInMs }) => (
    <motion.div
      variants={fadeIn('up', fadeInMs)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className='text-[40px] font-tertiary text-primary mb-2'>
        {
          inView ?
            <CountUp start={start} end={end} duration={2} />
            :
            null
        }
      </div>
      <div className='font-primary text-sm tracking-[2px] text-primary'>
        {topText}
        <br />
        {bottomText}
      </div>
    </motion.div>
  )

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-normal bg-top'></div>
          <div className='flex-1'>
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4 text-primary'>
              I'm a freelance front-end developer with over 4 years of experience
            </h3>
            <p className='mb-6 text-primary'>
              Commodo elit est cupidatat aute. Nostrud ipsum sit laboris excepteur excepteur consectetur. Duis velit consectetur deserunt culpa do et do exercitation officia non aliquip. Aute cupidatat esse sunt esse ex. Veniam dolore eiusmod officia exercitation dolor sit eiusmod ea non eiusmod in. Fugiat duis ullamco magna cillum cillum quis dolore.
            </p>
          </div>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <RenderStat topText='Years of' bottomText='Experience' start={0} end={4} fadeInMs={0.1} />
            <RenderStat topText='Projects' bottomText='Completed' start={0} end={6} fadeInMs={0.2} />
            <RenderStat topText='Clients' bottomText='Satisfied' start={0} end={0} fadeInMs={0.3} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
