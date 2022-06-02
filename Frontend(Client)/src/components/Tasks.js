import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import MeetingButton from "./MeetingButtons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SosCreation from "./SosCreation";
import { useNavigate } from "react-router-dom";
import Sos from "./PdfTemplates/Sos";
import CreateTasks from "./CreateTasks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function Tasks() {
  const [open, setOpen] = useState(false);
  const [Rows, setRows] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/Task/show");
    setRows(response.data);
  };

  function Mbutton(props) {
    const navigate = useNavigate();
    const { row } = props;
    return (
      <div>
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
          onClick={async()=>{ 
              await axios.delete(`http://localhost:4000/Task/${row._id}`);
              getData();
        }}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Delete
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
      renderCell: Mbutton,
    },
  ];
  //const rows = [
  //{ id: 1, year: "2014-2018", program: "Computer Science" },
  //{ id: 2, year: "2014-2018", program: "Cyber Security" },
  //{ id: 3, year: "2014-2018", program: "Artificial Intilligence" },
  //];

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>All Tasks</b>
      </h1>

      <div className="d-flex justify-content-end mb-4">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleOpen}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Create a Task
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="container">
              <div>
                <CreateTasks />
              </div>
            </div>
          </Box>
        </Modal>
      </div>

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
