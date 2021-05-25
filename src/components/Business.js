import React from "react";


const Business = ({ business }) => {
  return (
    <div className="business">
      <h2>{business.name}</h2>
      <div>
        <img
          width="200"
          alt={`The business is rated: ${business.rating}`}
          src={business.image_url}
        />
      </div>
    </div>
  );
};


export default Business;