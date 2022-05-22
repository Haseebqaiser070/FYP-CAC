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

export default function Users() {
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
            <th className="col-4">Email</th>
            <th className="col-3">Assign Role & Courses</th>
            <th className="col-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {User.map((Usermember) => {
            return (
              <tr className="d-flex" scope="row" key={Usermember._id}>
                <td className="col-2">{Usermember.Name}</td>
                <td className="col-4">{Usermember.Email}</td>
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

                <td className="col-3">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                  >
                    <AiFillEdit style={{ marginRight: 10 }} />
                    Edit
                  </Button>

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
const userRole = ["Admin", "CAC Member", "User", "Evaluator"];
