// backend/routes/api/spots.js
const express = require('express');
const { Spot, Image } = require('../../db/models');
const router = express.Router();






// GET all spots

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

router.get('/current', async (req, res) => {
  try {

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized. Please log in.' });
    }


    const userSpots = await Spot.findAll({
      where: { ownerId: userId },
    });


    res.json({ Spots: userSpots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching user spots' });
  }
});







// get spot by spot id

router.get('/:spotId', async (req, res) => {
  try {
    const { id } = req.params;
    const spot = await Spot.findByPk(id);
    if (!spot) {
      return res.status(404).json({ error: 'Spot not found' });
    }
    res.json(spot);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the spot' });
  }
});



// create a new spot

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

router.post('/:spotId/images', async (req, res) => {
  try {
    const { spotId } = req.params;
    const { url } = req.body;


    const spot = await Spot.findByPk(spotId);
    if (!spot) {
      return res.status(404).json({ error: 'Spot not found' });
    }


    const newImage = await Image.create({
      url,
      spotId,
    });

    res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while adding the image' });
  }
});






// edit a spot

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



module.exports = router;
