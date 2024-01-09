import React from 'react';
import { useLocation,Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminHome = () => {
  const location = useLocation();
  const { state } = location;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post('https://aakashacademy.in/logout');
    //console.log(response.data.message);
    
    // Redirect to the login page after successful logout
    navigate('/login');
  };

  return (
    <div>
      <h1>Upload</h1>
      {state && state.message && <h3>{state.message}</h3>}
      <Link to="/englishvideoupload">EnglishUpload</Link>
      <Link to="/sciencevideoupload">ScienceUpload</Link>
      <Link to="/mathvideoupload">MathUpload</Link>
      <Link to="/personalvideoupload">PersonalDevelopmentUpload</Link>
      <Link to="/classicalupload">ClassicalDanceUpload</Link>
      <Link to="/itupload">ItEducationUpload</Link>
      <Link to="/yogaupload">YogaUpload</Link>
      <Link to="/religiousupload">ReligiousUpload</Link>
      <Link to="/musicupload">MusicUpload</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminHome;
