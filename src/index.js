import React from 'react';
import ReactDOM from 'react-dom';
import ShowsState from './context/show/ShowsState';
import AlertsState from './context/alert/AlertsState';
import './index.css';
import App from './App';

ReactDOM.render(
  <ShowsState>
    <AlertsState>
      <App />
    </AlertsState>
  </ShowsState>,
  document.getElementById('root')
);
