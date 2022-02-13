import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

export default function Users() {
  return (
    <div class="container">
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
              <span class="ms-auto me-0 me-md-3 my-2 my-md-0">
                <a href="#">
                  <AiFillEye size={30} color="#0d6efd" />
                </a>
              </span>

              <button
                class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                type="button"
                id="sos-btn"
              >
                Edit
              </button>
              <button
                class="btn btn-primary ms-auto me-0 me-md-3 my-2 my-md-0"
                type="button"
                id="sos-btn"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
