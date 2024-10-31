// backend/routes/api/spots.js
const express = require('express');
const { Spot } = require('../../db/models');
const router = express.Router();






// GET all spots
router.get('/', async (req, res) => {
  try {
    const spots = await Spot.findAll(); // Fetch all spots from the database
    res.json(spots); // Respond with the spots as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching spots' });
  }
});

module.exports = router;
