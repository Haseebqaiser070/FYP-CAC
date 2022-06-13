import React, { useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiOutlineClockCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MenuItem, Modal } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function FacultyMeeting() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = useState([]);

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

  const columns = [
    {
      field: "subject",
      headerName: "Meeting Subject",
      flex: 1,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: () => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => setOpen(true)}
          >
            <AiOutlineClockCircle style={{ marginRight: 10 }} />
            Set Availability
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            // onClick={() => }
          >
            <AiOutlineUsergroupAdd style={{ marginRight: 10 }} />
            View Meeting
          </Button>
        </>
      ),
    },
  ];

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1>All Meetings</h1>

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div className="form-group">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Monday</InputLabel>
                <Select
                  className="mb-4"
                  labelId="mon"
                  id="mon"
                  // value={taskType}
                  label="Task Type"
                  autoWidth
                >
                  <MenuItem value={"8:30-10:00"}>8:30-10:00</MenuItem>
                  <MenuItem value={"10:00-11:30"}>10:00-11:30</MenuItem>
                  <MenuItem value={"11:30-01:00"}>11:30-01:00</MenuItem>
                  <MenuItem value={"01:00-2:30"}>01:00-2:30</MenuItem>
                  <MenuItem value={"2:30-4:00"}>2:30-4:00</MenuItem>
                  <MenuItem value={"4:30-5:30"}>4:30-5:30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Tuesday</InputLabel>
                <Select
                  className="mb-4"
                  labelId="mon"
                  id="mon"
                  // value={taskType}
                  label="Task Type"
                  autoWidth
                >
                  <MenuItem value={"8:30-10:00"}>8:30-10:00</MenuItem>
                  <MenuItem value={"10:00-11:30"}>10:00-11:30</MenuItem>
                  <MenuItem value={"11:30-01:00"}>11:30-01:00</MenuItem>
                  <MenuItem value={"01:00-2:30"}>01:00-2:30</MenuItem>
                  <MenuItem value={"2:30-4:00"}>2:30-4:00</MenuItem>
                  <MenuItem value={"4:30-5:30"}>4:30-5:30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Wednesday</InputLabel>
                <Select
                  className="mb-4"
                  labelId="mon"
                  id="mon"
                  // value={taskType}
                  label="Task Type"
                  autoWidth
                >
                  <MenuItem value={"8:30-10:00"}>8:30-10:00</MenuItem>
                  <MenuItem value={"10:00-11:30"}>10:00-11:30</MenuItem>
                  <MenuItem value={"11:30-01:00"}>11:30-01:00</MenuItem>
                  <MenuItem value={"01:00-2:30"}>01:00-2:30</MenuItem>
                  <MenuItem value={"2:30-4:00"}>2:30-4:00</MenuItem>
                  <MenuItem value={"4:30-5:30"}>4:30-5:30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Thursday</InputLabel>
                <Select
                  className="mb-4"
                  labelId="mon"
                  id="mon"
                  // value={taskType}
                  label="Task Type"
                  autoWidth
                >
                  <MenuItem value={"8:30-10:00"}>8:30-10:00</MenuItem>
                  <MenuItem value={"10:00-11:30"}>10:00-11:30</MenuItem>
                  <MenuItem value={"11:30-01:00"}>11:30-01:00</MenuItem>
                  <MenuItem value={"01:00-2:30"}>01:00-2:30</MenuItem>
                  <MenuItem value={"2:30-4:00"}>2:30-4:00</MenuItem>
                  <MenuItem value={"4:30-5:30"}>4:30-5:30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Friday</InputLabel>
                <Select
                  className="mb-4"
                  labelId="mon"
                  id="mon"
                  // value={taskType}
                  label="Task Type"
                  autoWidth
                >
                  <MenuItem value={"8:30-10:00"}>8:30-10:00</MenuItem>
                  <MenuItem value={"10:00-11:30"}>10:00-11:30</MenuItem>
                  <MenuItem value={"11:30-01:00"}>11:30-01:00</MenuItem>
                  <MenuItem value={"01:00-2:30"}>01:00-2:30</MenuItem>
                  <MenuItem value={"2:30-4:00"}>2:30-4:00</MenuItem>
                  <MenuItem value={"4:30-5:30"}>4:30-5:30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 16 }}
              // onClick={}
            >
              <AiOutlineClockCircle style={{ marginRight: 10 }} />
              Submit
            </Button>
          </>
        </Box>
      </Modal>
    </div>
  );
}
