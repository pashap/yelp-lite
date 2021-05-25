import React, { useState } from "react";
import Business from "./Business";

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
const YELP_BUSINESS_URL = process.env.REACT_APP_YELP_BUSINESS_URL;
const CORS_API_URL = process.env.REACT_APP_CORS_API_URL;


const BusinessTable = (props) => {
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const geoloc = props.geoloc

    console.log(geoloc);
    console.log(YELP_API_KEY);
    console.log(YELP_BUSINESS_URL);
    console.log(CORS_API_URL);

    return (
        <div className="App">
            <h1>Local Businesses</h1>
            <div className="business-table">
                {errorMessage ? (
                    <div className="errorMessage">Failed to fetch businesses: {errorMessage}</div>
                ) : (
                    businesses.map((business, index) => (
                        <Business key={`${index}-${business.id}`} business={business} />
                    ))
                )}
            </div>
        </div>
    );
};


export default BusinessTable;