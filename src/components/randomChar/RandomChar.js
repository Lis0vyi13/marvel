import { Component } from 'react';
import { motion } from 'framer-motion';
import Marvel from '../../services/Marvel';

import BlockTitle from '../blockTitle/BlockTitle';
import { cardAnim } from '../../animations/anim';
import Loader from '../loader/Loader';
import Error from '../error/Error';

import './randomChar.scss';

import miniSpiderMan from '../../assets/images/spiddy.png';

const CharContent = ({ state }) => {
  const { thumbnail, name, description, homepage, wiki } = state;
  return (
    <>
      <div className='random-char__character-thumb'>
        <img src={thumbnail} alt='' className='random-char__thumb' />
      </div>
      <div className='random-char__character-text'>
        <div className='random-char__character-name'>
          <p className='random-char__character-name-title'>{name}</p>
        </div>
        <div className='random-char__character-description'>
          <p className='random-char__character-description-text'>
            {description}
          </p>
        </div>
        <div className='random-char__character-buttons'>
          <a
            className='btn random red-btn random-char__character-button'
            href={homepage}
          >
            Homepage
          </a>
          <a className='btn random-char__character-button gray-btn' href={wiki}>
            Wiki
          </a>
        </div>
      </div>
    </>
  );
};
class RandomChar extends Component {
  state = { loading: true, hasError: false };

  static MAXLENGTH = 118;
  marvel = new Marvel();

  componentDidMount() {
    this._isMounted = true;
    this.getCharacterInfo();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  getFormattedDescription(description) {
    return description.length > RandomChar.MAXLENGTH
      ? description.slice(0, RandomChar.MAXLENGTH - 3) + '...'
      : description;
  }

  onLoadInfo = () => {
    this.setState({ loading: false });
  };

  onError = () => {
    this.setState({ hasError: true });
  };

  getCharacterInfo = async () => {
    this.setState({ loading: true, hasError: false });
    try {
      const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
      const res = await this.marvel.getCharInfo(id);
      const char = res[0];
      this.setState({
        name: char.name || 'Not found',
        description:
          this.getFormattedDescription(char.description) ||
          'Empty details, no description found here',
        thumbnail: char.thumbnail,
        homepage: char.homepage,
        wiki: char.wiki,
      });
    } catch {
      if (this._isMounted) {
        this.onError();
        this.onLoadInfo();
      }
    } finally {
      this.onLoadInfo();
    }
  };

  render() {
    const { loading, hasError } = this.state;
    const { title } = this.props;
    const loader = loading && <Loader />;
    const error = hasError && <Error />;
    const content = !(loader || error) && <CharContent state={this.state} />;
    return (
      <section className='random-char'>
        <div className='container random-char__container'>
          <BlockTitle title={title} />
          <motion.section
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='random-char__content'
          >
            <motion.div
              variants={cardAnim}
              custom={1}
              className='random-char__character'
            >
              <div className='random-char__character-content'>
                {loader}
                {error}
                {content}
              </div>
            </motion.div>
            <motion.div
              variants={cardAnim}
              custom={3}
              className='random-char__try-it'
            >
              <img
                className='random-char__try-it-image'
                src={miniSpiderMan}
                alt='mini spider man'
              />
              <div className='random-char__try-it-content'>
                <div className='random-char__try-it-text'>
                  <p className='random-char__try-it-text-content'>
                    Random character for today! <br /> Do you want to get to
                    know him better?
                  </p>
                </div>
                <div className='random-char__try-it-cta'>
                  <p className='random-char__try-it-text-content'>
                    Or choose another one
                  </p>
                  <button
                    onClick={this.getCharacterInfo}
                    className='btn red-btn random-char__try-it-button'
                  >
                    Try it
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>
    );
  }
}

export default RandomChar;
