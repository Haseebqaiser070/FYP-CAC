import React, { useState,useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./AddCourceForm";
import axios from 'axios';

export default function AddCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const [Code, setCode] = useState('');
  const [Name, setName] = useState('');
  const [Credit, setCredit] = useState('');
  const[Course,setCourse]=useState('')
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    getCourse();
  },[])

  const getCourse = async()=>{
    const response = await axios.get('http://localhost:4000/Course/show')
    setCourse(response.data);  
  }
  const AddCourse = async (e) =>{
    e.preventDefault()
    console.log('here1')
    if (Code!='' && Name!="" && Credit!='') {
      console.log('herebefore')
      await axios.post('http://localhost:4000/Course/add', {Code,Name,Credit})
      setCode('')
      setName('')
      setCredit('')
      console.log('here2')
      getCourse();  
      togglePopup();
    }
    else {
      alert('empty values');
      }
    };
  
  return (
    <div class="container">
      <h1 class="mt-4">Add Cources</h1>

      <div class="row cource">
        <div class="col d-flex justify-content-end">
          <button
            class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
            type="button"
            id="cource-btn"
            onClick={togglePopup}
          >
            Add New Course
          </button>

          {isOpen && (
            <Popup
              content={
                <>
                  <h4 style={{ textAlign: "center", marginBottom: 30 }}>
                    Add New Cource
                  </h4>
                  <form onSubmit={AddCourse}>
                    <div class="mb-3">
                      <label for="course-code" class="form-label">
                        Enter Course Code
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="course-code"
                        onChange={(e)=>setCode(e.target.value)}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="course-name" class="form-label">
                        Enter Course Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="course-name"
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>

                    <div class="mb-3">
                      <label for="credit-hour" class="form-label">
                        Enter Credit Hour
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="credit-hour"
                        max="4"
                        onChange={(e)=>setCredit(e.target.value)}
                      />
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
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>

      <table class="table" id="list">
        <thead>
          <tr>
            <th scope="col">Cource Code</th>
            <th scope="col">Course Name</th>
            <th scope="col">Credit Hour</th>
          </tr>
        </thead>
        <tbody>
          
        {Course && Course.map((cor)=>{
          return(
            <tr scope="row" key={cor._id}>
              <td>{cor.Code}</td>
              <td>{cor.Name}</td>
              <td>{cor.Credit}</td>
            </tr>  
          )
        })}
        </tbody>
      </table>
    </div>
  );
}
