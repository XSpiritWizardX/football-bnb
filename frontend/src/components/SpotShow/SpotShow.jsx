
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneSpot } from "../../store/spots";
import {fetchReviews} from "../../store/reviews"
import { MdOutlineStar} from "react-icons/md";
import { NavLink } from "react-router-dom";
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import ReviewModal from '../ReviewModal/ReviewModal';
import './SpotShow.css'



const SpotShow = () => {

  const dispatch = useDispatch();
  // const user = useSelector((state) => state.session.user)
  const spots = useSelector((state) => state.spots.spot || []);
  const reviews = useSelector((state) => state.reviews.reviews?.Reviews || []);
  const { spotId } = useParams()


  const reviewElements = [];



  for (let i = 0; i < reviews.length; i++) {
    reviewElements.push(
      <div key={reviews[i].id}
      className="review2"
      >
        <div>

          <h3>
          {reviews?.[i]?.User?.firstName} {reviews?.[i]?.User?.lastName}

          </h3>

          <h3>
           {new Date(reviews?.[i]?.createdAt).toLocaleString('default', { month: 'long' })} <ln>

           </ln>
           {new Date(reviews?.[i]?.createdAt).getFullYear()}
          </h3>

          <p
          className="review-text"
          >
          {reviews[i].review}

          </p>


          {/* <div
          className="update-delete-buttons"
          >
            {!reviews?.[i]?.User?.id === user.id ? "" :

            <button>Update</button>}
            <button>Delete</button>}

          </div> */}


          {/* <button>update</button>
          <button>delete</button> */}




        </div>
      </div>
    );
  }

  useEffect(() => {

    dispatch(fetchOneSpot(spotId));
    dispatch(fetchReviews(spotId));
  }, [dispatch, spotId]);

//   const userHasReviewed = reviews.some(
//     (review) => review.userId === user.id && review.spotId === spot.id
//   );
//   const isOwner = user.id === spot.ownerId;
// // const currentUser =
// if (userHasReviewed || isOwner) {
//   return null; // Hide button
// }
  // always add a question mark data loading

// console.log(reviewElements)



  return (
    <div
    className="spot-show-page"
    >

      {spots && reviews && (






        <div
          key={spots?.id}
        >

          <h2>{spots?.name}</h2>



          <h3>

            Address:{spots?.address}.  {spots?.city}, {spots?.state},   {spots?.country}

          </h3>





          <div
            className="image-container"
          >




              <img
                className="main-image"
                src={spots?.SpotImages?.[0]?.url}
                />



              <img
              className="image1"
              src={
                !spots?.SpotImages?.[1]?.url ?

                 "https://icones.pro/wp-content/uploads/2021/06/icone-d-image-grise-300x300.png"
                : spots?.SpotImages?.[1]?.url
              }
              />

                <img
                className="image2"
                src={
                  !spots?.SpotImages?.[2]?.url ?

                  "https://icones.pro/wp-content/uploads/2021/06/icone-d-image-grise-300x300.png"
                 : spots?.SpotImages?.[2]?.url
                }
                />


              <img
              className="image3"
              src={
                !spots?.SpotImages?.[3]?.url ?

                "https://icones.pro/wp-content/uploads/2021/06/icone-d-image-grise-300x300.png"
               : spots?.SpotImages?.[3]?.url
              }
              />


              <img
              className="image4"
              src={
                !spots?.SpotImages?.[4]?.url ?

                 "https://icones.pro/wp-content/uploads/2021/06/icone-d-image-grise-300x300.png"
                : spots?.SpotImages?.[4]?.url
                }
              />


          </div>







        <div
        className="description-container"
        >





            <h2>
              Hosted by: {spots?.User?.firstName} {spots?.User?.lastName}

            </h2>


          <div
          className="description"
          >

            {spots?.description}
          </div>









          <div
          className="reserve-container"
          >



                <div
                  className="review-reserved"
                  >

                    <div
                    className="price"
                    >
                      ${spots?.price} / night
                    </div>


                    <MdOutlineStar />

                    {!spots?.avgRating ? "New" : spots?.avgRating}



                        <span
                        className="seperation"
                        >
                          &#183;
                        </span>




                      {!reviews ? "  New" : `  ${reviews.length} reviews`}


                  </div>





          <NavLink to={`/spots/${spotId}/bookings`}  >
              <button
              className="reserve-button"
              >

              Reserve

              </button>


            </NavLink>






          </div>


      </div>














              <span
              className="spanner"
              >

              </span>

          <br />
          <br />
          <br />
          <br />








              <div


              className="reviews-container"

              >


                {/* average star rating */}

                  <div
                  className="avgerage-rating-big"
                  >

                  <div
                  className="big-star"
                  >

                    <MdOutlineStar />
                    {!spots?.avgRating ? "New" : spots?.avgRating}

                        <span
                        className="seperation"
                        >
                          &#183;
                        </span>
                      {!reviews ? "  New" : `  ${reviews.length} reviews`}


                  </div>



                  </div>




                  {/* <NavLink to={`/reviews/new`}  > */}
              {/* <button
              className="review-button"

              >

              Post Your Review

              </button> */}
                <OpenModalMenuItem
              itemText="Post Your Review"
                // {!currentUser ? }
              modalComponent={<ReviewModal />}
              className="review-button"
            />


            {/* </NavLink> */}


             <div
             className="review-area"
            //  key={reviews?.id}
             >

              <div
              className="div-of-divs"
              >{reviewElements}</div>

             </div>



              </div>







        </div>
      )}
    </div>


  );
};




export default SpotShow;
