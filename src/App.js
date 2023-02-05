import './App.css';
import { Routes, Route, } from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appointment from './component/Appointment/Appointment/Appointment';
import Login from './component/Login/Login/Login';
import { createContext, useState } from 'react';
import AppoinmentforEach from './component/Dashboard/Appointments/Appointments';
import AllPatients from './component/Dashboard/AllPatients/AllPatients/AllPatients';
import Dashboard from './component/Dashboard/Dashboard/Dashboard/Dashboard';
import AddDoctor from './component/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './component/Login/Login/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctor/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/doctor/appointment" element={<AppoinmentforEach />} />
        <Route path="/doctor/patients" element={<AllPatients />} />
        <Route path="/doctor/addDoctor" element={<AddDoctor />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
