import React, { useState } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../MyHooks/useAuth";
function Home() {
  return (
    <div>
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
        </nav>
      </div>
    </div>
  );
}
