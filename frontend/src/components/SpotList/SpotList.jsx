import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpots } from "../../store/spots";
import './SpotList.css'
import { MdOutlineStar } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SpotList = () => {

  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.spots || []);


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


        <div className="tooltip">

            <span className="tooltiptext">
                {spot.name}
            </span>


            <NavLink to={`/spots/${spot.id}`}  >
              <img
              className="image"
              src={spot.previewImage}

              />
            </NavLink>


              <p>{spot.city}, {spot.state}

                  <p className="stars">

                    <MdOutlineStar />
                    {spot.avgRating}

                  </p>

              </p>

              <p>${spot.price}/night</p>



              </div>
            </div>







          ))
        }
        </div>

</div>
  );
};




export default SpotList;
