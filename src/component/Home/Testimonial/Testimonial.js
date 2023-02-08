import React from "react";
import "./Testimonial.css";
const Testimonial = ({ testimonial }) => {
  return (
    <div className="col-md-4">
      <div className="card-body card-container">
        <p className="card-text">{testimonial.comment}</p>
        <div className="d-flex align-items-center">
          <img src={testimonial.img} alt="" style={{ width: "40px" }} />
          <div>
            <h3>{testimonial.name}</h3>
            <small>{testimonial.from}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
