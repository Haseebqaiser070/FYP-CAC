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
  const handleClose = () => setOpen(false);

  const [PreRequisites, setPreRequisites] = useState([]);
  const [Courses, setCourse] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([{ Name: "none" }, ...data]);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },

    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: null,
    },
  ];
  const rows = [
    { id: 1, name: "2014-2018" },
    { id: 2, name: "2014-2018" },
    { id: 3, name: "2014-2018" },
  ];

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
                  <form onSubmit={null}>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="inputName"
                        type="text"
                        onChange={null}
                        required
                      />
                      <label htmlFor="Email" className="form-label">
                        Category Name
                      </label>
                    </div>

                    <div className="form-floating mb-3">
                      <Stack spacing={3} sx={{ width: 300 }}>
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
                              label="Pre-Requisites"
                              placeholder="Pre-Requisites"
                            />
                          )}
                        />
                      </Stack>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button type="Submit" className="btn btn-primary">
                        Add Category
                      </button>
                    </div>
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
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
