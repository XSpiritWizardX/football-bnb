// promise.all

import { csrfFetch } from "./csrf";












const SET_SPOTS = '/api/spots';

const SET_ONE_SPOT = '/api/spots/:spotId';




const REMOVE_SPOT = "/api/spots/delete";








  // Action
  const setSpots = (spots) => ({
    type: SET_SPOTS,
    spots,
  });


  const setOneSpot = (spot) => ({
    type: SET_ONE_SPOT,
    spot,
  });


  const removeSpot = (spotId) => ({
    type: REMOVE_SPOT,
    spotId,
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
    console.log(response)
    if (response.ok) {

      const spot = await response.json();
      dispatch(setOneSpot(spot));

    }
  };








  export const fetchCurrentSpots = () => async (dispatch) => {
    const response = await fetch('/api/spots/current');
    if (response.ok) {
      const spots = await response.json();
      dispatch(setSpots(spots));

    }
  };













export const createSpot = (spot, images) => async (dispatch) => {
  const { name, description, price, address, city, state, zipcode, country, lat, lng } = spot;
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      name,
      description,
      price,
      address,
      city,
      state,
      zipcode,
      country,
      lat,
      lng
    })
  });



  const data = await response.json();
  if(data){
    for await(let image of images){
if(image){
      if(image === images[0]) {
        await csrfFetch(`/api/spots/${data.id}/images`,{
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
          spotId:data.id,
          url:image,
          preview:true
          })
          }
        )
      }
      else {
        await csrfFetch(`/api/spots/${data.id}/images`,{
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body: JSON.stringify({
          spotId:data.id,
          url:image,
          preview:false
          })
          }
        )
      }
    }
    }
  }
  await dispatch(await fetchOneSpot(data.id));
  return data;
};










export const updateSpot = (spot, images) => async (dispatch) => {
  const { name, description, price, address, city, state, zipcode, country, lat, lng } = spot;

  // Step 1: Update Spot Details
  const response = await csrfFetch(`/api/spots/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      description,
      price,
      address,
      city,
      state,
      zipcode,
      country,
      lat,
      lng
    })
  });

  if (!response.ok) {
    throw new Error("Failed to update spot");
  }

  const data = await response.json();

  // Step 2: Update Spot Images (if images are provided)
  if (images && images.length > 0) {
    const imageRequests = images.map((image, index) => {
      if (!image) return null; // Skip empty images

      return csrfFetch(`/api/spots/${data.id}/images`, {
        method: "POST", // Use POST to add new images instead of PUT
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          spotId: data.id,
          url: image,
          preview: index === 0, // First image is preview
        })
      });
    });

    // Run all image requests concurrently
    await Promise.all(imageRequests.filter(req => req));
  }

  // Step 3: Fetch Updated Spot Data
  const updatedSpotResponse = await csrfFetch(`/api/spots/${data.id}`);
  if (!updatedSpotResponse.ok) {
    throw new Error("Failed to fetch updated spot data");
  }

  const updatedSpot = await updatedSpotResponse.json();
  dispatch(setOneSpot(updatedSpot));

  return updatedSpot;
};







export const deleteSpot = (spotId) => async (dispatch) => {
  try {
    const response = await csrfFetch(`/api/spots/${spotId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete spot");  // Prevents misleading success alerts
    }

    dispatch(removeSpot(spotId)); // Update Redux state
    return "Spot deleted successfully"; // Ensure frontend knows it worked
  } catch (error) {
    console.error("Delete Error:", error); // Log error to console
    throw error; // Ensures the frontend properly handles the failure
  }
};

// export const deleteSpot = (spotId) => async (dispatch) => {
//   const response = await csrfFetch(`/api/spots/${spotId}`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     dispatch(removeSpot(spotId)); // Remove from state
//     return "Spot deleted successfully";
//   } else {
//     throw new Error("Failed to delete spot");
//   }
// };






  // Reducer
  const spotsReducer = (state = {}, action) => {

    switch (action.type) {

      case SET_SPOTS:
        return { ...state, spots: action.spots.Spots };

      case SET_ONE_SPOT:
        return { spot: action.spot};

        case REMOVE_SPOT:{
          const newState = { ...state };
          delete newState.spots[action.spotId];
          return newState;
        }


      default:
        return state;
    }
  };




  export default spotsReducer;
