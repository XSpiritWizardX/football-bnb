import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as spotActions from '../../store/spots';
import { useSelector } from 'react-redux';
import './SpotForm.css';



function SpotForm() {
  const userId = useSelector(state => state.session.user.id)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [imageTwo, setImageTwo] = useState("")
  const [imageThree, setImageThree] = useState("")
  const [imageFour, setImageFour] = useState("")
  const [imageFive, setImageFive] = useState("")

  const [errors, setErrors] = useState({});








  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).length === 0) {
      setErrors({});

     const createASpot = await dispatch(
        spotActions.createSpot({
          ownerId: userId,
          name,
          description,
          price,
          address,
          city,
          state,
          zipcode,
          country,
          lat,
          lng
        }, [mainImage, imageTwo, imageThree,imageFour,imageFive])
      )


      if (createASpot) {

        console.log(createASpot)
        navigate(`/spots/${createASpot.id}`)
      }

    }


  };












  return (
    <div className='form-container'>
      <form
      onSubmit={handleSubmit}
    className='create-spot-form'
      >

      <h1>Create a new Spot</h1>
      <h3>Where&apos;s your place located?</h3>
      <p>
      Guests will only get your exact address once they booked a
      reservation.
      </p>

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
          placeholder='Zipcode'
          type="text"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
        </label>
        {errors.state && <p>{errors.state}</p>}





    <p><br/>latitude and longitude are optional<br/>If you are uncertain, put a (0) for both latitude and longitude</p>


    <div
    className='lat-long-div'
    >



        <label>

          <input
            className='latitude'
            placeholder='Latitude'
            type="decimal"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            // required
          />
        </label>
        {errors.latitude && <p>{errors.latitude}</p>}




        <label>

          <input
            className='longitude'
            placeholder='Longitude'
            type="decimal"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            // required
          />
        </label>
        {errors.longitude && <p>{errors.longitude}</p>}


    </div>




        <h3>
        Describe your place to guests

        </h3>
        <br/>
        <p>
 Mention the best features of your space, any special amentities like
 fast wifi or parking, and what you love about the neighborhood.
        </p>


        <label>

        <textarea
          className='inputs'
          placeholder='Please write at least 30 characters'
          type="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </label>
        {errors.description && (
        <p>{errors.description}</p>
        )}




<h3>Create a title for your spot</h3>

<p>
Catch guests attention with a spot title that highlights what makes
your place special.
</p>

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


<h3>Set a base price for your spot</h3>

<p>

Competitive pricing can help your listing stand out and rank higher
in search results.
</p>

        <label>

        <input
          className='inputs'
          placeholder='Price per night (USD)'
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </label>
        {errors.price && (
        <p>{errors.price}</p>
        )}




<h3>Liven up your spot with photos</h3>

<p>
Submit a link to at least one photo to publish your spot.
</p>


        <label>

        <input
          className='inputs'
          placeholder='Preview Image URL'
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
          placeholder=' Image URL'
          type="text"
          value={imageTwo}
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
          placeholder=' Image URL'
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
          placeholder=' Image URL'
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
          placeholder=' Image URL'
          type="text"
          value={imageFive}
          onChange={(e) => setImageFive(e.target.value)}
          // required
        />
        </label>
        {errors.imageFive && (
        <p>{errors.imageFive}</p>
        )}











        <button
        type="submit"
        className='create-spot-button'
        // onClick="this.form.reset();"
        // disabled={isDisabled}
        >
          Create Spot
          </button>





      </form>

    </div>
  );
}

export default SpotForm;
