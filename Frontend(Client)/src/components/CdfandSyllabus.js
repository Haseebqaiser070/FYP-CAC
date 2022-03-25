import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import EditButton from "./EditButton";

export default function DataGridDemo() {
  const [Course, setCourse] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    const response = await axios.get("http://localhost:4000/Course/show");
    console.log(response.data);
    setCourse(response.data);
  };

  return (
    <div style={{ height: 700, width: "100%", padding: 20 }}>
      <h2 style={{ padding: 20 }}>Scheme of Studies</h2>
      <div style={{ padding: 10 }} className="d-flex justify-content-end">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={null}
        >
          <AiOutlineCloudDownload style={{ marginRight: 10 }} />
          Download All
        </Button>
      </div>

      <DataGrid
        getRowId={(row) => row._id}
        rows={Course}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

const columns = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "Code",
    headerName: "Course Code",
    editable: true,
    width: 100,
  },
  {
    field: "Name",
    headerName: "Course Name",
    width: 250,
    editable: true,
  },
  {
    field: "Action",
    headerName: "Action",
    width: 600,
    editable: false,
    renderCell: EditButton,
  },
];
