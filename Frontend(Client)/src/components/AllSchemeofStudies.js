import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./AuxillaryComponents/PopupFunction";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";

export default function AllCourses() {
  const [SOSs, setSOSs] = useState([]);
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  useEffect(() => {
     getSOS();
  }, []);

  const getSOS = async () => {
    try {
      const response = await axios.get("http://localhost:4000/SOS/show");
      setSOSs(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/SOS/${id}`);
    getSOS();
  };

  const columns = [
    {
      field: "Year",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "Program",
      headerName: "Program",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
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
            navigate(`/Admin/SOSView/${row._id}`, {
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
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 700,
        width: "100%",
        padding: 20,
      }}
    >
      <h1 className="py-4">All Courses</h1>
      <DataGrid
        style={{ height: 500, width: "100%" }}
        columns={columns}
        rows={SOSs}
        getRowId={(Rows) => Rows._id}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      />
    </div>
  );
}
