import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "15px",
      }}
    >
      <h1>404 Not Found</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default Missing;
