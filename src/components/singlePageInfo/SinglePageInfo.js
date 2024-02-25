import './singlePageInfo.scss';

import { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Loader from '../loader/Loader';
import Error from '../error/Error';
import { cardAnim } from '../../animations/anim';
import Marvel from '../../services/Marvel';

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

const SinglePageInfoContent = ({ data, type }) => {
  const navigate = useNavigate();
  let content = null;
  switch (type) {
    case 'comics':
      content = (
        <>
          <Helmet>
            <title>{data.title}</title>
            <meta name='description' content={`${data.title} page`} />
          </Helmet>
          <div className='single-page__image'>
            <img
              className='single-page__img'
              src={data.thumbnail}
              alt={data.title}
            />
          </div>
          <div className='single-page__content'>
            <h2 className='single-page__title'>{data.title}</h2>
            <h4 className='single-page__description'>{data.description}</h4>
            <h6 className='single-page__pages'>{data.pageCount}</h6>
            <h6 className='single-page__language'>Language: {data.language}</h6>
            <h3 className='single-page__price'>{data.price}</h3>
          </div>
        </>
      );
      break;
    case 'char':
      content = (
        <>
          <Helmet>
            <title>{data[0].name}</title>
            <meta name='description' content={`${data[0].name} page`} />
          </Helmet>
          <div className='single-page__image'>
            <img
              className='single-page__img'
              src={data[0].thumbnail}
              alt={data[0].name}
            />
          </div>
          <div className='single-page__content'>
            <h2 className='single-page__title'>{data[0].name}</h2>
            <h4 className='single-page__description'>{data[0].description}</h4>
          </div>
        </>
      );
      break;
    default:
      break;
  }
  return (
    <>
      <Link className='single-page__back' onClick={() => navigate(-1)}>
        <BackArrowSvg />
        Back to all
      </Link>
      {content}
    </>
  );
};
const SinglePageInfo = ({ type }) => {
  const [data, setData] = useState(null);
  const [doesntExist, setDoesntExist] = useState(false);
  const [loading, isLoading] = useState(false);
  const infoBlock = useRef();
  const { comicId, charId } = useParams();
  const id = comicId || charId;

  useEffect(() => {
    const getData = async () => {
      try {
        isLoading(true);

        const info =
          type === 'comics'
            ? await marvel.getComic(id)
            : await marvel.getCharInfo(id, false);
        setData(info);
        setDoesntExist(false);
      } catch (error) {
        setDoesntExist(true);
        console.error('Error fetching character information:', error);
      } finally {
        isLoading(false);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const error = !loading && doesntExist ? <Error /> : null;
  const loader = loading && <Loader />;
  const content =
    !loading && data ? <SinglePageInfoContent data={data} type={type} /> : null;
  if (content) infoBlock.current.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={cardAnim}
      custom={2}
      className='single-page'
    >
      <div className='container single-page-container'>
        <div ref={infoBlock} className='single-page__block'>
          {content}
          {error}
          {loader}
        </div>
      </div>
    </motion.section>
  );
};

export default SinglePageInfo;
