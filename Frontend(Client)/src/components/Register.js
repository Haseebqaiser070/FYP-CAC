import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Register() {
  return (
    <div class="container">
      <div class="row ">
        <div class="col-lg-12">
          <div class=" border-0  mt-3">
            <div>
              <h3 class="text-center font-weight-bold my-4">Add Faculty</h3>
            </div>
            <div>
              <form>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <input
                        class="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                      />
                      <label for="inputFirstName">First name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        class="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                      />
                      <label for="inputLastName">Last name</label>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <select class="form-select" aria-label="Degree Level">
                        <option selected>Select Degree Level</option>
                        <option>MS</option>
                        <option>BS</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3 mb-md-0">
                      <select class="form-select" aria-label="Degree Level">
                        <option selected>Allocate Course</option>
                        <option>Intro to Ict</option>
                        <option>Programming Fundamentals</option>
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
                      />
                      <label for="inputPasswordConfirm">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <div class="mt-4 mb-0">
                  <div class="d-grid">
                    <a class="btn btn-primary btn-block" href="login.html">
                      Create Account
                    </a>
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
