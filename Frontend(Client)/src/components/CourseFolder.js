import React, { useState } from "react";
import "./css/styles.css";
import Button from "@mui/material/Button";
import Popup from "./AddCourceForm";
import { Box, Card, Modal } from "@mui/material";

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

export default function CourseFolder() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h1 style={{ marginBottom: 30 }}>Course Folder Maintainence</h1>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Best</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Average</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Worst</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Question Paper</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Solution</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="d-grid">
              <a class="btn btn-primary btn-block" href="login.html">
                SUBMIT
              </a>
            </div>
          </form>
        </Box>
      </Modal>

      <table class=" table tablecourse">
        <tbody>
          <tr>
            <th>Quizzes</th>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Quiz 1
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz2"
                type="button"
                onClick={handleOpen}
              >
                Quiz 2
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz3"
                type="button"
                onClick={handleOpen}
              >
                Quiz 3
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz4"
                type="button"
                onClick={handleOpen}
              >
                Quiz 4
              </button>
            </td>
          </tr>

          <tr>
            <th>Assignments</th>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Assignment 1
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Assignment 2
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Assignment 3
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Assignment 4
              </button>
            </td>
          </tr>

          <tr>
            <th>Midterm Exam</th>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Midterm Exam
              </button>
            </td>
          </tr>

          <tr>
            <th>Terminal Exam</th>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={handleOpen}
              >
                Terminal Exam
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
