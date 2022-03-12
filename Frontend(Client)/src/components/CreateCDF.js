import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CourseDescription() {
  const [mainTopic, setmainTopic] = useState("");
  const [catalogue, setCatalogue] = useState("");
  const [Course, setCourse] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getCourse();
  }, [id]);

  const getCourse = async () => {
    const response = await axios.get(`http://localhost:4000/Course/${id}`);
    console.log(response.data);
    setCourse(response.data);
    setLoading(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setCatalogue(`${catalogue} ${mainTopic}; `);
    setmainTopic("");
  };

  return loading ? (
    <CircularProgress />
  ) : (
    <div class="container" style={{ padding: 20 }}>
      <table class="table">
        <thead>
          <tr class="cdf-header">
            <th colspan="2">Cource Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Course Code: <b>{Course?.Code}</b>
            </td>
            <td>
              Course Title: <b>{Course?.Name}</b>
            </td>
          </tr>
          <tr>
            <td>
              Credit Hour: <b>{Course?.Credit}</b>
            </td>
            <td>
              Lecture Hours/Week: <b>{Course?.LectureHoursWeek}</b>
            </td>
          </tr>
          <tr>
            <td>
              Lab Hours/Week: <b>{Course?.LabHoursWeek}</b>
            </td>
            <td>
              Pre-Requisites: <b>{Course?.PreRequisites}</b>
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginBottom: 20, marginTop: 20 }}>
        <form>
          <div class="row">
            <div class="col-9">
              <input
                class="form-control"
                id="maintopic"
                type="text"
                placeholder="Add Main Topic"
                value={mainTopic}
                onChange={(e) => setmainTopic(e.target.value)}
              ></input>
            </div>
            <div class="col-3 d-grid gap-2">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                onClick={handleAdd}
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>

      <table class="table table-responsive">
        <thead>
          <tr class="cdf-header">
            <th>Catalogue Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cd">
            <td>{catalogue}</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginBottom: 20, marginTop: 20 }}>
        <form>
          <div class="row">
            <div class="col-2">
              <input
                class="form-control"
                id="unit"
                type="text"
                placeholder="Add Unit"
                value={mainTopic}
                onChange={(e) => setunit(e.target.value)}
              ></input>
            </div>

            <div class="col-4">
              <input
                class="form-control"
                id="subtopics"
                type="text"
                placeholder="Add Sub Topics"
                value={mainTopic}
                onChange={(e) => setsubtopics(e.target.value)}
              ></input>
            </div>

            <div class="col-3">
              <input
                class="form-control"
                id="teachingHours"
                type="text"
                placeholder="Add No. of Teaching Hours"
                value={mainTopic}
                onChange={(e) => setteachingHours(e.target.value)}
              ></input>
            </div>

            <div class="col-3 d-grid gap-2">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                onClick={handleAdd}
              >
                ADD
              </button>
            </div>
          </div>
        </form>
      </div>
      <table class="table table-bordered">
        <thead>
          <tr class="cdf-header">
            <th scope="col" colspan="3">
              Unit wise Major Topics
            </th>
          </tr>
          <tr style={{ textAlign: "center" }}>
            <th class="col-3" scope="col">
              Unit
            </th>
            <th class="col-6" scope="col">
              Topic
            </th>
            <th class="col-3" scope="col">
              No. of Teaching Hours
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          <tr>
            <td class="col-3">1</td>
            <td class="col-6">1</td>
            <td class="col-3">1</td>
          </tr>

          <tr>
            <td>Total Contact Hours</td>
            <td></td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
