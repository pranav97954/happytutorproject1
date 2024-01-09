// MathVideoView.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassicalDanceView = () => {
  const [videos, setVideos] = useState([]);
  const folderName = 'ClassicalDance'; // Set the desired folder name

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = () => {
    axios.get(`https://aakashacademy.in/get-videos/${folderName}`)
      .then(response => {
        setVideos(response.data);
      });
  };

  return (
    <div>
      <div>
        {videos.map(video => (
          <div key={video._id}>
            <video controls width="300">
            <source src={`https://aakashacademy.in/videos/${video.folderName}/${encodeURIComponent(video.filename)}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Description: {video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassicalDanceView;
