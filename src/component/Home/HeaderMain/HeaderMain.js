import React from "react";
import Chair from "../../../images/chair.png";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  return (
    <main
      style={{ height: "600px" }}
      className="row d-flex align-items-center me-0"
    >
      <div className="col-md-4 offset-1">
        <h1>
          Your New Smile <br /> Starts Here
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <Link to="appointment">
          <button className="btn btn-primary">GET APPOINTMENT</button>
        </Link>
      </div>
      <div className="col-md-6">
        <img src={Chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
