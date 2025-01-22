const express = require('express');
const { SpotImage, Spot, User } = require('../../db/models');
// const { Where } = require('sequelize/lib/utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();











//delete an image for a Spot
router.delete('/:imageId', requireAuth, async (req, res) => {
  try {

    const { imageId } = req.body.params;
    const userId = req.user.id;
    const spotImage = await SpotImage.findByPk(imageId, {
      include: {
        model: Spot,
        attributes: ['id', 'ownerId'],
      },
    });

    if (!spotImage) {
      return res.status(404).json({ message: "Spot Image couldn't be found" });
    }
    if (spotImage.Spot.ownerId !== userId) {
      return res.status(403).json({
        message: 'You do not have permission to delete this image'
      });
    }
    await spotImage.destroy();

    res.status(200).json({
        message: 'Successfully deleted'
     });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the image' });
  }
});












module.exports = router;
