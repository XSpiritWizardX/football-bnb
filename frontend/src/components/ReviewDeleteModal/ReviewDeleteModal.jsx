/*
    SHOULD BE A MODAL THE EXACT SAME AS THE SPOT ONE.
*/
/*
    SHOULD BE A MODAL
*/
// frontend/src/components/LoginFormModal/LoginFormModal.jsx

import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ReviewDeleteModal.css';

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

    <div className='delete-confirm'>
      <h1>Confirm Delete</h1>

      <p
      className='confirm-delete-text'
      >
      Are you sure you want to delete this review?
      </p>
      <form onSubmit={handleSubmit}>

        {errors.credential && (
          <p>{errors.credential}</p>
        )}


        <button type="submit"
          onClick={handleSubmit}
          className='delete-review-button'
        >
          Yes (Delete Review)
          </button>


          <button type="submit"
          onClick={closeModal}
          className='keep-review-button'
        >
          No (Keep Review)
          </button>


      </form>
    </div>


  );
}

export default ReviewFormModal;
