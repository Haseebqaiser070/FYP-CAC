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
  const[upId,setupId] = useState('')
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseX =()=>{
    setCode("");
    setName("");
    setCredit("");
    setLectureHoursWeek("");
    setLabHoursWeek("");
    setPreRequisites("");
    setUpdate(false)
    togglePopup()
  }
  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    const response = await axios.get("http://localhost:4000/Course/show");
    setCourse(response.data);
  };

  const AddCourse = async (e) => {
    e.preventDefault();
    if(update==true)
    {console.log("update")
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
      setUpdate(false)
      togglePopup();
    }
    else{
      if (Code != "" && Name != "" && Credit != "" && LectureHoursWeek !="" && LabHoursWeek != "" && PreRequisites != "") {
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
        togglePopup();
      } else {
        alert("empty values");
      }
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/Course/${id}`);
    getCourse();
  };
  const handleUpdate=async (id)=>{
    setUpdate(true)
    const  response = await axios.get(`http://localhost:4000/Course/${id}`);
    const updating= await response.data
    
    setupId(updating._id)
    setCode(updating.Code)
    setName(updating.Name)
    setCredit(updating.Credit)
    setLectureHoursWeek(updating.LectureHoursWeek)
    setLabHoursWeek(updating.LabHoursWeek)
    setPreRequisites(updating.PreRequisites)
    
    togglePopup()  
  }

  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h1 class="mt-4">Add Cources</h1>

      <div class="row cource">
        <div class="col d-flex justify-content-end">
          <button
            class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
            type="button"
            id="cource-btn"
            onClick={togglePopup}
          >
            Add New Course
          </button>

          {isOpen && (
            <Popup
              content={
                <>
                  <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                    Add New Cource
                  </h4>
                  <form onSubmit={AddCourse}>
                    <div class="row">
                      <div class="mb-3 col col-3">
                        <label for="course-code" class="form-label">
                          Course Code
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="course-code"
                          value={Code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                      </div>

                      <div class="mb-3 col col-6">
                        <label for="course-name" class="form-label">
                          Course Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="course-name"
                          value={Name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div class="mb-3 col col-3">
                        <label for="credit-hour" class="form-label">
                          Credit Hour
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="credit-hour"
                          max="4"
                          value={Credit}
                          onChange={(e) => setCredit(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="mb-3 col col-6">
                        <label for="	LectureHoursWeek" class="form-label">
                          Lecture Hours/Week
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="LectureHoursWeek"
                          value={LectureHoursWeek}
                          onChange={(e) => setLectureHoursWeek(e.target.value)}
                        />
                      </div>
                      <div class="mb-3 col col-6">
                        <label for="LabHoursWeek" class="form-label">
                          Lab Hours/Week
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="LabHoursWeek"
                          value={LabHoursWeek}
                          onChange={(e) => setLabHoursWeek(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="mb-3">
                        <label for="PreRequisites" class="form-label">
                          Pre-Requisites
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="PreRequisites"
                          value={PreRequisites}
                          onChange={(e) => setPreRequisites(e.target.value)}
                        />
                      </div>
                    </div>

                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      class="button btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                    />
                  </form>
                </>
              }
              handleClose={handleCloseX}
            />
          )}
        </div>
      </div>

      <table style={{ textAlign: "center" }} class="table" id="list">
        <thead>
          <tr>
            <th class="col-2" scope="col">
              Cource Code
            </th>
            <th class="col-4" scope="col">
              Course Name
            </th>
            <th class="col-2" scope="col">
              Credit Hour
            </th>
            <th class="col-4" scope="col">
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
                      onClick={()=>handleUpdate(cor._id)}
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
