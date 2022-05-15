import { TableRow } from "@mui/material";
import Button from "@mui/material/Button";
import { AiFillPrinter } from "react-icons/ai";

import React, { useEffect, useState, useRef } from "react";
import "./pdfstyles.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

export default function Course() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div style={{ padding: 30 }}>
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
      <div ref={componentRef} className="main">
        <h5 style={{ paddingBottom: 30 }}>
          <u>Course Category</u>
        </h5>

        <div>
          <div style={{ paddingBottom: 10 }} className="row">
            <div className="col">
              <h6>
                <b>Course Code: </b> CSC-101
              </h6>
            </div>
            <div className="col">
              <h6 style={{ textAlign: "right" }}>
                <b>Pre-Requisite: </b> None
              </h6>
            </div>
          </div>
          <h6 style={{ paddingBottom: 10 }}>
            <b>Course Title: </b> Introduction to ICT
          </h6>
          <h6 style={{ paddingBottom: 20 }}>
            <b>Credit Hours: 3(2, 1) </b>
          </h6>
        </div>
        <div style={{ paddingBottom: 5 }}>
          <h5>Course Objectives: </h5>
          <ul>
            <li>
              To provide basic understanding of information and communication
              technologies (ICTs);
            </li>
          </ul>
        </div>
        <div style={{ paddingBottom: 5 }}>
          <h5>Course Contents: </h5>
          <p>
            This course covers the basics of Information and Communications
            Technologies. Topics include: Overview of ICT; Computing Models;
            Computer Systems & Components; Number Systems & Computer Codes;
            System & Application Software; Introduction to Databases &
            Information Systems
          </p>
        </div>
        <div style={{ paddingBottom: 5 }}>
          <h5>Recommended Books: </h5>
          <ol>
            <li>
              Understanding Computers: Today and Tomorrow, Comprehensive,
              Deborah Morley, Charles S. Parker, Cengage Learning, 2017.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
