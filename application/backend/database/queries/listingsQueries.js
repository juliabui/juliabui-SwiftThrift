import {
    CREATE_LISTINGS,
    DROP_LISTINGS,
    ADD_LISTING,
    DELETE_LISTING,
    CHANGE_LISTING_INFO,
    CHANGE_LISTING_STATUS
} from "../sql/listingsSQL";

const { pool } = require('../connection');


/*
    Creation and Dropping of the Listings Table
*/

const createListingsTable = async () => {
    try {
        const [rows] = await pool.query(CREATE_LISTINGS);
        console.log(rows);

    } catch (error) {
        console.error('Error creating Listings table:', error);
        return {
            success: false,
            error: error.message
        };
    }
};


const dropListingsTable = async () => {
    try {
        const [rows] = await pool.query(DROP_LISTINGS);
        console.log(rows);

    } catch (error) {
        console.error('Error dropping Listings table:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

/*
    Record modification of the Listings table
*/

const addListing = async (sellerId, name, desc, price) => {
    try {
        const [rows] = await pool.query(ADD_LISTING,
            sellerId, name, desc, price
        );
        console.log(rows);

    } catch (error) {
        console.error('Error adding listing:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const deleteListing= async (sellerId, listingId) => {
    try {
        const [rows] = await pool.query(DELETE_LISTING,
            sellerId, listingId
        );
        console.log(rows);

    } catch (error) {
        console.error('Error deleting listing:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const changeListingInfo = async (listingId, name, desc, price) => {
    try {
        const [rows] = await pool.query(CHANGE_LISTING_INFO,
            name, desc, price, listingId
        );
        console.log(rows);

    } catch (error) {
        console.error('Error changing listing info:', error);
        return {
            success: false,
            error: error.message
        };
    }
};

const changeListingStatus = async (listingId, status) => {
    try {
        const [rows] = await pool.query(CHANGE_LISTING_STATUS,
            status, listingId
        );
        console.log(rows);

    } catch (error) {
        console.error('Error changing listing status:', error);
        return {
            success: false,
            error: error.message
        };
    }
};


  
module.exports = {
    createListingsTable,
    dropListingsTable,
    addListing,
    deleteListing,
    changeListingInfo,
    changeListingStatus
};