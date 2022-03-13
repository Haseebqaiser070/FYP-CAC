import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../MyHooks/useAuth";
import Popup from "./AddCourceForm";
import Login from "./Login";
import logo from "./FacultyRoutes/comsats_logo.png";
import {
  BsFillPersonPlusFill,
  BsFiles,
  BsBuilding,
  BsFillGearFill,
  BsFillPeopleFill,
  BsFillBookFill,
} from "react-icons/bs";
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ display: "block", boxSizing: "border-box" }}>
      <div class="bg">
        <nav class="sb-topnav navbar navbar-expand navbar-dark ">
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
          <button
            class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            to="#!"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
              <button
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
            </div>
          </div>
        </nav>
      </div>
      <div className="row hero-textbox">
        <h1>WELCOME TO COMSATS CATALOG PORTAL</h1>
      </div>
      <div>
        <p>
          CIIT Course Catalog Portal is an information and assistance resource
          designed for the CIIT Faculty and Staff. The purpose of this portal is
          to provide a single point of contact for the employees of CIIT. CIIT
          Course Catalog Portal enables employees to find scheme of studies,
          list of courses and course contents. Every possible effort has been
          made to ensure that the information presented in this Catalog is
          correct. However, this information is subject to change by appropriate
          action of the competent authority of CIIT.
        </p>
      </div>
    </div>
  );
}
