import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import {
  Autocomplete,
  Card,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
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
function ActionButton() {
  return (
    <>
      <Tooltip title="View" placement="top-start">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16, padding: 10 }}
          //   onClick={}
        >
          <AiFillEye />
        </Button>
      </Tooltip>
      <Tooltip title="Edit" placement="top-start">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16, padding: 10 }}
          //   onClick={}
        >
          <AiFillEdit />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="top-start">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16, padding: 10 }}
          //   onClick={}
        >
          <AiFillDelete />
        </Button>
      </Tooltip>
    </>
  );
}
export default function SO_BTL_Level() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [so, setso] = useState("");
  const [btl, setbtl] = useState("");

  //   const [rows, setrows] = useState([]);

  const SOcolumns = [
    {
      field: "SO",
      headerName: "SO Description",
      width: 300,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 300,
      editable: false,
      renderCell: ActionButton,
    },
  ];

  const BTLcolumns = [
    {
      field: "BTL",
      headerName: "BTL LEVEL",
      width: 200,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 300,
      editable: false,
      renderCell: ActionButton,
    },
  ];

  const rows = [
    {
      id: 1,
      BTL: "Applying",
      SO: "Apply knowledge of computing fundamentals, knowledge of a computing specialization, and mathematics, science, and domain knowledge appropriate for the computing specialization to the abstraction and conceptualization of computing models from defined problems and requirements ",
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: 50,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Card style={{ padding: 50, borderRadius: 30 }}>
          <h1 className="py-4 my-2">
            <b>ADD SO AND BTL LEVELS</b>
          </h1>
          <div className="d-flex justify-content-end mb-4 pb-2">
            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{ marginTop: 16, marginRight: 15 }}
              onClick={handleOpen}
            >
              <AddIcon style={{ marginRight: "6px" }} />
              ADD NEW SO
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{ marginTop: 16 }}
              onClick={handleOpen1}
            >
              <AddIcon style={{ marginRight: "6px" }} />
              ADD NEW BTL Level
            </Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>

                <div>
                  <FormControl fullWidth size="medium">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="SO Description"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={so}
                      onChange={(e) => setso(e.target.value)}
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
                  Add SO
                </Button>
              </form>
            </Box>
          </Modal>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form>
                <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose1}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>

                <div>
                  <FormControl fullWidth size="medium">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="BTL Level"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={btl}
                      onChange={(e) => setbtl(e.target.value)}
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
                  Add BTL LEVEL
                </Button>
              </form>
            </Box>
          </Modal>
          <div className="row">
            <div className="col-md-6">
              <DataGrid
                style={{ height: "60vh", width: "100%" }}
                columns={SOcolumns}
                rows={rows}
                // getRowId={(Rows) => Rows._id}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
            <div className="col-md-6">
              <DataGrid
                style={{ height: "60vh", width: "100%" }}
                columns={BTLcolumns}
                rows={rows}
                // getRowId={(Rows) => Rows._id}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
