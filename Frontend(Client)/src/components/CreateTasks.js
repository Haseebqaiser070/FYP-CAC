import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import axios from "axios";
function TaskDetails() {
  return (
    <div>
      <h2>Create Task</h2>
      <TextField
        label="Course Name"
        variant="outlined"
        size="small"
      ></TextField>

      <TextField
        label="Course Description"
        variant="outlined"
        size="small"
      ></TextField>

      <InputLabel id="taskType">Assign Course</InputLabel>
      <Select
        className="mb-4"
        labelId="courseAssign"
        id="courseAssign"
        //   value={age}
        label="Assign Teacher"
        //   onChange={null}
        autoWidth
      >
        <MenuItem value={"Programming Fundamentals"}>
          Programming Fundamentals
        </MenuItem>
      </Select>
    </div>
  );
}

export default function CreateTasks({ func }) {
  axios.defaults.withCredentials = true;
  const [taskType, settaskType] = useState("");
  const [User, setUser] = useState("");
  const [Deadline, setDeadline] = useState("");
  const [Status, setStatus] = useState("");
  const [Avail, setAvail] = useState([]);
  const [RepoCourse, setRepoCourse] = useState([]);
  const [Course, setCourse] = useState("");
  useEffect(() => {
    getRepoCourse();
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/User/show/CAC");
    setAvail(response.data);
  };
  /*  const getCources = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([{ Name: "none" }, ...data]);
  };
*/

  const getRepoCourse = async () => {
    const response = await axios.get("http://localhost:4000/RepoCourse/show");
    setRepoCourse(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      taskType != "" &&
      User != "" &&
      Deadline != "" &&
      Status != "" &&
      Course != ""
    ) {
      const res = await axios.post("http://localhost:4000/Task/add", {
        taskType,
        User,
        Deadline,
        Status,
        Course,
      });
      settaskType("");
      setUser("");
      setDeadline("");
      setStatus("");
      setCourse("");
      func;
    } else {
      alert("Empty Field");
    }
  };
  return (
    <div className="container" style={{ width: "100%", padding: 20 }}>
      <Card variant="outlined">
        <Box
          className="row  p-3"
          component="form"
          onSubmit={handleSubmit}
          sx={{ minWidth: 275 }}
        >
          <h2>Create Task</h2>
          <CardContent>
            <div className="col">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Task Type</InputLabel>
                <Select
                  className="mb-4"
                  labelId="taskType"
                  id="taskType"
                  value={taskType}
                  label="Task Type"
                  onChange={(e) => settaskType(e.target.value)}
                  autoWidth
                >
                  <MenuItem value={"Add New Course"}>Add New Course</MenuItem>
                  <MenuItem value={"Create Course CDF"}>
                    Create Course CDF
                  </MenuItem>
                  <MenuItem value={"Create Syllabus"}>Create Syllabus</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Assign Teacher</InputLabel>
                <Select
                  className="mb-4"
                  labelId="taskType"
                  id="taskType"
                  value={User}
                  label="Assign Teacher"
                  onChange={(e) => setUser(e.target.value)}
                  autoWidth
                >
                  {Avail.map((a) => {
                    return <MenuItem value={a}>{a.Name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Assign Course</InputLabel>
                <Select
                  className="mb-4"
                  labelId="courseAssign"
                  id="courseAssign"
                  value={Course}
                  label="Assign Teacher"
                  onChange={(e) => setCourse(e.target.value)}
                  autoWidth
                >
                  {RepoCourse.map((a) => {
                    return (
                      <MenuItem value={a}>{a.Code + "  " + a.Name}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="col">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Status</InputLabel>
                <Select
                  className="mb-4"
                  labelId="taskType"
                  id="taskType"
                  label="Assign Teacher"
                  autoWidth
                  value={Status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value={"Assigned"}>Assigned</MenuItem>
                  <MenuItem value={"Revision"}>Revision</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <label>Deadline</label>
              <input
                value={Deadline}
                onChange={(e) => setDeadline(e.target.value)}
                style={{ width: "100%" }}
                type="datetime-local"
                placeholder="Deadline"
              ></input>
            </div>
          </CardContent>

          <div className="col">
            <CardActions>
              <Stack>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => {
                    TaskDetails;
                  }}
                >
                  Create Task
                </Button>
              </Stack>
            </CardActions>
          </div>
        </Box>
      </Card>
    </div>
  );
}
