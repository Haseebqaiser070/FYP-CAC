import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Autocomplete, MenuItem, Modal, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";
import CreateTasks from "./CreateTasks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

export default function InitializeTask() {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [taskType, setTaskType] = useState("");
  const [AssignMember, setAssignMember] = useState([]);
  const [CAC, setCAC] = useState([]);
  const [Programs, setPrograms] = useState([]);
  const [Program, setProgram] = useState([]);

  console.log(rows);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(12);
    if (taskType != "" && AssignMember != "" && Program != "") {
      const res = await axios.post("http://localhost:4000/Task/addInit", {
        taskType,
        AssignMember,
        Program,
      });
      setTaskType("");
      setAssignMember([]);
      setProgram("");
      getRows();
    } else {
      alert("Empty Field");
    }
  };

  useEffect(() => {
    getData();
    getPrograms();
    getRows();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/User/show/CAC");
    setCAC(response.data);
  };
  const getPrograms = async () => {
    const res = await axios.get("http://localhost:4000/Program/show");
    setPrograms(res.data);
  };
  const getRows = async () => {
    const res = await axios.get("http://localhost:4000/Task/showInit");
    console.log(res.data);
    setRows(res.data);
  };

  const [Init, setInit] = useState("");
  const [open2, setOpen2] = useState(false);
  const handleClose2 = () => setOpen2(false);

  function Mbutton(props) {
    const { row } = props;

    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            setInit(row);
            setOpen2(true);
          }}
        >
          <AiFillDelete style={{ marginRight: 10 }} />
          Assign Task
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16, padding: 10 }}
          // onClick={}
        >
          <AiFillEdit />
        </Button>

        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16, padding: 10 }}
          // onClick={}
        >
          <AiFillDelete />
        </Button>
      </div>
    );
  }
  const columns = [
    {
      field: "taskType",
      headerName: "Task Type",
      flex: 1,
    },
    {
      field: "Program",
      headerName: "Program",
      flex: 1,
    },
    {
      field: "AssignMember",
      headerName: "CAC Members Assigned",
      renderCell: (params) =>
        params?.row?.AssignMember.map((i) => {
          return <>{i.Name + "  "}</>;
        }),
      flex: 2,
    },

    {
      field: "Action",
      headerName: "Action",
      flex: 3,
      editable: false,
      renderCell: Mbutton,
    },
  ];
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1>
        <b>Task Initialization</b>
      </h1>

      <div className="d-flex justify-content-end mb-4">
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleOpen}
        >
          <AiFillEdit style={{ marginRight: 10 }} />
          Initialize Task
        </Button>
      </div>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="container">
            <div>
              <CreateTasks pre={Init} func={() => getRows()} />
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl fullWidth size="small">
                <InputLabel id="taskType">Task Type</InputLabel>
                <Select
                  className="mb-4"
                  labelId="task-type"
                  name="tasktype"
                  value={taskType}
                  onChange={(e) => setTaskType(e.target.value)}
                  label="Task Type"
                  autoWidth
                >
                  <MenuItem value={"Create Course"}>Create Course</MenuItem>
                  <MenuItem value={"Update Course"}>Update Course</MenuItem>
                  <MenuItem value={"Create SOS"}>Create SOS</MenuItem>
                  <MenuItem value={"Update SOS"}>Update SOS</MenuItem>
                  <MenuItem value={"Create CDF"}>Create CDF</MenuItem>
                  <MenuItem value={"Update CDF"}>Update CDF</MenuItem>
                  <MenuItem value={"Create Syllabus"}>Create Syllabus</MenuItem>
                  <MenuItem value={"Update Syllabus"}>Update Syllabus</MenuItem>
                  <MenuItem value={"Create Lab Manual"}>
                    Create Lab Manual
                  </MenuItem>
                  <MenuItem value={"Update Lab Manual"}>
                    Update Lab Manual
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Autocomplete
                className="mb-4"
                multiple
                id="tags-standard"
                options={CAC}
                value={AssignMember}
                getOptionLabel={(option) => option.Name}
                onChange={(e, val) => setAssignMember(val)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select CAC Member"
                    placeholder="Select CAC Member"
                  />
                )}
              />
            </div>
            <div>
              <FormControl fullWidth size="small">
                <InputLabel id="Program">Program</InputLabel>
                <Select
                  className="mb-4"
                  labelId="Program"
                  name="Program"
                  value={Program}
                  onChange={(e) => setProgram(e.target.value)}
                  label="Program"
                  autoWidth
                >
                  <MenuItem value={"For All"}>For All</MenuItem>
                  {Programs.map((a) => {
                    return (
                      <MenuItem value={a.Degree + " " + a.Program}>
                        {a.Degree} {a.Program}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Button
              variant="contained"
              color="primary"
              size="small"
              type="submit"
            >
              <AiFillEdit style={{ marginRight: 10 }} />
              Initialize Task
            </Button>
          </form>
        </Box>
      </Modal>

      <div>
        <DataGrid
          style={{ height: 400, width: "100%" }}
          columns={columns}
          rows={rows}
          getRowId={(Rows) => Rows._id}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
