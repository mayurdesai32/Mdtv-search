import React, { useState, useContext } from 'react';
import showsContext from '../context/show/showsContext';
import Alert from './Alert';
import AlertsContext from '../context/alert/AlertsContexts';
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  let { searchShows } = useContext(showsContext);

  let { alert, setAlert } = useContext(AlertsContext);
  const onsearchhandler = (e) => {
    e.preventDefault();

    if (searchTerm === '') {
      setAlert('plz enter something', 'danger');
    } else {
      searchShows(searchTerm);
    }
  };
  return (
    <div className='Searchbar'>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}

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
