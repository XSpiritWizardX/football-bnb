
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneSpot } from "../../store/spots";
import { MdOutlineStar } from "react-icons/md";
// import { NavLink } from "react-router-dom";
import './SpotShow.css'



const SpotShow = () => {
  //  const {name, city,state,country,images,decription,numReviews, avgStarReview, price} = props
  const dispatch = useDispatch();
  const spots = useSelector((state) => state.spots.spot || []);
  const { spotId } = useParams()



  // console.log(spotId)


  useEffect(() => {
    // console.log('inside use effect')
    dispatch(fetchOneSpot(spotId));
  }, [dispatch, spotId]);

  // console.log(spots)



  // always add a question mark data loading





  return (
    <div>

      {spots && (






        <div
          key={spots?.id}
        >

          <h2>{spots?.name}</h2>
          <h3>

            Address:{spots?.address}.  {spots?.city}, {spots?.state},   {spots?.country}

          </h3>

          <div
            className="image-container"
          >



              {/* COMMENT BACK IN IMAGES TO SEE IT....  IT DOESNT WORK OTHERWISE
             */}


              {/*
              give the spaces a default null image

              if the image does not have a picture in the
              array, it will use the null default image.

              ALL SPOTS WILL CONTAIN AT LEAST
              1 IMAGE (main-image)
              */}



              <img
                className="main-image"
                src={spots?.SpotImages[0].url}
                />



              <img
              className="image1"
              src={spots?.SpotImages[1].url}
              />

                <img
                className="image2"
                src={spots?.SpotImages[2].url}
                />


              <img
              className="image3"
              src={spots?.SpotImages[3].url}
              />


              <img
              className="image4"
              src={spots?.SpotImages[4].url}
              />


          </div>





            <h2>
              Hosted by: {spots?.User?.firstName} {spots?.User?.lastName}

            </h2>


          <div>

            {spots?.description}
          </div>




          <div>



          <div>




            <MdOutlineStar />
            {spots?.avgRating}

            {/*
            ^^^^^^^  -- if it doesnt have an average rating,
            it should display (New)
            #Reviews:{spots?.reviews.length}

            */}
          </div>

          <div
          className="price"
          >
            price:${spots?.price}
          </div>
          </div>




          <br />









        </div>
      )}
    </div>


  );
};




export default SpotShow;
