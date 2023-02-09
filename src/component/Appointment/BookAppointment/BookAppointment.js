import React, { useState } from "react";
import { bookingData, MedicalService } from "../../../SeviceData";
import BookingCard from "../BookingCard/BookingCard";
import { format } from "date-fns";
import "./BookAppointment.css";
const BookAppointment = ({ selectedDate }) => {
  // const onlyDate = `${selectedDate.getMonth()}-${selectedDate.getDate()}-${selectedDate.getFullYear()}`;
  const onlyDate = format(selectedDate, "PP");
  const [title, settitle] = useState();
  const [services, setServices] = useState([]);
  const handleClick = (service) => {
    const serviceMatched = bookingData.filter(
      (services) => services.subject === service
    );
    settitle(service);
    setServices(serviceMatched);
  };

  return (
    <section className="container">
      <div className="availableservice text-center">
        <h4 className="main-title">Available Services on {onlyDate}</h4>
        <p>Please select a service.</p>
        <div className="mediacttreatment">
          {MedicalService.map((service, idx) => (
            <div
              className="service-app"
              onClick={() => handleClick(service)}
              key={idx}
            >
              <h2>{service}</h2>
            </div>
          ))}
        </div>
        {title && (
          <h4 className="main-title mb-5">Available slots for {title}</h4>
        )}
        <div className="mediacttreatment">
          {services &&
            services.map((service) => (
              <BookingCard
                book={service}
                key={service.id}
                date={selectedDate}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
