import React, { useState, useEffect } from "react";
import "../css/styles.css";
import Popup from "../AddCourceForm";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 300,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};
export default function CourseRepo() {
  const [isOpen, setIsOpen] = useState(false);
  const [PreCode, setPreCode] = useState("");
  const [Name, setName] = useState("");
  const [SufCode, setSufCode] = useState("");
  const [Category, setCategory] = useState("");
  const [CreditHour, setCreditHour] = useState("");
  const [RepoCourse, setRepoCourse] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);setup(false);}

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setup(false)
  };
  const handleCloseX = () => {
    setPreCode("");
    setSufCode("");
    setName("");
    setup(false)
    togglePopup();
  };
  useEffect(() => {
    getRepoCourse();
  }, []);

  const getRepoCourse = async () => {
    const response = await axios.get("http://localhost:4000/RepoCourse/show");
    setRepoCourse(response.data);
  };

  const AddRepoCourse = async (e) => {
    e.preventDefault();
    if (PreCode != "" && SufCode != "" && Name != "", CreditHour != "") {
      var Code = PreCode + "-" + SufCode;
      const LectureHoursWeek = CreditHour.slice(2, 3);
      const LabHoursWeek = CreditHour.slice(4, 5);
      const Credit = CreditHour.slice(0, 1);
      var reposnse = ""
      if(!up){
       reposnse = await axios.post(
        "http://localhost:4000/RepoCourse/add",
        {
          Code,
          Name,
          Credit,
          LectureHoursWeek,
          LabHoursWeek,
        }
      );}
      else if(up){
         reposnse = await axios.put(`http://localhost:4000/RepoCourse/${gid}`,{
          Code,
          Name,
          Credit,
          LectureHoursWeek,
          LabHoursWeek,
        });
      }
      if (reposnse.data == "Already Exists Code")
        alert("Conflict with Course Code");
      else if (reposnse.data == "Already Exists Name")
        alert("Conflict with Course Name");
      else {
        setPreCode("");
        setSufCode("");
        setName("");
        getRepoCourse();
        setOpen(false);
        setup(false)
      }
    } else {
      alert("empty values");
    }
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/RepoCourse/${id}`);
    getRepoCourse();
  };
  const [up,setup]=useState(false)
  const[gid,setgid]=useState("")
   const handleUpdate = async(cor)=>{
    console.log("Cor",cor)
    setup(true)
    setgid(cor._id)
    setPreCode(cor.Code.split("-")[0]);
    setName(cor.Name);
    setSufCode(cor.Code.split("-")[1]);
    setCreditHour(cor.Credit+"("+cor.LectureHoursWeek+","+cor.LabHoursWeek+")");
    setOpen(true);
   }
  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h1 class="mt-4">Add Cources</h1>

      <div class="row cource">
        <div class="col d-flex justify-content-end mb-4">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            onClick={() => setOpen(true)}
          >
            Initialize New Course
          </Button>
    {!up?
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                Add New Cource
              </h4>
              <form onSubmit={AddRepoCourse}>
                <div className="row">
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <InputLabel id="taskType">Select Credit Hour</InputLabel>
                      <Select
                        className="mb-4"
                        labelId="selectcredithour"
                        id="selectcredithour"
                        value={CreditHour}
                        label="Select Category"
                        onChange={(e) => setCreditHour(e.target.value)}
                        autoWidth
                      >
                        <MenuItem value={"4(0,4)"}>4(0,4)</MenuItem>
                        <MenuItem value={"4(3,1)"}>4(3,1)</MenuItem>
                        <MenuItem value={"3(3,0)"}>3(3,0)</MenuItem>
                        <MenuItem value={"3(2,1)"}>3(2,1)</MenuItem>
                        <MenuItem value={"2(0,2)"}>2(0,2)</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <div className="row">
                      <div className="col">
                        <select
                          class="form-select"
                          onChange={(e) => setPreCode(e.target.value)}
                        >
                          <option value="" selected disabled hidden>
                            Code Prefix
                          </option>
                          <option>MTH</option>
                          <option>CSC</option>
                          <option>HUM</option>
                          <option>PHY</option>
                          <option>EEE</option>
                          <option>DSC</option>
                          <option>CYC</option>
                          <option>AIC</option>
                        </select>
                      </div>
                      <div className="col">
                        <FormControl fullWidth size="small">
                          <TextField
                            className="mb-4"
                            id="course-code"
                            label="Code"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={SufCode}
                            onChange={(e) => setSufCode(e.target.value)}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3 col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="Repocourse-name"
                        label="Course Title"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>

                <input
                  type="submit"
                  name="submit"
                  value="Submit"
                  class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                />
              </form>
            </Box>
          </Modal>:
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                Add New Cource
              </h4>
              <form onSubmit={AddRepoCourse}>
                <div className="row">
                  <div className="col">
                    <FormControl fullWidth size="small">
                      <InputLabel id="taskType">Select Credit Hour</InputLabel>
                      <Select
                        className="mb-4"
                        labelId="selectcredithour"
                        id="selectcredithour"
                        value={CreditHour}
                        label="Select Category"
                        onChange={(e) => setCreditHour(e.target.value)}
                        autoWidth
                      ><MenuItem value={CreditHour} selected hidden>{CreditHour}</MenuItem>
                        
                        <MenuItem value={"4(0,4)"}>4(0,4)</MenuItem>
                        <MenuItem value={"4(3,1)"}>4(3,1)</MenuItem>
                        <MenuItem value={"3(3,0)"}>3(3,0)</MenuItem>
                        <MenuItem value={"3(2,1)"}>3(2,1)</MenuItem>
                        <MenuItem value={"2(0,2)"}>2(0,2)</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col">
                    <div className="row">
                      <div className="col">
                        <select
                          class="form-select"
                          onChange={(e) => setPreCode(e.target.value)}
                        >
                          <option value={PreCode} selected hidden >
                            {PreCode}
                          </option>
                          <option>MTH</option>
                          <option>CSC</option>
                          <option>HUM</option>
                          <option>PHY</option>
                          <option>EEE</option>
                          <option>DSC</option>
                          <option>CYC</option>
                          <option>AIC</option>
                        </select>
                      </div>
                      <div className="col">
                        <FormControl fullWidth size="small">
                          <TextField
                            className="mb-4"
                            id="course-code"
                            label="Code"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={SufCode}
                            onChange={(e) => setSufCode(e.target.value)}
                          />
                        </FormControl>
                      </div>
                    </div>
                  </div>

                  <div class="mb-3 col">
                    <FormControl fullWidth size="small">
                      <TextField
                        className="mb-4"
                        id="Repocourse-name"
                        label="Course Title"
                        variant="outlined"
                        size="small"
                        fullWidth
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FormControl>
                  </div>
                </div>

                <input
                  type="submit"
                  name="submit"
                  value="Submit"
                  class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                />
              </form>
            </Box>
          </Modal>}
        </div>
      </div>

      <table style={{ textAlign: "center" }} class="table" id="list">
        <thead>
          <tr>
            <th class="col-2" scope="col">
              Cource Code
            </th>
            <th class="col-4" scope="col">
              Course Name
            </th>
            <th class="col-4" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {RepoCourse &&
            RepoCourse.map((cor) => {
              return (
                <tr scope="row" key={cor._id}>
                  <td>{cor.Code}</td>
                  <td>{cor.Name}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleUpdate(cor)}
                    >
                      <AiFillEdit style={{ marginRight: 10 }} />
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 16 }}
                      onClick={() => handleDelete(cor._id)}
                    >
                      <AiFillDelete style={{ marginRight: 10 }} />
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
