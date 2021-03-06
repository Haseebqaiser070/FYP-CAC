import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import Popup from "./AddCourceForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function AllCategories() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleClose = () => {
    setDegree("Degree Program");
    setCategoryName("");
    setEnteredCourse([]);
    setOpen(false);
  };

  const [EnteredCourse, setEnteredCourse] = useState([]);
  const [Courses, setCourse] = useState([]);
  const [CategoryName, setCategoryName] = useState("");
  const [Programdb, setProgramdb] = useState([]);
  const [Degree, setDegree] = useState("Degree Program");
  const [Rows, setRows] = useState([]);
  const [Category, setCategory] = useState([]);

  const getPrograms = async () => {
    const res = await axios.get("http://localhost:4000/Program/show");
    setProgramdb(res.data);
  };
  function ActionButton(props) {
    const { row } = props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          //  onClick={Update(Rows._id)}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Edit
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => handleDelete(row._id)}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Delete
        </Button>
      </div>
    );
  }
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/Category/${id}`);
    getRows();
  };
  const Update = async (id) => {
    const res = await axios.get(`http://localhost:4000/Category/${id}`);
    const data = res.data;
  };

  useEffect(() => {
    getData();
    getPrograms();
    getRows();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([...data]);
  };
  const getRows = async () => {
    const res = await axios.get("http://localhost:4000/Category/show");
    const data = await res.data;
    console.log(data);
    setRows([...data]);
  };

  const columns = [
    {
      field: "Degree",
      headerName: "Program",
      flex: 1,
      valueGetter: (params) => {
        return params?.row?.Degree?.Degree + " " + params?.row?.Degree?.Program;
      },
    },
    {
      field: "CategoryName",
      headerName: "Category",
      flex: 1,
    },

    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: ActionButton,
    },
  ];
  const onSubmit = async (e) => {
    e.preventDefault();
    if (Degree != "Degree Program" && CategoryName != "") {
      await axios.post("http://localhost:4000/Category/add", {
        Degree,
        CategoryName,
        EnteredCourse,
      });
      setDegree("Degree Program");
      setCategoryName("");
      setEnteredCourse([]);
      getRows();
    } else {
      alert("empty values");
    }
  };

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>Course Categories</b>
      </h1>

      <div className="d-flex justify-content-end mb-4">
        <Button
          style={{ marginRight: 15 }}
          variant="contained"
          color="primary"
          size="small"
          onClick={handleOpen1}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Categorize Courses
        </Button>

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div>
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Select Category</InputLabel>
                <Select
                  className="mb-4"
                  labelId="course-category"
                  name="course-category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  value={Category}
                  label="Categories"
                  autoWidth
                >
                  {Rows.map((i) => {
                    return <MenuItem value={i._id}>{i.CategoryName}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="form-floating mb-3">
              <Autocomplete
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
                    label="Enter Courses"
                    placeholder="Enter Courses"
                  />
                )}
              />
            </div>

            <Button
              style={{ marginRight: 15 }}
              variant="contained"
              color="primary"
              size="small"
              // onClick={handleOpen1}
            >
              <AiFillEdit style={{ marginRight: 10 }} />
              Submit
            </Button>
          </Box>
        </Modal>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleOpen}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Add Categories
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="container">
              <div className="row card justify-content-center">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">
                    Add Category
                  </h3>
                </div>
                <div className="card-body">
                  <form onSubmit={onSubmit}>
                    <div className="form-floating mb-3">
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
                              {p.Degree} {p.Program}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputName"
                        type="text"
                        value={CategoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        required
                      />
                      <label htmlFor="Email" className="form-label">
                        Category Name
                      </label>
                    </div>
                    <Button
                      style={{ marginRight: 15 }}
                      variant="contained"
                      color="primary"
                      size="small"
                      type="submit"
                    >
                      Add Category
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>

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
    </div>
  );
}
