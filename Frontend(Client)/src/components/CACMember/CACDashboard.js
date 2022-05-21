import React,{useState,useEffect} from "react";
import "../css/styles.css";
import logo from "./comsats_logo.png";
import axios from "axios"
export default function CACDashboard() {
  
  const[User,setUser]=useState("")
  
    useEffect(()=>{
        getUser()
      },[])
    const getUser=async()=>{
        const response = await axios.get("http://localhost:4000/Auth/check",{withCredentials:true})
        setUser(response.data)
        console.log("CAC" ,response.data)
    }
      
  
    return (
    <div style={{ height: 760, width: "100%", padding: 30 }}>
      <div d-flex justify-content-center>
        <div className="row  align-items-center">
          <div className="col-2">
            <img src={logo} alt="Logo" height={130} width={130} />
          </div>
          <div className="col-10">
            <h2>
              <b>Comsats University Islamabad</b>
            </h2>
          </div>
        </div>
      </div>

      <div className="row" style={{ padding: 20 }}>
        <div style={{ padding: 30 }} className="col col-8">
          <h4 style={{ textAlign: "center", paddingBottom: 15 }}>
            <b>CAC Member Profile</b>
          </h4>
          <div>
            <form>
              <div className=" mb-3 mb-md-0 mt-3">
                <label>
                  <b>Name</b>
                </label>
                <input className="form-control" type="text" value={User.Name} onChange={null} />
              </div>
              
              <div className=" mb-3 mb-md-0 mt-3">
                <label>
                  <b>Email Address</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={User.Email}
                  onChange={null}
                />
              </div>
              <div className=" mb-3 mb-md-0 mt-3">
                <label>
                  <b>Cources Allocated</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={"Intro to ICT, Programming Fundamentals"}
                  onChange={null}
                />
              </div>

              <div className=" mb-3 mb-md-0 mt-3">
                <label>
                  <b>Password</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={User.Password}
                  onChange={null}
                />
              </div>

              <div className="mt-4 mb-0">
                <div className="d-grid">
                  <input
                    type="submit"
                    name="submit"
                    value="EDIT PROFILE"
                    className="button btn block btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col col-4 notification"
          style={{ padding: 30, backgroundColor: "#ddeeff" }}
        >
          <h4 style={{ textAlign: "center", paddingBottom: 15 }}>
            <b>Notifications</b>
          </h4>
          <ul>
            <li>Admin Sent Revsion for CDF</li>
            <li>Admin Sent Revsion for CDF</li>
            <li>Admin Sent Revsion for CDF</li>
            <li>Admin Sent Revsion for CDF</li>
            <li>Admin Sent Revsion for CDF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
