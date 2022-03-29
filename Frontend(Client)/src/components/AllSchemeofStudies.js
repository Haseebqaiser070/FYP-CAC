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
        // onClick={togglePopup}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Edit
      </Button>
    </div>
  );
}

export default function AllSchemeofStudies() {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "year",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "program",
      headerName: "Program",
      flex: 2,
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
    { id: 1, year: "2014-2018", program: "Computer Science" },
    { id: 2, year: "2014-2018", program: "Cyber Security" },
    { id: 3, year: "2014-2018", program: "Artificial Intilligence" },
  ];
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>All Scheme of Studies</b>
      </h1>

      <div className="d-flex justify-content-end mb-4">
        <Button variant="contained" color="primary" size="small" onClick={null}>
          <AiFillEdit style={{ marginRight: 10 }} />
          Create Scheme of Studies
        </Button>
      </div>

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
