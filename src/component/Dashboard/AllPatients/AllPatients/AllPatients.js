import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import AppointmentDataTable from "../AppointmentDataTable/AppointmentDataTable";

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("https://doctor-portal2-server.vercel.app/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);
  console.log(appointments);
  return (
    <div className="container-fluid row">
      <Sidebar />
      <div className="col-md-10 p-0 pr-5">
        <h3 className="text-brand text-center py-2  ">All Patient</h3>
        <AppointmentDataTable appointments={appointments} />
      </div>
    </div>
  );
};

export default AllPatients;
