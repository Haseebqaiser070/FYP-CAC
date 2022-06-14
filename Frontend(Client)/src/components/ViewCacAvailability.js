import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {
  AiFillEye,
  AiFillEdit,
  AiFillDelete,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MeetingForm from "./MeetingForm";
import Popup from "./AddCourceForm";
import axios from "axios";
import { Box, Card, Modal } from "@mui/material";

const columns = [
  {
    field: "cacMember",
    headerName: "CAC Member",
    flex: 1,
  },
  {
    field: "mon",
    headerName: "Monday",
    flex: 1,
  },
  {
    field: "tue",
    headerName: "Tuesday",
    flex: 1,
  },
  {
    field: "wed",
    headerName: "Wednesday",
    flex: 1,
  },
  {
    field: "thur",
    headerName: "Thusday",
    flex: 1,
  },
  {
    field: "fri",
    headerName: "Friday",
    flex: 1,
  },
  {
    field: "sat",
    headerName: "Saturday",
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
          <AiOutlineClockCircle style={{ marginRight: 10 }} />
          Send Reminder
        </Button>
      </>
    ),
  },
];

export default function () {
  const [rows, setRows] = React.useState([]);
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>CAC Members Availabilties</b>
      </h1>
      <div>
        <div className="d-flex justify-content-end mb-4">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: 16 }}
            //   onClick={handleOpen}
          >
            <AiOutlineClockCircle style={{ marginRight: 10 }} />
            Send Time Change Notification
          </Button>
        </div>
        <DataGrid
          style={{ height: 300, width: "100%" }}
          columns={columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
        <h3>
          <b>Ideal Time: </b>
        </h3>
      </div>
    </div>
  );
}
