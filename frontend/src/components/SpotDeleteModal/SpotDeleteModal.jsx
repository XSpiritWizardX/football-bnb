


import * as spotActions from '../../store/spots';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './SpotDeleteModal.css';



function SpotDeleteModal({ spotId }) {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = async () => {
    console.log("Spot ID before deleting:", spotId);
    if (!spotId) {
      alert("Error: No Spot ID provided!");  // Debugging check
      return;
    }

    try {
      await dispatch(spotActions.deleteSpot(spotId));
      alert("Spot deleted successfully!");
      closeModal();
    } catch (error) {
      alert(error.message);
    }
  };


// function SpotDeleteModal({spotId}) {
//   const dispatch = useDispatch();
//   // const [credential, setCredential] = useState("");
//   // const [password, setPassword] = useState("");

//   const { closeModal } = useModal();


//   const handleSubmit = async () => {

//       await dispatch(spotActions.deleteSpot(spotId));
//       alert("Spot deleted successfully!");

//   };


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
