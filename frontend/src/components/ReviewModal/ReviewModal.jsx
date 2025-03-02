// frontend/src/components/LoginFormModal/LoginFormModal.jsx

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
    // return dispatch(sessionActions.login({ credential, password }))
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

    <div className='login-container'>
      <h1>How was your stay?</h1>
      <form onSubmit={handleSubmit}>
        <label id='review'>

          <input className='input'
            placeholder='Just a quick review.'
            type="textarea"
            // value={credential}
            // onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        {/* <label id='rate-stars'>

          <input className='input'
            placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label> */}





          {/*

          there will be 5 blank stars and 5 filled stars.
            starting with blank stars, if empty star is clicked, that star and
            the previous indexed stars will turn to filled stars and the data will be saved
            based on indexed star.

          */}






        {errors.credential && (
          <p>{errors.credential}</p>
        )}
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
