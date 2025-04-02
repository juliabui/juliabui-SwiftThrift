const express = require('express');
const router = express.Router();
const { getCategories, searchListings, getAllListings } = require('../database/queries');

// Route for getting all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'An error occurred while fetching categories' });
  }
});

// Route for searching listings
router.get('/listings/search', async (req, res) => {
  try {
    const { category, query } = req.query;
    const listings = await searchListings(category, query);
    
    res.json({
      count: listings.length,
      listings
    });
  } catch (error) {
    console.error('Error in search:', error);
    res.status(500).json({ error: 'An error occurred while searching' });
  }
});

// Route for retrieving all listings
router.get('/listings', async (req, res) => {
  try {
    const listings = await getAllListings();
    
    res.json({
      count: listings.length,
      listings
    });
  } catch (error) {
    console.error('Error retrieving all listings:', error);
    res.status(500).json({ error: 'An error occurred while retrieving listings' });
  }
});

module.exports = router;