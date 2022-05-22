import React from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import MeetingButton from "./MeetingButtons";

function Mbutton() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          availabilityPopup;
        }}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Set Availability
      </Button>
    </div>
  );
}

function availabilityPopup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div></div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default function FacultyMeeting() {
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
      renderCell: Mbutton,
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
    </div>
  );
}
