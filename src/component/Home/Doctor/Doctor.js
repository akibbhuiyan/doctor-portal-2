import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4">
      {doctor.image ? (
        <img
          src={`data:image/png;base64,${doctor.image.img}`}
          alt=""
          className="mx-3 w-100"
        />
      ) : (
        <img
          src={`https://doctor-portal2-server.vercel.app/${doctor.img}`}
          alt=""
          className="mx-3 w-100"
        />
      )}
      <h5 className="pt-3">{doctor.name}</h5>
      <p className="card-text text-secondary my-2">
        <span className="text-primary me-2">
          <FaPhoneAlt />
        </span>{" "}
        0{doctor.number}
      </p>
    </div>
  );
};

export default Doctor;
