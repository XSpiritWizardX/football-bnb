// // promise.all

const SET_REVIEWS = '/api/spots/:spotId/reviews';





  // Action
  const setReviews = (reviews) => ({
    type: SET_REVIEWS,
    reviews,
  });





 export const fetchReviews = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}/reviews`);
    if (response.ok) {
      const reviews = await response.json();
      dispatch(setReviews(reviews));

    }
  };


//   export const fetchOneReview = (reviewId) => async (dispatch) => {
//     const response = await fetch(`/api/reviews/${reviewId}`);
//     if (response.ok) {
//       const review = await response.json();
//       dispatch(setReviews(review));

//     }
//   };







  // Reducer
  const reviewReducer = (state = {}, action) => {

    switch (action.type) {

      case SET_REVIEWS:
        return { ...state, reviews: action.reviews };
      // case SET_ONE_SPOT:
      //   return {...state, spot: action.spot};



      default:
        return state;
    }
  };




  export default reviewReducer;
