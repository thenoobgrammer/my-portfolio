import React from 'react';
import Image from '../assets/avatar.svg'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto'>
        <div>
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work
              </h2>
              <p className='max-w-sm mb-16'>
                Laboris dolore esse labore incididunt ad. Deserunt voluptate ex reprehenderit Lorem eiusmod eu aute. Veniam id in commodo duis eu aliqua.
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-primary'>
                  UI/UX Design
                </span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
                <span>Project title</span>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </section>
  )
};

export default Work;
