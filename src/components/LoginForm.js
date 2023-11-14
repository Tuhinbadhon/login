import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const LoginForm = () => {
  return (
    <div className="form-container sign-in">
      <form>
        <h1>Sign In</h1>
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
        <span>or use your email password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forget Your Password?</a>
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
