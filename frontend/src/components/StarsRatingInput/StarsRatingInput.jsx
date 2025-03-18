import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { RiStarSFill } from "react-icons/ri";
import './StarsRatingInput.css'
const StarsRatingInput = ({ rating, onChange, disabled }) => {
  const [activeRating, setActiveRating] = useState(rating);
  // const review = useSelector(state => state.reviews.reviews.Reviews)

  // Update activeRating when rating changes (e.g., when the form is loaded with existing values)
  useEffect(() => {
    setActiveRating(rating);
  }, [rating]);

  // const handleMouseEnter = (index) => {
  //   if (!disabled) setActiveRating(index);
  // };

  // const handleMouseLeave = () => {
  //   if (!disabled) setActiveRating(rating);
  // };

  const handleClick = (index) => {
    if (!disabled) onChange(index); // Call onChange with the selected rating
    console.log("CLICKITY CLICK CLACK", index)
    setActiveRating(index)
    index <= activeRating ? "filled" : "empty"

  };




  return (
    <div
    className="stars-box-thing"
    >

        <div className="rating-input">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={index <= activeRating ? "filled" : "empty"}
              // onMouseEnter={() => handleMouseEnter(index)}
              // onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              style={{ cursor: disabled ? "default" : "pointer" }}

            >
              <RiStarSFill />
            </div>
          ))}
          <h3>STARS</h3>
        </div>

    </div>
  );
};

export default StarsRatingInput;
