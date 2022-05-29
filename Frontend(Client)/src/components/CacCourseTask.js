import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { AiOutlineCheckSquare, AiFillEdit } from "react-icons/ai";

function ActionButtons(props) {
  const navigate = useNavigate();
  const { row } = props;
  console.log("rwo", row);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          navigate(
            `/CAC/CourseCreation/${row.Code}`,
            { state: { row } },
            { replace: true }
          );
        }}
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
        <AiOutlineCheckSquare style={{ marginRight: 10 }} />
        Submit
      </Button>
    </div>
  );
}

export default function CacCourseTask() {
  const [Rows, setRows] = useState([]);
  useEffect(() => {
    getRepoCourse();
  }, []);

  const getRepoCourse = async () => {
    const response = await axios.get("http://localhost:4000/CoursesCreate/get");
    console.log(response.data);
    setRows(response.data);
  };

  const columns = [
    {
      field: "Code",
      headerName: "Code",
      flex: 1,
    },

    {
      field: "Name",
      headerName: "Name",
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
    <div className="container" style={{ width: "100%", padding: 30 }}>
      <h1 className="mb-4">
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
