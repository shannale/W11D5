import {useState} from "react"
const PawsRatingInput = ({ rating, disabled, onChange }) => {
const [activeRating,setactiveRating] = useState(rating)

return (
  <> 
    <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange}
    />

    <div className="rating-input">
      <div className={`${activeRating >= 1 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" 
        onMouseEnter= {(e) => {if(!disabled) setactiveRating(1)}}
        onMouseLeave= {(e) => {if(!disabled) setactiveRating(rating)}}></i>
      </div>
      <div className={`${activeRating >= 2 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" 
        onMouseEnter= {(e) => {if(!disabled) setactiveRating(2)}} 
        onMouseLeave= {(e) => {if(!disabled) setactiveRating(rating)}}></i>
      </div>
      <div className={`${activeRating >= 3 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" 
        onMouseEnter= {(e) => {if(!disabled) setactiveRating(3)}}
        onMouseLeave= {(e) => {if(!disabled) setactiveRating(rating)}}></i>
      </div>
      <div className={`${activeRating >= 4 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" 
        onMouseEnter= {(e) => {if(!disabled) setactiveRating(4)}}
        onMouseLeave= {(e) => {if(!disabled) setactiveRating(rating)}}></i>
      </div>
      <div className={`${activeRating >= 5 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" 
        onMouseEnter= {(e) => {if(!disabled) setactiveRating(5)}}
        onMouseLeave= {(e) => {if(!disabled) setactiveRating(rating)}}></i>
      </div>
    </div>

    
    </>
  );
};

export default PawsRatingInput;