import React, { useState,useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
const[FirstName,setFirstName]=useState("")
const[SecondName,setSecondName]=useState("")
const[Email,setEmail]=useState("")
const[Password,setPassword]=useState("")
const[Degree,setDegree]=useState("")
const[Allocated,setAllocated]=useState("")
const[Courses,setCourses]=useState([])
useEffect(()=>{
  getCourse()  
},[])
const getCourse=async()=>{
  const response=await axios.get("http://localhost:4000/Course/show")
  setCourses(response.data)
}
const hanleSubmit=async(e)=>{
  e.preventDefault()
  setAllocated(Allocated.split(" ")[0])
  if (FirstName != "" && SecondName != "" && Email != "" && Password !="" && Degree != "" && Allocated != "") {
  await axios.post("http://localhost:4000/Faculty/add",{
    FirstName,
    SecondName,
    Email,
    Password,
    Degree,
    Allocated
  })
  setFirstName("")
  setSecondName("")
  setEmail("")
  setPassword("")
  setDegree("")
  setAllocated("")
  }
}
  return (
    <div class="container">
      <div class="row ">
        <div class="col-lg-12">
          <div class=" border-0  mt-3">
            <div>
              <h3 class="text-center font-weight-bold my-4">Add Faculty</h3>
            </div>
            <div>
              <form onSubmit={hanleSubmit}>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputFirstNameName"
                        type="text"
                        placeholder="Enter your firstNameFirstName name"
                        value={FirstName}
                        onChange={(e)=>setFirstName(e.target.value)}       
                      />
                      <label for="inputFirstNameName">FirstName name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        value={SecondName}
                        onChange={(e)=>setSecondName(e.target.value)}
                      />
                      <label for="inputLastName">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <select class="form-select" aria-label="Degree Level" onChange={(e) => setDegree(e.target.value)}>
                        <option selected >Select Degree Level</option>
                        <option>MS</option>
                        <option>BS</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <select class="form-select" aria-label="Degree Level"onChange={(e) => setAllocated(e.target.value)}>
                      <option selected>Allocate Course</option>
                        
                        {Courses.map((course)=>{
                            return(
                              <option key={course._id}>{course.Code}{"  "}{course.Name}</option>
                            )
                       })
                        }
                     
                      </select>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="name@example.com"
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                      <label for="inputEmail">Email address</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputPasswordConfirm"
                        type="password"
                        placeholder="Confirm password"
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <label for="inputPasswordConfirm">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <input
                      type="submit"
                      name="submit"
                      value="Submit"
                      class="button btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
