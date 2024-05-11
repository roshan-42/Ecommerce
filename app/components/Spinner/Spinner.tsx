import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
