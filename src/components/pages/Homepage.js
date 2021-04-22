import React, { useContext } from 'react';
import showsContext from '../../context/show/showsContext';
import Searchbar from '../Searchbar';
import Listitem from '../Listitem';
import image1 from '../image/imagenotfound.png';
import Loader from '../Loader';
const Homepage = () => {
  let { shows, loading } = useContext(showsContext);
  return (
    <div className='Homepage'>
      <Searchbar />
      {loading ? (
        <Loader />
      ) : (
        //
        <div className='Homepage_list'>
          {shows.map((item) => (
            <Listitem
              image={item.show.image ? item.show.image.medium : image1}
              key={item.show.id}
              name={item.show.name}
              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : 'No Rating Available'
              }
              id={item.show.id}
            />
          ))}
        </div>
      )}
      {/* Homepage */}
    </div>
  );
};

export default Homepage;
