import React from "react";
import "./css/styles.css";
import Button from "@mui/material/Button";
import Popup from "./AddCourceForm";

export default function CourseFolder() {
  const [isOpen, setIsOpen] = React.useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h2 style={{ marginBottom: 30 }}>Course Folder Maintainence</h2>

      {isOpen && (
        <Popup
          content={
            <>
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

                <div class="d-grid">
                  <a class="btn btn-primary btn-block" href="login.html">
                    SUBMIT
                  </a>
                </div>
              </form>
            </>
          }
          handleClose={togglePopup}
        />
      )}

      <table class="table tablecourse">
        <tbody>
          <tr>
            <th>Quizzes</th>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={togglePopup}
              >
                Quiz 1
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz2"
                type="button"
                onClick={togglePopup}
              >
                Quiz 2
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz3"
                type="button"
                onClick={togglePopup}
              >
                Quiz 3
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz4"
                type="button"
                onClick={togglePopup}
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
                onClick={togglePopup}
              >
                Assignment 1
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={togglePopup}
              >
                Assignment 2
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={togglePopup}
              >
                Assignment 3
              </button>
            </td>
            <td>
              <button
                class="btn btn-primary"
                id="quiz1"
                type="button"
                onClick={togglePopup}
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
                onClick={togglePopup}
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
                onClick={togglePopup}
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
