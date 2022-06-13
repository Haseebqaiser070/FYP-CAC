import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Register() {
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Roles, setRoles] = useState([]);
  axios.defaults.withCredentials = true;

  const hanleSubmit = async (e) => {
    e.preventDefault();
    if (
      FirstName != "" &&
      SecondName != "" &&
      Email != "" &&
      Password != "" &&
      Roles != "" &&
      Phone != ""
    ) {
      console.log(Roles);
      const Name = FirstName + " " + SecondName;
      const res = await axios.post("http://localhost:4000/User/add", {
        Name,
        Email,
        Password,
        Phone,
        Roles,
      });
      console.log("1here");

      setFirstName("");
      setSecondName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRoles("");
    }
  };
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-12">
          <div className=" border-0  mt-3">
            <div>
              <h3 className="text-center font-weight-bold my-4">Add Faculty</h3>
            </div>
            <div>
              <form onSubmit={hanleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3 mb-md-0">
                      <input
                        className="form-control"
                        id="inputFirstNameName"
                        type="text"
                        placeholder="Enter your first name "
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label for="inputFirstName">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={SecondName}
                        onChange={(e) => setSecondName(e.target.value)}
                      />
                      <label for="inputLastName">Last Name</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-3 mb-md-0">
                      <input
                        className="form-control"
                        id="inputPhoneNo"
                        type="number"
                        placeholder="Enter your phone nmber"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label for="inputLastName">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <Autocomplete
                      multiple
                      id="tags-standard"
                      options={userRoles}
                      getOptionLabel={(option) => option}
                      defaultValue={[...Roles]}
                      onChange={(e, val) => setRoles(val)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Select User Roles"
                          placeholder="User Roles"
                        />
                      )}
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mb-3 mt-3 mb-md-0">
                      <input
                        className="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="name@example.com"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label for="inputEmail">Email address</label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-floating mb-3 mb-md-0 mt-3">
                      <input
                        className="form-control"
                        id="inputPasswordConfirm"
                        type="password"
                        placeholder="Enter password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label for="inputPasswordConfirm">Password</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-3"></div>
                <div className="mt-4 mb-0">
                  <div className="d-grid">
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      className="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const userRoles = ["Admin", "CAC", "Faculty", "Evaluator"];
