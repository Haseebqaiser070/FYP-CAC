import React, { useState, useEffect } from "react";
import "../css/styles.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { AiOutlineCheckSquare, AiFillEdit } from "react-icons/ai";
function ActionButtons() {
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
        Create/Edit SOS
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={null}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Submit
      </Button>
    </div>
  );
}

export default function CacSosTask() {
  const [RepoProgram, setRepoProgram] = useState([]);

  useEffect(() => {
    getRepoProgram();
  }, []);

  const getRepoProgram = async () => {
    const response = await axios.get("http://localhost:4000/SOSCreate/get", {
      withCredentials: true,
    });
    setRepoProgram(response.data);
  };
  console.log(RepoProgram)
  const columns = [
    
    {
      field: "Program",
      headerName: "Program",
      renderCell:(index)=>{`${RepoProgram[index]}`},
      flex: 2,
    },

    {
      field: "Action",
      headerName: "Action",
      flex: 2,
      editable: false,
      renderCell: ActionButtons,
    },
  ];
  return (
    <div className="container" style={{ width: "100%", padding: 20 }}>
      <h1 className="py-4">
        <b>SOS Assigned</b>
      </h1>
      <div>
        <DataGrid
          style={{ height: 400, width: "100%" }}
          columns={columns}
          // getRowId={(RepoProgram) => RepoProgram.index}
          rows={RepoProgram}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
