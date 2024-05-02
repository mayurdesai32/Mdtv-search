import React from 'react';
import ReactDOM from 'react-dom';
import ShowsState from './context/show/ShowsState';
import AlertsStates from './context/alert/AlertsStates';
import './index.css';
import App from './App';

ReactDOM.render(
  <ShowsState>
    <AlertsStates>
      <App />
    </AlertsStates>
  </ShowsState>,
  document.getElementById('root')
);
