import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import {
  AiFillEye,
  AiFillEdit,
  AiFillDelete,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MeetingForm from "./MeetingForm";
import Popup from "./AddCourceForm";
import axios from "axios";
import { Box, Card, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  //   border: "2px solid #000",

  boxShadow: 24,
  p: 4,
};

export default function MeetingButton(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => setOpen1(false);
  const [rows, setRows] = useState([]);
  console.log(props);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const handleDelete = async (e) => {
    const id = props.id;
    const { res } = await axios.delete(
      `http://localhost:4000/Meeting/delete/${id}`
    );
    console.log(res);
  };

  useEffect(() => {
    const getAll = async () => {
      var { data } = await axios.get("http://localhost:4000/Meeting/all");
      console.log("data", data);
      data.forEach((meeting) => {
        data = meeting.availability.map((avail) => {
          console.log("avail", avail);
          return {
            cacMember: avail.teacher_id.Name,
            id: meeting._id,
            mon: avail.time.mon,
            tue: avail.time.tue,
            wed: avail.time.wed,
            thur: avail.time.thur,
            fri: avail.time.fri,
            sat: avail.time.sat,
          };
        });
      });
      console.log("data2", data);

      console.log("Rows", rows);
      setRows(data);
    };

    getAll();
  }, []);

  const columns = [
    {
      field: "cacMember",
      headerName: "CAC Member",
      flex: 1,
    },
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

    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      editable: false,
      renderCell: () => (
        <>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            // onClick={() => setOpen(true)}
          >
            <AiOutlineClockCircle style={{ marginRight: 10 }} />
            Send Reminder
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => setOpen(true)}
      >
        <AiFillEye />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <DataGrid
            style={{ height: 300, width: "100%" }}
            columns={columns}
            rows={rows}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
          <h3>
            <b>Ideal Time: </b>
          </h3>
        </Box>
      </Modal>

      <Button
        type="button"
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={handleDelete}
      >
        <AiFillDelete />
      </Button>

      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={() => setOpen1(true)}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Create Meeting
      </Button>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MeetingForm id={props.id} onOpen={setIsOpen} />
        </Box>
      </Modal>
    </div>
  );
}
