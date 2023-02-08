import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar />
      <AppointmentHeader handleChange={handleChange} />
      <BookAppointment selectedDate={selectedDate} />
      <Footer />
    </div>
  );
};

export default Appointment;
