import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
        Add Course
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={null}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Submit
      </Button>
    </div>
  );
}

export default function CacCourseTask() {
  const [Rows, setRows] = useState([]);
  const columns = [
    {
      field: "tittle",
      headerName: "Tittle",
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
    <div className="container" style={{ width: "100%", padding: 20 }}>
      <h1>
        <b>Courses Assigned</b>
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
