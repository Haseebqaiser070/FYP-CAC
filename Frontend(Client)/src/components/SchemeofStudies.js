import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import EditButton from "./EditButton";

export default function DataGridDemo() {
  return (
    <div style={{ height: 700, width: "100%", padding: 20 }}>
      <h2 style={{ padding: 20 }}>Scheme of Studies</h2>
      <div style={{ padding: 10 }} class="d-flex justify-content-end">
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
        rows={rows}
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
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "CourseCode",
    headerName: "Course Code",
    width: 150,
    editable: true,
  },
  {
    field: "CourseName",
    headerName: "Course Name",
    width: 350,
    editable: true,
  },
  {
    field: "Action",
    headerName: "Action",
    width: 400,
    editable: true,
    renderCell: EditButton,
  },
];

const rows = [
  { id: 1, CourseCode: "CSC-101", CourseName: "Programming Fundamentals" },
  { id: 2, CourseCode: "CSC-101", CourseName: "Programming Fundamentals" },
  {
    id: 3,
    CourseCode: "CSC-101",
    CourseName: "Programming Fundamentals",
  },
];
