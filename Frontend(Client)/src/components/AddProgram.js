import React, { useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Autocomplete, MenuItem, Modal, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

const columns = [
  {
    field: "degreeLevel",
    headerName: "Degree Level",
    flex: 1,
  },
  {
    field: "program",
    headerName: "Program Name",
    flex: 1,
  },
  {
    field: "Action",
    headerName: "Action",
    flex: 1,
    editable: false,
    renderCell: () => (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          // onClick={() => setOpen(true)}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          // onClick={() => setOpen(true)}
        >
          <AiFillDelete style={{ marginRight: 10 }} />
          Delete
        </Button>
      </>
    ),
  },
];

export default function AddProgram() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1>
        <b>Add Degree Program</b>
      </h1>
      <div className="d-flex justify-content-end mb-4">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginTop: 16 }}
          onClick={handleOpen}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Add New Program
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="col">
            <FormControl fullWidth size="small">
              <InputLabel id="taskType">Assign Course</InputLabel>
              <Select
                className="mb-4"
                labelId="courseAssign"
                id="courseAssign"
                value={null}
                label="Assign Teacher"
                onChange={(e) => setCourse(e.target.value)}
                autoWidth
              >
                <MenuItem value={"BS"}>BS</MenuItem>
                <MenuItem value={"MS"}>MS</MenuItem>
                <MenuItem value={"p.hd"}>P.hd</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col">
            <TextField
              className="mb-4"
              id="outlined-basic"
              label="Program Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: 16 }}
            //   onClick={handleOpen}
          >
            <AiFillEdit style={{ marginRight: 10 }} />
            Add Program
          </Button>
        </Box>
      </Modal>
      <div>
        <DataGrid
          style={{ height: 300, width: "100%" }}
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
