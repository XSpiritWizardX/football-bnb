import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../../store/spots";
import './SpotList.css'
import { MdOutlineStar } from "react-icons/md";

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

        <div className="spot-cards">
          {spots?.map(spot => (
            <div
            className="spot-card"
            key={spot.id}
            >
              <img
              className="image"
              src={spot.previewImage}
              />
              <p>{spot.city}, {spot.state}</p>
              <div className="review-area">
              <p>${spot.price}</p>
                  <p>

                    <MdOutlineStar />
                    {spot.avgRating}

                  </p>
                  {/* <p>{spot.reviews}</p> */}
              </div>
            </div>
          ))
        }
        </div>

    </div>
  );
};




export default SpotList;
