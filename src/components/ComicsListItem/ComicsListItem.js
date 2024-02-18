import './comicsListItem.scss';

import { Link } from 'react-router-dom';

const ComicsListItem = ({ id, thumbnail, title, price }) => {
  return (
    <Link to={`./${id}`}>
      <div className='comics-item'>
        <img className='comic-img' src={thumbnail} alt='sef' />
        <h2 className='comic-title'>{title}</h2>
        <h4 className='comic-price'>{price}</h4>
      </div>
    </Link>
  );
};

export default ComicsListItem;
