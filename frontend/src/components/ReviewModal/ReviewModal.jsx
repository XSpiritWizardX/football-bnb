
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ReviewModal.css';
import * as reviewActions from '../../store/reviews'
import StarsRatingInput from '../StarsRatingInput/StarsRatingInput';
// import { useParams } from "react-router-dom";





function ReviewFormModal() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const review = useSelector(state => state.reviews.reviews.Reviews)
  const spot = useSelector(state => state.spots.spot)
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(review.stars);


  // const { spotId } = useParams();

  const spotId = spot.id

const handleTextChange = (e) => {
  const { value} = e.target
  setReviewText(value)
}










  const handleSubmit = async (e) => {
     e.preventDefault();

     if (Object.values(errors).length === 0) {
       setErrors({});

       const createAReview =  dispatch(
         reviewActions.createReview({
           userId,
            spotId,
            review: reviewText,
            stars
          })
        )


        if (createAReview) {

          console.log(createAReview)
          // console.log(stars)
          // console.log(spotId)
          // console.log(review)
          // console.log(userId)
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
            id='textarea'
            className='review-input'
            placeholder='Leave your review here...'
            type="textarea"
            value={reviewText}
            onChange={handleTextChange}
            required
          />

        </label>



        {errors.credential && (
          <p>{errors.credential}</p>
        )}







<StarsRatingInput
        disabled={false}
        onChange={handleRatingChange}
        stars={stars}
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
