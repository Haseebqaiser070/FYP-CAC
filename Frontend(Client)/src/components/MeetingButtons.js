import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { AiFillEye, AiFillEdit, AiOutlineCloudDownload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MeetingForm from "./MeetingForm";
import Popup from "./AddCourceForm";

export default function MeetingButton(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(props);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={null}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Cancel
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
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
      >
        <AiFillEdit style={{ marginRight: 10 }} />
        Edit
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
