// promise.all

const SET_SPOTS = '/api/spots';


  // Action
  const setSpots = (spots) => ({
    type: SET_SPOTS,
    spots,
  });




 export const fetchSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots');
    if (response.ok) {
      const spots = await response.json();
      dispatch(setSpots(spots));
      // console.log("spots: ",spots )
    }
  };









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
