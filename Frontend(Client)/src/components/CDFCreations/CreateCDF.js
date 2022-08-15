//----------------------------------------------------------------
//----------------------------------------------------------------
//          CDF Form
//----------------------------------------------------------------
//----------------------------------------------------------------

import React, { useState, useEffect } from "react";
import "../css/styles.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const style = {
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

export default function CreateCDF() {
  const [mainTopic, setmainTopic] = useState("");
  const [subTopic, setsubTopic] = useState([""]);
  const [teachingHours, setteachingHours] = useState("");
  const [clo, setclo] = useState("");
  const [unit, setunit] = useState("");
  const [Rows, setRows] = useState([]);
  const [btl, setbtl] = useState("");
  const [so, setso] = useState("");
  const [textBook, settextBook] = useState("");
  const [referenceBook, setreferenceBook] = useState("");
  const [quiz, setquiz] = useState("");
  const [assignment, setassignment] = useState("");
  const [midterm, setmidterm] = useState("");
  const [finalterm, setfinalterm] = useState("");
  const [Project, setproject] = useState("");

  const getCategories = async () => {
    const res = await axios.get("http://localhost:4000/Category/show");
    const data = await res.data;
    console.log(data);
    setCategories([...data]);
  };
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([...data]);
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  const maintopicscolumns = [
    {
      field: "Unit",
      headerName: "Unit",
      flex: 1,
    },
    {
      field: "Topic",
      headerName: "Topic",
      flex: 3,
    },
    {
      field: "NoofTeachingHours",
      headerName: "No. of Teaching Hours",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              // onClick={}
            >
              Remove
            </Button>
          </>
        );
      },
    },
  ];
  const clocolumns = [
    {
      field: "Sr",
      headerName: "Sr.#",
      flex: 1,
    },
    {
      field: "Unit",
      headerName: "Unit#",
      flex: 1,
    },
    {
      field: "CourseLearningOutcomes",
      headerName: "Course Learning Outcomes",
      flex: 3,
    },
    {
      field: "BloomTaxonomyLearningLevel",
      headerName: "Bloom Taxonomy Learning Level",
      flex: 1,
    },
    {
      field: "So",
      headerName: "SO",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              // onClick={}
            >
              Remove
            </Button>
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      S: "1",
      CourseCode: "CSC-101",
      CourseTitle: "Intro to ICT",
      CreditHour: "3(2,1)",
    },
  ];

  return (
    <>
      <div style={{ width: "100%", padding: 50 }}>
        <h1 className="mb-4">Create CDF</h1>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 1,
            marginBottom: 9,
          }}
        >
          <h5>Course Information</h5>
        </div>
        <div className="row">
          <div className="col">
            <h6>
              <b>Course Code: </b>
            </h6>
          </div>
          <div className="col">
            <h6 style={{ paddingBottom: 20, textAlign: "right" }}>
              <b>Course Title: </b>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 style={{ paddingBottom: 35 }}>
              <b>Credit Hour: </b>
            </h6>
          </div>
          <div className="col">
            <h6 style={{ paddingBottom: 35, textAlign: "right" }}>
              <b>Lecture Hours/Week: </b>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 style={{ paddingBottom: 35 }}>
              <b>Lab Hours/Week: </b>
            </h6>
          </div>
          <div className="col">
            <h6 style={{ textAlign: "right" }}>
              <b>Pre-Requisite: </b>
            </h6>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 1,
              marginBottom: 9,
            }}
          >
            <h5>Catalogue Description:</h5>
          </div>
          <p>
            This course introduces mathematical structures necessary for the
            development of program logic. It covers the following topics: Set
            Theory; Propositional & First Order Logic; Rules of Inference;
            Mathematical Proofs; Counting & Probability; Graphs & Tree
            Structures; and Discrete Probability.
          </p>
        </div>
        <div>
          <div
            className="card"
            style={{
              backgroundColor: "#f5f5f5",
              marginTop: 25,
              borderRadius: 15,
              padding: 25,
            }}
          >
            <div className="row">
              <div className="col-9">
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Add Main Topic"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={mainTopic}
                    onChange={(e) => {
                      setmainTopic(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
              <div className="col-3">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="medium"
                  // onClick={}
                >
                  Add Main Topic
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Add Sub Topics"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={subTopic}
                    onChange={(e) => {
                      setsubTopic(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
              <div className="col-3">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="medium"
                  // onClick={}
                >
                  Add Sub Topics
                </Button>
                <Button>
                  <CheckBoxIcon />
                </Button>
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Add Teaching Hours"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={teachingHours}
                    onChange={(e) => {
                      setteachingHours(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
              <div className="col-3">
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="medium"
                  // onClick={}
                >
                  Add Teaching Hours
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 1,
            marginBottom: 15,
            marginTop: 50,
          }}
        >
          <h5>Unit wise Major Topics:</h5>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={Rows}
            columns={maintopicscolumns}
            getRowId={(Rows) => Rows._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
        <h5 className="mt-4">Total Contact Hours</h5>

        <div
          className="card"
          style={{
            backgroundColor: "#f5f5f5",
            marginTop: 25,
            borderRadius: 15,
            padding: 25,
          }}
        >
          <div className="row">
            <div className="col-9">
              <FormControl fullWidth size="small">
                <TextField
                  className="mb-4"
                  id="outlined-basic"
                  label="Add CLO"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={clo}
                  onChange={(e) => {
                    setclo(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="col-3">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
                // onClick={}
              >
                Add CLO
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <FormControl fullWidth size="small">
                <Select
                  className="mb-4"
                  labelId="courseAssign"
                  id="courseAssign"
                  label="Select Unit"
                  value={unit}
                  onChange={(e) => {
                    setunit([e.target.value]);
                  }}
                  autoWidth
                >
                  <MenuItem>1</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-3">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
                // onClick={}
              >
                Select Unit
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <FormControl fullWidth size="small">
                <TextField
                  className="mb-4"
                  id="outlined-basic"
                  label="Add BTL Level"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={btl}
                  onChange={(e) => {
                    setbtl(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="col-3">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
                // onClick={}
              >
                Add BTL Level
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-9">
              <FormControl fullWidth size="small">
                <TextField
                  className="mb-4"
                  id="outlined-basic"
                  label="Add SO"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={so}
                  onChange={(e) => {
                    setso(e.target.value);
                  }}
                />
              </FormControl>
            </div>
            <div className="col-3">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
                // onClick={}
              >
                Add SO
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 1,
            marginBottom: 15,
            marginTop: 50,
          }}
        >
          <h5>Mapping of CLOs and SOs:</h5>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={Rows}
            columns={clocolumns}
            getRowId={(Rows) => Rows._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 1,
            marginBottom: 15,
            marginTop: 50,
          }}
        >
          <h5>CLO Assessment Mechanism</h5>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Assessment Tools</th>
                <th>CLO-1</th>
                <th>CLO-1</th>
                <th>CLO-1</th>
                <th>CLO-1</th>
                <th>CLO-1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quizzes</td>

                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={quizzes}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      label="Select Quiz"
                      placeholder="Select Quiz"
                    />
                  )}
                />
              </tr>
              <tr>
                <td>Assignments</td>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={assignments}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      label="Select Assignment"
                      placeholder="Select Assignment"
                    />
                  )}
                />
              </tr>
              <tr>
                <td>Midterm</td>
                <FormControl fullWidth className="mt-4 mb-4 pb-3">
                  <InputLabel id="demo-simple-select-label">
                    Select Text Books
                  </InputLabel>
                  <Select
                    size="small"
                    value={midterm}
                    label="Select Mid Term Exam"
                    onChange={(e) => {
                      setmidterm([e.target.value]);
                    }}
                  >
                    <MenuItem value={"MidTermExam"}>Mid Term Exam</MenuItem>
                  </Select>
                </FormControl>
              </tr>
              <tr>
                <td>Terminal</td>
                <FormControl fullWidth className="mt-4 mb-4 pb-3">
                  <InputLabel id="demo-simple-select-label">
                    Select Final Term Exam
                  </InputLabel>
                  <Select
                    size="small"
                    value={finalterm}
                    label="Select Final Term Exam"
                    onChange={(e) => {
                      setfinalterm([e.target.value]);
                    }}
                  >
                    <MenuItem value={"Final Term Exam"}>
                      Final Term Exam
                    </MenuItem>
                  </Select>
                </FormControl>
              </tr>
              <tr>
                <td>Project</td>
                <FormControl fullWidth className="mt-4 mb-4 pb-3">
                  <InputLabel id="demo-simple-select-label">
                    Select Project
                  </InputLabel>
                  <Select
                    size="small"
                    value={Project}
                    label="Select Project"
                    onChange={(e) => {
                      setproject([e.target.value]);
                    }}
                  >
                    <MenuItem value={"Project"}>Project</MenuItem>
                  </Select>
                </FormControl>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 1,
            marginBottom: 15,
            marginTop: 50,
          }}
        >
          <h5>Text and Reference Books</h5>
        </div>
        <div>
          <FormControl fullWidth className="mt-4 mb-4 pb-3">
            <InputLabel id="demo-simple-select-label">
              Select Text Books
            </InputLabel>
            <Select
              value={textBook}
              label="Select Text Books"
              onChange={(e) => {
                settextBook([e.target.value]);
              }}
            >
              <MenuItem value={"OOP"}>OOP</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth className="mb-4">
            <InputLabel id="demo-simple-select-label">
              Select Reference Books
            </InputLabel>
            <Select
              value={referenceBook}
              label="Select Text Books"
              onChange={(e) => {
                setreferenceBook([e.target.value]);
              }}
            >
              <MenuItem value={"OOP"}>OOP</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          fullWidth
          className="my-4 mb-4"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </>
  );
}
const quizzes = [
  { title: "Quiz 1" },
  { title: "Quiz 2" },
  { title: "Quiz 3" },
  { title: "Quiz 4" },
];

const assignments = [
  { title: "Assignment 1" },
  { title: "Assignment 2" },
  { title: "Assignment 3" },
  { title: "Assignment 4" },
  { title: "Lab Assignments" },
];
