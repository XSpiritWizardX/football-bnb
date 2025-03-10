// frontend/src/components/LoginFormModal/LoginFormModal.jsx
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ReviewModal.css';

function ReviewFormModal() {
  const dispatch = useDispatch();
  // const [credential, setCredential] = useState("");
  // const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    return dispatch(sessionActions)
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };



  return (

    <div className='review-modal-container'>
      <h1>How was your stay?</h1>
      <form onSubmit={handleSubmit}>
        <label id='review'>

          <input className='input'
            placeholder='Just a quick review.'
            type="textarea"

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
            />
            <RiStarSLine
            className="unfilled-star2"
            />
            <RiStarSLine
            className="unfilled-star3"
            />
            <RiStarSLine
            className="unfilled-star4"
            />
            <RiStarSLine
            className="unfilled-star5"
            />

            </div>


            <div
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


            </div>







        <button type="submit"
          onClick={handleSubmit}
        >
          Submit Your Review
          </button>


      </form>
    </div>


  );
}

export default ReviewFormModal;
