
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ReviewModal.css';
import * as reviewActions from '../../store/reviews'
import StarsRatingInput from '../StarsRatingInput/StarsRatingInput';
import { useParams } from "react-router-dom";





function ReviewFormModal() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const spotId = useParams()
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(review.stars);
  // const [rating, setRating] = useState(review.rating);




  const handleSubmit = async (e) => {
     e.preventDefault();
     await dispatch({ ...review, stars });
     if (Object.values(errors).length === 0) {
       setErrors({});

      const createAReview = await dispatch(
         reviewActions.createReview({
           userId: userId,
            spotId: spotId,
            review,
            stars
         })
       )


       if (createAReview) {

         console.log(createAReview)

       }
       closeModal()
     }


   };


   const handleRatingChange = (newRating) => {
    setStars(newRating); // Update rating state
  };
  return (

    <div
     className='review-modal-container'
     >
      <h1>How was your stay?</h1>

      <form onSubmit={handleSubmit}>


        <label>

          <textarea
            className='review-input'
            placeholder='Leave you review here...'
            type="textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}

            required
          />

        </label>



        {errors.credential && (
          <p>{errors.credential}</p>
        )}




          {/*

          there will be 5 blank stars and 5 filled stars.
            starting with blank stars, if empty star is clicked, that star and
            the previous indexed stars will turn to filled stars and the data will be saved
            based on indexed star.


            MAYBE I NEED TO MAP THROUGH THEM????

          */}


<StarsRatingInput
        disabled={false}
        onChange={handleRatingChange}
        rating={stars}
      />







        <button
        type="submit"
        className="submit-review-button"
          onClick={handleSubmit}
        >
          Submit Your Review
          </button>


      </form>
    </div>


  );
}

export default ReviewFormModal;
