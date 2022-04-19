import React from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SosCreation() {
  const [Selected, setSelected] = useState([]);
  const [Categories, setCategories] = useState([{CategoryName:"None"}]);
  const [Notification, setNotification] = useState("");
  const [Meeting, setMeeting] = useState("");
  const [MeetDate, setMeetDate] = useState("");
  const [Registrar, setRegistrar] = useState("");
  const {state} = useLocation();
  const {Start,End,Program} = state;
  console.log(Start+End+Program)
  
  useEffect(() => {
    getCat()
  }, []);
  
  const getCat = async () => {
    const res = await axios.get("http://localhost:4000/Category/show");
    const data = await res.data;
    console.log(data)
    setCategories([...data]);
    const arr = data.filter((i) => {
      if (i.Degree == Program) {
        return i;
      }
    })
    console.log(arr)
    setSelected(arr)
  };
  
  const addtoSOS = async (e) => {
    e.preventDefault();
    if(Notification== ""&&
    Meeting==""&&
    MeetDate==""&&
    Registrar==""&&
    Selected.length==0
    ){
      alert("Fill all the fields");

    }
    else{
      await axios.post("http://localhost:4000/SOS/add",{
        Start,
        End,
        Program,  
        Notification,
        Meeting,
        MeetDate,
        Registrar,  
        Selected
      })
      setNotification("")
      setMeeting("")
      setMeetDate("")
      setRegistrar("")
      setSelected([])
    }

  }


  return (
    <div className="container" style={{ height:"100%", width: "100%", padding: 20 }}>
      <div className="container">
        <div className="row card justify-content-center">
          <div className="card-header">
            <h3 className="text-center font-weight-light my-4">
              <b>Create Scheme of Studies</b>
            </h3>
          </div>
          <div>
            <h5 className="my-4">
              <b>Enter Details</b>
            </h5>

            <form onSubmit={addtoSOS}>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="date"
                  value={Notification}
                  onChange={e=>setNotification(e.target.value)}
                  required
                />
                <label htmlFor="Date" className="form-label">
                  Notification Date
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  value={Meeting}
                  onChange={e=>setMeeting(e.target.value)}
                  required
                />
                <label htmlFor="name" className="form-label">
                  Meeting Name
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="date"
                  value={MeetDate}
                  onChange={e=>setMeetDate(e.target.value)}
                  required
                />
                <label htmlFor="MDate" className="form-label">
                  Meeting Date
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="inputName"
                  type="text"
                  value={Registrar}
                  onChange={e=>setRegistrar(e.target.value)}
                  required
                />
                <label htmlFor="name" className="form-label">
                  Registrar Name
                </label>
              </div>
           
          <div>
            <h5 className="my-4">
              <b>Select Courses Corresponding to Categories</b>
            </h5>
            <div className="row card  p-3">
              <div>
                <h6>
                  <b>Category Name</b>
                </h6>
              </div>
              <div>
                <Stack spacing={3} sx={{ width: 500 }}>
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    value={Selected}
                    options={Categories}
                    getOptionLabel={(option) => option.CategoryName}
                    defaultValue={null}
                    onChange={(e, val) => setSelected(val)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Select Categories"
                        placeholder="Select Categories"
                      />
                    )}
                  />
                </Stack>
              </div>
            </div>
            <div className="py-4">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                type="Submit"               
              >
                Create Scheme of Studies
              </Button>
            </div>
          </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
