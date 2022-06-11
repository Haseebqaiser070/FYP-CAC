import React, { useState, useEffect } from "react";
import "../css/styles.css";
import logo from "./comsats_logo.png";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
export default function CACDashboard() {
  const [Rows, setRows] = useState("");

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    const res = await axios.get(`http://localhost:4000/Task/getUser`, {
      withCredentials: true,
    });
    setRows(res.data);
  };
  const columns = [
    {
      field: "taskType",
      headerName: "Task",
      flex: 1,
    },

    {
      field: "Deadline",
      headerName: "Deadline",
      flex: 1,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "Course",
      headerName: "Course",
      valueGetter: (params) => params?.row?.Course?.Name,
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

      <div className="row" style={{ padding: 20 }}>
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
    </div>
  );
}
