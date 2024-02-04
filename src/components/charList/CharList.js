import { Component } from 'react';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Marvel from '../../services/Marvel';
import { cardAnim } from '../../animations/anim';
import CharListLoader from './charListLoader/CharListLoader';

import './charList.scss';

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

class CharList extends Component {
  state = {
    chars: [],
    loading: false,
    offset: null,
    loadingExtraChar: false,
  };

  marvel = new Marvel();

  componentDidMount = async () => {
    await this.setState({ offset: this.marvel._baseOffset });
    await this.getCharacters();
    window.addEventListener('scroll', this.calculateDistance);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calculateDistance);
  }

  calculateDistance = async () => {
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
      !this.state.loadingExtraChar &&
      scrolledPixels >= documentHeight - windowHeight - 50
    ) {
      this.setState(
        (prevState) => ({
          offset: prevState.offset + 9,
          loadingExtraChar: true,
        }),
        async () => {
          const chars = await this.marvel.getCharactersList(this.state.offset);
          this.setState((prevState) => ({
            chars: [...prevState.chars, ...chars],
            loadingExtraChar: false,
          }));
        },
      );
    }
  };

  getCharacters = async () => {
    this.setState({ loading: true, hasError: false });
    try {
      const chars = await this.marvel.getCharactersList(this.state.offset);
      this.setState({ chars });
    } catch (error) {
      this.setState({ loading: false, hasError: true });
      throw new Error(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  onCardFocus = (e, id) => {
    const card = e.target.closest('.char-list__item');
    document.querySelector('.active-card')?.classList.remove('active-card');
    card.classList.add('active-card');

    this.props.getActiveChar(id);
  };

  onCardClick = () => {
    const charInfo = document.querySelector('#char-info');
    scroll.scrollTo(charInfo.offsetTop - 50, {
      duration: 400,
      smooth: 'easeInOutQuad',
    });
  };

  render() {
    const { chars, loading, offset } = this.state;
    const { total } = this.props;
    const cards = chars.map((char) => (
      <Card
        name={char.name}
        onCardFocus={(e) => this.onCardFocus(e, char.id)}
        key={char.id}
        img={char.thumbnail}
        onCardClick={this.onCardClick}
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
        {total > offset && <CharListLoader />}
      </motion.section>
    );
  }
}

export default CharList;
