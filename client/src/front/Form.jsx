import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/form.css";

const serverURL = "http://localhost:3001";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [duration, setDuration] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${serverURL}/trainingfm`, { fname, lname , email , project ,duration, contact })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        if (error.response) {
          console.error("Server responded with:", error.response.data);
          console.error("Status code:", error.response.status);
        } else if (error.request) {
          console.error("No response received from the server");
        } else {
          console.error("Error setting up the request:", error.message);
        }
      });
  };
  return (
    <div className="fm">
      <div className="carrerform">
        <form className="fm" onSubmit={handleSubmit}>
          <h1>Register For Training</h1>

          <div className="infm">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              onChange={(e) => setLname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Project"
              name="project"
              onChange={(e) => setProject(e.target.value)}
            />
            <select name="duration" onChange={(e) => setDuration(e.target.value)}>
              <option value="" disabled selected>
                Training Preiod
              </option>
              <option value="6months">6 Months</option>
              <option value="1year">1 Year</option>
              
            </select>

            <input
              type="number"
              placeholder="Contact"
              name="contact"
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Form
