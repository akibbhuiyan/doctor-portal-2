import React from "react";
import { useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://doctor-portal2-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((succes) => {
        console.log(succes);
        if (succes.status === 200) {
          toast("Message send successfully");
        } else {
          toast.error(succes.error);
        }
      });
  };
  return (
    <section className="contact my-5 py-5" id="contact">
      <div className="container">
        <div className=" text-center text-white mb-5">
          <h5 className="text-primary ">Contact</h5>
          <h1>Always Connect with us</h1>
        </div>
        <div className="col-md-7 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <input
                {...register("email", { required: true })}
                className="form-control"
                placeholder="Email Address"
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group mb-3">
              <input
                {...register("subject", { required: true })}
                type="text"
                className="form-control"
                placeholder="Subject"
              />
              {errors.subject && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group mb-3">
              <textarea
                {...register("message", { required: true })}
                className="form-control"
                id=""
                cols="30"
                rows="6"
                placeholder="message"
              ></textarea>
              {errors.message && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="form-group text-center">
              <button className="btn btn-primary sub-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
