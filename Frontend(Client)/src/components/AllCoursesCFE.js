import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Popup from "./AddCourceForm";
import axios from "axios";
import Button from "@mui/material/Button";
import { AiFillEdit } from "react-icons/ai";

export default function AllCoursesCFE() {
  const [Course, setCourse] = useState([]);
  const navigate = useNavigate();
  useEffect(async () => {
    await getCourse();
  }, []);

  const getCourse = async () => {
    try {
      const response = await axios.get("http://localhost:4000/Course/show");
      setCourse(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">Add Cources</h1>

      <table style={{ textAlign: "center" }} className="table" id="list">
        <thead>
          <tr>
            <th className="col-2" scope="col">
              Cource Code
            </th>
            <th className="col-4" scope="col">
              Course Name
            </th>
            <th className="col-2" scope="col">
              Credit Hour
            </th>
            <th className="col-4" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Course &&
            Course?.map((cor) => {
              return (
                <tr scope="row" key={cor._id}>
                  <td>{cor.Code}</td>
                  <td>{cor.Name}</td>
                  <td>{cor.Credit}</td>
                  <td>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      style={{ marginLeft: 16 }}
                      onClick={null}
                    >
                      <AiFillEdit style={{ marginRight: 10 }} />
                      View
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
