import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Autocomplete, MenuItem, Modal, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

export default function AddProgram() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const [up, setup] = useState(false);
  useEffect(() => {
    getRows();
  }, []);
  const getRows = async () => {
    const res = await axios.get("http://localhost:4000/Program/show");
    setRows(res.data);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setup(false);
    setOpen(false);
    setDegree("");
    setProgram("");
  };
  const [id, setid] = useState("");

  const [Degree, setDegree] = useState("");
  const [Program, setProgram] = useState("");
  const Update = async () => {
    setup(true);
    const res = await axios.get(`http://localhost:4000/Program/${id}`);
    setDegree(res.data.Degree);
    setProgram(res.data.Program);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here");
    if (!up && Degree != "" && Program != "") {
      const res = await axios.post("http://localhost:4000/Program/add", {
        Degree,
        Program,
      });
      if (res.data == "Already Exists") alert("Already Exists");
      else {
        setDegree("");
        setProgram("");
        getRows();
      }
    } else if (up && Degree != "" && Program != "") {
      const res = await axios.put(`http://localhost:4000/Program/${id}`, {
        Degree,
        Program,
      });
      if (res.data == "Already Exists") alert("Already Exists");
      else {
        setDegree("");
        setProgram("");
        setup(false);
        getRows();
      }
    } else {
      alert("Empty Field");
    }
  };

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
      field: "Degree",
      headerName: "Degree Level",
      flex: 1,
    },
    {
      field: "Program",
      headerName: "Program Name",
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

  function ActionButton({ row }) {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            setid(row._id);
            Update();
          }}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Edit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={async () => {
            await axios.delete(`http://localhost:4000/Program/${row._id}`);
            getRows();
          }}
        >
          <AiFillDelete style={{ marginRight: 10 }} />
          Delete
        </Button>
      </>
    );
  }

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
          <AddIcon style={{ marginRight: "6px" }} />
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
          <form onSubmit={handleSubmit}>
            <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
              <CloseIcon
                onClick={handleClose}
                style={{ cursor: "pointer", color: "gray" }}
              />
            </Box>
            <div className="col">
              {!up ? (
                <FormControl fullWidth size="small">
                  <InputLabel id="taskType">Select Degree</InputLabel>
                  <Select
                    className="mb-4"
                    labelId="selectdegree"
                    id="selectdegree"
                    value={Degree}
                    label="Select Degree"
                    onChange={(e) => setDegree(e.target.value)}
                    autoWidth
                  >
                    <MenuItem value={"BS"}>BS</MenuItem>
                    <MenuItem value={"MS"}>MS</MenuItem>
                    <MenuItem value={"p.hd"}>P.hd</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <FormControl fullWidth size="small">
                  <InputLabel id="taskType">Select Degree</InputLabel>
                  <Select
                    className="mb-4"
                    labelId="selectdegree"
                    id="selectdegree"
                    value={Degree}
                    label="Select Degree"
                    onChange={(e) => setDegree(e.target.value)}
                    autoWidth
                  >
                    <MenuItem selected hidden value={Degree}>
                      {Degree}
                    </MenuItem>
                    <MenuItem value={"BS"}>BS</MenuItem>
                    <MenuItem value={"MS"}>MS</MenuItem>
                    <MenuItem value={"p.hd"}>P.hd</MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>
            <div className="col">
              <FormControl fullWidth size="small">
                <TextField
                  className="mb-4"
                  id="outlined-basic"
                  label="Program Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={Program}
                  onChange={(e) => setProgram(e.target.value)}
                />
              </FormControl>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
              style={{ marginTop: 16 }}
            >
              <AiFillEdit style={{ marginRight: 10 }} />
              Add Program
            </Button>
          </form>
        </Box>
      </Modal>
      <div>
        <DataGrid
          style={{ height: "70vh", width: "100%" }}
          columns={columns}
          rows={rows}
          getRowId={(Rows) => Rows._id}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
