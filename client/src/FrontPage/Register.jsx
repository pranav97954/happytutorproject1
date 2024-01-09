import React,{ useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../CSS/form.css";

const serverURL = "https://aakashacademy.in/";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${serverURL}/subjectfm`, { fname, lname , email , subject , contact })
      .then((result) => {
        console.log(result.data);
        navigate("/");
      });
      
  };
  return (
    <div className="fm">
      <div className="carrerform">
        <form className="fm" onSubmit={handleSubmit}>
          <h1>Register Now</h1>

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
            <select name="subject" onChange={(e) => setSubject(e.target.value)}>
              <option value="" disabled selected>
                Select a subject
              </option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Ethical Hacking">Ethical Hacking</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="AI & ML">AI & ML</option>
              <option value="SEO Settings">SEO Settings</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Data Science">Data Science</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Affiliate marketing">Affiliate marketing</option>
              <option value="Lead Generation">Lead Generation</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Ai-image Creation">Ai-image Creation</option>
              <option value="Blogging">Blogging</option>
              <option value="YouTube video-creation">YouTube video-creation</option>
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
};

export default Register;
