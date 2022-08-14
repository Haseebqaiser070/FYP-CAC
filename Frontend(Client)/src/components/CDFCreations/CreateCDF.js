//----------------------------------------------------------------
//----------------------------------------------------------------
//          CDF Form
//----------------------------------------------------------------
//----------------------------------------------------------------

import React, { useState, useEffect } from "react";
import "../css/styles.css";
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

function setPrerequisites() {}

export default function CreateCDF() {
  const [mainTopic, setmainTopic] = useState("");
  const [subTopic, setsubTopic] = useState([""]);
  const [teachingHours, setteachingHours] = useState("");
  const [Rows, setRows] = useState([]);

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

  const columns = [
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
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 50 }}
    >
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
          Mathematical Proofs; Counting & Probability; Graphs & Tree Structures;
          and Discrete Probability.
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
                    setmainTopic(mainTopic);
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
                    setsubTopic(subTopic);
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
            </div>
          </div>
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
                  value={teachingHours}
                  onChange={(e) => {
                    setteachingHours(teachingHours);
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
                Add No of Teaching Hours
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
          columns={columns}
          getRowId={(Rows) => Rows._id}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
