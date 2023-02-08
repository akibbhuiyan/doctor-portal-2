import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: info.name,
            email: info.email,
            number: info.number,
            image: imgData.data.url,
          };
          fetch("https://doctor-portal2-server.vercel.app/addDoctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              toast.success(`${doctor.name} is added successfully`);
              navigate(-1, { replace: true });
            });
        }
      });
    e.preventDefault();
  };
  // const handleSubmit = (e) => {
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((imgData) => {
  //       if (imgData.success) {
  //         console.log(imgData.data.url);
  //         const doctor = {
  //           name: info.name,
  //           email: info.email,
  //           image: imgData.data.url,
  //         };

  //         // save doctor information to the database
  //         fetch("https://doctors-portal-server-rust.vercel.app/doctors", {
  //           method: "POST",
  //           headers: {
  //             "content-type": "application/json",
  //             authorization: `bearer ${localStorage.getItem("accessToken")}`,
  //           },
  //           body: JSON.stringify(doctor),
  //         })
  //           .then((res) => res.json())
  //           .then((result) => {
  //             console.log(result);
  //             toast.success(`${data.name} is added successfully`);
  //             navigate("/dashboard/managedoctors");
  //           });
  //       }
  //     });
  // };
  return (
    <div className="container-fluid row">
      <Sidebar />
      <div
        className="col-md-10 p-4 pr-5"
        style={{ backgroundColor: "#F4FDFB" }}
      >
        <h5 className="text-brand">Add Doctor</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              onBlur={handleBlur}
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              onBlur={handleBlur}
              className="form-control"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label for="name">Number</label>
            <input
              type="number"
              onBlur={handleBlur}
              className="form-control"
              name="number"
              placeholder="Number"
            />
          </div>
          <div className="form-group">
            <label for="file">Upload a Picture</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Picture"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
