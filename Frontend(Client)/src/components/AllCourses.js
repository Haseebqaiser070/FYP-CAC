import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./AuxillaryComponents/PopupFunction";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";

export default function AllCourses() {
  const [Course, setCourse] = useState([]);
  const [id, setid] = useState("");

  const navigate = useNavigate();
  useEffect(async () => {
    await getCourse();
  }, []);

  const getCourse = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Course/show");
      setCourse(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/Course/${id}`);
    getCourse();
  };
  const handleUpdate = (id) => {
    navigate(`/admin/EditCourse/${id}`, { replace: true });

    /* 
    const response = await axios.get(`http://localhost:4000/Course/${id}`);
    const updating = await response.data;
    */
  };

  const columns = [
    {
      field: "Code",
      headerName: "Course Code",
      width: 150,
    },
    {
      field: "Name",
      headerName: "Course Name",
      width: 300,
    },
    {
      field: "CreditHours",
      headerName: "Credit Hour",
      valueGetter: (params) => {
        return (
          params?.row?.Credit +
          "(" +
          params?.row?.LectureHoursWeek +
          "," +
          params?.row?.LabHoursWeek +
          ")"
        );
      },
      width: 150,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 300,
      editable: false,
      renderCell: ActionButton,
    },
  ];
  function ActionButton({ row }) {
    return (
      <>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            navigate(`/Admin/CourseView/${row._id}`, {
              replace: true,
            });
          }}
        >
          <AiFillEye style={{ marginRight: 10 }} />
          View
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => handleUpdate(row._id)}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Edit
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => handleDelete(row._id)}
        >
          <AiFillDelete style={{ marginRight: 10 }} />
          Delete
        </Button>
      </>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        padding: 50,
        backgroundColor: "#f5f5f5",
      }}
    >
      <Card style={{ padding: 50, borderRadius: 30 }}>
        <h1 className="py-4 my-2">
          <b>ALL COURSES</b>
        </h1>
        <DataGrid
          style={{ height: 500, width: "100%" }}
          columns={columns}
          rows={Course}
          getRowId={(Rows) => Rows._id}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Card>
    </div>
  );
}
