// backend/routes/api/bookings.js
const express = require('express');
const { Booking, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();




// router.get('/current', requireAuth, async (req, res) => {
//   try {
//     const currentUserId = req.user.id; // Extract user ID from authentication middleware

//     // Find all spots where the current user is the owner
//     const userSpots = await Spot.findAll({
//       where: { ownerId: currentUserId }, // Filtering spots owned by the current user
//     });

//     // Return the spots as JSON
//     return res.status(200).json({
//       Spots: userSpots,
//     });
//   } catch (error) {
//     console.error('Error fetching user spots:', error);
//     return res.status(500).json({ message: 'Failed to retrieve spots.' });
//   }
// });








// GET all bookings of current user

router.get('/current', requireAuth, async (req, res) => {
  try {
    const currentUserId = req.user.id; // Extract user ID from authentication middleware

    // Find all spots where the current user is the owner
    const userBookings = await Booking.findAll({
      where: { ownerId: currentUserId }, // Filtering spots owned by the current user
    });
    return res.status(200).json({
      Bookings: userBookings,
    });



  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching bookings' });
  }
});
