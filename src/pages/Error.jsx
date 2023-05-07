import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1>{error.status}</h1>
      <span>{error.statusText}</span>
      <button onClick={() => navigate(-1, { replace: true })}>Go back</button>
    </div>
  );
};

export default Error;
