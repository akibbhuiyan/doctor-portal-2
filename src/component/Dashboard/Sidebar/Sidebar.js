import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGripHorizontal, FaRegFileAlt, FaCog } from "react-icons/fa";
import { FiCalendar, FiUsers, FiLogOut, FiUserPlus } from "react-icons/fi";
import "./Sidebar.css";
import { AuthContext } from "../../Context/UserContext";
const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDoctor, setIsDoctor] = useState(false);
  useEffect(() => {
    fetch("https://doctor-portal2-server.vercel.app/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsDoctor(data));
  }, [user]);
  return (
    <div className="col-md-2 px-0">
      <div className="sidebar d-flex flex-column justify-content-between w-100 py-5 ps-4 ">
        <ul className="list-unstyled">
          <li>
            <Link to="/doctor/dashboard" className="text-white">
              <FaGripHorizontal />
              <span>DashBoard</span>
            </Link>
          </li>
          <li>
            <Link to="/doctor/appointment" className="text-white">
              <FiCalendar />
              <span>Appointment</span>
            </Link>
          </li>
          {isDoctor && (
            <div>
              <li>
                <Link to="/doctor/patients" className="text-white">
                  <FiUsers />
                  <span>Patients</span>
                </Link>
              </li>
              <li>
                <Link to="/doctor/prescriptions" className="text-white">
                  <FaRegFileAlt />
                  <span>prescriptions</span>
                </Link>
              </li>
              <li>
                <Link to="/doctor/addDoctor" className="text-white">
                  <FiUserPlus />
                  <span>Add Doctor</span>
                </Link>
              </li>
            </div>
          )}
          <li>
            <Link to="/doctor/setting" className="text-white">
              <FaCog />
              <span>Setting</span>
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/" className="text-white">
            <FiLogOut />
            <span onClick={logOut}>Log Out</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
