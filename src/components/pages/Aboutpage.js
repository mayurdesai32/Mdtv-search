import React from 'react';

const Aboutpage = () => {
  return (
    <div className='Aboutpage'>
      <div className='about'>
        <h3 className='about__title'>ABOUT PAGE</h3>
        <div className='about__info'>
          <p>MD TV Search </p>
          <div>
            <ul>
              <li>React (create-react-app)</li>
              <li>Basic CSS & HTML</li>
              <li>Axios AJAX Request</li>
              <li>TVMAZE API (https://www.tvmaze.com/api)</li>
              <li>React Router</li>
              <li>React Context API</li>
              <li>Deploying to HEROKU</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
