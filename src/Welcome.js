import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Welcome = () => {
  return (
    <div>
      <div className=" welcome vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1>Student Form</h1>
          <Link exact to="/home">
            <div className="btn btn-primary btn-lg my-3">Launch</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
