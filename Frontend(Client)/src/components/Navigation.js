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
import Sidebar from "./Sidebar";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { setAdmin, setFaculty } = useAuth();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "#0054a6",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <Link to="Dashboard">
                    <ListItemButton>
                      <ListItemIcon>
                        <HomeIcon color="#fff" />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                    </ListItemButton>
                  </Link>

                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <ArticleIcon />
                    </ListItemIcon>
                    {/* Courses */}
                    <ListItemText primary="Courses" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link to="AddCourse">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <ArticleIcon />
                          </ListItemIcon>
                          <ListItemText primary="All Courses" />
                        </ListItemButton>
                      </Link>

                      <Link to="InitCourse">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <BsFillPeopleFill />
                          </ListItemIcon>
                          <ListItemText primary="Initilize New Course" />
                        </ListItemButton>
                      </Link>

                      <Link to="AllCategories">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <BsFillPeopleFill />
                          </ListItemIcon>
                          <ListItemText primary="Course Categories" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                  {/* Tasks */}
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>

                    <ListItemText primary="Tasks" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link to="Tasks">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <BsFillPeopleFill />
                          </ListItemIcon>
                          <ListItemText primary="Create Tasks" />
                        </ListItemButton>
                      </Link>

                      <Link to="ReturnedTasks">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <BsFillPeopleFill />
                          </ListItemIcon>
                          <ListItemText primary="Submitted Tasks" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                  <Link to="AllSchemeofStudies">
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Scheme of Studies" />
                    </ListItemButton>
                  </Link>
                  <Link to="CourseFolderDeadlines">
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Course Folder Deadlines" />
                    </ListItemButton>
                  </Link>
                  {/* Users */}
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>

                    <ListItemText primary="Users" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link to="Users">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <BsFillPeopleFill />
                          </ListItemIcon>
                          <ListItemText primary="All Users" />
                        </ListItemButton>
                      </Link>

                      <Link to="FacultyMembers">
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <BsFillPeopleFill />
                          </ListItemIcon>
                          <ListItemText primary="Faculty Members" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>

                  <Link to="Meeting">
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="CAC Meeting" />
                    </ListItemButton>
                  </Link>
                  <Link to="Flip">
                    <ListItemButton>
                      <ListItemIcon>
                        <SendIcon />
                      </ListItemIcon>
                      <ListItemText primary="Flipbook" />
                    </ListItemButton>
                  </Link>
                </List>
              </div>
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
