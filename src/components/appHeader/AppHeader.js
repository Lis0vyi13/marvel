import { Component } from 'react';
import { motion } from 'framer-motion';

import './appHeader.scss';

import AppSocialItem from '../appSocialItem/AppSocialItem';
import { headerAnim } from '../../animations/anim';

import marvelLogo from '../../assets/icons/Marvel logo.svg';
import telegram from '../../assets/icons/telegram.svg';
import gmail from '../../assets/icons/gmail.svg';

class AppHeader extends Component {
  tg = 'https://web.telegram.org/k/#@lisovyi13';

  state = {
    socials: [
      { name: 'Telegram', image: telegram, href: this.tg, key: 'tg' },
      {
        name: 'Gmail',
        image: gmail,
        href: this.tg,
        key: 'gmail',
      },
    ],
  };

  render() {
    const { socials } = this.state;
    const socialMedias = socials.map((item) => <AppSocialItem {...item} />);

    return (
      <motion.header
        initial='hidden'
        custom={1}
        whileInView='visible'
        viewport={{ once: true }}
        variants={headerAnim}
        className='header'
      >
        <div className='container'>
          <div className='header__content'>
            <div className='header__logo'>
              <a href='#'>
                <img src={marvelLogo} width={130} alt='Marvel logo' />
              </a>
            </div>
            <nav className='header__nav'>
              <ul className='header__list'>
                <li className='header__list-item'>
                  <a className='header__list-link' href='#'>
                    Characters
                  </a>
                </li>
                <li className='header__list-item'>
                  <a className='header__list-link' href='#'>
                    Comics
                  </a>
                </li>
              </ul>
            </nav>
            <section className='header__social-medias'>{socialMedias}</section>
          </div>
        </div>
      </motion.header>
    );
  }
}

export default AppHeader;
