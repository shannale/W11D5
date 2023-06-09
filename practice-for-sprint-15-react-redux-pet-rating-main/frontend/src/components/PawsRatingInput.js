import {useState} from "react"
const PawsRatingInput = ({ rating, disabled, onChange }) => {
const [activeRating,setactiveRating] = useState("empty")

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
        <i className="fa fa-paw" onMouseEnter= {(e) => {setactiveRating(1)}}></i>
      </div>
      <div className={`${activeRating >= 2 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" onMouseEnter= {(e) => {setactiveRating(2)}}></i>
      </div>
      <div className={`${activeRating >= 3 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" onMouseEnter= {(e) => {setactiveRating(3)}}></i>
      </div>
      <div className={`${activeRating >= 4 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" onMouseEnter= {(e) => {setactiveRating(4)}}></i>
      </div>
      <div className={`${activeRating >= 5 ? "filled" : "empty"}`}>
        <i className="fa fa-paw" onMouseEnter= {(e) => {setactiveRating(5)}}></i>
      </div>
    </div>

    
    </>
  );
};

export default PawsRatingInput;