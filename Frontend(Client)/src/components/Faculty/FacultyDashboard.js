import React, { useState, useEffect } from "react";
import "../css/styles.css";
import logo from "./comsats_logo.png";
import { DataGrid } from "@mui/x-data-grid";

export default function FacultyDashboard() {
  const [Rows, setRows] = useState([]);
  const columns = [
    {
      field: "quiz1",
      headerName: "Quiz 1",
      flex: 1,
    },
    {
      field: "quiz2",
      headerName: "Quiz 2",
      flex: 1,
    },
    {
      field: "quiz3",
      headerName: "Quiz 3",
      flex: 1,
    },
    {
      field: "quiz4",
      headerName: "Quiz 4",
      flex: 1,
    },
    {
      field: "midterm",
      headerName: "Mid Term",
      flex: 1,
    },
    {
      field: "terminal",
      headerName: "Terminal",
      flex: 1,
    },
  ];
  return (
    <div style={{ height: 760, width: "100%", padding: 30 }}>
      <div d-flex justify-content-center>
        <div className="row  align-items-center">
          <div className="col-2">
            <img src={logo} alt="Logo" height={130} width={130} />
          </div>
          <div className="col-10">
            <h2>
              <b>Comsats University Islamabad</b>
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h4 style={{ textAlign: "left" }}>
          <b>Name: </b>Rizwan rashid
        </h4>
        <h4 style={{ textAlign: "left" }}>
          <b>Course Assigned: </b>Intro to ICT
        </h4>
      </div>
      {/* <div>
        <h2 style={{ textAlign: "left", marginTop: 20 }}>Deadlines</h2>
        <DataGrid
          style={{ height: 400, width: "100%" }}
          columns={columns}
          getRowId={(Rows) => Rows._id}
          rows={Rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div> */}
    </div>
  );
}
