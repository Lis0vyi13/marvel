import './comicsList.scss';

import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import ComicsListItem from '../ComicsListItem/ComicsListItem';
import Marvel from '../../services/Marvel';
import ListLoader from '../charList/listLoader/ListLoader';

import { comicsHeaderAnim } from '../../animations/anim';
import Loader from '../loader/Loader';

const marvel = new Marvel();

const ComicsList = () => {
  const [comics, setComics] = useState([]);
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(2);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await marvel.getComics(offset);
      setComics((oldData) => [...oldData, ...data]);
      setIsLoading(false);
    };
    fetchData();
  }, [offset]);

  useEffect(() => {
    const comicsList = getComicsList();
    setComicsList(comicsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comics]);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 50
        ) {
          setOffset((offset) => offset + 20);
        }
      }, 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getComicsList = () => {
    return comics.map((item, i) => {
      const props = marvel._transformComics(item);
      return <ComicsListItem key={i} {...props} />;
    });
  };

  const content =
    comics.length > 0 ? (
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        custom={0.5}
        variants={comicsHeaderAnim}
        className='comics-list__content'
      >
        {comicsList}
        <ListLoader />
      </motion.section>
    ) : (
      <p>No comics found.</p>
    );

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      custom={2}
      variants={comicsHeaderAnim}
      className='comics-list'
    >
      {isLoading ? <Loader /> : content}
    </motion.div>
  );
};

export default ComicsList;
