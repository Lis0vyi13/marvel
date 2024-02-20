import './page404.scss';

import { motion } from 'framer-motion';

import { fadeIn } from '../../animations/anim';

import marvel404 from '../../assets/images/marvel-image404.png';
const Page404 = () => {
  return (
    <main className='content'>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={fadeIn}
        className='page404'
        custom={3}
      >
        <div className='container page404-container'>
          <div className='page404-text'>
            <h1 className='page404-title'>404 Page not found</h1>
            <h3 className='page404-subtitle'>
              HYDRA is currently attacking this page
            </h3>
            <h5 className='page404-description'>
              Check that you typed the address correctly, go back to your
              previous page.
            </h5>
          </div>

          <img className='page404-img' src={marvel404} alt='marvel' />
        </div>
      </motion.section>
    </main>
  );
};

export default Page404;
