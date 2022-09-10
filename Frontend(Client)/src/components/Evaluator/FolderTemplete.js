import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FolderTemplete() {
  const [open, setOpen] = React.useState(true);
  axios.defaults.withCredentials = true;
  const { id } = useParams();
  useEffect(() => {
    getFolderData();
  }, []);
  //const [Folder,setFolder]=useState({folder:{files:[],ICEF:null,Obe:null}})

  const getFolderData = async () => {
    const res = await axios.get(
      `http://localhost:4000/EvalFolders/showComp/${id}`
    );
    console.log(res.data);
    setFolder(res.data);
  };
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

        <div className="col-9" style={{ padding: 10 }}>
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
            <div style={{ marginTop: 50 }}>
              <p className="mb-4 pb-4">Insert Delivery Record pdf here</p>
            </div>
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
            <div style={{ marginTop: 50 }}>
              <h3 className="mb-4 pb-4">Assignment No. </h3>
              <p>Insert Assignment PDF here</p>
              <Card
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: 30,
                  marginTop: 60,
                  marginBottom: 20,
                }}
              >
                <div className="row">
                  <div className="col">
                    <TextField
                      className="mb-4"
                      label="CLO NO iN CDF"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={}
                      // onChange={

                      // }
                    />
                  </div>
                  <div className="col mb-4 pl-4 ml-4">
                    <FormControl>
                      <FormLabel>Is it have correct Mapping?</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio size="small" />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio size="small" />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextField
                      className="mb-4"
                      label="BTL LEVEL iN CDF"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={}
                      // onChange={

                      // }
                    />
                  </div>
                  <div className="col mb-4">
                    <FormControl>
                      <FormLabel>Is it have correct BTL Level ?</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio size="small" />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio size="small" />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div>
                  <TextField
                    multiline={true}
                    rows={2}
                    label="Other Comments:"
                    className="mb-4"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // value={}
                    // onChange={

                    // }
                  />
                  <TextField
                    multiline={true}
                    rows={3}
                    label="Feedback:"
                    className="mb-4"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // value={}
                    // onChange={

                    // }
                  />
                  <Button
                    style={{ float: "right" }}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Card>
            </div>
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
            <div style={{ marginTop: 50 }}>
              <h3 className="mb-4 pb-4">Quiz No. </h3>
              <p>Insert Quiz PDF here</p>
              <Card
                style={{
                  backgroundColor: "#f5f5f5",
                  padding: 30,
                  marginTop: 60,
                  marginBottom: 20,
                }}
              >
                <div className="row">
                  <div className="col">
                    <TextField
                      className="mb-4"
                      label="CLO NO iN CDF"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={}
                      // onChange={

                      // }
                    />
                  </div>
                  <div className="col mb-4 pl-4 ml-4">
                    <FormControl>
                      <FormLabel>Is it have correct Mapping?</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio size="small" />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio size="small" />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <TextField
                      className="mb-4"
                      label="BTL LEVEL iN CDF"
                      variant="outlined"
                      size="small"
                      fullWidth
                      // value={}
                      // onChange={

                      // }
                    />
                  </div>
                  <div className="col mb-4">
                    <FormControl>
                      <FormLabel>Is it have correct BTL Level ?</FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio size="small" />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio size="small" />}
                          label="No"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <div>
                  <TextField
                    multiline={true}
                    rows={2}
                    label="Other Comments:"
                    className="mb-4"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // value={}
                    // onChange={

                    // }
                  />
                  <TextField
                    multiline={true}
                    rows={3}
                    label="Feedback:"
                    className="mb-4"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // value={}
                    // onChange={

                    // }
                  />
                  <Button
                    style={{ float: "right" }}
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Card>
            </div>
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
            <div style={{ marginTop: 50 }}>
              <p className="mb-4 pb-4">Insert MidTerm pdf here</p>
            </div>
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
            <div style={{ marginTop: 50 }}>
              <p className="mb-4 pb-4">Insert Terminal pdf here</p>
            </div>
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
            <div style={{ marginTop: 50 }}>
              <h3 className="mb-4 pb-4">ICEF FORM</h3>
              <p>Insert ICEF pdf here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
