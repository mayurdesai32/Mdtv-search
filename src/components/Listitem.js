import React from 'react';
import { Link } from 'react-router-dom';
const Listitem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className='Listitem'>
      <img src={image} alt={name} className='Listitem_img' />
      <div className='Listitem_info'>
        <h4 className='Listitem_name'>{name}</h4>
        <h4 className='Listitem_rating'>{rating}</h4>
      </div>
    </Link>
  );
};

export default Listitem;
