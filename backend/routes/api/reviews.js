const express = require('express');
const { Review, Spot } = require('../../db/models'); // Sequelize models
const router = express.Router();














// get all reviews from current user
// works good
router.get('/current', async (req, res) => {
    try {
      const currentUserId = req.user.id; // Extract user ID from authentication middleware

      // Find all spots where the current user is the owner
      const userReviews = await Review.findAll({
        where: { userId: currentUserId }, // Filtering spots owned by the current user
      });

      // Return the spots as JSON
      return res.status(200).json({
        Reviews: userReviews,
      });
    } catch (error) {
      console.error('Error fetching user spots:', error);
      return res.status(500).json({ message: 'Failed to retrieve spots.' });
    }
  });





























module.exports = router;
