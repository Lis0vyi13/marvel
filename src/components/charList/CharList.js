import './charList.scss';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Marvel from '../../services/Marvel';
import { cardAnim } from '../../animations/anim';
import ListLoader from './listLoader/ListLoader';

const Card = ({ img, name, onCardFocus, onCardClick }) => {
  return (
    <div
      tabIndex='0'
      onFocus={onCardFocus}
      onClick={onCardClick}
      className='char-list__item'
    >
      <div className='char-list__img'>
        <img src={img} alt={name} />
      </div>
      <div className='char-list__name'>
        <h2>{name}</h2>
      </div>
    </div>
  );
};
const CardSkeleton = () => {
  const cardsCount = 10;
  const skeletonCards = [];

  for (let i = 1; i < cardsCount; i++) {
    skeletonCards.push(
      <SkeletonTheme key={i} baseColor='#202020' highlightColor='#444'>
        <div className='char-list__item'>
          <div className='char-list__img'>
            <Skeleton height={190} width={'100%'} />
          </div>
          <div className='char-list__name'>
            <Skeleton count={2} height={30} width={'100%'} />
          </div>
        </div>
      </SkeletonTheme>,
    );
  }

  return <>{skeletonCards}</>;
};

const CharList = (props) => {
  const [chars, setChars] = useState([]);
  const [loading, isLoading] = useState(false);
  const [offset, setOffset] = useState(null);
  const [loadingExtraChar, isLoadingExtraChar] = useState(false);
  const [firstLoading, isFirstLoadingDone] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const marvel = new Marvel();
  const { getActiveChar, charInfoBlock, total } = props;

  useEffect(() => {
    setOffset(marvel._baseOffset);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (offset && !firstLoading) {
      getCharacters();
      isFirstLoadingDone(true);
    }
    if (firstLoading && loadingExtraChar) {
      const getList = async () => {
        const chars = await marvel.getCharactersList(offset);
        return chars;
      };

      getList().then((newChars) => {
        setChars((prevChars) => [...prevChars, ...newChars]);
        isLoadingExtraChar(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const calculateDistance = async () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

    const windowHeight = window.innerHeight;
    const scrolledPixels = window.scrollY;

    if (
      !loadingExtraChar &&
      scrolledPixels >= documentHeight - windowHeight - 50
    ) {
      await setOffset((offset) => offset + 9);
      isLoadingExtraChar(true);
    }
  };

  let timeoutId;
  const handleScroll = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      calculateDistance();
    }, 20);
  };

  const getCharacters = async () => {
    isLoading(true);
    try {
      const chars = await marvel.getCharactersList(offset);
      setChars(chars);
    } catch (error) {
      isLoading(false);
      throw new Error(error);
    } finally {
      isLoading(false);
    }
  };
  useEffect(() => {
    activeCard?.classList.add('active-card');
  }, [activeCard]);

  const onCardFocus = (e, id) => {
    const card = e.target.closest('.char-list__item');
    activeCard?.classList.remove('active-card');

    setActiveCard(card);
    getActiveChar(id);
  };
  const onCardClick = () => {
    const charInfo = charInfoBlock.current;
    scroll.scrollTo(charInfo.offsetTop - 50, {
      duration: 400,
      smooth: 'easeInOutQuad',
    });
  };

  const cards = chars.map((char) => (
    <Card
      name={char.name}
      onCardFocus={(e) => onCardFocus(e, char.id)}
      key={char.id}
      img={char.thumbnail}
      onCardClick={onCardClick}
    />
  ));

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='char-list'
      variants={cardAnim}
      custom={2}
    >
      {loading ? <CardSkeleton /> : cards}
      {total > offset && <ListLoader />}
    </motion.section>
  );
};

export default CharList;
