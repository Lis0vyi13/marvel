import './appMainList.scss';
import BlockTitle from '../blockTitle/BlockTitle';

const AppMainList = ({ children }) => {
  return (
    <div className='main__list'>
      <div className='container main__list-container'>
        <BlockTitle title={'Characters list'} />
        <div className='main__list-content'>{children}</div>
      </div>
    </div>
  );
};

export default AppMainList;
