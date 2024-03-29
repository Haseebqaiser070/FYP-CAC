import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { muiAbtn, muibtn } from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const columns = [
  {
    field: "Program",
    headerName: "Program",
    flex: 1,
  },
  {
    field: "Course",
    headerName: "Course",
    flex: 1,
  },
  {
    field: "Faculty",
    headerName: "Faculty",
    flex: 1,
  },
  {
    field: "Evaluator",
    headerName: "Evaluator",
    flex: 1,
  },

  {
    field: "actions",
    headerName: "Actions",
    flex: 1,
    editable: false,
    renderCell: HandleButton
  },
];
function HandleButton(row){
  const navigate=useNavigate()
  const senddata=(roww)=>{
    console.log("helllo",roww)
    navigate('/Admin/Returned',{state:roww.row})
  }
  return(
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={muiAbtn}
        onClick={()=>{
          senddata(row)
          //navigate('/Faculty/Returned',{state:{row:row}})
        }}
      >
        View Folder
      </Button>
    </>

  )
}
export default function AllCourseFolder() {
  const [Rows, setRows] = useState([]);
  const [Posts, setPosts] = useState([]);
  const userid= JSON.parse(localStorage.getItem('user'))
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/EvalFolders/showfolder`);
    console.log(res.data);
    setPosts(res.data);
    var row=[];
    var index=0
   res.data.map((val, id) => {
        
        row[id]={_id:val._id,id: id, Program: val.Program, Course: val.Course.Name+"-"+val.Course.Code, Evaluator:val.Evaluator?.Name,Faculty:val.User.Name,data:val}
        
      })
  console.log("uajh",row)
  setRows(row);
  };

 
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>ALL COURSE FOLDERS</b>
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
