import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ReactSVG } from "react-svg";
import down from "/src/assets/svg/down.svg";
import eye from "/src/assets/svg/eye.svg";
import Logo from "../components/Logo";
import { validEmail, validPassword } from "../helper";

const Signup = () => {
  const navigate = useNavigate();

  const [togglePW, setTogglePW] = useState(false);
  const [toggleCPW, setToggleCPW] = useState(false);

  const [account, setAccount] = useState({
    name: { value: "", error: false },
    email: { value: "", error: false },
    password: { value: "", error: false },
    confirm: { value: "", error: false },
  });

  const setAttribute = (key, attribute, value) => {
    setAccount((state) => ({
      ...state,
      [key]: { ...state[key], [attribute]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.dismiss();
    // Check name not empty
    const nameValid = account.name.value.trim();
    nameValid
      ? setAttribute("name", "error", false)
      : setAttribute("name", "error", true);
    const emailValid = validEmail.test(account.email.value);

    // Check email format is valid
    emailValid
      ? setAttribute("email", "error", false)
      : setAttribute("email", "error", true);
    const passwordValid = validPassword.test(account.password.value);

    // Check password format is valid
    passwordValid
      ? setAttribute("password", "error", false)
      : setAttribute("password", "error", true);

    // Check confirm is not empty and same as password
    const confirmValid =
      account.confirm.value.trim() &&
      account.confirm.value === account.password.value;
    confirmValid
      ? setAttribute("confirm", "error", false)
      : setAttribute("confirm", "error", true);

    if (nameValid && emailValid && passwordValid && confirmValid) {
      navigate("/home");
      toast.success("Registration successful");
    } else toast.error("Invalid input detected");
  };

  return (
    <div className="signup-container">
      <Logo />
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="signup-input-group">
          <div
            className={`signup-input-field ${
              account.name.error ? "invalid" : ""
            }`}
          >
            <label htmlFor="signup-name">Name</label>
            <input
              type="text"
              name="name"
              id="signup-name"
              onChange={(e) => setAttribute("name", "value", e.target.value)}
            />
            <ReactSVG src={down} />
          </div>
          <div
            className={`signup-input-field ${
              account.email.error ? "invalid" : ""
            }`}
          >
            <label htmlFor="signup-name">Email</label>
            <input
              type="email"
              name="email"
              id="signup-email"
              onChange={(e) => setAttribute("email", "value", e.target.value)}
            />
            <ReactSVG src={down} />
          </div>
          <div
            className={`signup-input-field ${
              account.password.error ? "invalid" : ""
            }`}
          >
            <label htmlFor="signup-password">Password</label>
            <input
              type={togglePW ? "text" : "password"}
              name="password"
              id="signup-password"
              onChange={(e) =>
                setAttribute("password", "value", e.target.value)
              }
            />
            <ReactSVG
              src={eye}
              onClick={() => setTogglePW((state) => !state)}
              className={`password-${togglePW ? "show" : "hide"}`}
            />
          </div>
          <div
            className={`signup-input-field ${
              account.confirm.error ? "invalid" : ""
            }`}
          >
            <label htmlFor="signup-confirm">Confirm Password</label>
            <input
              type={toggleCPW ? "text" : "password"}
              name="confirm"
              id="signup-confirm"
              onChange={(e) => setAttribute("confirm", "value", e.target.value)}
            />
            <ReactSVG
              src={eye}
              onClick={() => setToggleCPW((state) => !state)}
              className={`password-${toggleCPW ? "show" : "hide"}`}
            />
          </div>
        </div>
        <button>Sign up</button>
        <p>
          Already have account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
