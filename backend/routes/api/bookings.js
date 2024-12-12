// backend/routes/api/bookings.js
const express = require('express');
const { Booking } = require('../../db/models');
const router = express.Router();






// GET all bookings of current user

router.get('/current', async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(spots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching bookings' });
  }
});
