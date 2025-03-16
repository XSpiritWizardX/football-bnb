import { useState, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";
import './StarsRatingInput.css'
const StarsRatingInput = ({ rating, onChange, disabled }) => {
  const [activeRating, setActiveRating] = useState(rating);

  // Update activeRating when rating changes (e.g., when the form is loaded with existing values)
  useEffect(() => {
    setActiveRating(rating);
  }, [rating]);

  const handleMouseEnter = (index) => {
    if (!disabled) setActiveRating(index);
  };

  const handleMouseLeave = () => {
    if (!disabled) setActiveRating(rating);
  };

  const handleClick = (index) => {
    if (!disabled) onChange(index); // Call onChange with the selected rating
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
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
              style={{ cursor: disabled ? "default" : "pointer" }}
            >
              <RiStarSFill />
            </div>
          ))}
        </div>
          <h3>Stars</h3>

    </div>
  );
};

export default StarsRatingInput;
