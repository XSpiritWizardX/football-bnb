// // promise.all
import { csrfFetch } from "./csrf";

const SET_REVIEWS = '/api/spots/:spotId/reviews';

const REMOVE_REVIEW = "/api/reviews/remove";



  // Action
  const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    reviews,
  });


  const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId,
  });








 export const fetchReviews = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}/reviews`);
    if (response.ok) {
      const reviews = await response.json();
      dispatch(setReviews(reviews));

    }
  };

  export const fetchCurrentReviews = () => async (dispatch) => {
    const response = await fetch('/api/reviews/current');
    if (response.ok) {
      const reviews = await response.json();
      dispatch(setReviews(reviews));

    }
  };





  export const createReview = (arg) => async (dispatch) => {
    const {userId, spotId, review, stars} = arg
    console.log(userId)
    console.log(spotId)
    console.log(review)
    console.log(stars)
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        userId,
        spotId,
        review,
        stars:stars
      })
    }
    );

    if (response.ok) {
      // const review = await response.json();
      dispatch(fetchReviews(spotId));

    }
  };


// post a review in review modal








export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    console.log("Attempting to delete review with ID:", reviewId);

    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
    });

    console.log("Delete response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server responded with error:", errorData);
      throw new Error(errorData.message || "Failed to delete review");
    }

    dispatch(removeReview(reviewId));
    console.log("Review deleted successfully!");
    return "Review deleted successfully";
  } catch (error) {
    console.error("Delete Error:", error);
    throw error;
  }
};







  // Reducer
  const reviewReducer = (state = {}, action) => {

    switch (action.type) {

      case SET_REVIEWS:
        return { ...state, reviews: action.reviews };

      case REMOVE_REVIEW: {
        const newState = { ...state };
        delete newState[action.reviewId]; // Remove review
        return newState;
      }


      default:
        return state;
    }
  };




  export default reviewReducer;
