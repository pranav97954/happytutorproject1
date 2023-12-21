// VideoUpload.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const YogaUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate(); 

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('folderName', "Yoga");
    formData.append('video', selectedFile);

    axios.post('http://localhost:3001/Yoga-upload-video', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log(response.data); // Handle success, e.g., show a success message
      navigate('/upload',{ message: 'Upload successful!' });
    })
    .catch(error => {
      console.error('Video Upload Error:', error);
    });
  };

  return (
    <div>
      <h2>Yoga</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default YogaUpload;
