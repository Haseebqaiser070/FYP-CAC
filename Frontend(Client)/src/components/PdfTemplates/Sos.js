import { TableRow } from "@mui/material";
import Button from "@mui/material/Button";
import { AiFillPrinter } from "react-icons/ai";

import React, { useEffect, useState, useRef } from "react";
import "./pdfstyles.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

export default function Sos() {
  const { state } = useLocation();
  const [sos, setSos] = useState([]);

  console.log(state);

  useEffect(() => {
    const getSOS = async () => {
      const { data } = await axios.get(
        `http://localhost:4000/SOS/${state._id}`
      );
      console.log("data", data);
      let courseArray = data.Selected;
      console.log("Arayyyyy", courseArray);
      var creditHours = 0;
      //   for (let i = 0; i <= ; i++) {
      //     creditHours =
      //       creditHours + parseInt(data.Selected.EnteredCourse.Credit);
      //   }
      //   console.log("Credits", creditHours);
      setSos(data);
    };
    getSOS();
  }, []);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
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
          {/* <div>
            <h1>COMSATS University Islamabad</h1>
            <h3>Registrar Secretariat, Academic Unit (PS)</h3>
            <p style={{ textAlign: "center" }}>*****</p>
          </div> */}

          {/* <div className=" row">
            <div className="col">
              <p>No. CUI-Reg/Notif- /21/ </p>
            </div>
            <div className="d-flex col justify-content-end">
              <p> Date: {sos.Notification}</p>
            </div>
          </div> */}
          <div>
            {/* <h2>NOTIFICATION</h2> */}
            <h2>
              <u>Bachelor of Science in {sos.Program} </u>
            </h2>
            {/* <p>
              Academic Council in its {sos.Meeting} held on {sos.MeetDate}, on
              recommendations of 28th meeting of Board of Faculty of Information
              Sciences and Technology approved following revised Scheme of
              Studies of Bachelor of Science in {sos.Program} effective from{" "}
              {sos.Start}
            </p> */}
          </div>
          <div>
            <h4>Nomenclature: Bachelor of Science in {sos.Program}</h4>
            <ol>
              <li>Minimum Duration in year: 04 Years </li>
              <li>Minimum No. of Semesters: 08</li>
            </ol>
          </div>
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>3. Course Work</th>
                  <th>(Min No. of Courses)</th>
                  <th>(Min No. of Credit Hours)</th>
                </tr>
                <tr>
                  <th colspan="3">
                    Area Covered in Bachelor of Science in {sos.Program}
                  </th>
                </tr>
              </thead>
              <tbody>
                {sos?.Selected?.map((category, index) => (
                  <tr>
                    <td>
                      {index + 1}.&nbsp;{category.CategoryName}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      {category?.EnteredCourse?.length}
                    </td>
                    <td style={{ textAlign: "center" }}>{}</td>
                  </tr>
                ))}

                <tr>
                  <td style={{ textAlign: "right" }}>
                    <b>Total</b>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <b>26</b>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <b>85</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h5>Note:</h5>
            <ol>
              <li>
                CSE350-Topics in Software Engineering - I and CSE483-Topics in
                Software Engineering - II may be allowed to offer upon getting
                prior approval of the course contents from the Head of
                Department (HoD).{" "}
              </li>
              <li>
                2.The Regulations relating to Undergraduate Degree Programs
                approved by the Competent Authority and amended from time to
                time shall be applicable.
              </li>
            </ol>
          </div>
          <div style={{ marginTop: 40 }} className="row ">
            <div className="col">
              <h5>Encl: ( pages in total including this page)</h5>
            </div>
            <div
              style={{ textAlign: "center" }}
              className="d-flex col justify-content-end"
            >
              <h5>{sos.Registrar}</h5>
              <br></br>
              <h5>Additional Registrar</h5>
            </div>
          </div>
          <div>
            <h5>Distributions:</h5>
            <ol>
              <li>All Directors, CUI System</li>
              <li>Incharge Academics, CUI Campuses</li>
              <li>
                Dean, Faculty of Information Sciences and Technology, CUI{" "}
              </li>
              <li>Chairperson, Department of Computer Science, CUI</li>
              <li>
                All HoDs/Incharge of Academics/Examinations Sections, CUI
                Campuses
              </li>
              <li>Internal Distributions, Registrar Office, CUI</li>
            </ol>
          </div>
          <div>
            <h5>CC:</h5>
            <ol>
              <li>PS to Rector CUI</li>
              <li>PS to Registrar CUI</li>
            </ol>
          </div>
          <div>
            {sos?.Selected?.map((category) => (
              <>
                <h5>{category.CategoryName}</h5>
                <table className="table table-bordered">
                  <thead style={{ textAlign: "center" }}>
                    <tr>
                      <th className="col-1">S. No</th>
                      <th className="col-2">Course Code</th>
                      <th className="col-5">Course Title</th>
                      <th className="col-2">Credit Hours</th>
                      <th className="col-2">Pre-requisite (s)</th>
                    </tr>
                  </thead>
                  <tbody style={{ textAlign: "center" }}>
                    {category?.EnteredCourse?.map((course, index) => (
                      <tr>
                        <td className="col-1">{index + 1}</td>
                        <td className="col-2">{course.Code}</td>
                        <td className="col-5">{course.Name}</td>
                        <td className="col-2">{`${course.Credit}(${course.LectureHoursWeek},${course.LabHoursWeek})`}</td>
                        <td className="col-2">
                          {course?.PreRequisites?.map((preReq) => (
                            <span>
                              {preReq.Code}
                              {preReq.length > 1 ? ", " : ""}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
