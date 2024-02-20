import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import './appHeader.scss';

import AppSocialItem from '../appSocialItem/AppSocialItem';
import { headerAnim } from '../../animations/anim';

import marvelLogo from '../../assets/icons/Marvel logo.svg';
import telegram from '../../assets/icons/telegram.svg';
import gmail from '../../assets/icons/gmail.svg';

const AppHeader = () => {
  const tg = 'https://web.telegram.org/k/#@lisovyi13';

  const [socials] = useState([
    { name: 'Telegram', image: telegram, href: tg, key: 'tg' },
    {
      name: 'Gmail',
      image: gmail,
      href: tg,
      key: 'gmail',
    },
  ]);

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
            <Link to='marvel'>
              <img src={marvelLogo} width={130} alt='Marvel logo' />
            </Link>
          </div>
          <nav className='header__nav'>
            <ul className='header__list'>
              <li className='header__list-item'>
                <NavLink
                  to='marvel'
                  className={({ isActive }) =>
                    `header__list-link ${isActive ? 'header__active-link' : ''}`
                  }
                  href='#'
                >
                  Characters
                </NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink
                  to='comics'
                  className={({ isActive }) =>
                    `header__list-link ${isActive ? 'header__active-link' : ''}`
                  }
                  href='#'
                >
                  Comics
                </NavLink>
              </li>
            </ul>
          </nav>
          <section className='header__social-medias'>{socialMedias}</section>
        </div>
      </div>
    </motion.header>
  );
};

export default AppHeader;
