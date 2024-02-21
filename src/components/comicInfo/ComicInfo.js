import './comicInfo.scss';

import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';

import Marvel from '../../services/Marvel';

import Loader from '../loader/Loader';
import Error from '../error/Error';

import { cardAnim } from '../../animations/anim';

const marvel = new Marvel();

const BackArrowSvg = () => {
  return (
    <svg
      fill='#f0141e'
      height='30px'
      width='30px'
      style={{ paddingRight: 10, marginTop: '-5px' }}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 26.676 26.676'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <g>
          <path d='M26.105,21.891c-0.229,0-0.439-0.131-0.529-0.346l0,0c-0.066-0.156-1.716-3.857-7.885-4.59 c-1.285-0.156-2.824-0.236-4.693-0.25v4.613c0,0.213-0.115,0.406-0.304,0.508c-0.188,0.098-0.413,0.084-0.588-0.033L0.254,13.815 C0.094,13.708,0,13.528,0,13.339c0-0.191,0.094-0.365,0.254-0.477l11.857-7.979c0.175-0.121,0.398-0.129,0.588-0.029 c0.19,0.102,0.303,0.295,0.303,0.502v4.293c2.578,0.336,13.674,2.33,13.674,11.674c0,0.271-0.191,0.508-0.459,0.562 C26.18,21.891,26.141,21.891,26.105,21.891z'></path>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </g>
      </g>
    </svg>
  );
};

const ComicInfoContent = ({ comic }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className='comic-info__image'>
        <img className='comic-info__img' src={comic.thumbnail} alt='' />
      </div>
      <div className='comic-info__content'>
        <h2 className='comic-info__title'>{comic.title}</h2>
        <h4 className='comic-info__description'>{comic.description}</h4>
        <h6 className='comic-info__pages'>{comic.pageCount}</h6>
        <h6 className='comic-info__language'>Language: {comic.language}</h6>
        <h3 className='comic-info__price'>{comic.price}</h3>
      </div>
      <Link className='comic-info__back' onClick={() => navigate(-1)}>
        <BackArrowSvg />
        Back to all
      </Link>
    </>
  );
};
const ComicInfo = () => {
  const [comic, setComic] = useState(null);
  const [doesntExist, setDoesntExist] = useState(false);
  const [loading, isLoading] = useState(false);
  const comicInfoBlock = useRef();
  const { comicId } = useParams();

  useEffect(() => {
    const getComic = async () => {
      try {
        isLoading(true);
        const newComic = await marvel.getComic(comicId);
        setComic(newComic);
        setDoesntExist(false);
      } catch (error) {
        setDoesntExist(true);
        console.error('Error fetching character information:', error);
      } finally {
        isLoading(false);
      }
    };

    getComic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const error = !loading && doesntExist ? <Error /> : null;
  const loader = loading && <Loader />;
  const content = !loading && comic ? <ComicInfoContent comic={comic} /> : null;
  if (content)
    comicInfoBlock.current.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={cardAnim}
      custom={2}
      className='comic-info'
    >
      <div className='container comic-info-container'>
        <div ref={comicInfoBlock} className='comic-info__block'>
          {content}
          {error}
          {loader}
        </div>
      </div>
    </motion.section>
  );
};

export default ComicInfo;
