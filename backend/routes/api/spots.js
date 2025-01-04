// backend/routes/api/spots.js
const express = require('express');
const { Spot, SpotImage, Booking, Review, ReviewImage, User } = require('../../db/models');
// const { Where } = require('sequelize/lib/utils');
const { requireAuth } = require('../../utils/auth');
const moment = require('moment');
const router = express.Router();














// GET all spots
// good

// router.get('/', async (req, res) => {
//   try {
//     const spots = await Spot.findAll({
//       include:{
//         model:SpotImage,
//         as:"SpotImages"
//       }
//     });
//     res.json(spots);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching spots' });
//   }
// });




















// Helper function for validating query parameters
const validateQueryParams = (queryParams) => {
  const errors = {};

  // Page validation
  if (queryParams.page && (queryParams.page < 1 || !Number.isInteger(Number(queryParams.page)))) {
    errors.page = 'Page must be greater than or equal to 1';
  }

  // Size validation
  if (queryParams.size && (queryParams.size < 1 || queryParams.size > 20 || !Number.isInteger(Number(queryParams.size)))) {
    errors.size = 'Size must be between 1 and 20';
  }

  // Price validation
  if (queryParams.minPrice && queryParams.minPrice < 0) {
    errors.minPrice = 'Minimum price must be greater than or equal to 0';
  }
  if (queryParams.maxPrice && queryParams.maxPrice < 0) {
    errors.maxPrice = 'Maximum price must be greater than or equal to 0';
  }

  // Latitude/Longitude validation
  if (queryParams.minLat && queryParams.maxLat && queryParams.minLat > queryParams.maxLat) {
    errors.minLat = 'Minimum latitude must be less than or equal to maximum latitude';
  }
  if (queryParams.minLng && queryParams.maxLng && queryParams.minLng > queryParams.maxLng) {
    errors.minLng = 'Minimum longitude must be less than or equal to maximum longitude';
  }

  return errors;
};




// need help with average star reviews


// helper function to calculate avg star review

// function avgStarRating (Reviews) {
//   const starry = Reviews;
//   let avgStars;
//   let stars = 0;

//     for (let i = 0; i < starry.length; i++) {
//       stars += starry[i];
//     }
//     avgStars = stars/starry.length;
//     return Math.round(avgStars*10)/10
// };










// helper function to calculate number of reviews

// function numReviews () {
//   return spotReviews.length -1;
// }












// get all spots with query filters
// works good
router.get('/', async (req, res) => {
  try {
    const { page = 1, size = 20, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
    const validationErrors = validateQueryParams(req.query);
    if (Object.keys(validationErrors).length > 0) {
      return res.status(400).json({ message: 'Bad Request', errors: validationErrors });
    }

    const offset = (page - 1) * size;
    const limit = size;
    const filterConditions = {};

    if (minLat && maxLat) filterConditions.lat = { [Sequelize.Op.between]: [minLat, maxLat] };
    if (minLng && maxLng) filterConditions.lng = { [Sequelize.Op.between]: [minLng, maxLng] };
    if (minPrice) filterConditions.price = { [Sequelize.Op.gte]: minPrice };
    if (maxPrice) filterConditions.price = { ...filterConditions.price, [Sequelize.Op.lte]: maxPrice };

    const { rows: spots, count } = await Spot.findAndCountAll({
      where: filterConditions,
      limit,
      offset
    });


    res.status(200).json({
      Spots: spots,
      page: parseInt(page),
      size: parseInt(size),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while retrieving spots' });
  }
});













// get current user spots
// works good

router.get('/current', requireAuth, async (req, res) => {
  try {
    const currentUserId = req.user.id;


    const userSpots = await Spot.findAll({
      where: { ownerId: currentUserId },
    });

    return res.status(200).json({
      Spots: userSpots,
    });
  } catch (error) {
    console.error('Error fetching user spots:', error);
    return res.status(500).json({ message: 'Failed to retrieve spots.' });
  }
});


















// get spot by spot id
// works good
router.get('/:spotId', async (req, res) => {
  try {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);

    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }

    return res.status(200).json(spot);
  } catch (error) {
    console.error('Error fetching spot:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving the spot.' });
  }
});




















// create a new spot
// works good
router.post('/',requireAuth, async (req, res) => {
  try {
    const newSpot = await Spot.create(req.body);
    res.status(201).json(newSpot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the spot' });
  }
});




















//  add an Image to a Spot based on the Spot's id
// works good
router.post('/:spotId/images',requireAuth, async (req, res) => {
  try {
    const { spotId } = req.params;
    const { url, preview } = req.body;


    const spot = await Spot.findByPk(spotId);


    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }

    const newImage = await SpotImage.create({
      spotId: spotId,
      url: url,
      preview: preview
    });
    if(spot.ownerId !== req.user.id) {
      return res.status(401).json({ error: 'must be owner to edit' });
    }

    return res.status(201).json({
      id: newImage.id,
      spotId: newImage.spotId,
      url: newImage.url,
      preview: newImage.preview
    });
  } catch (error) {
    console.error('Error adding image to spot:', error);
    return res.status(500).json({ message: 'An error occurred while adding the image.' });
  }
});














// edit a spot
// works good
router.put('/:id',requireAuth, async (req, res) => {
  try {

    const { id } = req.params;
    const spot = await Spot.findByPk(id);
    if (!spot) {
      return res.status(404).json({ error: 'Spot not found' });

    }

    if(spot.ownerId !== req.user.id) {
      return res.status(401).json({ error: 'must be owner to edit' });
    }
    await spot.update(req.body);
    res.json(spot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the spot' });
  }
});










// delete a spot
// works good
router.delete('/:id',requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spot.findByPk(id);
    if (!spot) {
      return res.status(404).json({ error: 'Spot not found' });
    }
    if(spot.ownerId !== req.user.id) {
      return res.status(401).json({ error: 'must be owner to edit' });
    }
    await spot.destroy();
    res.json({ message: 'Spot deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the spot' });
  }
});
















// get all reviews based on spot id
// works good
router.get('/:spotId/reviews', async (req, res) => {
  try {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }


    const reviews = await Review.findAll({
      where: { spotId },
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: ReviewImage,
          attributes: ['id', 'url']
        }
      ]
    });

    return res.status(200).json({ Reviews: reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving reviews.' });
  }
});







// create a review based on spot id
// works good
router.post('/:spotId/reviews', requireAuth, async (req, res) => {
  const { spotId } = req.params;
  const { review, stars } = req.body;
  const { user } = req;


  const errors = {};
  if (!review) errors.review = 'Review text is required';
  if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
    errors.stars = 'Stars must be an integer from 1 to 5';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      message: 'Bad Request',
      errors
    });
  }

  try {

    const spot = await Spot.findByPk(spotId);
    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }


    const existingReview = await Review.findOne({
      where: { spotId, userId: user.id }
    });

    if (existingReview) {
      return res.status(500).json({
        message: 'User already has a review for this spot'
      });
    }

    const newReview = await Review.create({
      userId: user.id,
      spotId: parseInt(spotId),
      review,
      stars
    });

    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});




















// get booking based on spot id
// works good
router.get('/:spotId/bookings', async (req, res) => {
  try {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }


    const bookings = await Booking.findAll({
      where: { spotId },
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName']
        },

      ]
    });

    return res.status(200).json({ Bookings: bookings });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving reviews.' });
  }
});


















// create a new booking for a spot

router.post('/:spotId/bookings', requireAuth, async (req, res) => {
  const { user } = req;
  const {startDate,endDate} = req.params
  try {


    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }

    const newBooking = await Booking.create({
      userId: user.id,
      spotId: spotId,
      startDate: startDate,
      endDate: endDate,

    });

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
