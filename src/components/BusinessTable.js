import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Business from "./Business";

const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
const YELP_BUSINESS_URL = process.env.REACT_APP_YELP_BUSINESS_URL;
const CORS_API_URL = process.env.REACT_APP_CORS_API_URL;

const PER_PAGE = 10;

const BusinessTable = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [businesses, setBusinesses] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const geoloc = props.geoloc

    useEffect(() => {
        let offset = currentPage * PER_PAGE;

        let url = `${CORS_API_URL}/${YELP_BUSINESS_URL}?latitude=${geoloc.latitude}&longitude=${geoloc.longitude}&limit=${PER_PAGE}&offset=${offset}`;
        fetch(url, {
            headers: { 'Authorization': `Bearer ${YELP_API_KEY}` }
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(data => {
                setBusinesses(data.businesses);
                setPageCount(Math.ceil(data.total / PER_PAGE));
            })
            .catch((error) => {
                console.error('Error: ', error);
                setErrorMessage(error.message);
            });
    }, [currentPage, pageCount, geoloc]);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    return (
        <div className="App">
            <h1>Local Businesses</h1>
            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
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