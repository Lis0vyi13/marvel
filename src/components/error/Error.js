import errorImg from './error.svg';
import './error.scss';

const Error = () => {
  return (
    <>
      <div className='error'>
        <img src={errorImg} alt='error img' className='error-img' />
      </div>
    </>
  );
};

export default Error;
