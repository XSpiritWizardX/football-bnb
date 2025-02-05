// promise.all

const SET_SPOTS = '/api/spots';
// const SET_SPOTIMAGES = '/api/spot-images'

  // Action
  const setSpots = (spots) => ({
    type: SET_SPOTS,
    spots,
  });

  // const setSpotImages = (spotImages) => ({
  //   type: SET_SPOTIMAGES,
  //   spotImages,
  // });



 export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if (response.ok) {
      const spots = await response.json();
      dispatch(setSpots(spots));
      console.log("spots: ",spots )
    }
  };


  // export const fetchSpotImages = () => async (dispatch) => {
  //   const response = await fetch('/api/spot-images');
  //   if (response.ok) {
  //     const spots = await response.json();
  //     dispatch(setSpotImages(spots.spotImages));
  //     console.log(spotImages)
  //   }
  // };



// export const fetchSpots = () => async (dispatch) => {
//   const response = await fetch("/api/");
//   const data = await response.json();
//   dispatch(setSpots(data.spot));
//   return response;
// };






  // Reducer
  const spotsReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_SPOTS:
        return { ...state, spots: action.spots };
      default:
        return state;
    }
  };






  export default spotsReducer;
