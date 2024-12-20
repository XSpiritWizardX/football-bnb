const express = require('express');
const { Spot, Review, User, ReviewImage } = require('../../db/models'); // Sequelize models
const router = express.Router();














// get all reviews from current user
// works good
router.get('/current', async (req, res) => {
    try {
      const currentUserId = req.user.id;
      const userReviews = await Review.findAll({
        where: { userId: currentUserId }
      });
      return res.status(200).json({
        Reviews: userReviews,
      });
    } catch (error) {
      console.error('Error fetching user spots:', error);
      return res.status(500).json({ message: 'Failed to retrieve spots.' });
    }
  });














// // get all reviews based on spot id
// router.get('/:spotId/reviews', async (req, res) => {
//   try {
//     const { spotId } = req.params;
//     const spot = await Spot.findByPk(spotId);
//     if (!spot) {
//       return res.status(404).json({ message: "Spot couldn't be found" });
//     }


//     const reviews = await Review.findAll({
//       where: { spotId },
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'firstName', 'lastName']
//         },
//         {
//           model: ReviewImage,
//           attributes: ['id', 'url']
//         }
//       ]
//     });

//     return res.status(200).json({ Reviews: reviews });
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     return res.status(500).json({ message: 'An error occurred while retrieving reviews.' });
//   }
// });
























module.exports = router;
