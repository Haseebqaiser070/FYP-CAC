import React, { useEffect, useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import MeetingButton from "./MeetingButtons";

export default function Meeting() {
  const [rows, setRows] = useState([]);
  const handleSchedule = async () => {
    const { data } = await axios.post("http://localhost:4000/Meeting/create", {
      subject:
        "We are planning to schedule a meeting, please set your availability",
    });
    console.log(data);

    setRows([...rows, { subject: data.subject, id: data._id }]);
  };

  useEffect(() => {
    const getAll = async () => {
      var { data } = await axios.get("http://localhost:4000/Meeting/all");
      data = data.map((meeting) => {
        return {
          subject: meeting.subject,
          id: meeting._id,
        };
      });

      setRows(data);
      console.log(data);
      console.log(rows);
    };
    getAll();
  }, []);

  const columns = [
    /*     { field: "id", headerName: "ID" },
     */ {
      field: "subject",
      headerName: "Meeting Subject",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: MeetingButton,
    },
  ];

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1>All Meetings</h1>
      <div className="d-flex justify-content-end">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          style={{ marginRight: 15 }}
          onClick={handleSchedule}
        >
          Schedule Meeting
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
