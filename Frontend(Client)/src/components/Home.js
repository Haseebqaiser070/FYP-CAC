import React, { useState } from "react";
import "./css/styles.css";
import axios from "axios";
import useAuth from "../MyHooks/useAuth";
import Popup from "./AddCourceForm";
import Login from "./Login";
// import logo from "./FacultyRoutes/comsats_logo.png";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import comsats from "./css/comsats.jpg";
import {
  BsFillPersonPlusFill,
  BsFiles,
  BsBuilding,
  BsFillGearFill,
  BsFillPeopleFill,
  BsFillBookFill,
} from "react-icons/bs";
import { Button } from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light">
        <div
          style={{
            backgroundColor: "#0054a6",
            paddingTop: 15,
            paddingBottom: 15,
          }}
          class="container-fluid"
        >
          <div class="container-fluid">
            <a class="navbar-brand " href="#">
              {/* <img
                src={logo}
                alt="Comsats Logo"
                width="80"
                height="80"
                class="d-inline-block align-text-center"
              ></img> */}
              <b style={{ marginLeft: 15 }}>Comsats University Islamabad</b>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
              <div class="input-group">
                <button
                  style={{ backgroundColor: "#fff", color: "#000" }}
                  class="btn btn-primary"
                  id="btnNavbarSearch"
                  type="button"
                  onClick={togglePopup}
                >
                  <span style={{ marginRight: 10 }}>
                    <BsFillPersonPlusFill />
                  </span>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header>
        <div className="row hero-textbox">
          <h1>WELCOME TO COMSATS CATALOG PORTAL</h1>
        </div>
      </header>

      {isOpen && (
        <Popup
          content={
            <>
              <Login />
            </>
          }
          handleClose={togglePopup}
        />
      )}

      <div className="row section">
        <div className="col-8">
          <p>
            <h5>
              <b>About:</b>
            </h5>
            CIIT Course Catalog Portal is an information and assistance resource
            designed for the CIIT Faculty and Staff. The purpose of this portal
            is to provide a single point of contact for the employees of CIIT.
            CIIT Course Catalog Portal enables employees to find scheme of
            studies, list of courses and course contents. <br></br> Every
            possible effort has been made to ensure that the information
            presented in this Catalog is correct. However, this information is
            subject to change by appropriate action of the competent authority
            of CIIT.
          </p>
          <div style={{ padding: 20 }} className="row">
            <div
              style={{
                backgroundColor: "#0054a6",
                padding: 12,
                textAlign: "center",
              }}
            >
              <h5 style={{ color: "#fff" }}>Find Scheme of Studies</h5>
            </div>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Year</InputLabel>
              <Select
                className="mb-4"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Year"
              >
                <MenuItem>2012-2014</MenuItem>
                <MenuItem>2016-2020</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Program</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"
              >
                <MenuItem>Computer Science</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button className="btn btn-primary">VIEW SCHEME OF STUDIES</button>
        </div>
        <div
          style={{ backgroundColor: "#0054a6", color: "#fff", padding: 30 }}
          className="col-4 home_notification"
        >
          <h5 className="mb-4">
            <b>Notifications</b>
          </h5>
          <ul className="notification_list">
            <li>
              2-Day Hands-on Training Workshop on Next Generation Sequencing
              Data Analysis
            </li>
            <li>
              2-Day Hands-on Training Workshop on Next Generation Sequencing
              Data Analysis
            </li>
            <li>
              2-Day Hands-on Training Workshop on Next Generation Sequencing
              Data Analysis
            </li>
            <li>
              2-Day Hands-on Training Workshop on Next Generation Sequencing
              Data Analysis
            </li>
            <li>
              2-Day Hands-on Training Workshop on Next Generation Sequencing
              Data Analysis
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
