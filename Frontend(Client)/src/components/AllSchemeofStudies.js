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

function ActionButton(props) {
  const navigate = useNavigate();
  const { row } = props;
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

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => {
          navigate("/admin/Sos", { state: row });
        }}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Download
      </Button>
    </div>
  );
}

export default function AllSchemeofStudies() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [Start, setStart] = useState("");
  const [End, setEnd] = useState("");
  const [Rows, setRows] = useState([]);
  const [Program, setProgram] = useState("Select Program");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getSOS();
  }, []);

  const getSOS = async () => {
    const res = await axios.get("http://localhost:4000/SOS/show");
    const data = await res.data;
    setRows([...data]);
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
  //const rows = [
  //{ id: 1, year: "2014-2018", program: "Computer Science" },
  //{ id: 2, year: "2014-2018", program: "Cyber Security" },
  //{ id: 3, year: "2014-2018", program: "Artificial Intilligence" },
  //];

  const onsubmit = (e) => {
    e.preventDefault();

    if (Start != "" && End != "" && Program != "Select Program") {
      navigate("/admin/SosCreation", { state: { Start, End, Program } });
    }
  };
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>All Scheme of Studies</b>
      </h1>

      {/* <div className="d-flex justify-content-end mb-4">
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
                  <form onSubmit={onsubmit}>
                    <div className="row">
                      <div className="col">
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputStart"
                            type="number"
                            value={Start}
                            onChange={(e) => setStart(e.target.value)}
                            required
                          />
                          <label htmlFor="start" className="form-label">
                            Start Year
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEnd"
                            type="number"
                            value={End}
                            onChange={(e) => setEnd(e.target.value)}
                            required
                          />
                          <label htmlFor="end" className="form-label">
                            End Year
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <select
                        className="form-select"
                        onChange={(e) => setProgram(e.target.value)}
                        required
                      >
                        <option value={Program} selected disabled hidden>
                          {Program}
                        </option>
                        <option>Computer Science</option>
                        <option>Software Engineering</option>
                        <option>Artificial Intelligence</option>
                        <option>Cyber Security</option>
                        <option>Data Science</option>
                      </select>
                      <label className="form-label">Program</label>
                    </div>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
                      style={{ marginTop: 16 }}
                    >
                      Next
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div> */}

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
