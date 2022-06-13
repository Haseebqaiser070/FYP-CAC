import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import {
  AiFillPrinter,
  AiFillEdit,
  AiOutlineUnorderedList,
} from "react-icons/ai";
export default function ReturnedTasks() {
  const [Rows, setRows] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get(
      "http://localhost:4000/Task/show/Returned"
    );
    setRows(response.data);
  };

  function ActionButtons(props) {
    const navigate = useNavigate();
    const { row } = props;
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            navigate(`/Admin/CourseReturnedView/${row.Course.Code}`, {
              replace: true,
            });
          }}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          View
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          // onClick={}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Edit
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={async () => {
            await axios.post(`http://localhost:4000/Task/lock/${row._id}`);
            getData();
          }}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Lock
        </Button>
      </div>
    );
  }
  const columns = [
    {
      field: "taskType",
      headerName: "Task",
      flex: 1,
    },
    {
      field: "User",
      headerName: "Assigned To",
      valueGetter: (params) => params?.row?.User?.Name,
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
    {
      field: "Action",
      headerName: "Action",
      flex: 2,
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
        <b>Returned Tasks</b>
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
