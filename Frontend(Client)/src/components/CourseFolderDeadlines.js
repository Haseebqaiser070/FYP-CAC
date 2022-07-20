import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  AiFillEye,
  AiFillEdit,
  AiOutlineCloudDownload,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Box, Modal } from "@mui/material";
import { textAlign } from "@mui/system";
import FacultyFolderStatus from "./CourseFolderStatus";

const style = {
  width: 500,
  bgcolor: "#fff",
  boxShadow: 1,
  p: 4,
};
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

export default function CourseFolderDeadlines() {
  const [open1, setOpen1] = useState(false);
  const handleClose1 = () => setOpen1(false);
  return (
    <div style={{ height: 950, width: "100%", padding: 20 }}>
      <h1>
        <b>Course Folder Deadlines</b>
      </h1>

      <div className="row">
        <div className="col" style={{ marginTop: 50 }}>
          <Box sx={style}>
            <h2>Round 1: </h2>
            <h4 style={{ color: "red", textAlign: "center", marginTop: 20 }}>
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
                style={{ marginLeft: 16 }}
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
          </Box>
        </div>

        <div className="col" style={{ marginTop: 50 }}>
          <Box sx={style}>
            <h2>Round 2: </h2>
            <h4 style={{ color: "red", textAlign: "center", marginTop: 20 }}>
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
                style={{ marginLeft: 16 }}
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
          </Box>
        </div>
      </div>
      <FacultyFolderStatus />
    </div>
  );
}
