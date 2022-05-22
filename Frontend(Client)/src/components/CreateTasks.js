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

export default function CreateTasks() {
  const [taskType, settaskType] = useState("");
  const [teacher, setTeacher] = useState("");
  const [deadline, setDeadline] = useState("");
  return (
    <div className="container" style={{ width: "100%", padding: 20 }}>
      <Card variant="outlined">
        <Box className="row  p-3" sx={{ minWidth: 275 }}>
          <h2>Create Task</h2>
          <CardContent>
            <div className="col">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Task Type</InputLabel>
                <Select
                  className="mb-4"
                  labelId="taskType"
                  id="taskType"
                  //   value={age}
                  label="Task Type"
                  //   onChange={null}
                  autoWidth
                >
                  <MenuItem value={"Add New Course"}>Add New Course</MenuItem>
                  <MenuItem value={"Create Course CDF"}>
                    Create Course CDF
                  </MenuItem>
                  <MenuItem value={"Create Course CDF"}>
                    Create Syllabus
                  </MenuItem>
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
                  //   value={age}
                  label="Assign Teacher"
                  //   onChange={null}
                  autoWidth
                >
                  <MenuItem value={"Tanveer Ahmed"}>Tanveer Ahmed</MenuItem>
                  <MenuItem value={"Rizwan Rashid"}>Rizwan Rashid</MenuItem>
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
                  //   value={age}
                  label="Assign Teacher"
                  //   onChange={null}
                  autoWidth
                >
                  <MenuItem value={"Assigned"}>Assigned</MenuItem>
                  <MenuItem value={"Revision"}>Revision</MenuItem>
                  <MenuItem value={"Completed"}>Completed</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div>
              <label>Deadline</label>
              <input
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
