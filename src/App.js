import React from 'react';
import usePosition from './components/GeoLoc';

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
const YELP_BUSINESS_URL = process.env.REACT_APP_YELP_BUSINESS_URL;

const App = () => {
  const { position, error } = usePosition();
  console.log(position);
  if (error != null) {
    console.log(error);
  }

  console.log(YELP_API_KEY);
  console.log(YELP_BUSINESS_URL);

  return (
    <div className="App">
      {error ? (
        <h4>Error loading geolocation</h4>
      ) : position ? (
        <h4>{position.latitude} {position.longitude}</h4>
      ) : (
        <h4>Loading geolocation</h4>
      )}
    </div>
  );

}

export default App;