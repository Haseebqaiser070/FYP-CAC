import React, { useState, useEffect } from "react";
import "../css/styles.css";
import Popup from "../AddCourceForm";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";

export default function CourseRepo() {
    const [isOpen, setIsOpen] = useState(false);
    const [PreCode, setPreCode] = useState("");
    const [Name, setName] = useState("");
    const [SufCode, setSufCode] = useState("");
    const [RepoCourse, setRepoCourse] = useState([]);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    };
    const handleCloseX =()=>{
      setPreCode("");
      setSufCode("");
      setName("");
      togglePopup()
    }
    useEffect(() => {
      getRepoCourse();
    }, []);
  
    const getRepoCourse = async () => {
      const response = await axios.get("http://localhost:4000/RepoCourse/show");
      setRepoCourse(response.data);
    };
  
    const AddRepoCourse = async (e) => {
      e.preventDefault();
    if (PreCode != ""&& SufCode != "" && Name != "") {
        var Code = PreCode + "-" + SufCode  
        await axios.post("http://localhost:4000/RepoCourse/add", {
            Code,
            Name,
            
          });
          setPreCode("");
          setSufCode("");
          setName("");
          getRepoCourse();
          setIsOpen(false);
          
    } 
    else {
          alert("empty values");
        }
    }
    const handleDelete = async (id) => {
      await axios.delete(`http://localhost:4000/RepoCourse/${id}`);
      getRepoCourse();
    };
    
    return (
      <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
        <h1 class="mt-4">Add Cources</h1>
  
        <div class="row cource">
          <div class="col d-flex justify-content-end">
            <button
              class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
              type="button"
              id="cource-btn"
              onClick={togglePopup}
            >
              Add New RepoCourse
            </button>
  
            {isOpen && (
              <Popup
                content={
                  <>
                    <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                      Add New Cource
                    </h4>
                    <form onSubmit={AddRepoCourse}>
                      <div class="row">
                      <div className="mb-3 col-4">
            <label for="course-code" className="form-label">
              Course Code
            </label>
            <div className="row">
              <div className="col">
                <select
                  class="form-select"
                  onChange={(e) => setPreCode(e.target.value)}
                >
                  <option value="" selected disabled hidden>
                    select
                  </option>
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
                  value={SufCode}
                  onChange={(e) => setSufCode(e.target.value)}
                />
              </div>
            </div>
          </div>

                        <div class="mb-3 col col-6">
                          <label for="Repocourse-name" class="form-label">
                            Course Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="Repocourse-name"
                            value={Name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                    </div>
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        class="button btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                      />
                    </form>
                  </>
                }
                handleClose={handleCloseX}
              />
            )}
          </div>
        </div>
  
        <table style={{ textAlign: "center" }} class="table" id="list">
          <thead>
            <tr>
              <th class="col-2" scope="col">
                Cource Code
              </th>
              <th class="col-4" scope="col">
                Course Name
              </th>
              <th class="col-4" scope="col">
                Delete Repo
              </th>
            </tr>
          </thead>
          <tbody>
            {RepoCourse &&
              RepoCourse.map((cor) => {
                return (
                  <tr scope="row" key={cor._id}>
                    <td>{cor.Code}</td>
                    <td>{cor.Name}</td>
                    <td>
                      
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        style={{ marginLeft: 16 }}
                        onClick={() => handleDelete(cor._id)}
                      >
                        <AiFillDelete style={{ marginRight: 10 }} />
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
  