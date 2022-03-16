import React, { useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import MeetingButton from "./MeetingButtons";

export default function MeetingForm({ onOpen, id }) {
  const [data, setData] = useState({});

  const handleData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { res } = await axios.put("http://localhost:4000/Meeting/update", {
      ...data,
      id,
    });
    console.log(res);
    onOpen(false);
  };
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        <b>Create Meeting</b>
      </h3>
      <form>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block" }} for="title">
            <b>Meeting Title</b>
          </label>
          <input
            name="subject"
            onChange={handleData}
            className="form-control"
            id="title"
            type="text"
            placeholder="Enter title "
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block" }} for="title">
            <b>Select Date & Time</b>
          </label>
          <input
            name="time"
            onChange={handleData}
            style={{ width: "100%" }}
            type="datetime-local"
          ></input>
        </div>

        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block" }} for="title">
            <b>Meeting Agenda</b>
          </label>
          <textarea
            name="meetingAgenda"
            onChange={handleData}
            placeholder="Add Meeting Agenda"
            rows="4"
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          type="button"
          className="btn btn-primary"
        >
          Create Meeting
        </button>
      </form>
    </div>
  );
}
