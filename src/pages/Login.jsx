import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { LOCK, PASSWORD, validEmail } from "../helper";
import down from "/src/assets/svg/down.svg";
import eye from "/src/assets/svg/eye.svg";
import Logo from "../components/Logo";

const Login = () => {
  const navigate = useNavigate();

  const [failCount, setFailCount] = useState(0);
  const [timer, setTimer] = useState(LOCK);
  const [toggle, setToggle] = useState(false);
  const [disable, setDisable] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Works only if email format is valid
    if (validEmail.test(email)) {
      if (password === PASSWORD) {
        navigate("/home");
      } else {
        // Disables button on 3rd wrong attempt
        if (failCount >= 2) {
          setDisable((state) => !state);
          const interval = setInterval(() => {
            setTimer((state) => state - 1);
          }, 1000);
          setTimeout(() => {
            clearInterval(interval);
            setTimer(LOCK);
            setDisable((state) => !state);
          }, LOCK * 1000);
        }
        setFailCount((state) => state + 1);
      }
    }
  };

  return (
    <div className="login-container">
      <Logo />
      <span>Hello!</span>
      <h1>Welcome Back</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input-group">
          <div className="login-input-field">
            <label htmlFor="login-email">Email</label>
            <input
              type="email"
              name="email"
              id="login-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ReactSVG src={down} />
          </div>
          <div className="login-input-field">
            <label htmlFor="login-password">Password</label>
            <input
              type={toggle ? "text" : "password"}
              name="password"
              id="login-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <ReactSVG
              src={eye}
              onClick={() => setToggle((state) => !state)}
              className={`password-${toggle ? "show" : "hide"}`}
            />
          </div>
        </div>
        <a href="https://www.google.com/" target="_blank">
          Forgot Password
        </a>
        <button disabled={disable}>{disable ? `${timer}s` : "Log in"}</button>
        <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
};

export default Login;
