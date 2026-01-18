import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>404 | NOT FOUND</h1>
      <button className="error-button" onClick={()=> navigate('/')}>Home</button>
    </div>
  );
};

export default Error;
