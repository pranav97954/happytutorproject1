import { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";

const serverURL = 'http://localhost:3001';
function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${serverURL}/register`, { name, email, password })
  .then(result => {console.log(result.data)
  navigate('/login') 
  })
  .catch(error => {
    console.error('Axios Error:', error);
    if (error.response) {
      console.error('Server responded with:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received from the server');
    } else {
      console.error('Error setting up the request:', error.message);
    }
  });
  };

  return (
    <div className="formbox">
      <form onSubmit={handleSubmit}>
        <div className="brand">
          {/* <img src={Logo} alt="logo" /> */}
          <h1>Register</h1>
        </div>
        <input type="text" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        <span>Already have an account <Link to="/login">Login</Link></span>
      </form>
    </div>
  );
}

export default Signup;
