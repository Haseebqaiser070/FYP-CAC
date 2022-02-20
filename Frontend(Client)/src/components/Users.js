import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";

export default function Users() {
  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h1 class="mt-4 mb-4">Faculty Members</h1>
      <table class="table" id="list">
        <thead>
          <tr class="d-flex">
            <th class="col-4">User Name</th>
            <th class="col-4">Email</th>
            <th class="col-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr class="d-flex" scope="row">
            <td class="col-4">Sir Tanveer</td>
            <td class="col-4"> tanvir@comsats.edu.pk</td>
            <td class="col-4">
              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
              >
                <AiFillEdit style={{ marginRight: 10 }} />
                Edit
              </Button>

              <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
              >
                <AiFillDelete style={{ marginRight: 10 }} />
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
