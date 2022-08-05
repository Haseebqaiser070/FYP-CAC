import React, { useState } from "react";
import "./css/styles.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

function OpenPrograms() {
  const [Program, setProgram] = useState("");
  const [openProgram, setOpenProgram] = useState(false);
  const handleCloseProgram = () => setOpenProgram(false);
  <Modal
    openProgram={openProgram}
    onClose={handleCloseProgram}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <FormControl fullWidth size="small">
        <InputLabel id="taskType">Select Program</InputLabel>
        <Select
          className="mb-4"
          labelId="selectdegree"
          id="selectdegree"
          value={Program}
          label="Select Degree"
          onChange={(e) => setProgram(e.target.value)}
          autoWidth
        >
          <MenuItem value={"BS"}>Computer Science</MenuItem>
          <MenuItem value={"MS"}>Data Science</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginTop: 16 }}
        // onClick={}
      >
        Next
      </Button>
    </Box>
  </Modal>;
}

export default function CreateSOS() {
  const [Degree, setDegree] = useState("");

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginTop: 16 }}
        onClick={() => setOpen(true)}
      >
        CreateSOS
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <FormControl fullWidth size="small">
            <InputLabel id="taskType">Select Degree</InputLabel>
            <Select
              className="mb-4"
              labelId="selectdegree"
              id="selectdegree"
              value={Degree}
              label="Select Degree"
              onChange={(e) => setDegree(e.target.value)}
              autoWidth
            >
              <MenuItem value={"BS"}>BS</MenuItem>
              <MenuItem value={"MS"}>MS</MenuItem>
              <MenuItem value={"p.hd"}>P.hd</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginTop: 16 }}
            onClick={() => setOpenProgram(true)}
          >
            Next
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
