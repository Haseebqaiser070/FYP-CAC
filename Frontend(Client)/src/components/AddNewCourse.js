import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import Popup from "./AddCourceForm";
import axios from "axios";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { padding } from "@mui/system";

// function RemoveButton() {
//   return (
//     <div>
//       <Button
//         type="button"
//         variant="contained"
//         color="primary"
//         size="small"
//         style={{ marginLeft: 16 }}
//         onClick={null}
//       >
//         <AiFillEdit style={{ marginRight: 10 }} />
//         Remove
//       </Button>
//     </div>
//   );
// }

export default function AddNewCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const [Code, setCode] = useState("");
  const [Name, setName] = useState("");
  const [Credit, setCredit] = useState("");
  const [Course, setCourse] = useState([]);
  const [update, setUpdate] = useState(false);
  const [LectureHoursWeek, setLectureHoursWeek] = useState("");
  const [LabHoursWeek, setLabHoursWeek] = useState("");
  const [PreRequisites, setPreRequisites] = useState("");
  const [upId, setupId] = useState("");

  const [mainTopic, setmainTopic] = useState("");
  const [catalogue, setCatalogue] = useState("");

  const [objective, setobjective] = useState("");

  const [objectiveList, setObjectiveList] = useState([]);
  const columns = [
    {
      field: "title",
      headerName: "Title",
      flex: 2,
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      renderCell: (props) => (
        <Button
          type="button"
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => {
            var data = objectiveList.filter((obj) => obj.id !== props.row.id);

            setObjectiveList(data);
          }}
        >
          <AiFillDelete style={{ marginRight: 10 }} />
          Remove
        </Button>
      ),
    },
  ];

  const handleAdd = (e) => {
    e.preventDefault();
    setCatalogue(`${catalogue} ${mainTopic}; `);
    setmainTopic("");
  };
  const handleObjective = (e) => {
    e.preventDefault();
    setObjectiveList([...objectiveList, { id: uuidv4(), title: objective }]);
    setobjective("");
  };

  const AddCourse = async (e) => {
    e.preventDefault();
    if (update == true) {
      console.log("update");
      await axios.put(`http://localhost:4000/Course/${upId}`, {
        Code,
        Name,
        Credit,
        LectureHoursWeek,
        LabHoursWeek,
        PreRequisites,
      });
      setCode("");
      setName("");
      setCredit("");
      setLectureHoursWeek("");
      setLabHoursWeek("");
      setPreRequisites("");
      getCourse();
      setUpdate(false);
    } else {
      if (
        Code != "" &&
        Name != "" &&
        Credit != "" &&
        LectureHoursWeek != "" &&
        LabHoursWeek != "" &&
        PreRequisites != ""
      ) {
        await axios.post("http://localhost:4000/Course/add", {
          Code,
          Name,
          Credit,
          LectureHoursWeek,
          LabHoursWeek,
          PreRequisites,
        });
        setCode("");
        setName("");
        setCredit("");
        setLectureHoursWeek("");
        setLabHoursWeek("");
        setPreRequisites("");
        getCourse();
      } else {
        alert("empty values");
      }
    }
  };
  return (
    <div style={{ padding: 30 }} className="row">
      <h3 style={{ textAlign: "center", marginBottom: 30 }}>
        <b>Add New Cource</b>
      </h3>
      <form onSubmit={AddCourse}>
        <div className="row">
          <div className="mb-3 col-4">
            <label for="course-code" className="form-label">
              Course Code
            </label>
            <div className="row">
              <div className="col">
                <select class="form-select">
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
                <input
                  maxlength="3"
                  pattern="^[0-9]{3}$"
                  type="text"
                  className="form-control"
                  id="course-code"
                  placeholder="Code"
                  value={Code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-3 col-6">
            <label for="course-name" className="form-label">
              Course Name
            </label>
            <input
              type="text"
              className="form-control"
              id="course-name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3 col-2">
            <label for="credit-hour" className="form-label">
              Course Categories
            </label>
            <select class="form-select">
              <option>Computing Course</option>
              <option>CYC</option>
              <option>AIC</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col mb-3">
            <label for="credit-hour" className="form-label">
              Credit Hour
            </label>
            <select class="form-select">
              <option>4(0,4)</option>
              <option>4(3,1)</option>
              <option>3(3,0)</option>
              <option>3(2,1)</option>
              <option>2(0,2)</option>
            </select>
          </div>
          <div class="col">
            <Stack spacing={3} sx={{ width: 500 }}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[3]]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Pre-Requisites"
                    placeholder="Pre-Requisites"
                  />
                )}
              />
            </Stack>
          </div>
        </div>

        <div style={{ marginBottom: 20, marginTop: 50 }}>
          <form>
            <div
              style={{ backgroundColor: "#e8f0f7", padding: 20 }}
              className="row"
            >
              <div className="col-9">
                <input
                  className="form-control"
                  id="maintopic"
                  type="text"
                  placeholder="Add Main Topic"
                  value={mainTopic}
                  onChange={(e) => setmainTopic(e.target.value)}
                ></input>
              </div>
              <div className="col-3 d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleAdd}
                >
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mb-3">
          <table className="table table-responsive ">
            <thead>
              <tr className="cdf">
                <th>Catalogue Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="cd">
                <td>{catalogue}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div style={{ marginBottom: 20, marginTop: 50 }}>
            <form>
              <div
                style={{ backgroundColor: "#e8f0f7", padding: 20 }}
                className="row"
              >
                <div className="col-9">
                  <input
                    className="form-control"
                    id="objective"
                    type="text"
                    placeholder="Objective"
                    value={objective}
                    onChange={(e) => setobjective(e.target.value)}
                  ></input>
                </div>
                <div className="col-3 d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={handleObjective}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div style={{ height: 200, width: "100%" }}>
            <DataGrid
              rows={objectiveList}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
        </div>

        <input
          type="submit"
          name="submit"
          value="Submit"
          className="button btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
        />
      </form>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
];

// const rows = [
//   { id: 1, title: "Snow" },
//   { id: 2, title: "Lannister" },
// ];
