import React from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function SosCreation() {
  const [Courses, setCourse] = useState([]);
  const [PreRequisites, setPreRequisites] = useState([]);
  return (
    <div>
      <div className="container">
        <div className="row card justify-content-center">
          <div className="card-header">
            <h3 className="text-center font-weight-light my-4">
              <b>Create Scheme of Studies</b>
            </h3>
          </div>
          <div>
            <h5 className="my-4">
              <b>Enter Details</b>
            </h5>

            <form>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="date"
                  onChange={null}
                  required
                />
                <label htmlFor="Date" className="form-label">
                  Notification Date
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  onChange={null}
                  required
                />
                <label htmlFor="name" className="form-label">
                  Meeting Name
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="date"
                  onChange={null}
                  required
                />
                <label htmlFor="MDate" className="form-label">
                  Meeting Date
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  onChange={null}
                  required
                />
                <label htmlFor="name" className="form-label">
                  Registrar Name
                </label>
              </div>
            </form>
          </div>
          <div>
            <h5 className="my-4">
              <b>Select Courses Corresponding to Categories</b>
            </h5>
            <div className="row card  p-3">
              <div>
                <h6>
                  <b>Category Name</b>
                </h6>
              </div>
              <div>
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
            <div className="py-4">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={null}
              >
                Create Scheme of Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
