// promise.all

const SET_SPOTS = '/api/spots';

const SET_ONE_SPOT = '/api/spots/:spotId';


  // Action
  const setSpots = (spots) => ({
    type: SET_SPOTS,
    spots,
  });


  const setOneSpot = (spot) => ({
    type: SET_ONE_SPOT,
    spot,
  });




 export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if (response.ok) {
      const spots = await response.json();
      dispatch(setSpots(spots));

    }
  };


  export const fetchOneSpot = (spotId) => async (dispatch) => {
    const response = await fetch(`/api/spots/${spotId}`);
    if (response.ok) {
      // console.log('found spot')
      const spot = await response.json();
      dispatch(setOneSpot(spot));

    }
  };


export const createSpot = (spot) => async (dispatch) => {
  const { name, description, price, mainImage, imageTwo, imageThree, imageFour, imageFive, address, city, state, zipcode, country, latitude, longitude } = spot;
  const response = await fetch("/api/spots", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      price,
      mainImage,
      imageTwo,
      imageThree,
      imageFour,
      imageFive,
      address,
      city,
      state,
      zipcode,
      country,
      latitude,
      longitude
    })
  });
  const data = await response.json();
  dispatch(setSpots(data.spots));
  return response;
};




  // Reducer
  const spotsReducer = (state = {}, action) => {

    switch (action.type) {

      case SET_SPOTS:
        return { ...state, spots: action.spots.Spots };

      case SET_ONE_SPOT:
        return { spot: action.spot};



      default:
        return state;
    }
  };




  export default spotsReducer;
