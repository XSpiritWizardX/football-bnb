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







// get current user spots

router.get('/current', async (req, res) => {
  try {
    const spots = await Spot.findAll(); // Fetch all spots from the database
    res.json(spots); // Respond with the spots as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching spots' });
  }
});







// get spot by spot id

router.get('/:spotId', async (req, res) => {
  try {
    const spots = await Spot.findAll(); // Fetch all spots from the database
    res.json(spots); // Respond with the spots as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching spots' });
  }
});








// create a spot

// router.post('/', async (req, res) => {
//   try {
//     const spots = await Spot.findAll(); // Fetch all spots from the database
//     res.json(spots); // Respond with the spots as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: 'Body validation errors' });
//   }
// });







//  Add an Image to a Spot based on the Spot's id

// router.post('/:spotId/images', async (req, res) => {
//   try {
//     const spots = await Spot.findAll(); // Fetch all spots from the database
//     res.json(spots); // Respond with the spots as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ error: 'Body validation errors' });
//   }
// });









// edit a spot

// router.patch('/:spotId', async (req, res) => {
//   try {
//     const spots = await Spot.findAll(); // Fetch all spots from the database
//     res.json(spots); // Respond with the spots as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching spots' });
//   }
// });







// delete a spot

// router.delete('/:spotId', async (req, res) => {
//   try {
//     const spots = await Spot.findAll(); // Fetch all spots from the database
//     res.json(spots); // Respond with the spots as JSON
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while fetching spots' });
//   }
// });




module.exports = router;
