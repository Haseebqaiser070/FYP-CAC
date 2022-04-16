import React from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import MeetingButton from "./MeetingButtons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

function Mbutton() {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={togglePopup}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Edit
      </Button>
    </div>
  );
}

export default function AllSchemeofStudies() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "year",
      headerName: "Year",
      flex: 1,
    },
    {
      field: "program",
      headerName: "Program",
      flex: 2,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: Mbutton,
    },
  ];
  const rows = [
    { id: 1, year: "2014-2018", program: "Computer Science" },
    { id: 2, year: "2014-2018", program: "Cyber Security" },
    { id: 3, year: "2014-2018", program: "Artificial Intilligence" },
  ];
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>All Scheme of Studies</b>
      </h1>

      <div className="d-flex justify-content-end mb-4">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleOpen}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Create Scheme of Studies
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="container">
              <div className="row card justify-content-center">
                <div className="card-header">
                  <h3 className="text-center font-weight-light my-4">
                    Create Scheme of Studies
                  </h3>
                </div>
                <div className="card-body">
                  <form onSubmit={null}>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputName"
                            type="number"
                            onChange={null}
                            required
                          />
                          <label htmlFor="Email" className="form-label">
                            Start Year
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputName"
                            type="number"
                            onChange={null}
                            required
                          />
                          <label htmlFor="Email" className="form-label">
                            End Year
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <select className="form-select" required>
                        <option>Computer Science</option>
                        <option>Software Engineering</option>
                        <option>Artificial Intelligence</option>
                        <option>Cyber Security</option>
                        <option>Data Science</option>
                      </select>
                      <label className="form-label">Program</label>
                    </div>

                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button
                        type="Submit"
                        className="btn btn-block btn-primary"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
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
