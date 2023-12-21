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
      <div><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, qui. Illum reprehenderit dolorem tempora voluptas quam, consequatur necessitatibus fuga officiis aliquid numquam eaque perferendis, in porro aspernatur reiciendis maxime quidem consectetur veritatis soluta repellat perspiciatis enim error, eum nobis. Cumque impedit reiciendis, adipisci atque ullam vero excepturi tempore minus provident quam quaerat veritatis, sunt, quidem sint earum non. Cumque a eum explicabo consectetur harum! Laudantium ducimus dolor illo tempore! Voluptatibus facere, est blanditiis, deleniti veniam facilis unde nam repellat, ratione repudiandae magnam vel quaerat dignissimos laborum deserunt esse dolores. Quisquam molestiae saepe quas ut, voluptates animi facere ab commodi architecto.</p></div>
      <Link to="/englishvideoview">English View</Link>
      <Link to="/sciencevideoview">Science View</Link>
      <Link to="/mathvideoview">Math View</Link>
      <Link to="/personalvideoview">Personal View</Link>
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default SubjectView;
