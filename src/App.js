import React from 'react';
import usePosition from './components/GeoLoc';

const App = () => {
  const { position, error } = usePosition();
  console.log(position);
  if (error != null) {
    console.log(error);
  }

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