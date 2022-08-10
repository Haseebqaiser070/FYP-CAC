import React from "react";
import "../css/styles.css";
import { Link, Outlet } from "react-router-dom";

import axios from "axios";
import AvatarMenu from "../AuxillaryComponents/AvatarMenu";

import {
  BsFillPersonPlusFill,
  BsFiles,
  BsBuilding,
  BsFillGearFill,
  BsFillPeopleFill,
  BsFillBookFill,
} from "react-icons/bs";
import useAuth from "../../MyHooks/useAuth";

export default function FacultyNavigation() {
  return (
    <React.Fragment>
      <div class="bg">
        <nav class="sb-topnav navbar navbar-expand navbar-dark ">
          <a class="navbar-brand ps-3" to="/Dashboard">
            <b>Evaluator</b>
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
            <div
              style={{
                height: "calc(100vh - 56px)",
                overflow: "auto",
              }}
              class="sb-sidenav-menu"
            >
              <div class="nav">
                <div class="sb-sidenav-menu-heading"></div>
                {/* <Link class="nav-link sidenavtext " to="Dashboard">
                  <div class="sb-nav-link-icon">
                    <BsBuilding color="#fff" />
                  </div>
                  Dashboard
                </Link> */}

                <Link class="nav-link sidenavtext " to="sos">
                  <div class="sb-nav-link-icon">
                    <BsBuilding color="#fff" />
                  </div>
                  Evaluate Folder
                </Link>
              </div>
              <div
                style={{ position: "fixed", left: "8px", bottom: "8px" }}
                class="sb-sidenav-footer sidenavtext"
              >
                Comsats University Islamabad
              </div>
            </div>
          </nav>
        </div>
        <div
          style={{
            width: "100%",
            height: "calc(100vh - 56px)",
            overflow: "auto",
          }}
        >
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
