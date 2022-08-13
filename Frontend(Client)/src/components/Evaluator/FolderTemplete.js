import { Card } from "@mui/material";
import React from "react";
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
import StarBorder from "@mui/icons-material/StarBorder";

export default function FolderTemplete() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className="container"
      style={{
        height: 700,
        width: "100%",
        backgroundColor: "#f7f7f7",
      }}
    >
      <div className="row">
        <div
          className="col-2"
          style={{ marginLeft: 10, marginRight: 10, padding: 20 }}
        >
          <h5>Quick Links</h5>
        </div>

        <div className="col-12" style={{ padding: 10 }}>
          <div>
            <h1
              style={{
                backgroundColor: "#2ac0dc",
                paddingTop: "30%",
                paddingBottom: "30%",
              }}
            >
              Lecture Delivery Record
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "#35d764",
                paddingTop: "30%",
                paddingBottom: "30%",
              }}
            >
              Assignments
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "#ffd700",
                paddingTop: "30%",
                paddingBottom: "30%",
              }}
            >
              Quizzes
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "#fe5381",
                paddingTop: "30%",
                paddingBottom: "30%",
              }}
            >
              MidTerm Exam
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "#fdba74",
                paddingTop: "30%",
                paddingBottom: "30%",
              }}
            >
              Terminal
            </h1>
          </div>
          <div>
            <h1
              style={{
                backgroundColor: "#2ac0dc",
                paddingTop: "30%",
                paddingBottom: "30%",
              }}
            >
              Outcome Based Education
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
