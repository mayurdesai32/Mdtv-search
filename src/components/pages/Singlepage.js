import React, { useEffect, useContext } from 'react';
import showsContext from '../../context/show/showsContext';
import image1 from '../image/images2.png';
import Loader from '../Loader';
const Singlepage = ({ match }) => {
  const { loading, getsingleshow, clearsingleshow, singleShow } = useContext(
    showsContext
  );
  useEffect(() => {
    getsingleshow(match.params.id);
  }, []);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, '');
  };
  return (
    <div className='Singlepage'>
      {loading ? (
        <Loader />
      ) : (
        <div className='Singleshow'>
          <img
            src={singleShow.image ? singleShow.image.medium : image1}
            alt={singleShow.name}
          />
          <div className='Singleshow_info'>
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre, index) => (
                <span key={index} className='Singleshow_genre'>
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong>
              {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>
              {singleShow.rating ? singleShow.rating.average : 'No Rating'}
            </p>
            <p>
              <strong>Offical Site:</strong>
              {singleShow.officalsite ? (
                <a href={singleShow.officalsite} target='blank'>
                  {singleShow.officalsite}
                </a>
              ) : (
                ' No Offical Site'
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )}
      Singlepage
    </div>
  );
};

export default Singlepage;
