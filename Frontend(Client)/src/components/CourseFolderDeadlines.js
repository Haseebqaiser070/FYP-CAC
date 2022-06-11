import * as React from "react";
import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const style = {
  width: 500,
  bgcolor: "#fff",
  boxShadow: 1,
  p: 4,
};

export default function CourseFolderDeadlines() {
  return (
    <div style={{ height: 700, width: "100%", padding: 20 }}>
      <h1>
        <b>Course Folder Deadlines</b>
      </h1>

      <div style={{ marginTop: 50, padding: 30 }}>
        <Box sx={style}>
          <h3>Quizzes</h3>
        </Box>
      </div>
    </div>
  );
}
