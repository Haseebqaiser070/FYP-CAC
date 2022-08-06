import React, { useState, useEffect } from "react";
import "./css/styles.css";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

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

function setPrerequisites() {}

export default function CreateSOS() {
  const [Rows, setRows] = useState([]);
  const [Year, setYear] = useState("");
  const [Categories, setCategories] = useState([]);
  const [AssignCategories, setAssignCategories] = useState([]);
  const [EnteredCourse, setEnteredCourse] = useState([]);
  const [Courses, setCourse] = useState([]);

  const [Prerequisite, setPrerequisites] = useState([]);
  const [AssignPrerequisite, setAssignPrerequisite] = useState([]);

  const [coursesList, setCoursesList] = useState([]);
  const [Note, setNote] = useState("");

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const getCategories = async () => {
    const res = await axios.get("http://localhost:4000/Category/show");
    const data = await res.data;
    console.log(data);
    setCategories([...data]);
  };
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([...data]);
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "S",
      headerName: "S#",
      flex: 1,
    },
    {
      field: "CourseCode",
      headerName: "Course Code",
      flex: 1,
    },
    {
      field: "CourseTitle",
      headerName: "Course Title",
      flex: 3,
    },
    {
      field: "CreditHour",
      headerName: "Credit Hour",
      flex: 1,
    },

    {
      field: "Prerequisites",
      headerName: "Pre-requisite(s)",
      flex: 1,

      renderCell: () => (
        <>
          <Button
            type="button"
            variant="contained"
            color="primary"
            size="small"
            onClick={() => setOpen(true)}
          >
            Add/Edit
          </Button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box component="form" sx={style}>
              <Autocomplete
                className="mb-4"
                multiple
                id="tags-standard"
                value={AssignPrerequisite}
                options={Prerequisite}
                getOptionLabel={(option) => option.Name}
                defaultValue={null}
                onChange={(e, val) => setAssignPrerequisite(val)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Set Prerequisite"
                    placeholder="Set Prerequisite"
                    size="small"
                  />
                )}
              />
              <Button
                fullWidth
                type="button"
                variant="contained"
                color="primary"
                size="medium"
                // onClick={}
              >
                Add
              </Button>
            </Box>
          </Modal>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      S: "1",
      CourseCode: "CSC-101",
      CourseTitle: "Intro to ICT",
      CreditHour: "3(2,1)",
    },
  ];

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1>Create SOS</h1>
      <FormControl fullWidth size="small">
        <TextField
          className="mb-4"
          id="outlined-basic"
          label="SOS Year"
          variant="outlined"
          size="medium"
          fullWidth
          value={Year}
          onChange={(e) => setYear(e.target.value)}
        />
      </FormControl>
      <div className="row">
        <h4 className="mb-3">Add Categories</h4>
        <div className="col-10">
          <Autocomplete
            multiple
            id="tags-standard"
            className="mb-4"
            value={AssignCategories}
            options={Categories}
            getOptionLabel={(option) => option.Name}
            defaultValue={null}
            onChange={(e, val) => setAssignCategories(val)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Assign Categories"
                placeholder="Assign Categories"
                size="small"
              />
            )}
          />
        </div>
        <div className="col-2">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="medium"
            // onClick={() => setOpenProgram(true)}
          >
            Add Categories
          </Button>
        </div>
      </div>
      <div className="my-3">
        <h4 className="mb-3">Category Name</h4>
        <div className="row">
          <div className="col-10">
            <Autocomplete
              style={{ marginBottom: 35 }}
              multiple
              variant="outlined"
              id="tags-standard"
              value={EnteredCourse}
              options={Courses}
              size="small"
              getOptionLabel={(option) => option.Name}
              defaultValue={null}
              onChange={(e, val) => setEnteredCourse(val)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Select Courses"
                  placeholder="Select Courses"
                />
              )}
            />
          </div>
          <div className="col-2">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              // onClick={() => setOpenProgram(true)}
            >
              Assign Cources
            </Button>
          </div>
        </div>
      </div>

      <div style={{ height: 200, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
        <h4 className="mt-4">Note</h4>
        <FormControl fullWidth size="small">
          <TextField
            className="mb-4"
            id="outlined-basic"
            label="Note"
            variant="outlined"
            size="medium"
            fullWidth
            value={Note}
            onChange={(e) => setNote(e.target.value)}
          />
        </FormControl>
        <Button
          fullWidth
          className="my-4 mb-4"
          variant="contained"
          color="primary"
          size="large"
          // onClick={() => setOpenProgram(true)}
        >
          Create SOS
        </Button>
      </div>
      <div></div>
    </div>
  );
}
