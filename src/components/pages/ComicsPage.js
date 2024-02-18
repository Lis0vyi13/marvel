import { motion } from 'framer-motion';

import ComicsHeader from '../comicsHeader/ComicsHeader';
import ComicsList from '../comicsList/ComicsList';

import { comicsHeaderAnim } from '../../animations/anim';
const ComicsPage = () => {
  return (
    <>
      <section className='comics'>
        <div className='container comics-container'>
          <motion.header
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={comicsHeaderAnim}
            custom={2}
            className='comics-header'
          >
            <ComicsHeader />
          </motion.header>
          <main
            style={{ display: 'flex', flexDirection: 'column' }}
            className='comics-main'
          >
            <ComicsList />
          </main>
        </div>
      </section>
    </>
  );
};

export default ComicsPage;
