import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

function ActionButtons(props) {
  const navigate = useNavigate();
  const { row } = props;
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        View
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={null}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Edit
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={null}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Lock
      </Button>
    </div>
  );
}

export default function OngoingTasks() {
  const [Rows, setRows] = useState([]);
  const columns = [
    {
      field: "tittle",
      headerName: "Tittle",
      flex: 1,
    },
    {
      field: "teacherAssigned",
      headerName: "Teacher Assigned",
      flex: 1,
    },
    {
      field: "deadline",
      headerName: "Deadline",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: ActionButtons,
    },
  ];
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>Ongoing Tasks</b>
      </h1>
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
