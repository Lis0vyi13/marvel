import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Marvel from '../../services/Marvel';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { cardAnim } from '../../animations/anim';

import './charInfo.scss';

const CharInfoContent = ({ state }) => {
  if (!state) {
    return (
      <div className='char-info__content'>
        <div className='char-info__character'>
          <SkeletonTheme baseColor='#b0b0b0' highlightColor='#c0c0c0'>
            <Skeleton height={190} width={190} />
          </SkeletonTheme>
          <div className='char-info__text'>
            <SkeletonTheme baseColor='#b0b0b0' highlightColor='#c0c0c0'>
              <p style={{ fontWeight: 'bold' }}>Choose a character</p>

              <Skeleton width={150} />
            </SkeletonTheme>
            <div className='char-info__buttons'>
              <SkeletonTheme baseColor='#b0b0b0' highlightColor='#c0c0c0'>
                <Skeleton width={100} height={40} />
                <Skeleton width={100} height={40} />
              </SkeletonTheme>
            </div>
          </div>
          <div className='char-info__description'>
            <SkeletonTheme baseColor='#b0b0b0' highlightColor='#c0c0c0'>
              <Skeleton count={3} />
            </SkeletonTheme>
          </div>
        </div>
        <div className='char-info__comics'>
          <h4 className='char-info__comics-title'>
            <SkeletonTheme baseColor='#b0b0b0' highlightColor='#c0c0c0'>
              <Skeleton width={100} />
            </SkeletonTheme>
          </h4>
          <ul className='char-info__comics-list'>
            <SkeletonTheme baseColor='#b0b0b0' highlightColor='#c0c0c0'>
              <Skeleton count={5} />
            </SkeletonTheme>
          </ul>
        </div>
      </div>
    );
  }

  const { name, thumbnail, homepage, wiki, description, comics, id } = state[0];

  const comicsList =
    comics.length > 0
      ? comics.map((item, i) => {
          return (
            <a key={i} href={item.resourceURI}>
              <li className='char-info__comics-list-item'>{item.name}</li>
            </a>
          );
        })
      : 'Comics not found';

  return (
    <div className='char-info__content'>
      <div key={id} className='char-info__character'>
        <img className='char-info__img' src={thumbnail} alt={name} />
        <div className='char-info__text'>
          <h2 className='char-info__title'>{name}</h2>
          <div className='char-info__buttons'>
            <a className='btn red-btn char-info__btn' href={homepage}>
              Homepage
            </a>
            <a className='btn gray-btn char-info__btn' href={wiki}>
              Wiki
            </a>
          </div>
        </div>
        <div className='char-info__description'>{description}</div>
      </div>
      <div className='char-info__comics'>
        <h4 className='char-info__comics-title'>Comics:</h4>
        <ul className='char-info__comics-list'>{comicsList}</ul>
      </div>
    </div>
  );
};

const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const charInfoBlock = useRef(null);
  useEffect(() => {
    props.getCharInfoBlock(charInfoBlock);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const marvel = new Marvel();

    const getCharacter = async () => {
      const { activeChar } = props;
      if (!activeChar) return;

      try {
        const charData = await marvel.getCharInfo(activeChar);
        setChar(charData);
      } catch (error) {
        console.error('Error fetching character information:', error);
      }
    };

    getCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeChar]);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      ref={charInfoBlock}
      id='char-info'
      className='char-info'
      variants={cardAnim}
      custom={4}
    >
      <CharInfoContent state={char} />
    </motion.section>
  );
};

export default CharInfo;
