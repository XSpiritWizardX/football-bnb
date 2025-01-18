const express = require('express');
const { Spot, Review, User, ReviewImage } = require('../../db/models'); // Sequelize models
const { requireAuth } = require('../../utils/auth');
const router = express.Router();






// // helper function to calculate avg star review

// function avgStarRating () {
//   const starry = Review.stars;
//   let avgStars;
//   let stars = 0;

//     for (let i = 0; i < starry.length; i++) {
//       stars += starry[i];
//       return stars;
//     }
//     avgStars = stars/starry.length;
// return avgStars;
// };


// console.log(avgStarRating([2,5,1,4,3]))
// // 3



// get all reviews from current user
// works good
router.get('/current', requireAuth, async (req, res) => {
    try {
      const currentUserId = req.user.id;
      const userReviews = await Review.findAll({
        where: { userId: currentUserId },

         include:[
          {
            model: User,
            attributes: ['id', 'firstName', 'lastName']
          },
      {
        model: Spot
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url']
      }
    ]
      });
      return res.status(200).json({
        Reviews: userReviews,
      });
    } catch (error) {
      console.error('Error fetching user reviews:', error);
      return res.status(500).json({ message: 'Failed to retrieve reviews.' });
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














// add an image to a review based on review id
// works good
router.post('/:reviewId/images', requireAuth, async (req, res) => {
  const { reviewId } = req.params;
  const { url } = req.body;
  const { user } = req;

  try {

    const review = await Review.findByPk(reviewId);
    if (!review) {
      return res.status(404).json({ message: "Review couldn't be found" });
    }


    if (review.userId !== user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }


    const imageCount = await ReviewImage.count({ where: { reviewId } });
    if (imageCount >= 10) {
      return res.status(403).json({
        message: 'Maximum number of images for this resource was reached'
      });
    }


    const newImage = await ReviewImage.create({
      reviewId: parseInt(reviewId),
      url
    });

    res.status(201).json({ id: newImage.id, url: newImage.url });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
















// edit a review based on review id
// works good
router.put('/:reviewId', requireAuth, async (req, res) => {
  const { reviewId } = req.params;
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
    const existingReview = await Review.findByPk(reviewId);

    if (!existingReview) {
      return res.status(404).json({ message: "Review couldn't be found" });
    }
    if (existingReview.userId !== user.id) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    existingReview.review = review;
    existingReview.stars = stars;
    await existingReview.save();

    res.status(200).json(existingReview);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});










// delete a review based on review id

router.delete('/:reviewId', requireAuth, async (req, res) => {
  try {
    const { reviewId } = req.params;
    const review = await Review.findByPk(reviewId);


    if (!review) {
      return res.status(404).json({
        message: "Review couldn't be found"
      });
    }
    if (review.userId !== req.user.id) {
      return res.status(403).json({
        message: 'Not authorized to delete this review'
      });
    }

    

    await review.destroy();

    return res.status(200).json({
      message: 'Successfully deleted'
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;
