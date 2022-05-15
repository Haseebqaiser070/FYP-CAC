import React, { useState, useEffect } from "react";
import "./css/styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 38;
const ITEM_PADDING_TOP = 6;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["Admin", "CAC Member", "Faculty", "Evaluator"];

function getStyles(name, userRole, theme) {
  return {
    fontWeight:
      userRole.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Users() {
  const [faculty, setfaculty] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("http://localhost:4000/Faculty/show");
    setfaculty(response.data);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/Faculty/${id}`);
    getData();
  };

  const theme = useTheme();
  const [userRole, setuserRole] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setuserRole(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div
      className="container"
      style={{ height: 700, width: "100%", padding: 20 }}
    >
      <h1 className="mt-4 mb-4">Faculty Members</h1>
      <table className="table" id="list">
        <thead>
          <tr className="d-flex">
            <th className="col-2">User Name</th>
            <th className="col-3">Email</th>
            <th className="col-3">Assign Role</th>
            <th className="col-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((facultymember) => {
            return (
              <tr className="d-flex" scope="row" key={facultymember._id}>
                <td className="col-2">
                  {facultymember.FirstName} {facultymember.SecondName}
                </td>
                <td className="col-3">{facultymember.Email}</td>
                <td className="col-3">
                  <FormControl sx={{ m: 1, width: 200 }} size="small">
                    <InputLabel id="demo-multiple-name-label">
                      Assign Role
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      multiple
                      value={userRole}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, userRole, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </td>
                <td className="col-4">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                  >
                    <AiFillEdit style={{ marginRight: 10 }} />
                    Edit
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => handleDelete(facultymember._id)}
                  >
                    <AiFillDelete style={{ marginRight: 10 }} />
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
