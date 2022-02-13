import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";

export default function EditButton() {
  return (
    <div>
      {" "}
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={null}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Edit
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
