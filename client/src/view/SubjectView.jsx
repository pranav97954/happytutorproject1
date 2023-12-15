import React,{ useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import axios from 'axios';

const SubjectView = () => {
  const navigate = useNavigate();




  const handleLogout = async () => {
    try {
      // Send a request to the server to logout the user
      const response = await axios.post('http://localhost:3001/logout');
      console.log(response.data.message);
      
      // Redirect to the login page after successful logout
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <h2>Video View</h2>
      <Link to="/englishvideoview">English View</Link>
      <Link to="/sciencevideoview">Science View</Link>
      <Link to="/mathvideoview">Math View</Link>
      
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SubjectView;
