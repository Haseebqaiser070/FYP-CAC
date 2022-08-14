import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Autocomplete from "@mui/material/Autocomplete";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  TextField,
} from "@mui/material";
import Select from "@mui/material/Select";

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

export default function FacultyMembers() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Rows, setRows] = useState([]);
  const [Courses, setCourse] = useState([]);
  const [AssignCources, setAssignCourses] = useState([]);
  const [Degree, setDegree] = useState("Degree Program");
  const [Programdb, setProgramdb] = useState([]);
  const [DegreeLevel, setDegreeLevel] = useState("");
  const [Section, setSection] = useState("");

  const [obj, setobj] = useState([
    {
      DegreeLevel: "",
      Degree: "",
      AssignCources: "",
    },
  ]);

  const getPrograms = async () => {
    const res = await axios.get("http://localhost:4000/Program/show");
    setProgramdb(res.data);
  };

  console.log(Rows);
  useEffect(() => {
    getPrograms();
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/User/show/Faculty");
    setRows(response.data);
  };

  const columns = [
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 2,
      editable: false,
      renderCell: () => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => setOpen(true)}
          >
            <AiFillEdit style={{ marginRight: 10 }} />
            Assign Course
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            <AiFillEdit style={{ marginRight: 10 }} />
            Set as Evaluator
          </Button>
        </>
      ),
    },
  ];
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>Faculty Members</b>
      </h1>
      <div>
        <DataGrid
          style={{ height: 400, width: "100%" }}
          columns={columns}
          getRowId={(Rows) => Rows._id}
          rows={Rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style}>
          {obj.map((e, index) => {
            return (
              <>
                <h4>Assign Course {index + 1}</h4>
                {obj.length > 1 && (
                  <FormControl>
                    <Button
                      className="mb-3"
                      variant="contained"
                      color="primary"
                      size="medium"
                      onClick={() => {
                        const clone = [...obj];
                        const a = clone.splice(index, 1);
                        console.log("aaaaaaaaaaaaa", a, "cloneeeeeee", clone);
                        setobj([...clone]);
                      }}
                    >
                      remove
                    </Button>
                  </FormControl>
                )}

                <div className="form-floating mb-4">
                  <select
                    class="form-select"
                    onChange={(e) => setDegree(e.target.value)}
                  >
                    <option value={Degree} selected disabled hidden>
                      {Degree}
                    </option>
                    {Programdb.map((p) => {
                      return (
                        <option value={p._id}>
                          {p.PDegree} {p.Program}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="row">
                  <div className="col">
                    <Autocomplete
                      multiple
                      id="tags-standard"
                      className="mb-4"
                      value={AssignCources}
                      options={Courses}
                      getOptionLabel={(option) => option.Name}
                      defaultValue={null}
                      onChange={(e, val) => setAssignCourses(val)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          label="Assign Cources"
                          placeholder="Assign Cources"
                        />
                      )}
                    />
                  </div>
                  <div className="col form-floating mb-3">
                    <input
                      className="form-control"
                      id="inputName"
                      type="text"
                      value={obj[index].Section}
                      onChange={(e) => {
                        const clone = [...obj];
                        clone[index].Section = e.target.value;
                        setobj([...clone]);
                      }}
                      required
                    />
                    <label htmlFor="text" className="form-label">
                      Section
                    </label>
                  </div>
                </div>
              </>
            );
          })}
          <div className="d-flex justify-content-center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              width="100"
              style={{ marginTop: 10, marginRight: 20 }}
              onClick={() => {
                setobj([
                  ...obj,
                  {
                    DegreeLevel: "",
                    Degree: "",
                    AssignCources: "",
                  },
                ]);
              }}
            >
              Add another Course
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              width="100"
              style={{ marginTop: 10 }}
            >
              Assign Course
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
