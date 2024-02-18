import './comicsHeader.scss';

import hulk from '../../assets/images/comics-hulk.png';
import marvelSquad from '../../assets/images/marvel-squad.png';

const ComicsHeader = () => {
  return (
    <>
      <img
        style={{
          height: 130,
        }}
        src={hulk}
        alt='hulk'
      />
      <img src={marvelSquad} alt='marvel squad' />
      <h2 className='comics-header__title'>
        New comics every week! Stay tuned!
      </h2>
    </>
  );
};

export default ComicsHeader;
