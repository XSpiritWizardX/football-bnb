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
        offset,
      include : [
        {model: Review}

      ]
    });

    // console.log(spots[0].dataValues.Reviews)


    spots.map(spot => {
      const totalStars = spot.dataValues.Reviews.reduce((acc,review) => {
        return acc += review.dataValues.stars
      },0)
      spot.dataValues.avgRating = Math.round(totalStars/spot.dataValues.Reviews.length *10)/10;
      delete spot.dataValues.Reviews
    })



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
      include : [
        {model: Review}

      ]
    });



    userSpots.map(spot => {
      const totalStars = spot.dataValues.Reviews.reduce((acc,review) => {
        return acc += review.dataValues.stars
      },0)
      spot.dataValues.avgRating = Math.round(totalStars/spot.dataValues.Reviews.length *10)/10;
      delete spot.dataValues.Reviews
    })



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
    const spot = await Spot.findOne({
      where: { id: spotId },
      include : [
        {model: Review,

        },
        {
          model: SpotImage
        },
        {
          model: User
        },

      ]
    });

    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }

    const totalStars = spot.dataValues.Reviews.reduce((acc,review) => {
        return acc += review.dataValues.stars
      },0)
      spot.dataValues.avgRating = Math.round(totalStars/spot.dataValues.Reviews.length *10)/10;
      delete spot.dataValues.Reviews




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

    const newSpot = await Spot.create({ownerId:req.user.id, ...req.body});




    // create spot validations

    if(!req.body.address){
      res.status(400).json({message: "Street address is required " })
    }

    if(!req.body.city){
      res.status(400).json({message: "City is required " })
    }
    if(!req.body.state){
      res.status(400).json({message: "State is required " })
    }
    if(!req.body.zipcode || req.body.zipcode.length !== 5 ){
      res.status(400).json({message: "Zipcode is required " })
    }
    if(!req.body.country){
      res.status(400).json({message: "Country is required " })
    }
    if(!req.body.lat){
      res.status(400).json({message: "latitude is required " })
    }
    if(!req.body.lng){
      res.status(400).json({message: "longitude is required " })
    }
    if(!req.body.name){
      res.status(400).json({message: "name is required " })
    }
    if(!req.body.description){
      res.status(400).json({message: "description is required " })
    }
    if(!req.body.price || req.body.price < 0){
      res.status(400).json({message: "Price is required " })
    }




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
      // spotId: newImage.spotId,
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





    if(!req.body.address){
      res.status(400).json({message: "Street address is required " })
    }

    if(!req.body.city){
      res.status(400).json({message: "City is required " })
    }
    if(!req.body.state){
      res.status(400).json({message: "State is required " })
    }
    if(!req.body.zipcode){
      res.status(400).json({message: "Zipcode is required " })
    }
    if(!req.body.country){
      res.status(400).json({message: "Country is required " })
    }
    if(!req.body.lat){
      res.status(400).json({message: "latitude is required " })
    }
    if(!req.body.lng){
      res.status(400).json({message: "longitude is required " })
    }
    if(!req.body.name){
      res.status(400).json({message: "name is required " })
    }
    if(!req.body.description){
      res.status(400).json({message: "description is required " })
    }
    if(!req.body.price){
      res.status(400).json({message: "Price is required " })
    }




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
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
  try {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId);
    const currentUserId = req.user.id;


    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }




    const bookings = await Booking.findAll({
      where: { spotId },
      attributes: ["spotId", "startDate", "endDate"]

    });




    const userBookings = await Booking.findAll({
      where: { spotId },
      include: [
        {
          model: User,
          attributes: ['id', 'firstName', 'lastName']
        },

      ]
    });


    if( currentUserId !== spot.ownerId) {
      return res.status(200).json({ Bookings: bookings });

    } else {

      return res.status(200).json({ Bookings: userBookings });
    }




  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ message: 'An error occurred while retrieving reviews.' });
  }
});


















// create a new booking for a spot

router.post('/:spotId/bookings', requireAuth, async (req, res) => {
  const { user } = req;
  const {startDate,endDate} = req.body
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




    // validations for dates
    if(!req.body.startDate){
      return res.status(400).json({message:"startDate is required"})
    }


    if(!req.body.endDate){
      return res.status(400).json({message:"endDate is required"})
    }






    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
