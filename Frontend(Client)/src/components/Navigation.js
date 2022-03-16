import React from "react";
import "./css/styles.css";
import { Link, Outlet } from "react-router-dom";
import Popup from "./AddCourceForm";
import Register from "./Register";
import Users from "./Users";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import {
  BsFillPersonPlusFill,
  BsFiles,
  BsBuilding,
  BsFillGearFill,
  BsFillPeopleFill,
  BsFillBookFill,
} from "react-icons/bs";
import useAuth from "../MyHooks/useAuth";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setAdmin, setFaculty, Admin, Faculty } = useAuth();

  const handleLogout = (e) => {
    setAdmin(false);
    setFaculty(false);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div className="bg">
        <nav className="sb-topnav navbar navbar-expand navbar-dark ">
          <a className="navbar-brand ps-3" to="/Dashboard">
            <b>CAC PANEL</b>
          </a>
          <button
            className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            to="#!"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
              <button
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
                onClick={togglePopup}
              >
                <span style={{ marginRight: 10 }}>
                  <BsFillPersonPlusFill />
                </span>
                Add Faculty
              </button>

              {isOpen && (
                <Popup
                  content={
                    <>
                      <Register />
                    </>
                  }
                  handleClose={togglePopup}
                />
              )}
            </div>
          </div>
          <FormControl>
            <Select style={{ color: "#fff", border: "none" }}>
              <Link to="Dashboard">
                <MenuItem value={10}>Profile</MenuItem>
              </Link>
              <MenuItem value={20} onClick={handleLogout}>
                Logout
              </MenuItem>
            </Select>
          </FormControl>
        </nav>
      </div>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav className="sb-sidenav accordion bg" id="sidenavAccordion">
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading"></div>
                <Link className="nav-link sidenavtext " to="Dashboard">
                  <div className="sb-nav-link-icon">
                    <BsBuilding color="#fff" />
                  </div>
                  Dashboard
                </Link>

                <Link className="nav-link sidenavtext" to="AddNewCourse">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  Add New Courses
                </Link>

                <Link className="nav-link sidenavtext" to="AddCourse">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  Courses
                </Link>

                <Link className="nav-link sidenavtext" to="Users">
                  <div className="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  Faculty Members
                </Link>

                <Link className="nav-link sidenavtext" to="Meeting">
                  <div className="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  Meeting
                </Link>

                <Link className="nav-link sidenavtext" to="CourseFolder">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  Course Folder
                </Link>
              </div>
            </div>
            <div className="sb-sidenav-footer sidenavtext">
              Comsats University Islamabad
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
