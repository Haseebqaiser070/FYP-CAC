import React, { useState, useEffect } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import {
  Autocomplete,
  Card,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";

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

export default function SO_BTL_Level() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{
    setOpen(false)
    setGA("")
    setSO("")
    setUpid("")
  }

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true)
   ;
  const handleClose1 = () =>{
    setOpen1(false)
    setBTL("")
    setUpid("")
  };

  const [GA, setGA] = useState("");
  const [SO, setSO] = useState("");
  const [BTL, setBTL] = useState("");
  const [SORow, setSORow] = useState("");
  const [BTLRow, setBTLRow] = useState("");
  const [Upid, setUpid] = useState("");
  
  axios.defaults.withCredentials = true;

  function ActionButton1({row}) {
    return (
      <>
        <Tooltip title="Edit" placement="top-start">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, padding: 10 }}
              onClick={()=>{
                setGA(row.GA)
                setSO(row.SO)
                setUpid(row._id)
                handleOpen()
              }}
          >
            <AiFillEdit />
          </Button>
        </Tooltip>
        <Tooltip title="Delete" placement="top-start">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, padding: 10 }}
            onClick={async()=>{
              await axios.delete(`http://localhost:4000/SOBTL/SO/${row._id}`);
              getSORows()
            }
           }
          >
            <AiFillDelete />
          </Button>
        </Tooltip>
      </>
    );
  }
  function ActionButton2({row}) {
    return (
      <>
        <Tooltip title="Edit" placement="top-start">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, padding: 10 }}
              onClick={()=>{
                setBTL(row.BTL)
                setUpid(row._id)
                handleOpen1()
              }}
          >
            <AiFillEdit />
          </Button>
        </Tooltip>
        <Tooltip title="Delete" placement="top-start">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16, padding: 10 }}
            onClick={async()=>{
               await axios.delete(`http://localhost:4000/SOBTL/BTL/${row._id}`);
               getBTLRows()
              }
            }
          >
            <AiFillDelete />
          </Button>
        </Tooltip>
      </>
    );
  }

  useEffect(() => {
    getSORows();
    getBTLRows();
    
  }, []);
 
  const getSORows = async () => {
    const ress = await axios.get("http://localhost:4000/SOBTL/showSO");
    const dataa = await ress.data;
    setSORow([...dataa]);
  };

  const getBTLRows = async () => {
    const res = await axios.get("http://localhost:4000/SOBTL/showBTL");
    const data = await res.data;
    setBTLRow([...data]);
  }
  const ADDSO = async (e) => {
    e.preventDefault();
  
    if (SO!=""&&GA!=""&&Upid=="") {
      const Number=SORow.length+1
      const res = await axios.post("http://localhost:4000/SOBTL/addSO", {
        Number,GA,SO        
      });
      getSORows()
      setSO("")
      setGA("")
    }
    else if (SO!=""&&GA!=""&&Upid!="") {
      const res = await axios.put(`http://localhost:4000/SOBTL/SO/${Upid}`, {
        GA,SO        
      });
      getSORows()
      setSO("")
      setGA("")
      setUpid("")
      setOpen(false)
    }

    else{
      alert("missing fields")
    }
  }
  const addBTL = async (e) => {
    e.preventDefault();

    if (BTL!=""&&Upid=="") {
      const Number = BTLRow.length+1
      const res = await axios.post("http://localhost:4000/SOBTL/addBTL", {
        Number,BTL        
      });
      getBTLRows()
      setBTL("")
    }
    else if (BTL!=""&&Upid!="") {
      const res = await axios.put(`http://localhost:4000/SOBTL/BTL/${Upid}`, {
        BTL 
      });
      getBTLRows()
      setBTL("")
      setUpid("")
      setOpen1(false)
    }
    
    else{
      alert("missing fields")
    }
  }  
  const SOcolumns = [
    {
      field: "Number",
      headerName: "Sr#",
      width: 300,
    },

    {
      field: "SO",
      headerName: "SO Description",
      width: 300,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 300,
      editable: false,
      renderCell: ActionButton1,
    },
  ];

  const BTLcolumns = [
    
    {
      field: "Number",
      headerName: "Sr#",
      width: 200,
    },
    
    {
      field: "BTL",
      headerName: "BTL LEVEL",
      width: 200,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 300,
      editable: false,
      renderCell: ActionButton2,
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: 50,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Card style={{ padding: 50, borderRadius: 30 }}>
          <h1 className="py-4 my-2">
            <b>ADD SO AND BTL LEVELS</b>
          </h1>
          <div className="d-flex justify-content-end mb-4 pb-2">
            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{ marginTop: 16, marginRight: 15 }}
              onClick={handleOpen}
            >
              <AddIcon style={{ marginRight: "6px" }} />
              ADD NEW SO
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              style={{ marginTop: 16 }}
              onClick={handleOpen1}
            >
              <AddIcon style={{ marginRight: "6px" }} />
              ADD NEW BTL Level
            </Button>
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={ADDSO}>
                <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>
                <div>
                  <FormControl fullWidth size="medium">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="Graduate Outcome"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={GA}
                      onChange={(e) => setGA(e.target.value)}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl fullWidth size="medium">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="SO Description"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={SO}
                      onChange={(e) => setSO(e.target.value)}
                    />
                  </FormControl>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  style={{ marginTop: 16 }}
                >
                  <AiFillEdit style={{ marginRight: 10 }} />
                  {Upid==""?(<>Add SO</>):(<>Update SO</>)}
                </Button>
              </form>
            </Box>
          </Modal>
          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <form onSubmit={addBTL}>
                <Box mb={3} style={{ display: "flex", justifyContent: "end" }}>
                  <CloseIcon
                    onClick={handleClose1}
                    style={{ cursor: "pointer", color: "gray" }}
                  />
                </Box>

                <div>
                  <FormControl fullWidth size="medium">
                    <TextField
                      className="mb-4"
                      id="outlined-basic"
                      label="BTL Level"
                      variant="outlined"
                      size="small"
                      fullWidth
                      value={BTL}
                      onChange={(e) => setBTL(e.target.value)}
                    />
                  </FormControl>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  type="submit"
                  style={{ marginTop: 16 }}
                >
                  <AiFillEdit style={{ marginRight: 10 }} />
                  {Upid==""?(<>Add BTL LEVEL</>):(<>Update BTL LEVEL</>)}
                </Button>
              </form>
            </Box>
          </Modal>
          <div className="row">
            <div className="col-md-6">
              <DataGrid
                style={{ height: "60vh", width: "100%" }}
                columns={SOcolumns}
                rows={SORow}
                getRowId={(Rows) => Rows._id}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
            <div className="col-md-6">
              <DataGrid
                style={{ height: "60vh", width: "100%" }}
                columns={BTLcolumns}
                rows={BTLRow}
                getRowId={(Rows) => Rows._id}
                pageSize={10}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
              />
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
