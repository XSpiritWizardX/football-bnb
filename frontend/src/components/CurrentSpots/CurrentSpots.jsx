import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentSpots } from "../../store/spots";
import "./CurrentSpots.css"
import { MdOutlineStar } from "react-icons/md";
import { NavLink } from "react-router-dom";
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import SpotDeleteModal from '../SpotDeleteModal/SpotDeleteModal';





const CurrentSpots = () => {

  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.spots || []);
// const { spotId } = useParams()

  useEffect(() => {
    dispatch(fetchCurrentSpots());
  }, [dispatch]);






    return (

    <div>
        <h1>Manage Your Spots</h1>


        {spots?.length === 0 ? (

                <div
                    className="manage-to-create-spot"
                >
              <p>It looks like you do not have any spots.
                 <NavLink to="/spots/new"
                 className="navy"
                 >
                 Create a new spot here.
                 </NavLink>
              </p>

                    </div>



            )


            :


            (


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
            //   src={spot?.spotImages?.[0]?.url}
            src={spot?.SpotImages?.[0]?.url}

              />
            </NavLink>

                <p>{spot?.city}, {spot?.state}

                    <p className="stars">

                        <MdOutlineStar />
                        {spot?.avgRating}

                    </p>

                </p>

                <p>${spot?.price}/night</p>






                <div
                className="manage-spot-button-container"
                >




                <NavLink to={`/spots/${spot.id}/edit`}  >
                    <button
                    className="update-button"
                    >

                    Update

                    </button>


                </NavLink>

                    {/* <button
                    className="update-button"
                    >
                        Update
                    </button> */}




                    <OpenModalMenuItem
              itemText="Delete"

              modalComponent={<SpotDeleteModal spotId={spot.id}/>}
              className="delete-button"
            />




                    {/* <button
                    className="delete-button"
                    >
                        Delete
                    </button> */}
                </div>






                </div>
                </div>







            ))
            }
            </div>

)}
    </div>





    )


}

export default CurrentSpots;
