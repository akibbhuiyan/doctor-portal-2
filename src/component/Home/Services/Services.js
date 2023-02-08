import React from "react";
import { Service } from "../../../SeviceData";
import ServicesDetails from "../ServicesDetails/ServicesDetails";
const Services = () => {
  return (
    <section className="services-container text-center mt-5 h-auto">
      <h5 style={{ color: "#1cc7c1" }}> OUR SERVICES</h5>
      <h2>Services We Provide</h2>
      <div className="d-flex justify-content-center mt-5">
        <div style={{ height: "230px" }} className="w-75 row">
          {Service.map((service, idx) => (
            <ServicesDetails service={service} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
