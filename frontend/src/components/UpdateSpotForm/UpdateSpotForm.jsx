import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as spotActions from '../../store/spots';
import './UpdateSpotForm.css';

import { fetchOneSpot } from '../../store/spots';



function UpdateSpotForm() {



  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState();
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


  const spot = useSelector((state) => state.spots.spot || []);
  const { spotId } = useParams()




  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.length === 0) {
      setErrors({});
      return dispatch(
        spotActions.createSpot({
          name,
          description,
          price,
          mainImage,
          imageTwo,
          imageThree,
          imageFour,
          imageFive,
          address,
          city,
          state,
          zipcode,
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





  const isDisabled =
  !name ||
  !country ||
  !address ||
  !city ||
  !state ||
  !zipcode ||
  !description ||
  !price ||
  !mainImage;









  useEffect(() => {

    dispatch(fetchOneSpot(spotId));

  }, [dispatch, spotId]);






  return (
    <div className='form-container'>
      <form
      onSubmit={handleSubmit}
    className='create-spot-form'
      >

      <h1>Update Your Spot</h1>
      <h3>Where&apos;s your place located?</h3>
      <p>
      Guests will only get your exact address once they booked a
      reservation.
      </p>

        <label>

          <input
            className='inputs'
            placeholder={spot.country}
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
            placeholder={spot.address}
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
            placeholder={spot.city}
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
            placeholder={spot.state}
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
          placeholder={spot.zipcode}
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
            placeholder={spot.latitude || "latitude"}
            type="decimal"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            // required
          />
        </label>
        {errors.latitude && <p>{errors.latitude}</p>}




        <label>

          <input
            className='longitde'
            placeholder={spot.longitude || "longitude"}
            type="decimal"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            // required
          />
        </label>
        {errors.longitude && (
          <p>{errors.longitude}</p>
        )}


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
          placeholder={spot.description}
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
          placeholder={spot.name}
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
          placeholder={spot.price}
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
          placeholder={spot?.SpotImages?.[0]?.url}
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
          placeholder= {
            !spot?.SpotImages?.[1]?.url ? "Image Url"
            :
             spot?.SpotImages?.[1]?.url
            }
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
          placeholder={
            !spot?.SpotImages?.[2]?.url ? "Image Url"
            :
             spot?.SpotImages?.[2]?.url
            }
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
          placeholder={
            !spot?.SpotImages?.[3]?.url ? "Image Url"
            :
             spot?.SpotImages?.[3]?.url
            }
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
          placeholder={
            !spot?.SpotImages?.[4]?.url ? "Image Url"
            :
             spot?.SpotImages?.[4]?.url
            }
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
        disabled={isDisabled}
        >
          Update Spot
          </button>





      </form>

    </div>
  );
}

export default UpdateSpotForm;
