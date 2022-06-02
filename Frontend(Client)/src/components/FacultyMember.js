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
      <Autocomplete
        multiple
        id="tags-standard"
        // options={userRole}
        // getOptionLabel={(option) => option}
        // defaultValue={[...Usermember.Roles]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Assign Course"
            placeholder="Assign Course"
            size="small"
          />
        )}
      />
    </div>
  );
}

export default function FacultyMembers() {
  const [Rows, setRows] = useState([]);
  const columns = [
    {
      field: "teacherName",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },

    {
      field: "assignCourse",
      headerName: "Assign Course",
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
        <b>Faculty Members</b>
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
