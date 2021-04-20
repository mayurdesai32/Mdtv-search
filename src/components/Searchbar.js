import React, { useState, useContext } from 'react';
import showsContext from '../context/show/showsContext';
import Alert from './Alert';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let { searchShows } = useContext(showsContext);
  const onsearchhandler = (e) => {
    e.preventDefault();
    searchShows(searchTerm);
    // console.log(searchShows);
  };
  return (
    <div className='Searchbar'>
      <Alert message='Please enter something' type='danger' />
      <form className='Searchbar__form'>
        <input
          type='text'
          placeholder='Search For Tv Show'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button className='btn btn-block' onClick={onsearchhandler}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
