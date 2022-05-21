import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../MyHooks/useAuth";
function Login() {
  axios.defaults.withCredentials = true;
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Email != "" && Password != "") {
      try {
        const response = await axios.post("http://localhost:4000/Auth/login", {
          Email,
          Password
        });
        const data = response.data;
        console.log(data);
       
        const accessToken = response?.data?.accessToken;
        const Roles = response?.data?.Roles;
        setAuth({ Email, Roles });
        setEmail('');
        setPassword('');
        if(Roles.includes("Admin")) navigate("/Admin/Dashboard", { replace: true });
        else if(Roles.includes("CAC")) navigate("/CAC/Dashboard", { replace: true });
        else if(Roles.includes("Faculty")) navigate("/Faculty/Dashboard", { replace: true });
        else if(Roles.includes("Eveluator")) navigate("/Eveluator/Dashboard", { replace: true });
        } catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else if (err.response?.status === 400) {
              console.log('Missing Username or Password');
            } else if (err.response?.status === 401) {
              console.log('Unauthorized');
            } else {
              console.log('Login Failed');
            }
          } 
    } else {
      alert("Fill all the fields");
    }
  };
  return (
    <div className="container">
      <div className="row card justify-content-center">
        <div className="card-header">
          <h3 className="text-center font-weight-light my-4">Login</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="inputEmail"
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
            </div>
            <div className="form-floating mb-3">
              <input
                className="form-control"
                id="inputPassword"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="Password" className="form-label">
                Password
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                id="inputRememberPassword"
                type="checkbox"
                value=""
              />
              <label
                htmlFor="check"
                className="form-check-label"
                for="inputRememberPas1sword"
              >
                Remember Password
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
              <Link className="small" to="forgotpassword">
                Forgot Password?
              </Link>
              <button type="Submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
