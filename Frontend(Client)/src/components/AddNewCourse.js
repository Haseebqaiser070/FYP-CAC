import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./AddCourceForm";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";

export default function AddNewCourse() {
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

  const [mainTopic, setmainTopic] = useState("");
  const [catalogue, setCatalogue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setCatalogue(`${catalogue} ${mainTopic}; `);
    setmainTopic("");
  };

  const AddCourse = async (e) => {
    e.preventDefault();
    if (update == true) {
      console.log("update");
      await axios.put(`http://localhost:4000/Course/${upId}`, {
        Code,
        Name,
        Credit,
        LectureHoursWeek,
        LabHoursWeek,
        PreRequisites,
      });
      setCode("");
      setName("");
      setCredit("");
      setLectureHoursWeek("");
      setLabHoursWeek("");
      setPreRequisites("");
      getCourse();
      setUpdate(false);
    } else {
      if (
        Code != "" &&
        Name != "" &&
        Credit != "" &&
        LectureHoursWeek != "" &&
        LabHoursWeek != "" &&
        PreRequisites != ""
      ) {
        await axios.post("http://localhost:4000/Course/add", {
          Code,
          Name,
          Credit,
          LectureHoursWeek,
          LabHoursWeek,
          PreRequisites,
        });
        setCode("");
        setName("");
        setCredit("");
        setLectureHoursWeek("");
        setLabHoursWeek("");
        setPreRequisites("");
        getCourse();
      } else {
        alert("empty values");
      }
    }
  };
  return (
    <div style={{ padding: 30 }} className="row">
      <h4 style={{ textAlign: "center", marginBottom: 30 }}>Add New Cource</h4>
      <form onSubmit={AddCourse}>
        <div className="row">
          <div className="mb-3 col-4">
            <label for="course-code" className="form-label">
              Course Code
            </label>
            <div className="row">
              <div className="col">
                <select class="form-select">
                  <option>MTH</option>
                  <option>CSC</option>
                  <option>HUM</option>
                  <option>PHY</option>
                  <option>EEE</option>
                  <option>DSC</option>
                  <option>CYC</option>
                  <option>AIC</option>
                </select>
              </div>
              <div className="col">
                <input
                  maxlength="3"
                  pattern="^[0-9]{3}$"
                  type="text"
                  className="form-control"
                  id="course-code"
                  placeholder="Code"
                  value={Code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-3 col-6">
            <label for="course-name" className="form-label">
              Course Name
            </label>
            <input
              type="text"
              className="form-control"
              id="course-name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3 col-2">
            <label for="credit-hour" className="form-label">
              Credit Hour
            </label>
            <input
              type="number"
              className="form-control"
              id="credit-hour"
              max="4"
              value={Credit}
              onChange={(e) => setCredit(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3 col-6">
            <label for="	LectureHoursWeek" className="form-label">
              Lecture Hours/Week
            </label>
            <input
              type="number"
              className="form-control"
              id="LectureHoursWeek"
              value={LectureHoursWeek}
              onChange={(e) => setLectureHoursWeek(e.target.value)}
            />
          </div>
          <div className="mb-3 col-6">
            <label for="LabHoursWeek" className="form-label">
              Lab Hours/Week
            </label>
            <input
              type="number"
              className="form-control"
              id="LabHoursWeek"
              value={LabHoursWeek}
              onChange={(e) => setLabHoursWeek(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="mb-3">
            <label for="PreRequisites" className="form-label">
              Pre-Requisites
            </label>
            <input
              type="text"
              className="form-control"
              id="PreRequisites"
              value={PreRequisites}
              onChange={(e) => setPreRequisites(e.target.value)}
            />
          </div>
        </div>

        <div style={{ marginBottom: 20, marginTop: 20 }}>
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  className="form-control"
                  id="maintopic"
                  type="text"
                  placeholder="Add Main Topic"
                  value={mainTopic}
                  onChange={(e) => setmainTopic(e.target.value)}
                ></input>
              </div>
              <div className="col-3 d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleAdd}
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <table className="table table-responsive">
            <thead>
              <tr className="cdf">
                <th>Catalogue Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cd">
                <td>{catalogue}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="button btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
        />
      </form>
    </div>
  );
}
