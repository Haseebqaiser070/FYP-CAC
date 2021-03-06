import React from "react";
import "../css/styles.css";
import { Link, Outlet } from "react-router-dom";
import AvatarMenu from "../AvatarMenu";
import {
  BsFilePersonFill,
  BsFiles,
  BsFillCalendarWeekFill,
  BsFillFilterCircleFill,
  BsFillHouseDoorFill,
} from "react-icons/bs";

export default function CACnav() {
  return (
    <React.Fragment>
      <div class="bg">
        <nav class="sb-topnav navbar navbar-expand navbar-dark ">
          <a class="navbar-brand ps-3" to="/Dashboard">
            <b>CAC PANEL</b>
          </a>
          <button
            class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
            id="sidebarToggle"
            to="#!"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <AvatarMenu />
          </div>
        </nav>
      </div>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav class="sb-sidenav accordion bg" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
              <div class="nav">
                <div class="sb-sidenav-menu-heading"></div>
                <Link class="nav-link sidenavtext " to="Dashboard">
                  <div class="sb-nav-link-icon">
                    <BsFillHouseDoorFill color="#fff" />
                  </div>
                  Dashboard
                </Link>

                <Link class="nav-link sidenavtext" to="CacInitializedTasks">
                  <div class="sb-nav-link-icon">
                    <BsFillFilterCircleFill color="#fff" />
                  </div>
                  Initialized Tasks
                </Link>
                <Link class="nav-link sidenavtext" to="CacAllTasks">
                  <div class="sb-nav-link-icon">
                    <BsFillFilterCircleFill color="#fff" />
                  </div>
                  All Ongoing Tasks
                </Link>

                <Link class="nav-link sidenavtext" to="CacCourseTask">
                  <div class="sb-nav-link-icon">
                    <BsFilePersonFill color="#fff" />
                  </div>
                  Courses Assigned
                </Link>

                <Link class="nav-link sidenavtext" to="CacCdfTask">
                  <div class="sb-nav-link-icon">
                    <BsFiles color="#fff" />
                  </div>
                  CDF Assigned
                </Link>

                <Link class="nav-link sidenavtext" to="CacSyllabusTask">
                  <div class="sb-nav-link-icon">
                    <BsFiles color="#fff" />
                  </div>
                  Syllabus Assigned
                </Link>

                <Link class="nav-link sidenavtext" to="FacultyMeeting">
                  <div class="sb-nav-link-icon">
                    <BsFillCalendarWeekFill color="#fff" />
                  </div>
                  Meetings
                </Link>
                <Link class="nav-link sidenavtext" to="SetAvailability">
                  <div class="sb-nav-link-icon">
                    <BsFillCalendarWeekFill color="#fff" />
                  </div>
                  Set/Edit Availability
                </Link>
              </div>
            </div>
            <div class="sb-sidenav-footer sidenavtext">
              Comsats University Islamabad
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
