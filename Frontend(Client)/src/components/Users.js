import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import axios from "axios";
export default function Users() {
  const [faculty, setfaculty] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/Faculty/show");
    setfaculty(response.data);
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
            <th className="col-4">User Name</th>
            <th className="col-4">Email</th>
            <th className="col-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((facultymember) => {
            return (
              <tr className="d-flex" scope="row" key={facultymember._id}>
                <td className="col-4">
                  {facultymember.FirstName} {facultymember.SecondName}
                </td>
                <td className="col-4">{facultymember.Email}</td>
                <td className="col-4">
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
