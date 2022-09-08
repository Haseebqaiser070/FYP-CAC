import React, { useState, useEffect } from "react";
import "../css/styles.css";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Modal,
  Switch,
  TextField,
} from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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

export default function CreateSOS1() {
  const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  const { Program, SetProgram } = useState("");

  const [Year, setYear] = useState("Content.Year");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  // const [Categories, setCategories] = useState(Content.Categories);
  //{Category:"",Optional:"",Track:"",Courses:[],Note:""}
  //------------------------------------------------
  const [NoofCourses, setNoofCourse] = useState("");
  const [CreditHours, setCreditHours] = useState("");

  const [Category, setCategory] = useState([]);

  // const [coursesList, setCoursesList] = useState([]);

  const [AssignCategory, setAssignCategory] = useState([""]);

  const [AssignPrerequisite, setAssignPrerequisite] = useState([]);
  const [opts, setopts] = useState([]);

  // const getCategory = async () => {
  //   const res = await axios.get("http://localhost:4000/Category/show");
  //   const data = await res.data;
  //   console.log(data);
  //   setCategory([...data]);
  // };

  // useEffect(() => {
  //   getCategory();
  // }, []);

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="mb-4 py-3">Create SOS for {Program} </h1>

      <FormControl fullWidth size="small">
        <TextField
          className="mb-4"
          id="outlined-basic"
          label="SOS Title"
          variant="outlined"
          size="medium"
          fullWidth
          value={Year}
          onChange={(e) => setYear(e.target.value)}
        />
      </FormControl>

      <Card style={{ padding: 30, marginBottom: 35 }}>
        <div className="row">
          <h4 className="mb-4 mt-2">
            <b>Add Categories in {Program}</b>
          </h4>

          <div className="col-9">
            <FormControl fullWidth size="small">
              <Select
                className="mb-4"
                labelId="courseAssign"
                id="courseAssign"
                label="ADD Category"
                // value={AssignCategory[0]}
                // onChange={(e) => {
                //   setAssignCategory([e.target.value, ...AssignCategory]);
                // }}
                autoWidth
              >
                <MenuItem value={1}>Cat 1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-3">
            <Button fullWidth variant="contained" color="primary" size="medium">
              Add Category
            </Button>
          </div>
        </div>
        <div className="row">
          <h4 className="mb-4 mt-2">
            <b>Domain Courses Categories</b>
          </h4>

          <div className="col-9">
            <FormControl fullWidth size="small">
              <Select
                className="mb-4"
                labelId="courseAssign"
                id="courseAssign"
                label="ADD Category"
                // value={AssignCategory[0]}
                // onChange={(e) => {
                //   setAssignCategory([e.target.value, ...AssignCategory]);
                // }}
                autoWidth
              >
                <MenuItem value={1}>Cat 1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-3">
            <Button fullWidth variant="contained" color="primary" size="medium">
              Add Category
            </Button>
          </div>
        </div>
      </Card>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Course Work</th>
              <th>Min No. of Courses</th>
              <th>Min No. of Credit Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Area Covered in {Program}</th>
            </tr>
            <tr>
              <td>Computing Core Courses</td>
              <td>
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="No of Courses"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={NoofCourses}
                    onChange={(e) => setNoofCourses(e.target.value)}
                  />
                </FormControl>
              </td>
              <td>
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="No of Courses"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={CreditHours}
                    onChange={(e) => setCreditHours(e.target.value)}
                  />
                </FormControl>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Submit
                </Button>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th>Total </th>
              <th>15 </th>
              <th>15 </th>
            </tr>

            <th colSpan={2} className="pt-4 mt-5">
              Domain Courses
            </th>
            <tr>
              <td>Computing Core Courses</td>
              <td>
                {" "}
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="No of Courses"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={NoofCourses}
                    onChange={(e) => setNoofCourses(e.target.value)}
                  />
                </FormControl>
              </td>
              <td>
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="No of Credit Hours"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={CreditHours}
                    onChange={(e) => setCreditHours(e.target.value)}
                  />
                </FormControl>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Submit
                </Button>
              </td>
            </tr>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th>Total </th>
              <th>15 </th>
              <th>15 </th>
            </tr>

            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th>Total No of Courses in a Program </th>
              <th>15 </th>
            </tr>
            <tr style={{ backgroundColor: "#f5f5f5" }}>
              <th>Total Credit Hours in the Program: </th>
              <th>15 </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
