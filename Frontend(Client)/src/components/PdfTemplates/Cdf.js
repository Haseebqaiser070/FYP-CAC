import Button from "@mui/material/Button";
import { AiFillPrinter } from "react-icons/ai";

import React, { useEffect, useState, useRef } from "react";
import "./Cdfstyles.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import comsatslogo from "../CACMember/comsats_logo.png";

export default function Cdf() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div style={{ padding: 30 }} className="main">
        <div className="d-flex justify-content-end">
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={handlePrint}
          >
            <AiFillPrinter style={{ marginRight: 10 }} />
            Print
          </Button>
        </div>
        <div className="d-flex row justify-content-center mb-4">
          <div className="col-1">
            <img src={comsatslogo} width="130px" height="130px"></img>
          </div>
          <div className="col-11">
            <h1>COMSATS University Islamabad</h1>
            <h1>Department of Computer Science</h1>
            <h1>Course Description Form (CDF)</h1>
          </div>
        </div>
        <div style={{ borderColor: "#000" }}>
          <div style={{ backgroundColor: "#000", color: "#fff", padding: 4 }}>
            <h4 className="head">Course Information</h4>
          </div>
          <div className="row">
            <div className="col-md-6">
                

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
