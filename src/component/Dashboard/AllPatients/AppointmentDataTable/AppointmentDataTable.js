import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AppointmentDataTable.css";
const AppointmentDataTable = ({ appointments }) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    fetch(`https://doctor-portal2-server.vercel.app/deleteUser?id=${id}`)
      .then((response) => response.json)
      .then((data) => {
        if (data) {
          toast("User Delete Successfully");
        }
      });
  };
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th className="text-secondary text-left" scope="col">
            Sr No
          </th>
          <th className="text-secondary" scope="col">
            Name
          </th>
          <th className="text-secondary" scope="col">
            Gender
          </th>
          <th className="text-secondary" scope="col">
            Age
          </th>
          <th className="text-secondary" scope="col">
            Weight
          </th>
          <th className="text-secondary" scope="col">
            Phone
          </th>
          <th className="text-secondary" scope="col">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={appointment._id} className="user-table">
            <td>{index + 1}</td>
            <td>{appointment.name}</td>
            <td>{appointment.gender}</td>
            <td>{appointment.age}</td>
            <td>{appointment.weight}kg</td>
            <td>{appointment.phoneNumber}</td>
            <td>{appointment.email}</td>
            <td>
              <button
                onClick={() => handleDelete(appointment._id)}
                className="btn btn-xs btn-danger"
              >
                Delete
              </button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentDataTable;
