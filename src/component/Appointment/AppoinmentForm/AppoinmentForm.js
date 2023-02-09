import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppoinmentForm.css";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/UserContext";
import { format } from "date-fns";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
const AppoinmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.service = appointmentOn;
    data.date = format(date, "PP");
    data.email = user?.email;
    data.created = new Date().toLocaleDateString();
    console.log(data);
    fetch("https://doctor-portal2-server.vercel.app/addAppoinment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((succes) => {
        if (succes.acknowledged) {
          closeModal();
          toast("Appoinment Created SuccessFully");
        } else {
          toast.error(succes.message);
        }
      });
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 className="text-center text-brand">{appointmentOn}</h4>
        {/* <button onClick={closeModal}>close</button> */}
        <p className="text-center text-brand">{date.toDateString()}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
            {errors.name && <span>Name is required</span>}
          </div>
          <div className="form-group">
            <input
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
            />
            {errors.phoneNumber && <span>Phone Number required</span>}
          </div>
          <div className="form-group">
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              value={user?.email}
            />
            {errors.email && <span>Email is required</span>}
          </div>

          <div className="form-group row">
            <div className="col-4">
              <select {...register("gender")} name="gender">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className="col-4">
              <input
                type="number"
                {...register("age", { required: true })}
                placeholder="Age"
              />
              {errors.age && <span>age is required</span>}
            </div>
            <div className="col-4">
              <input
                type="number"
                {...register("weight", { required: true })}
                placeholder="Weigth"
              />
              {errors.weight && <span>Weight is required</span>}
            </div>
          </div>
          <div className="form-group text-end">
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppoinmentForm;
