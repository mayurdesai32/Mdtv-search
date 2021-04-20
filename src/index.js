import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import ShowsState from './context/show/ShowsState';
// import './index.css';
import App from './App';

ReactDOM.render(
  <ShowsState>
    <App />
  </ShowsState>,
  document.getElementById('root')
);
