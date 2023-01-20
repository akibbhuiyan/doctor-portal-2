import React, { useContext, useEffect, useState } from "react";
import AppointmentByDate from "../AppointmentByDate/AppointmentByDate";
import Sidebar from "../Sidebar/Sidebar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { UserContext } from "../../../App";
const containerStyle = {
  backgroundColor: "#F4FDFB",
  height: "100%",
};
const AppoinmentforEach = () => {
  const [userLoggedIn, setUserLoggedIn] = useContext(UserContext);
  const [appointments, setAppointments] = useState([]);
  const handleChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    fetch("https://doctor-portal2-server.vercel.app/appoinmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        date: selectedDate.toLocaleDateString(),
        email: userLoggedIn.email,
      }),
    })
      .then((res) => res.json())
      .then((appointments) => setAppointments(appointments));
  }, [selectedDate, userLoggedIn]);
  return (
    <section>
      <div className="container-fluid row" style={containerStyle}>
        <Sidebar />

        <div className="col-md-5 d-flex justify-content-center h-100 pt-5">
          <Calendar onChange={handleChange} value={selectedDate} />
        </div>
        <div className="col-md-5">
          <AppointmentByDate appointments={appointments} />
        </div>
      </div>
    </section>
  );
};

export default AppoinmentforEach;
