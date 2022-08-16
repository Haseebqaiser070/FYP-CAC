//----------------------------------------------------------------
//----------------------------------------------------------------
//          CDF Form
//----------------------------------------------------------------
//----------------------------------------------------------------

import React, { useState, useEffect } from "react";
import "../css/styles.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { useLocation, useNavigate } from "react-router-dom";

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

export default function CreateCDF() {
  const [mainTopic, setmainTopic] = useState("");
  const [subTopic, setsubTopic] = useState([""]);
  const [teachingHours, setteachingHours] = useState("");
  const [clo, setclo] = useState("");
  const [unit, setunit] = useState([]);
  const [TopicRows, setTopicRows] = useState([]);
  const [btl, setbtl] = useState("");
  const [so, setso] = useState("");
  const [textBook, settextBook] = useState([]);
  const [referenceBook, setreferenceBook] = useState([]);
  const [Topicsfinal, setTopicsfinal] = useState("");
  const [CLORows, setCLORows] = useState([]);

  const { state } = useLocation();

  const { row } = state;
  console.log("row: ", row);
  const getData = async () => {
    const res = await axios.get("http://localhost:4000/Course/show");
    const data = await res.data;
    setCourse([...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  const maintopicscolumns = [
    {
      field: "Unit",
      headerName: "Unit",
      flex: 1,
    },
    {
      field: "Topic",
      headerName: "Topic",
      flex: 3,
    },
    {
      field: "TeachingHours",
      headerName: "No. of Teaching Hours",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => {
                var count = 0;
                const clone = TopicRows.filter((obj) => {
                  if (row != obj) return obj;
                });
                clone.forEach((i) => {
                  count = count + 1;
                  i.Unit = count;
                });
                setTopicRows([...clone]);
              }}
            >
              Remove
            </Button>
          </>
        );
      },
    },
  ];
  const clocolumns = [
    {
      field: "sr",
      headerName: "Sr.#",
      flex: 1,
    },
    {
      field: "Unit",
      headerName: "Unit#",
      flex: 1,
    },
    {
      field: "CLOs",
      headerName: "Course Learning Outcomes",
      flex: 3,
    },
    {
      field: "BTL",
      headerName: "Bloom Taxonomy Learning Level",
      flex: 1,
    },
    {
      field: "So",
      headerName: "SO",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              onClick={() => {
                var count = 0;
                const clone = CLORows.filter((obj) => {
                  if (row != obj) return obj;
                });
                clone.forEach((i) => {
                  count = count + 1;
                  i.sr = "CLO-" + count;
                });
                setCLORows([...clone]);
              }}
            >
              Remove
            </Button>
          </>
        );
      },
    },
  ];

  const Topics = () => {
    var count = 0;
    const clone = [
      ...TopicRows,
      { Unit: "", Topic: Topicsfinal, TeachingHours: teachingHours },
    ];
    clone.forEach((i) => {
      count = count + 1;
      i.Unit = count;
    });
    setTopicsfinal("");
    setteachingHours("");
    setmainTopic("");
    setsubTopic("");
    setTopicRows([...clone]);
  };

  const CLOS = () => {
    var count = 0;
    var uns = "";
    unit.forEach((i) => {
      if (uns.length == 0) {
        uns = uns + i.Unit;
      } else if (uns.length == 1) {
        uns = uns + "-" + i.Unit;
      } else {
        var e = uns.slice(0, -2);
        uns = e + "-" + i.Unit;
      }
    });
    const clone = [
      ...CLORows,
      {
        sr: "",
        Unit: uns,
        CLOs: clo,
        BTL: btl,
        So: so,
        Quizzes: [],
        Assignment: [],
        Mid: "",
        Final: "",
        Project: "",
      },
    ];
    clone.forEach((i) => {
      count = count + 1;
      i.sr = "CLO-" + count;
    });
    setunit([]);
    setclo("");
    setbtl("");
    setso("");
    setCLORows([...clone]);
  };

  const onSubmithandler = async (e) => {
    e.preventDefault();
    console.log("\n\n\n\nFinal");
    console.log(TopicRows);
    console.log(CLORows);
    console.log(referenceBook);
    console.log(textBook);
  };

  return (
    <>
      <div style={{ width: "100%", padding: 50 }}>
        <h1 className="mb-4">Create CDF</h1>
        <div
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 1,
            marginBottom: 9,
          }}
        >
          <h5>Course Information</h5>
        </div>
        <div className="row">
          <div className="col">
            <h6>
              <b>Course Code: {row.Code}</b>
            </h6>
          </div>
          <div className="col">
            <h6 style={{ paddingBottom: 20, textAlign: "right" }}>
              <b>Course Title: {row.Name} </b>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 style={{ paddingBottom: 35 }}>
              <b>
                Credit Hour:{" "}
                {row.Credit +
                  "(" +
                  row.LectureHoursWeek +
                  "," +
                  row.LabHoursWeek +
                  ")"}
              </b>
            </h6>
          </div>
          <div className="col">
            <h6 style={{ paddingBottom: 35, textAlign: "right" }}>
              <b>Lecture Hours/Week: {row.LectureHoursWeek} </b>
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h6 style={{ paddingBottom: 35 }}>
              <b>Lab Hours/Week: {row.LabHoursWeek}</b>
            </h6>
          </div>
          <div className="col">
            <h6 style={{ textAlign: "right" }}>
              <b>Pre-Requisite: {row.Content.PreRequisites}</b>
            </h6>
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 1,
              marginBottom: 9,
            }}
          >
            <h5>Catalogue Description:</h5>
          </div>
          <p>{row.Content.catalogue}</p>
        </div>
        <form onSubmit={onSubmithandler}>
          <div>
            <div
              className="card"
              style={{
                backgroundColor: "#f5f5f5",
                marginTop: 25,
                borderRadius: 15,
                padding: 25,
              }}
            >
              <div className="row">
                <div className="col">
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Add Main Topic"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={mainTopic}
                      onChange={(e) => {
                        setmainTopic(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="col-3">
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => {
                      const s = Topicsfinal + mainTopic + ": ";
                      setTopicsfinal(s);
                      setmainTopic("");
                    }}
                  >
                    Add Main Topics
                  </Button>
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Add Sub Topics"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={subTopic}
                      onChange={(e) => {
                        setsubTopic(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
                <div className="col-3">
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={() => {
                      let clone = Topicsfinal;
                      if (Topicsfinal[Topicsfinal.length - 2] == ":") {
                        clone = clone + subTopic + ". ";
                      } else {
                        clone = Topicsfinal.slice(0, -2);
                        clone = clone + "; " + subTopic + ". ";
                      }
                      setTopicsfinal(clone);
                      setsubTopic("");
                    }}
                  >
                    Add Sub Topics
                  </Button>
                </div>
              </div>
              <FormControl fullWidth size="small">
                <TextField
                  className="mb-4"
                  id="outlined-basic"
                  label="Topics"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={Topicsfinal}
                  onChange={(e) => {
                    setTopicsfinal(e.target.value);
                  }}
                />
              </FormControl>
              <div className="row">
                <div className="col">
                  <FormControl fullWidth size="small">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Add Teaching Hours"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={teachingHours}
                      onChange={(e) => {
                        setteachingHours(e.target.value);
                      }}
                    />
                  </FormControl>
                </div>
              </div>
              <div>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => Topics()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 1,
              marginBottom: 15,
              marginTop: 50,
            }}
          >
            <h5>Unit wise Major Topics:</h5>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={TopicRows}
              columns={maintopicscolumns}
              getRowId={(Rows) => Rows.Unit}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
          <h5 className="mt-4">Total Contact Hours</h5>

          <div
            className="card"
            style={{
              backgroundColor: "#f5f5f5",
              marginTop: 25,
              borderRadius: 15,
              padding: 25,
            }}
          >
            <div className="row">
              <div className="col">
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Add CLO"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={clo}
                    onChange={(e) => {
                      setclo(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <FormControl fullWidth size="small">
                  <Autocomplete
                    style={{ marginBottom: 35 }}
                    multiple
                    fullWidth
                    variant="outlined"
                    id="tags-standard"
                    className="mb-4"
                    value={unit}
                    options={TopicRows}
                    size="small"
                    getOptionLabel={(option) => option.Unit}
                    defaultValue={null}
                    onChange={(e, val) => {
                      setunit(val);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select Unit"
                        placeholder="Select Unit"
                      />
                    )}
                  />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col-9">
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Add BTL Level"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={btl}
                    onChange={(e) => {
                      setbtl(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <FormControl fullWidth size="small">
                  <TextField
                    className="mb-4"
                    id="outlined-basic"
                    label="Add SO"
                    variant="outlined"
                    size="small"
                    fullWidth
                    value={so}
                    onChange={(e) => {
                      setso(e.target.value);
                    }}
                  />
                </FormControl>
              </div>
            </div>
            <div>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => CLOS()}
              >
                Submit
              </Button>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 1,
              marginBottom: 15,
              marginTop: 50,
            }}
          >
            <h5>Mapping of CLOs and SOs:</h5>
          </div>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={CLORows}
              columns={clocolumns}
              getRowId={(Rows) => Rows.sr}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
            />
          </div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 1,
              marginBottom: 15,
              marginTop: 50,
            }}
          >
            <h5>CLO Assessment Mechanism</h5>
          </div>
          <div className=" table-responsive ">
            <table className="table  ">
              <thead>
                <tr>
                  <th className="col-1">Assessment Tools</th>
                  {CLORows.map((i) => {
                    return <th className="col-1">{i.sr}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="col-1">
                  <td>Quizzes</td>
                  {CLORows.map((i, index) => {
                    return (
                      <th>
                        <Autocomplete
                          multiple
                          id="tags-standard"
                          value={i.Quizzes}
                          options={quizzes}
                          getOptionLabel={(option) => option.title}
                          onChange={(e, val) => {
                            const clone = [...CLORows];
                            clone[index].Quizzes = val;
                            setCLORows([...clone]);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              size="small"
                              label="Select Quiz"
                              placeholder="Select Quiz"
                            />
                          )}
                        />
                      </th>
                    );
                  })}
                </tr>
                <tr className="col-1">
                  <td>Assignments</td>
                  {CLORows.map((i, index) => {
                    return (
                      <th>
                        <Autocomplete
                          multiple
                          id="tags-standard"
                          value={i.Assignment}
                          options={assignments}
                          getOptionLabel={(option) => option.title}
                          onChange={(e, val) => {
                            const clone = [...CLORows];
                            clone[index].Assignment = val;
                            setCLORows([...clone]);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="outlined"
                              size="small"
                              label="Select Assignment"
                              placeholder="Select Assignment"
                            />
                          )}
                        />
                      </th>
                    );
                  })}
                </tr>
                <tr>
                  <td>Midterm</td>
                  {CLORows.map((i, index) => {
                    return (
                      <th>
                        <FormControl fullWidth className="mt-4 mb-4 pb-3">
                          <InputLabel id="demo-simple-select-label">
                            MidTermExam
                          </InputLabel>
                          <Select
                            size="small"
                            value={i.Mid}
                            label="Select Mid Term Exam"
                            onChange={(e) => {
                              const clone = [...CLORows];
                              clone[index].Mid = e.target.value;
                              setCLORows([...clone]);
                            }}
                          >
                            <MenuItem value={"MidTermExam"}>
                              Mid Term Exam
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </th>
                    );
                  })}
                </tr>
                <tr>
                  <td>Terminal</td>
                  {CLORows.map((i, index) => {
                    return (
                      <th>
                        <FormControl fullWidth className="mt-4 mb-4 pb-3">
                          <InputLabel id="demo-simple-select-label">
                            Select Final Term Exam
                          </InputLabel>
                          <Select
                            size="small"
                            value={i.Final}
                            label="Select Final Term Exam"
                            onChange={(e) => {
                              const clone = [...CLORows];
                              clone[index].Final = e.target.value;
                              setCLORows([...clone]);
                            }}
                          >
                            <MenuItem value={"Final Term Exam"}>
                              Final Term Exam
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </th>
                    );
                  })}
                </tr>
                <tr>
                  <td>Project</td>
                  {CLORows.map((i, index) => {
                    return (
                      <th>
                        <FormControl fullWidth className="mt-4 mb-4 pb-3">
                          <InputLabel id="demo-simple-select-label">
                            Select Project
                          </InputLabel>
                          <Select
                            size="small"
                            value={i.Projects}
                            label="Select Project"
                            onChange={(e) => {
                              const clone = [...CLORows];
                              clone[index].Project = e.target.value;
                              setCLORows([...clone]);
                            }}
                          >
                            <MenuItem value={"Project"}>Project</MenuItem>
                          </Select>
                        </FormControl>
                      </th>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
          <div
            style={{
              backgroundColor: "#000",
              color: "#fff",
              padding: 1,
              marginBottom: 15,
              marginTop: 50,
            }}
          >
            <h5>Text and Reference Books</h5>
          </div>
          <div>
            <FormControl fullWidth className="mt-4 mb-4 pb-3">
              <Autocomplete
                style={{ marginBottom: 35 }}
                multiple
                fullWidth
                variant="outlined"
                id="tags-standard"
                className="mb-4"
                value={textBook}
                options={row.Content.Books}
                size="small"
                getOptionLabel={(option) => option.BookName}
                defaultValue={null}
                onChange={(e, val) => {
                  settextBook(val);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select Text Books"
                    placeholder="Select Text Books"
                  />
                )}
              />
            </FormControl>

            <FormControl fullWidth className="mb-4">
              <Autocomplete
                style={{ marginBottom: 35 }}
                multiple
                fullWidth
                variant="outlined"
                id="tags-standard"
                className="mb-4"
                value={referenceBook}
                options={row.Content.Books}
                size="small"
                getOptionLabel={(option) => option.BookName}
                defaultValue={null}
                onChange={(e, val) => {
                  setreferenceBook(val);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Select Reference Books"
                    placeholder="Select Reference Books"
                  />
                )}
              />
            </FormControl>
          </div>
          <Button
            fullWidth
            className="my-4 mb-4"
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
const quizzes = [
  { title: "Quiz 1" },
  { title: "Quiz 2" },
  { title: "Quiz 3" },
  { title: "Quiz 4" },
];

const assignments = [
  { title: "Assignment 1" },
  { title: "Assignment 2" },
  { title: "Assignment 3" },
  { title: "Assignment 4" },
  { title: "Lab Assignments" },
];
