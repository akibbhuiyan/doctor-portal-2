import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4">
      <img src={doctor.image} alt="" className="mx-3 w-100" />

      <h5 className="pt-3">{doctor.name}</h5>
      <p className="card-text text-secondary my-2">
        <span className="text-primary me-2">
          <FaPhoneAlt />
        </span>
        {doctor.number}
      </p>
    </div>
  );
};

export default Doctor;
