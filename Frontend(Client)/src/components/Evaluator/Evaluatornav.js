import React from "react";
import "../css/styles.css";
import { Link, Outlet } from "react-router-dom";
import Popup from "../AddCourceForm";
import Register from "../Register";
import Users from "../Users";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import AvatarMenu from "../AvatarMenu";

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
          <AvatarMenu />

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
                    <BsBuilding color="#fff" />
                  </div>
                  Dashboard
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
