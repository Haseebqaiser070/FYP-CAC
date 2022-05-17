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
  const [faculty, setfaculty] = useState([]);
  const [AssignCources, setAssignCourse] = useState([]);
  const [Courses, setCourse] = useState([]);

  useEffect(() => {
    getData();
    getCources();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/Faculty/show");
    setfaculty(response.data);
  };
  const getCources = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([{ Name: "none" }, ...data]);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/Faculty/${id}`);
    getData();
  };

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="mt-4 mb-4">Faculty Members</h1>
      <table className="table" id="list">
        <thead>
          <tr className="d-flex">
            <th className="col-2">User Name</th>
            <th className="col-3">Email</th>
            <th className="col-5">Assign Role & Courses</th>
            <th className="col-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((facultymember) => {
            return (
              <tr className="d-flex" scope="row" key={facultymember._id}>
                <td className="col-2">
                  {facultymember.FirstName} {facultymember.SecondName}
                </td>
                <td className="col-2">{facultymember.Email}</td>
                <td className="col-5">
                  <div className="row">
                    <div className="col">
                      <Autocomplete
                        multiple
                        id="tags-standard"
                        options={userRole}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[userRole]}
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
                    <div className="col">
                      <Stack>
                        <Autocomplete
                          multiple
                          id="tags-standard"
                          value={AssignCources}
                          options={Courses}
                          getOptionLabel={(option) => option.Name}
                          defaultValue={null}
                          onChange={(e, val) => setAssignCourse(val)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              label="Assign Cources"
                              placeholder="Assign Cources"
                              size="small"
                            />
                          )}
                        />
                      </Stack>
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
                    onClick={() => handleDelete(facultymember._id)}
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
const userRole = [
  { title: "Admin" },
  { title: "CAC Member" },
  { title: "Faculty" },
  { title: "Evaluator" },
];
