const express = require('express');
const { ReviewImage, Review, User } = require('../../db/models');
// const { Where } = require('sequelize/lib/utils');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();




// Route to delete an image for a Review
router.delete('/:imageId', requireAuth, async (req, res) => {
  try {

    const { imageId } = req.params;
    const userId = req.user.id;
    const reviewImage = await ReviewImage.findByPk(imageId, {
      include: {
        model: Review,
        attributes: ['id', 'userId'],
      },
    });

    if (!reviewImage) {
      return res.status(404).json({ message: "Review Image couldn't be found" });
    }
    if (reviewImage.Review.userId !== userId) {
      return res.status(403).json({ message: 'You do not have permission to delete this image' });
    }
    await reviewImage.destroy();
    res.status(200).json({ message: 'Successfully deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the image' });
  }
});




module.exports = router;
