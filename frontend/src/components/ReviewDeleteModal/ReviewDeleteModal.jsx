/*
    SHOULD BE A MODAL THE EXACT SAME AS THE SPOT ONE.
*/
/*
    SHOULD BE A MODAL
*/
// frontend/src/components/LoginFormModal/LoginFormModal.jsx


import { deleteReview } from "../../store/reviews";
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './ReviewDeleteModal.css';

function ReviewFormModal({reviewId}) {
  const dispatch = useDispatch();
  // const [credential, setCredential] = useState("");
  // const [password, setPassword] = useState("");

  const { closeModal } = useModal();

  const handleSubmit = async () => {
    console.log("Review ID before deleting:", reviewId); 

    if (!reviewId) {
      alert("Error: No Review ID provided!");
      return;
    }

    try {
      await dispatch(deleteReview(reviewId));
      alert("Review deleted successfully!");
      closeModal();
    } catch (error) {
      alert(`Failed to delete review: ${error.message}`);
    }
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
