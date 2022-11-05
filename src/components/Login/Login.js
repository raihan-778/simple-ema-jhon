import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

import "./Login.css";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      {user ? (
        <p>Log In successfully</p>
      ) : (
        <p>Can not find the emial or password</p>
      )}

      <p>
        New To Ema-Jhon Please <Link to="/signup">Create a new account.</Link>
      </p>
    </div>
  );
};

export default Login;
