import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentReviews } from "../../store/reviews";
import "./CurrentReviews.css"
// import { MdOutlineStar } from "react-icons/md";
// import { NavLink } from "react-router-dom";
import OpenModalMenuItem from '../Navigation/OpenModalMenuItem';
import ReviewDeleteModal from '../ReviewDeleteModal/ReviewDeleteModal';





const CurrentReviews = () => {

  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews || []);


  useEffect(() => {
    dispatch(fetchCurrentReviews());
  }, [dispatch]);

// gotta add handle submmit buttons bring up the delete confirmation modal


//   if(!spots) {
//     return <a

//             >
//                 Create A Spot
//             </a>
//   }

const reviewElements = [];



for (let i = 0; i < reviews.length; i++) {
  reviewElements.push(
    <div key={reviews[i].id}
    className="review2"
    >
      <div>



        <h3>
         {new Date(reviews?.[i]?.createdAt).toLocaleString('default', { month: 'long' })} <ln>

         </ln>
         {new Date(reviews?.[i]?.createdAt).getFullYear()}
        </h3>










      </div>
    </div>
  );
}


    return (

    <div>
        <h1>Manage Your Reviews</h1>


        {reviews?.length === 0 ? (

                <div
                    className="manage-to-create-review"
                >
              <p>It looks like you do not have any reviews.

              </p>

                    </div>



            )


            :


            (


            <div className="review-areas">
            {reviews?.Reviews?.map(review => (




                <div
                className="review-card"
                key={review?.id}
                >




                <h3>

                    {review?.Spot?.name}
                </h3>


                <h3>
         {new Date(review?.createdAt).toLocaleString('default', { month: 'long' })} <ln>

         </ln>
         {/* {new Date(reviews?.createdAt).getFullYear()} */}
        </h3>

                <p>
                    {review?.review}
                </p>




                <button
                    className="update-review-button"
                >
                    Update
                </button>


                <OpenModalMenuItem
              itemText="Delete"

              modalComponent={<ReviewDeleteModal />}
              className="delete-button"
            />






              </div>




















            ))
            }
            </div>

)}
    </div>





    )


}

export default CurrentReviews;
