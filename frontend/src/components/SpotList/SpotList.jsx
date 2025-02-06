import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../../store/spots";
import './SpotList.css'


const SpotList = () => {

  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.spots?.Spots || []);


  useEffect(() => {
    dispatch(fetchSpots());
  }, [dispatch]);



  // use effects only kick in after first render

  // doesnt load slice of state until after first render

  return (
    <div>
      <h1>Spots</h1>
      <div className="spot-list">
        <div>
          {spots?.map(spot => (
            <div key={spot.id}>
              <h1>{spot.name}</h1>
              <p>{spot.description}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default SpotList;








// function SpotList({spots}) {
//   return (
//     <div>
//       <h2>Spot List</h2>
//       <ul>
//         {fruits.map(fruit => (
//           <li key={spot.id}>
//            {spot}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default SpotList
