import React from "react";
import "./css/styles.css";
import { Link, Outlet } from "react-router-dom";
import Popup from "./AddCourceForm";
import Register from "./Register";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import AvatarMenu from "./AvatarMenu";
import Stack from "@mui/material/Stack";

import {
  BsFillPersonPlusFill,
  BsFiles,
  BsBuilding,
  BsFillGearFill,
  BsFillPeopleFill,
  BsFillBookFill,
  BsPersonCircle,
} from "react-icons/bs";
import useAuth from "../MyHooks/useAuth";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setAdmin, setFaculty } = useAuth();

  axios.defaults.withCredentials = true;

  const handleLogout = async (e) => {
    await axios.post("http://localhost:4000/Auth/logout");
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
            <b>Admin</b>
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
          <AvatarMenu />
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

                <Link className="nav-link sidenavtext" to="InitCourse">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  Intialize Course
                </Link>
                <Link className="nav-link sidenavtext" to="AddNewCourse">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  Add New Courses
                </Link>

                <Link className="nav-link sidenavtext" to="AllCategories">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  All Course Categories
                </Link>

                <Link className="nav-link sidenavtext" to="AddCourse">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  Courses
                </Link>

                <Link className="nav-link sidenavtext" to="AllSchemeofStudies">
                  <div className="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  All Scheme of Studies
                </Link>

                <Link className="nav-link sidenavtext" to="Tasks">
                  <div className="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  Create Tasks
                </Link>
                <Link className="nav-link sidenavtext" to="OngoingTasks">
                  <div className="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  Submitted Tasks
                </Link>

                <Link className="nav-link sidenavtext" to="Users">
                  <div className="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  All Users
                </Link>

                <Link className="nav-link sidenavtext" to="FacultyMembers">
                  <div className="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  Faculty Members
                </Link>

                <Link className="nav-link sidenavtext" to="Meeting">
                  <div className="sb-nav-link-icon">
                    <BsPersonCircle color="#fff" />
                  </div>
                  Meeting
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
