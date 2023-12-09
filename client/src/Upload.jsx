import React from 'react';
import { useLocation } from 'react-router-dom';

const Upload = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>Upload</h1>
      {state && state.message && <h3>{state.message}</h3>}
      
    </div>
  );
};

export default Upload;
