
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSpots } from "../../store/spots";
// import { MdOutlineStar } from "react-icons/md";
// // import { NavLink } from "react-router-dom";
// import './SpotShow.css'


// const SpotList = () => {

//   const dispatch = useDispatch();
//   const spots = useSelector((state) => state.spots.spots?.Spots || []);



//   useEffect(() => {
//     dispatch(fetchSpots());
//   }, [dispatch]);




//   return (
//     <div>



//     <h2>{spot.name}</h2>



//     <div>
//       Address: {spot.city}, {spot.state}   {spot.country}
//     </div>



//     <div>
//       price: {spot.price}
//     </div>



//     <div>
//       images: {image.url}
//     </div>



//     <div>
//       reviews: {reviews.id}
//       <MdOutlineStar />
//       {spot.avgRating}
//     </div>



//   </div>


//   );
// };




// export default SpotList;
