import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { red } from "@mui/material/colors";

export default function Objectives() {
  const [supervisorsList, setSupervisorsList] = useState([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState({});
  const [supervisors, setSupervisors] = useState([]);
  const [superviseData, setSuperviseData] = useState([]);
  const [error, setError] = useState(false);
  const superviseHeader = [
    {
      field: "id",
      headerName: "ID",
      width: 300,
    },
    {
      field: "title",
      headerName: "title",
      width: 300,
    },

    {
      field: "year",
      headerName: "year",
      width: 300,
      renderCell: (props) => (
        <Button
          onClick={() => {
            var data = superviseData.filter((obj) => obj.id !== props.row.id);
            var list = supervisorsList.filter((id) => id !== props.row.id);

            setSupervisorsList(list);
            setSuperviseData(data);
          }}
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 0 }}
        >
          Remove
        </Button>
      ),
    },
  ];

  const submitHandler = () => {
    alert("Selected Supervisors" + supervisorsList);
  };

  const updateList = () => {
    console.log(error, supervisorsList.length);
    if (supervisorsList.length > 2) {
      setError(true);
    } else {
      setError(false);
      setSupervisorsList([...supervisorsList, selectedSupervisor._id]);
      setSuperviseData([
        ...superviseData,
        {
          id: selectedSupervisor._id,
          facultyMember: selectedSupervisor.username,
          designation: "supervisor",
        },
      ]);
    }
  };

  return (
    <>
      <Box
        component="form"
        encType="multipart/form-data"
        onSubmit={submitHandler}
        noValidate
        sx={{ minWidth: 120, marginBottom: "15px" }}
      >
        <Box sx={{ marginTop: "16px", display: "grid", placeItems: "center" }}>
          <Button
            onClick={() => {
              updateList();
            }}
            variant="contained"
            color="secondary"
          >
            Add Objective
          </Button>
          <p style={{ marginBottom: "0px", color: red[400] }}>
            {error && "Maximun of 3 supervisors can be added"}
          </p>
        </Box>
      </Box>
      <DataGrid
        getRowId={(row) => {
          row.year;
        }}
        columns={superviseHeader}
        rows={top100Films}
      />
      <Box
        onClick={() => {
          alert(supervisorsList);
        }}
        sx={{ marginTop: "24px", display: "grid", placeItems: "center" }}
      >
        <Button type="submit" variant="contained" color="secondary">
          Done
        </Button>
      </Box>
    </>
  );
}
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
