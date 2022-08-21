import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import "../css/styles.css";

export default function CreateSyllabus() {
  const [unit, setunit] = useState([]);
  const [topicsCovered, setTopicsCovered] = useState("");
  const [bookName, setBookName] = useState("");
  const [chapter, setChapter] = useState("");
  const [Topicsfinal, setTopicsfinal] = useState("");

  const [Rows, setRows] = useState([]);

  const columns = [
    {
      field: "lecture",
      headerName: "Lecture#",
      width: "100",
    },
    {
      field: "CDFUnit",
      headerName: "CDF Unit#",
      width: "100",
    },
    {
      field: "topics",
      headerName: "Topics Covered",
      width: "400",
    },
    {
      field: "material",
      headerName: "Reference Material",
      width: "150",
    },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              //   onClick={}
            >
              Remove
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ width: "100%", padding: 50 }}>
      <h1 className="mb-4">Create Syllabus</h1>
      <div
        className="card"
        style={{
          backgroundColor: "#f5f5f5",
          marginTop: 25,
          borderRadius: 15,
          padding: 25,
        }}
      >
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Select CDF Unit</InputLabel>
          <Select
            className="mb-4"
            id="outlined-basic"
            label="Select CDF Unit"
            variant="outlined"
            size="small"
            fullWidth
            value={unit}
            onChange={(e) => {
              setunit(e.target.value);
            }}
          >
            <MenuItem value={1}>1</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth size="large">
          <TextField
            className="mb-4"
            id="outlined-basic"
            label="Add Topics Covered"
            variant="outlined"
            size="large"
            fullWidth
            value={topicsCovered}
            onChange={(e) => {
              setTopicsCovered(e.target.value);
            }}
          />
        </FormControl>
        <div className="row">
          <div className="col">
            <FormControl fullWidth size="small">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Add Book Name"
                variant="outlined"
                size="small"
                fullWidth
                value={bookName}
                onChange={(e) => {
                  setBookName(e.target.value);
                }}
              />
            </FormControl>
          </div>
          <div className="col">
            <FormControl fullWidth size="small">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Add Chapter"
                variant="outlined"
                size="small"
                fullWidth
                value={chapter}
                onChange={(e) => {
                  setChapter(e.target.value);
                }}
              />
            </FormControl>
          </div>
          <div className="col-2">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="medium"
              // onClick={}
            >
              Add
            </Button>
          </div>
        </div>
        <FormControl fullWidth size="small">
          <TextField
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
        <Button
          className="mt-3"
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          // onClick={}
        >
          Submit
        </Button>
      </div>
      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          padding: 2,
          marginBottom: 15,
          marginTop: 50,
        }}
      >
        <h5>Week wise Plan:</h5>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={Rows}
          columns={columns}
          //   getRowId={(Rows) => Rows.sr}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
