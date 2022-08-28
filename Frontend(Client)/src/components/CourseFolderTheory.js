import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Button from "@mui/material/Button";
import {
  Autocomplete,
  Box,
  Card,
  FormControlLabel,
  MenuItem,
  Modal,
  Switch,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { AiFillEdit, AiOutlineFieldTime } from "react-icons/ai";

const modalstyle = {
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

export default function CourseFolderTheory() {
  const [Quiz1, setQuiz1] = useState("");
  const [Assignments1, setAssignments1] = useState("");
  const [Quiz2, setQuiz2] = useState("");
  const [Assignments2, setAssignments2] = useState("");
  const [open1, setOpen1] = useState(false);
  const handleClose1 = () => setOpen1(false);

  return (
    <div
      style={{
        width: "100%",
        padding: 50,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 50, borderRadius: 30 }}>
        <h1 className="mb-4 pb-4">
          <b>Define Course Folder Theory</b>
        </h1>
        <FormControlLabel
          className="py-4"
          control={<Switch defaultChecked />}
          label="MidTerm"
        />
        <div className="row">
          <div className="col">
            <h2 className="my-4" style={{ textAlign: "left" }}>
              Round 1
            </h2>
            <FormControl fullWidth size="small">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Enter no of Quizes"
                variant="outlined"
                size="small"
                fullWidth
                value={Quiz1}
                onChange={(e) => setQuiz1(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth size="small">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Enter no of Assignments"
                variant="outlined"
                size="small"
                fullWidth
                value={Assignments1}
                onChange={(e) => setAssignments1(e.target.value)}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 5 }}
              //   onClick={handleOpen}
            >
              Submit
            </Button>
            <div style={{ marginTop: 30 }}>
              <h4 style={{ color: "red", marginTop: 20 }}>
                Current Deadline: 07/13/2022 04:38 PM
              </h4>
              <div
                style={{ margin: 0, Padding: 0 }}
                className="flex justify-content-center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => setOpen1(true)}
                >
                  <AiOutlineFieldTime style={{ marginRight: 10 }} />
                  Add Due Date
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 16 }}
                  onClick={() => setOpen1(true)}
                >
                  <AiFillEdit style={{ marginRight: 10 }} />
                  Edit Due Date
                </Button>
              </div>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalstyle}>
                  <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block" }} for="title">
                      <b>Select Date & Time</b>
                    </label>
                    <input
                      name="time"
                      // onChange={handleData}
                      style={{ width: "100%" }}
                      type="datetime-local"
                      // value={data.time}
                    ></input>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 16 }}
                      // onClick={}
                    >
                      <AiOutlineFieldTime style={{ marginRight: 10 }} />
                      Add Due Date
                    </Button>
                  </div>
                </Box>
              </Modal>

              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalstyle}>
                  <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block" }} for="title">
                      <b>Select Date & Time</b>
                    </label>
                    <input
                      name="time"
                      // onChange={handleData}
                      style={{ width: "100%" }}
                      type="datetime-local"
                      // value={data.time}
                    ></input>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 16 }}
                      // onClick={}
                    >
                      <AiFillEdit style={{ marginRight: 10 }} />
                      Edit Due Date
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="col">
            <h2 className="my-4" style={{ textAlign: "left" }}>
              Round 2
            </h2>
            <FormControl fullWidth size="small">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Enter no of Quizes"
                variant="outlined"
                size="small"
                fullWidth
                value={Quiz2}
                onChange={(e) => setQuiz2(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth size="small">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Enter no of Assignments"
                variant="outlined"
                size="small"
                fullWidth
                value={Assignments2}
                onChange={(e) => setAssignments2(e.target.value)}
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 5 }}
              //   onClick={handleOpen}
            >
              Submit
            </Button>
            <div style={{ marginTop: 30 }}>
              <h4 style={{ color: "red", marginTop: 20 }}>
                Current Deadline: 07/13/2022 04:38 PM
              </h4>
              <div
                style={{ margin: 0, Padding: 0 }}
                className="flex justify-content-center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => setOpen1(true)}
                >
                  <AiOutlineFieldTime style={{ marginRight: 10 }} />
                  Add Due Date
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: 16 }}
                  onClick={() => setOpen1(true)}
                >
                  <AiFillEdit style={{ marginRight: 10 }} />
                  Edit Due Date
                </Button>
              </div>
              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalstyle}>
                  <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block" }} for="title">
                      <b>Select Date & Time</b>
                    </label>
                    <input
                      name="time"
                      // onChange={handleData}
                      style={{ width: "100%" }}
                      type="datetime-local"
                      // value={data.time}
                    ></input>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 16 }}
                      // onClick={}
                    >
                      <AiOutlineFieldTime style={{ marginRight: 10 }} />
                      Add Due Date
                    </Button>
                  </div>
                </Box>
              </Modal>

              <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={modalstyle}>
                  <div style={{ marginBottom: 10 }}>
                    <label style={{ display: "block" }} for="title">
                      <b>Select Date & Time</b>
                    </label>
                    <input
                      name="time"
                      // onChange={handleData}
                      style={{ width: "100%" }}
                      type="datetime-local"
                      // value={data.time}
                    ></input>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginTop: 16 }}
                      // onClick={}
                    >
                      <AiFillEdit style={{ marginRight: 10 }} />
                      Edit Due Date
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
