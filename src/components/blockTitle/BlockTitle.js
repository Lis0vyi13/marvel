import { motion } from 'framer-motion';
import { blockTitleAnim, dividerAnim } from '../../animations/anim';

import './blockTitle.scss';
const BlockTitle = ({ title }) => {
  return (
    <motion.section
      className='block-name'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
    >
      <motion.h4 variants={blockTitleAnim} className='block-title'>
        {title}
      </motion.h4>
      <motion.div variants={dividerAnim} className='divider'></motion.div>
    </motion.section>
  );
};

export default BlockTitle;
