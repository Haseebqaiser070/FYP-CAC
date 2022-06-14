import React, { useEffect, useState } from "react";
import "./css/styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material/styles";
import { AiOutlineClockCircle, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MenuItem, Modal, OutlinedInput } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const times = [
  "8:30-10:00",
  "10:00-11:30",
  "11:30-1:00",
  "1:00-2:30",
  "2:30-4:00",
  "4:00-5:30",
];

function getStyles(time, availabilityTime, theme) {
  return {
    fontWeight:
      availabilityTime.indexOf(time) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const columns = [
  {
    field: "mon",
    headerName: "Monday",
    flex: 1,
  },
  {
    field: "tue",
    headerName: "Tuesday",
    flex: 1,
  },
  {
    field: "wed",
    headerName: "Wednesday",
    flex: 1,
  },
  {
    field: "thur",
    headerName: "Thusday",
    flex: 1,
  },
  {
    field: "fri",
    headerName: "Friday",
    flex: 1,
  },
  {
    field: "sat",
    headerName: "Saturday",
    flex: 1,
  },
];

export default function CacAvailability() {
  const theme = useTheme();
  const [availabilityTime, setAvailabilityTIme] = React.useState([]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [rows, setRows] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAvailabilityTIme(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="py-4">
        <b>Meeting Availability</b>
      </h1>
      <div className="d-flex justify-content-end mb-4">
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginTop: 16 }}
          onClick={handleOpen}
        >
          <AiOutlineClockCircle style={{ marginRight: 10 }} />
          Set/Edit Availability
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <>
            <div className="form-group py-2">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-multiple-name-label">Monday</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  name="mon"
                  multiple
                  value={availabilityTime}
                  onChange={handleChange}
                  input={<OutlinedInput label="Monday" />}
                  MenuProps={MenuProps}
                  autoWidth
                >
                  {times.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      style={getStyles(time, availabilityTime, theme)}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="form-group py-2">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-multiple-name-label">Tuesday</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  name="tue"
                  multiple
                  value={availabilityTime}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tuesday" />}
                  MenuProps={MenuProps}
                  autoWidth
                >
                  {times.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      style={getStyles(time, availabilityTime, theme)}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="form-group py-2">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-multiple-name-label">Wednesday</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  name="wed"
                  multiple
                  value={availabilityTime}
                  onChange={handleChange}
                  input={<OutlinedInput label="Wednesday" />}
                  MenuProps={MenuProps}
                  autoWidth
                >
                  {times.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      style={getStyles(time, availabilityTime, theme)}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="form-group py-2">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-multiple-name-label">Thursday</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  name="thur"
                  multiple
                  value={availabilityTime}
                  onChange={handleChange}
                  input={<OutlinedInput label="Thursday" />}
                  MenuProps={MenuProps}
                  autoWidth
                >
                  {times.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      style={getStyles(time, availabilityTime, theme)}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="form-group py-2">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-multiple-name-label">Friday</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  name="fri"
                  multiple
                  value={availabilityTime}
                  onChange={handleChange}
                  input={<OutlinedInput label="Friday" />}
                  MenuProps={MenuProps}
                  autoWidth
                >
                  {times.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      style={getStyles(time, availabilityTime, theme)}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="form-group py-2">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-multiple-name-label">Saturday</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  name="sat"
                  multiple
                  value={availabilityTime}
                  onChange={handleChange}
                  input={<OutlinedInput label="Saturday" />}
                  MenuProps={MenuProps}
                  autoWidth
                >
                  {times.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                      style={getStyles(time, availabilityTime, theme)}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginTop: 16 }}
              //   onClick={handleSubmit}
            >
              <AiOutlineClockCircle style={{ marginRight: 10 }} />
              Submit
            </Button>
          </>
        </Box>
      </Modal>

      <div>
        <DataGrid
          style={{ height: 400, width: "100%" }}
          columns={columns}
          rows={rows}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
