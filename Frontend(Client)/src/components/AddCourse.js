import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./AddCourceForm";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";

export default function AddCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const [Code, setCode] = useState("");
  const [Name, setName] = useState("");
  const [Credit, setCredit] = useState("");
  const [Course, setCourse] = useState([]);
  const [update, setUpdate] = useState(false);
  const [LectureHoursWeek, setLectureHoursWeek] = useState("");
  const [LabHoursWeek, setLabHoursWeek] = useState("");
  const [PreRequisites, setPreRequisites] = useState("");
  const [upId, setupId] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseX = () => {
    setCode("");
    setName("");
    setCredit("");
    setLectureHoursWeek("");
    setLabHoursWeek("");
    setPreRequisites("");
    setUpdate(false);
    togglePopup();
  };
  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    const response = await axios.get("http://localhost:4000/Course/show");
    setCourse(response.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/Course/${id}`);
    getCourse();
  };
  const handleUpdate = async (id) => {
    setUpdate(true);
    const response = await axios.get(`http://localhost:4000/Course/${id}`);
    const updating = await response.data;

    setupId(updating._id);
    setCode(updating.Code);
    setName(updating.Name);
    setCredit(updating.Credit);
    setLectureHoursWeek(updating.LectureHoursWeek);
    setLabHoursWeek(updating.LabHoursWeek);
    setPreRequisites(updating.PreRequisites);

    togglePopup();
  };

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="mt-4">Add Cources</h1>

      <div className="row cource">
        <div className="col d-flex justify-content-end">
          <Link to="AddNewCourse">
            <button
              className="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
              type="button"
              id="cource-btn"
            >
              Add New Course
            </button>
          </Link>
        </div>
      </div>

      <table style={{ textAlign: "center" }} className="table" id="list">
        <thead>
          <tr>
            <th className="col-2" scope="col">
              Cource Code
            </th>
            <th className="col-4" scope="col">
              Course Name
            </th>
            <th className="col-2" scope="col">
              Credit Hour
            </th>
            <th className="col-4" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Course &&
            Course.map((cor) => {
              return (
                <tr scope="row" key={cor._id}>
                  <td>{cor.Code}</td>
                  <td>{cor.Name}</td>
                  <td>{cor.Credit}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleUpdate(cor._id)}
                    >
                      <AiFillEdit style={{ marginRight: 10 }} />
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleDelete(cor._id)}
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
