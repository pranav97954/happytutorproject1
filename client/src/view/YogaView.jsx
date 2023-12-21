// MathVideoView.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YogaView = () => {
  const [videos, setVideos] = useState([]);
  const folderName = 'Yoga'; // Set the desired folder name

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    axios.get(`http://localhost:3001/get-videos/${folderName}`)
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Fetch Videos Error:', error);
      });
  };

  return (
    <div>
      <div>
        {videos.map(video => (
          <div key={video._id}>
            <video controls width="300">
            <source src={`http://localhost:3001/videos/${video.folderName}/${encodeURIComponent(video.filename)}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p>Description: {video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YogaView;
