import React, { useState } from "react";


const Business = ({ business }) => {
    const [detailed, setDetailed] = useState(false);

    const categories = business.categories.map(cat => cat.title);
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
            <button onClick={() => setDetailed(!detailed)}> Details</button>
            {detailed && (
                <div>
                    <p>Price: {business.price}</p>
                    <p>Rating: {business.rating}</p>
                    <p>Transactions: {business.transactions.join(' ')}</p>
                    <p>Categories: {categories.join(' ')}</p>
                </div>
            )}
        </div>
    );
};


export default Business;