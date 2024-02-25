import './searchForm.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from '../loader/Loader';

import Marvel from '../../services/Marvel';
const marvel = new Marvel();

const SuccessResponse = ({ data, value, color }) => {
  const char = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <>
      <h3 style={{ color: color }}> There is! Visit {char}'s page?</h3>
      <Link
        to={`/characters/${data.id}`}
        className='btn gray-btn search-form__gray-btn'
      >
        To Page
      </Link>
    </>
  );
};

const SearchForm = () => {
  const [value, setValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, isLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setSearchResult('');
      isLoading(true);
      const data = await marvel.getCharInfoByName(value);
      setSearchResult(
        <SuccessResponse data={data} value={value} color={'#03710E'} />,
      );
    } catch (error) {
      setSearchResult(
        'The character was not found. Check the name and try again',
      );
    } finally {
      isLoading(false);
    }
  };

  return (
    <section className='search-form'>
      <div className='search-form__content'>
        <h2 className='search-form__title'>Or find a character by name:</h2>
        <form onSubmit={onSubmit} className='search-form__form' action='#'>
          <div className='search-form__form-content'>
            <input
              className='search-form__input'
              type='text'
              placeholder='Enter name'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className='btn red-btn search-form__button' type='submit'>
              Find
            </button>
          </div>

          <div className='search-form__result'>{searchResult}</div>
        </form>
        {loading && <Loader />}
      </div>
    </section>
  );
};

export default SearchForm;
