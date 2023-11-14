import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export const ToggleFrom = () => {
  const [isRegisterActive, setRegisterActive] = useState(false);

  const toggleForm = () => {
    setRegisterActive(!isRegisterActive);
  };

  return (
    <div className={`container ${isRegisterActive ? "active" : ""}`}>
      {isRegisterActive ? <RegisterForm /> : <LoginForm />}
      <div className="toggle-container">
        <div className="toggle">
          <div
            className={`toggle-panel toggle-left ${
              isRegisterActive ? "hidden" : ""
            }`}
          >
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of the site features</p>
            <button className="hidden" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div
            className={`toggle-panel toggle-right ${
              isRegisterActive ? "" : "hidden"
            }`}
          >
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of the site
              features
            </p>
            <button className="hidden" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
