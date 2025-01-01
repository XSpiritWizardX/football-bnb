// backend/routes/api/spots.js
const express = require('express');
const { Spot, SpotImage, Review, ReviewImage, User } = require('../../db/models');
const { Where } = require('sequelize/lib/utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();














// GET all spots
// good

router.get('/', async (req, res) => {
  try {
    const spots = await Spot.findAll({
      include:{
        model:SpotImage,
        as:"SpotImages"
      }
    });
    res.json(spots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching spots' });
  }
});

















// get current user spots
// good

router.get('/current', requireAuth, async (req, res) => {
  try {
    const currentUserId = req.user.id; // Extract user ID from authentication middleware

    // Find all spots where the current user is the owner
    const userSpots = await Spot.findAll({
      where: { ownerId: currentUserId }, // Filtering spots owned by the current user
    });

    // Return the spots as JSON
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
    const { spotId } = req.params; // Extract spotId from URL parameters

    // Find the spot by its primary key (id)
    const spot = await Spot.findByPk(spotId);

    // Check if the spot exists
    if (!spot) {
      return res.status(404).json({ message: "Spot couldn't be found" });
    }

    // Return the spot as JSON
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
    const { spotId } = req.params; // Extract spotId from route parameters
    const { url, preview } = req.body; // Extract url and preview from the request body

    // Validate if the spot exists
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
    // REquire authentication... require authenticate
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







// POST /api/spots/:spotId/reviews
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








module.exports = router;
