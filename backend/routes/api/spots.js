// backend/routes/api/spots.js
const express = require('express');
const { Spot, SpotImage } = require('../../db/models');
const { Where } = require('sequelize/lib/utils');
const router = express.Router();














// GET all spots
// good

router.get('/', async (req, res) => {
  try {
    const spots = await Spot.findAll();
    res.json(spots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching spots' });
  }
});

















// get current user spots
// good

router.get('/current', async (req, res) => {
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
router.post('/', async (req, res) => {
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
router.post('/:spotId/images', async (req, res) => {
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
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spot.findByPk(id);
    if (!spot) {
      return res.status(404).json({ error: 'Spot not found' });
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
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spot.findByPk(id);
    if (!spot) {
      return res.status(404).json({ error: 'Spot not found' });
    }
    await spot.destroy();
    res.json({ message: 'Spot deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the spot' });
  }
});
















// ### Get all Reviews by a Spot's id

// Returns all the reviews that belong to a spot specified by id.

// * Require Authentication: false
// * Request
//   * Method: GET
//   * Route path: /api/spots/:spotId/reviews
//   * Body: none

// * Successful Response
//   * Status Code: 200
//   * Headers:
//     * Content-Type: application/json
//   * Body:

//     ```json
//     {
//       "Reviews": [
//         {
//           "id": 1,
//           "userId": 1,
//           "spotId": 1,
//           "review": "This was an awesome spot!",
//           "stars": 5,
//           "createdAt": "2021-11-19 20:39:36",
//           "updatedAt": "2021-11-19 20:39:36" ,
//           "User": {
//             "id": 1,
//             "firstName": "John",
//             "lastName": "Smith"
//           },
//           "ReviewImages": [
//             {
//               "id": 1,
//               "url": "image url"
//             }
//           ],
//         }
//       ]
//     }
//     ```

// * Error response: Couldn't find a Spot with the specified id
//   * Status Code: 404
//   * Headers:
//     * Content-Type: application/json
//   * Body:

//     ```json
//     {
//       "message": "Spot couldn't be found"
//     }
//     ```


module.exports = router;
