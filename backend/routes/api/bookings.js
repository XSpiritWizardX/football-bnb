// backend/routes/api/bookings.js
const express = require('express');
const { Booking, User, Spot } = require('../../db/models');
// const { Where } = require('sequelize/lib/utils');
const { requireAuth } = require('../../utils/auth');
const moment = require('moment');
const { where } = require('sequelize');
const router = express.Router();






// get all bookngs
// works good

// router.get('/', requireAuth, async (req, res) => {
//   try {
//
//     const bookings = await Booking.findAll({
//
//       include: [
//         {
//           model: Spot
//         }
//       ]
//     });
//     res.json(bookings);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching spots' });
//   }
// });












// get all current user bookings
// works good
router.get('/current', requireAuth, async (req, res) => {
  try {
    const currentUserId = req.user.id;
    const userBookings = await Booking.findAll({
      where: { userId: currentUserId },
      include: [
        {
          model: Spot
        }
      ]
    });

    return res.status(200).json({
      Bookings: userBookings,
    });
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return res.status(500).json({ message: 'Failed to retrieve bookings.' });
  }
});











// update a booking
router.put('/bookings/:bookingId', requireAuth, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const { startDate, endDate } = req.body;
    const userId = req.user.id;


    const booking = await Booking.findByPk(bookingId, {
      include: [{ model: Spot }]
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking couldn't be found" });
    }

    if (booking.userId !== userId) {
      return res.status(403).json({ message: "You cannot edit someone else's booking" });
    }

    const now = moment();
    const bookingEndDate = moment(booking.endDate);
    if (bookingEndDate.isBefore(now, 'day')) {
      return res.status(403).json({ message: "Past bookings can't be modified" });
    }


    const start = moment(startDate);
    const end = moment(endDate);

    if (start.isBefore(now, 'day')) {
      return res.status(400).json({
        message: "Bad Request",
        errors: { startDate: "startDate cannot be in the past" },
      });
    }

    if (end.isSameOrBefore(start)) {
      return res.status(400).json({
        message: "Bad Request",
        errors: { endDate: "endDate cannot be on or before startDate" },
      });
    }


    const conflictingBooking = await Booking.findOne({
      where: {
        spotId: booking.spotId,
        startDate: {
          [Sequelize.Op.lt]: end,
        },
        endDate: {
          [Sequelize.Op.gt]: start,
        },
      },
    });

    if (conflictingBooking) {
      return res.status(403).json({
        message: "Sorry, this spot is already booked for the specified dates",
        errors: {
          startDate: "Start date conflicts with an existing booking",
          endDate: "End date conflicts with an existing booking",
        },
      });
    }


    booking.startDate = startDate;
    booking.endDate = endDate;
    await booking.save();


    return res.status(200).json({
      id: booking.id,
      spotId: booking.spotId,
      userId: booking.userId,
      startDate: booking.startDate,
      endDate: booking.endDate,
      createdAt: booking.createdAt,
      updatedAt: booking.updatedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the booking" });
  }
});











//  delete a booking
router.delete('/bookings/:bookingId', requireAuth, async (req, res) => {
  try {
    const { bookingId } = req.params;
    const userId = req.user.id;


    const booking = await Booking.findByPk(bookingId, {
      include: [{ model: Spot }],
    });

    if (!booking) {
      return res.status(404).json({ message: "Booking couldn't be found" });
    }
    if (booking.userId !== userId && booking.Spot.ownerId !== userId) {
      return res.status(403).json({ message: "You cannot delete someone else's booking" });
    }

    const now = moment();
    const bookingStartDate = moment(booking.startDate);
    if (bookingStartDate.isBefore(now, 'day')) {
      return res.status(403).json({
        message: "Bookings that have been started can't be deleted",
      });
    }



    await booking.destroy();



    return res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting the booking" });
  }
});



module.exports = router;
