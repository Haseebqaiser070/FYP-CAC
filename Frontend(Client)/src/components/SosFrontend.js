import React from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function SosFrontend() {
  const [Courses, setCourse] = useState([]);
  const [PreRequisites, setPreRequisites] = useState([]);
  return (
    <div style={{ fontFamily: "timesnewroman" }}>
      <div style={{ textAlign: "center" }}>
        <h3>
          <b>COMSATS University Islamabad</b>
        </h3>
        <h6>Registrar Secretariat, Academic Unit (PS)</h6>
        <p>*****</p>
      </div>
      <div>
        <form>
          <div className="flex row justify-content-end">
            <div className="col">
              <label>No. CUI-Reg/Notif- </label>
              <input type="text"></input>
            </div>
            <div className="col">
              <label>Dated </label>
              <input type="text"></input>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <h4>
            <b>NOTIFICATIONS</b>
          </h4>
          <h4>
            <b>Bachelor of Science in Software Engineering BS (SE)</b>
          </h4>
        </div>

        <div>
          <h4 style={{ textAlign: "center" }}>
            <b>Select Courses Corresponding to Categories</b>
          </h4>
          <div className="row card p-3">
            <div className="col">
              <h6>
                <b>Category Name</b>
              </h6>
            </div>
            <div class="col">
              <Stack spacing={3} sx={{ width: 500 }}>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  value={PreRequisites}
                  options={Courses}
                  getOptionLabel={(option) => option.Name}
                  defaultValue={null}
                  onChange={(e, val) => setPreRequisites(val)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="Select Courses"
                      placeholder="Select Courses"
                    />
                  )}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mb-4">
        <b>Computing Core Courses</b>
      </h6>
      <div class="ignore-css">
        <table className="flex table justify-content-center table-bordered">
          <thead>
            <th>S. No</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Credit Hours</th>
            <th>Pre-requisite (s)</th>
          </thead>
          <tbody>
            <td>1</td>
            <td>CSC-101</td>
            <td>Introduction to ICT</td>
            <td>3(3,0)</td>
            <td>none</td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
