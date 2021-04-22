import React from 'react';

const Footer = () => {
  return (
    <div className='Footer'>
      <ul className='Footer_link'>
        <li className='links__footer'>
          <a href='https://github.com/mayurdesai32' target='blank'>
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li className='links__footer'>
          <a
            href='https://linkedin.com/in/mayur-desai-3801a6209'
            target='blank'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
      </ul>

      <center>
        <h3>Handcrafted by me © Mayur Desai</h3>
      </center>
    </div>
  );
};

export default Footer;
