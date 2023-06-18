import React from 'react'
import css from './Hero.module.scss'
import {motion} from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion';


function Hero() {
  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div className={`innerWidth ${css.container}`}
         variants ={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{once: false, amount: 0.25}}
        >
                {/* Upper Elements */}
                <div className={css.upperElements}>
                    <motion.span
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                     className='primaryText'
                     >
                    Hey There, <br/> I'm Binjan.
                        </motion.span>
                        <motion.span
                         className='secondaryText'
                         variants={fadeIn('left', 'tween', 0.4, 1)}
                        >
                        I design beautiful simple <br/> things, And I love what i do
                        </motion.span>
                </div>
              {/* person Image */}
                <motion.div
                 variants={fadeIn('up', 'tween', 0.3, 1)}
                 className={css.person}
                 >
                    <motion.img
                    variants={fadeIn('up', 'tween', 0.5, 1.3)}
                    src="./person.png" alt= '' />
                </motion.div>
                {/* Email */}
                    <a className={css.email} href= "amrnew10@gmail.com">amrnew10@gmail.com </a>

                {/* Lower Elements */}
                <div className={css.lowerElements}>
                    <motion.div
                    variants={fadeIn('right', 'tween', 0.3, 1)}
                    className={css.experience}>
                        <div className='primaryText'>10</div>
                        <div className='secondaryText'>
                            <div>Years</div>
                            <div>Experience</div>
                        </div>
                    </motion.div>

                    <motion.div 
                    variants={fadeIn('left', 'tween', 0.5, 1)}
                    className={css.certificate}>
                        <img src='./certificate.png' alt='' />
                        <span>CERTIFIED PROFATIONAl</span>
                        <span>UI/UX DESIGNER</span>
                    </motion.div>
                </div>
        </motion.div>
    </section>
    
  )
}

export default Hero