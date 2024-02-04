import { Component } from 'react';
import { motion } from 'framer-motion';

import './appMain.scss';

import spiderMan from '../../assets/images/Spider-man.png';
import { textAnim, imgAnim } from '../../animations/anim';

class AppMain extends Component {
  scrollToRandomCharBlock = async () => {
    const randomChar = document.querySelector('.random-char');

    window.scrollTo({
      behavior: 'smooth',
      top: randomChar.offsetTop - 50,
    });
  };
  render() {
    return (
      <motion.main
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='main'
      >
        <div className='container'>
          <section className='main__container'>
            <motion.img
              variants={imgAnim}
              custom={1}
              className='main__bg-img'
              src={spiderMan}
              alt='Spider man'
            />
            <div className='main__content'>
              <motion.h1 custom={1} variants={textAnim} className='main-title'>
                UNLEASH YOUR INNER HERO
              </motion.h1>
              <motion.h3
                custom={1.5}
                variants={textAnim}
                className='main-description'
              >
                Empower yourself with our platform and delve into the vast world
                of characters and comics through the Marvel API. Discover the
                tales that have forged legendary icons.
              </motion.h3>
              <motion.button
                custom={2.5}
                variants={textAnim}
                onClick={this.scrollToRandomCharBlock}
                className='btn red-btn'
              >
                Get Started
              </motion.button>
            </div>
          </section>
        </div>
      </motion.main>
    );
  }
}
export default AppMain;
