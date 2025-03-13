// frontend/src/components/LoginFormModal/LoginFormModal.jsx
import { RiStarSLine } from "react-icons/ri";
// import { RiStarSFill } from "react-icons/ri";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ReviewModal.css';
import * as reviewActions from '../../store/reviews'

import { useParams } from "react-router-dom";





function ReviewFormModal() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const spotId = useParams()
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const [review, setReview] = useState("");
  const [stars, setStars] = useState();




  const handleSubmit = async (e) => {
     e.preventDefault();

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


            <div
            className="review-stars-unfilled"
            >

            <RiStarSLine
            className="unfilled-star1"
            onChange={(e) => setStars(e.target.value)}
            value={1}
            />
            <RiStarSLine
            className="unfilled-star2"
            onChange={(e) => setStars(e.target.value)}
            value={2}
            />
            <RiStarSLine
            className="unfilled-star3"
            onChange={(e) => setStars(e.target.value)}
            value={3}
            />
            <RiStarSLine
            className="unfilled-star4"
            onChange={(e) => setStars(e.target.value)}
            value={4}
            />
            <RiStarSLine
            className="unfilled-star5"
            onChange={(e) => setStars(e.target.value)}
            value={5}
            />
              <h3>Stars</h3>
            </div>


            {/* <div
            className="review-stars-filled"
            >

            <RiStarSFill
            className="filled-star1"
            />
            <RiStarSFill
            className="filled-star2"
            />
            <RiStarSFill
            className="filled-star3"
            />
            <RiStarSFill
            className="filled-star4"
            />
            <RiStarSFill
            className="filled-star5"
            />


            </div> */}







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
