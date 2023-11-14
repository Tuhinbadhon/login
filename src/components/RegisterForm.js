import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const RegisterForm = () => {
  return (
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#" className="icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
