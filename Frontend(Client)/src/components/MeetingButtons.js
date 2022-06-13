import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            style={{ height: 400, width: "100%" }}
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
        onClick={togglePopup}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Create Meeting
      </Button>

      {isOpen && (
        <Popup
          content={
            <>
              <MeetingForm id={props.id} onOpen={setIsOpen} />
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}
