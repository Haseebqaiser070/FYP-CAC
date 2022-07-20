import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import axios from "axios";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Box, Modal, Switch } from "@mui/material";

const modalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};
const label = { inputProps: { "aria-label": "User Status" } };

export default function Users() {
  const [open1, setOpen1] = useState(false);
  const handleClose1 = () => setOpen1(false);
  const [FirstName, setFirstName] = useState("");
  const [SecondName, setSecondName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Phone, setPhone] = useState("");
  const [Roles, setRoles] = useState([]);
  const [User, setUser] = useState([]);
  const [AssignCources, setAssignCourse] = useState([]);
  const [Courses, setCourse] = useState([]);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    getData();
    getCources();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/User/show");
    setUser(response.data);
    console.log(response.data);
  };
  const getCources = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([{ Name: "none" }, ...data]);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/User/${id}`);
    getData();
  };

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="mt-4 mb-4">User Members</h1>
      <table className="table" id="list">
        <thead>
          <tr className="d-flex">
            <th className="col-2">User Name</th>
            <th className="col-3">Email</th>
            <th className="col-3">Assign Role & Courses</th>
            <th className="col-1">Status</th>
            <th className="col-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {User.map((Usermember) => {
            return (
              <tr className="d-flex" scope="row" key={Usermember._id}>
                <td className="col-2">{Usermember.Name}</td>
                <td className="col-3">{Usermember.Email}</td>
                <td className="col-3">
                  <div className="row">
                    <div className="col">
                      <Autocomplete
                        multiple
                        id="tags-standard"
                        options={userRole}
                        getOptionLabel={(option) => option}
                        defaultValue={[...Usermember.Roles]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Select User Role"
                            placeholder="User Roles"
                            size="small"
                          />
                        )}
                      />
                    </div>
                  </div>
                </td>
                <td className="col-1">
                  <Switch {...label} defaultChecked />
                </td>

                <td className="col-3">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => setOpen1(true)}
                  >
                    <AiFillEdit style={{ marginRight: 10 }} />
                    Edit
                  </Button>

                  <Modal
                    open={open1}
                    onClose={handleClose1}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={modalstyle}>
                      <div className="container">
                        <div className="row ">
                          <div className="col-lg-12">
                            <div className=" border-0  mt-3">
                              <div>
                                <h3 className="text-center font-weight-bold my-4">
                                  Edit User
                                </h3>
                              </div>
                              <div>
                                <form>
                                  <div className="row mb-3">
                                    <div className="col-md-6">
                                      <div className="form-floating mb-3 mb-md-0">
                                        <input
                                          className="form-control"
                                          id="inputFirstNameName"
                                          type="text"
                                          placeholder="Enter your first name "
                                          // value={FirstName}
                                          // onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <label for="inputFirstName">
                                          First Name
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="form-floating">
                                        <input
                                          className="form-control"
                                          id="inputLastName"
                                          type="text"
                                          placeholder="Enter your last name"
                                          // value={SecondName}
                                          // onChange={(e) => setSecondName(e.target.value)}
                                        />
                                        <label for="inputLastName">
                                          Last Name
                                        </label>
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
                                          // value={Phone}
                                          // onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <label for="inputLastName">
                                          Phone Number
                                        </label>
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      {/* <Autocomplete
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
                                      /> */}
                                    </div>
                                    <div className="col-md-12">
                                      <div className="form-floating mb-3 mt-3 mb-md-0">
                                        <input
                                          className="form-control"
                                          id="inputEmail"
                                          type="email"
                                          placeholder="name@example.com"
                                          // value={Email}
                                          // onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label for="inputEmail">
                                          Email address
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-12">
                                      <div className="form-floating mb-3 mb-md-0 mt-3">
                                        <input
                                          className="form-control"
                                          id="inputPasswordConfirm"
                                          type="password"
                                          placeholder="Enter password"
                                          // value={Password}
                                          // onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label for="inputPasswordConfirm">
                                          Password
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="row mb-3"></div>
                                  <div className="mt-4 mb-0">
                                    <div className="d-grid">
                                      <input
                                        type="submit"
                                        name="Edit User"
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
                    </Box>
                  </Modal>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleDelete(Usermember._id)}
                  >
                    <AiFillDelete style={{ marginRight: 10 }} />
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
const userRole = ["Admin", "CAC", "Faculty", "Evaluator"];
