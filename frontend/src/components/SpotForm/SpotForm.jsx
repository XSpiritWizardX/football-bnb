import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as spotActions from '../../store/spots';
import './SpotForm.css';

function SpotForm() {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [imageTwo, setImageTwo] = useState("")
  const [imageThree, setImageThree] = useState("")
  const [imageFour, setImageFour] = useState("")
  const [imageFive, setImageFive] = useState("")


  const [errors, setErrors] = useState({});


  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length === 0) {
      setErrors({});
      return dispatch(
        spotActions.createSpot({
          name,
          description,
          price, mainImage,
          imageTwo,
          imageThree,
          imageFour,
          imageFive,
          address,
          city,
          state,
          country,
          latitude,
          longitude
        })
      )

        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };




  return (
    <div className='form-container'>
      <h1>Create a new Spot</h1>
      <h3>Where&apos;s your place located?</h3>
      <p>
      Guests will only get your exact address once they booked a
      reservation.
      </p>
      <form onSubmit={handleSubmit}>


        <label>

          <input
            className='inputs'
            placeholder='Country'
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        {errors.country && <p>{errors.country}</p>}




        <label>

          <input
            className='inputs'
            placeholder='Address'
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        {errors.address && <p>{errors.address}</p>}


        <label>

          <input
            className='inputs'
            placeholder='City'
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        {errors.city && <p>{errors.city}</p>}




        <label>

          <input
            className='inputs'
            placeholder='State'
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        {errors.state && <p>{errors.state}</p>}






        <label>

          <input
            className='inputs'
            placeholder='Latitude'
            type="decimal"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            // required
          />
        </label>
        {errors.latitude && <p>{errors.latitude}</p>}




        <label>

          <input
            className='inputs'
            placeholder='Longitude'
            type="decimal"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            // required
          />
        </label>
        {errors.longitude && (
          <p>{errors.longitude}</p>
        )}

<br />
<br />



        <label>

        <textarea
          className='inputs'
          placeholder='Description'
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </label>
        {errors.description && (
        <p>{errors.description}</p>
        )}


<br />
<br />





        <label>

        <input
          className='inputs'
          placeholder='Name of your spot'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </label>
        {errors.name && (
        <p>{errors.name}</p>
        )}




        <label>

        <input
          className='inputs'
          placeholder='Price'
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </label>
        {errors.price && (
        <p>{errors.price}</p>
        )}




        <label>

        <input
          className='inputs'
          placeholder='Main Image'
          type="text"
          value={mainImage}
          onChange={(e) => setMainImage(e.target.value)}
          required
        />
        </label>
        {errors.mainImage && (
        <p>{errors.mainImage}</p>
        )}





        <label>

        <input
          className='inputs'
          placeholder='ImageTwo'
          type="text"
          value={longitude}
          onChange={(e) => setImageTwo(e.target.value)}
          // required
        />
        </label>
        {errors.imageTwo && (
        <p>{errors.imageTwo}</p>
        )}



        <label>

        <input
          className='inputs'
          placeholder='ImageThree'
          type="text"
          value={imageThree}
          onChange={(e) => setImageThree(e.target.value)}
          // required
        />
        </label>
        {errors.imageThree && (
        <p>{errors.imageThree}</p>
        )}




        <label>

        <input
          className='inputs'
          placeholder='ImageFour'
          type="text"
          value={imageFour}
          onChange={(e) => setImageFour(e.target.value)}
          // required
        />
        </label>
        {errors.imageFour && (
        <p>{errors.imageFour}</p>
        )}




        <label>

        <input
          className='inputs'
          placeholder='ImageFive'
          type="text"
          value={imageFive}
          onChange={(e) => setImageFive(e.target.value)}
          // required
        />
        </label>
        {errors.imageFive && (
        <p>{errors.imageFive}</p>
        )}











        <button type="submit">Create Spot</button>
      </form>
    </div>
  );
}

export default SpotForm;
