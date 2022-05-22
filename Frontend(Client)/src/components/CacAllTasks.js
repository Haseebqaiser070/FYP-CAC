import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

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
        // onClick={}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        View
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={null}
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
        <AiFillEdit style={{ marginRight: 10 }} />
        Update Status
      </Button>
    </div>
  );
}

function UpdateStatus() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div className="col">
              <FormControl fullWidth size="small">
                <InputLabel id="Status">Update Status</InputLabel>
                <Select
                  className="mb-4"
                  labelId="Status"
                  id="Status"
                  //   value={age}
                  label="Update Status"
                  //   onChange={null}
                  autoWidth
                >
                  <MenuItem value={"In Progress"}>In Progress</MenuItem>
                  <MenuItem value={"Delievered"}>Delievered</MenuItem>
                </Select>
              </FormControl>
            </div>

            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginLeft: 16 }}
              // onClick={null}
            >
              <AiFillEdit style={{ marginRight: 10 }} />
              Update Status
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default function CacAllTasks() {
  const [Rows, setRows] = useState([]);
  const columns = [
    {
      field: "tittle",
      headerName: "Tittle",
      flex: 1,
    },

    {
      field: "deadline",
      headerName: "Deadline",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
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
    <div className="py-4">
      <h1>
        <b>All Tasks Assigned</b>
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
