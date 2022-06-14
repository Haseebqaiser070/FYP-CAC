import React from "react";
import "./css/styles.css";
import { Link, Outlet } from "react-router-dom";
import Popup from "./AddCourceForm";
import Register from "./Register";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import AvatarMenu from "./AvatarMenu";

import {
  BsFillPersonPlusFill,
  BsFillPeopleFill,
  BsFillBookFill,
  BsFillHouseDoorFill,
  BsFillBookmarkPlusFill,
  BsListCheck,
  BsListTask,
  BsFillFileCheckFill,
  BsFillFilePdfFill,
  BsFillFolderFill,
  BsFillPersonFill,
  BsFillCalendarWeekFill,
  BsBookHalf,
} from "react-icons/bs";
import useAuth from "../MyHooks/useAuth";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
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
      <div
        className="bg"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        }}
      >
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
                style={{ backgroundColor: "#fff", color: "#0054a6" }}
                className="btn btn-primary"
                id="btnNavbarSearch"
                type="button"
                onClick={() => setOpen(true)}
              >
                <span style={{ marginRight: 10 }}>
                  <BsFillPersonPlusFill />
                </span>
                <b>Add Faculty</b>
              </button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Register />
                </Box>
              </Modal>
            </div>
          </div>
          <AvatarMenu />
        </nav>
      </div>

      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            style={{
              boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px",
            }}
            className="sb-sidenav accordion bg"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading"></div>
                <Link class="nav-link sidenavtext " to="Dashboard">
                  <div class="sb-nav-link-icon">
                    <BsFillHouseDoorFill color="#fff" />
                  </div>
                  Dashboard
                </Link>
                <Link class="nav-link sidenavtext " to="AddProgram">
                  <div class="sb-nav-link-icon">
                    <BsFillHouseDoorFill color="#fff" />
                  </div>
                  Add Program
                </Link>
                <Link class="nav-link sidenavtext " to="AddCourse">
                  <div class="sb-nav-link-icon">
                    <BsFillBookFill color="#fff" />
                  </div>
                  All Courses
                </Link>
                <Link class="nav-link sidenavtext " to="InitCourse">
                  <div class="sb-nav-link-icon">
                    <BsFillBookmarkPlusFill color="#fff" />
                  </div>
                  Initialize New Course
                </Link>
                <Link class="nav-link sidenavtext " to="AllCategories">
                  <div class="sb-nav-link-icon">
                    <BsListCheck color="#fff" />
                  </div>
                  Course Categories
                </Link>

                <Link class="nav-link sidenavtext " to="InitializeTask">
                  <div class="sb-nav-link-icon">
                    <BsListTask color="#fff" />
                  </div>
                  Initialize Task
                </Link>
                <Link class="nav-link sidenavtext " to="Tasks">
                  <div class="sb-nav-link-icon">
                    <BsListTask color="#fff" />
                  </div>
                  Create Tasks
                </Link>
                <Link class="nav-link sidenavtext " to="ReturnedTasks">
                  <div class="sb-nav-link-icon">
                    <BsFillFileCheckFill color="#fff" />
                  </div>
                  Submitted Tasks
                </Link>
                <Link class="nav-link sidenavtext " to="AllSchemeofStudies">
                  <div class="sb-nav-link-icon">
                    <BsFillFilePdfFill color="#fff" />
                  </div>
                  Scheme of Studies
                </Link>
                <Link class="nav-link sidenavtext " to="CourseFolderDeadlines">
                  <div class="sb-nav-link-icon">
                    <BsFillFolderFill color="#fff" />
                  </div>
                  Course Folder Deadlines
                </Link>
                <Link class="nav-link sidenavtext " to="Users">
                  <div class="sb-nav-link-icon">
                    <BsFillPeopleFill color="#fff" />
                  </div>
                  All Users
                </Link>
                <Link class="nav-link sidenavtext " to="FacultyMembers">
                  <div class="sb-nav-link-icon">
                    <BsFillPersonFill color="#fff" />
                  </div>
                  FacultyMembers
                </Link>

                <Link class="nav-link sidenavtext " to="Evaluators">
                  <div class="sb-nav-link-icon">
                    <BsFillPersonFill color="#fff" />
                  </div>
                  Evaluators
                </Link>

                <Link class="nav-link sidenavtext " to="Meeting">
                  <div class="sb-nav-link-icon">
                    <BsFillCalendarWeekFill color="#fff" />
                  </div>
                  CAC Meeting
                </Link>
                <Link
                  class="nav-link sidenavtext "
                  to="ViewCacMemberAvailabilty"
                >
                  <div class="sb-nav-link-icon">
                    <BsFillCalendarWeekFill color="#fff" />
                  </div>
                  CAC Member Availability
                </Link>
                <Link class="nav-link sidenavtext " to="Flip">
                  <div class="sb-nav-link-icon">
                    <BsBookHalf color="#fff" />
                  </div>
                  Flipbook
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
