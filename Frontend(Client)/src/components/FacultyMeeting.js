import React, { useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineClockCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Modal } from "@mui/material";
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
};

export default function FacultyMeeting() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "subject",
      headerName: "Meeting Subject",
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
            onClick={() => setOpen(true)}
          >
            <AiOutlineClockCircle style={{ marginRight: 10 }} />
            Set Availability
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            // onClick={() => }
          >
            <AiOutlineUsergroupAdd style={{ marginRight: 10 }} />
            View Meeting
          </Button>
        </>
      ),
    },
  ];
  const rows = [
    { id: 1, subject: "Snow" },
    { id: 2, subject: "Snow" },
    { id: 3, subject: "Snow" },
  ];
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1>All Meetings</h1>

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div className="form-group">
              <label for="appt">Monday:</label>
              <input type="time" className="form-control"></input>
            </div>
            <div className="form-group">
              <label for="appt">Tuesday:</label>
              <input type="time" className="form-control"></input>
            </div>
            <div className="form-group">
              <label for="appt">Wednesday:</label>
              <input type="time" className="form-control"></input>
            </div>
            <div className="form-group">
              <label for="appt">Thursday:</label>
              <input type="time" className="form-control"></input>
            </div>
            <div className="form-group">
              <label for="appt">Friday:</label>
              <input type="time" className="form-control"></input>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 16 }}
              // onClick={}
            >
              <AiOutlineClockCircle style={{ marginRight: 10 }} />
              Submit
            </Button>
          </>
        </Box>
      </Modal>
    </div>
  );
}
