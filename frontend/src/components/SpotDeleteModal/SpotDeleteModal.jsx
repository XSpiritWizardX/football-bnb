

import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './SpotDeleteModal.css';

function SpotDeleteModal() {
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

    <div className='delete-confirm'>
      <h1>Confirm Delete</h1>

      <p
      className='confirm-delete-text'
      >
      Are you sure you want to remove this spot
      from the listings?
      </p>
      <form onSubmit={handleSubmit}>

        {errors.credential && (
          <p>{errors.credential}</p>
        )}


        <button type="submit"
          onClick={handleSubmit}
          className='delete-spotty-button'
        >
          Yes (Delete Spot)
          </button>


          <button type="submit"
          onClick={closeModal}
          className='keep-spot-button'
        >
          No (Keep Spot)
          </button>


      </form>
    </div>


  );
}

export default SpotDeleteModal;
