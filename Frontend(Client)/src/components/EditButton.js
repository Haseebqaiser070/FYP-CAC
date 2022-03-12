import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function EditButton({ row }) {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => navigate(`/admin/SchemeofStudies/${row._id}`)}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Create CDF
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => navigate(`/admin/SchemeofStudies/${row._id}`)}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Create Syllabus
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={null}
      >
        <AiOutlineCloudDownload style={{ marginRight: 10 }} />
        Download
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={null}
      >
        <AiFillEye size={20} color="#fff" />
      </Button>
    </div>
  );
}
