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
        <div className="spot-card">
          {spots?.map(spot => (
            <div key={spot.id}>
              <img src={spot.previewImage} />
              <h1>{spot.name}</h1>
              <p>{spot.description}</p>
              <p>${spot.price}</p>
              <div className="review-area">
                  <p>{spot.avgRating}</p>
                  {/* <p>{spot.reviews}</p> */}
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};




export default SpotList;
