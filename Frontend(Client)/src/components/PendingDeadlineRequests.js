import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Box } from "@mui/system";

const modalstyle = {
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

function incrementDeadline() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => setOpen(true)}
      >
        <AiOutlineFieldTime style={{ marginRight: 10 }} />
        Increase Due Date
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalstyle}>
          <div style={{ marginBottom: 10 }}>
            <label style={{ display: "block" }} for="title">
              <b>Select Date & Time</b>
            </label>
            <input
              name="time"
              // onChange={handleData}
              style={{ width: "100%" }}
              type="datetime-local"
              // value={data.time}
            ></input>

            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 16 }}
              // onClick={}
            >
              <AiOutlineFieldTime style={{ marginRight: 10 }} />
              Increase Due Date
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default function PendingDeadlineRequests() {
  const [Rows, setRows] = useState([]);

  const columns = [
    {
      field: "Faculty Member Name",
      headerName: "Faculty Member Name",
      flex: 1,
    },

    {
      field: "Evaluator Name",
      headerName: "Evaluator Name",
      flex: 1,
    },
    {
      field: "CurrentDeadline",
      headerName: "Current Deadline",
      flex: 1,
    },
    {
      field: "incrementDeadline",
      headerName: "Increase Deadline",
      flex: 1,
      editable: false,
      renderCell: incrementDeadline,
    },
  ];
  return (
    <div style={{ width: "100%", padding: 20 }}>
      <h1 className="mb-4 py-4">
        <b>Pending Deadline Requests</b>
      </h1>
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
  );
}
