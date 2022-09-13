import React, { useState, useEffect } from "react";
import "./css/styles.css";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import axios from "axios";
import { Autocomplete } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function TaskDetails() {
  return (
    <div>
      <h2>Create Task</h2>
      <TextField
        label="Course Name"
        variant="outlined"
        size="small"
      ></TextField>

      <TextField
        label="Course Description"
        variant="outlined"
        size="small"
      ></TextField>

      <InputLabel id="taskType">Assign Course</InputLabel>
      <Select
        className="mb-4"
        labelId="courseAssign"
        id="courseAssign"
        //   value={age}
        label="Assign Teacher"
        //   onChange={null}
        autoWidth
      >
        <MenuItem value={"Programming Fundamentals"}>
          Programming Fundamentals
        </MenuItem>
      </Select>
    </div>
  );
}

export default function EditTasks(props) {
  axios.defaults.withCredentials = true;
  const [Avail, setAvail] = useState([]);
  const [RepoCourse, setRepoCourse] = useState([]);
  console.log("pre", props.pre);
  const [obj, setobj] = useState([]);
  console.log("obj", obj);
  console.log("RepoCourse", RepoCourse);
  useEffect(async () => {
    await getRepoCourse();
    await getobj();
  }, []);

  const getobj = async () => {
    console.log(props.pre._id);
    const res = await axios.get(
      `http://localhost:4000/Task/showOneInit/${props.pre._id}`
    );
    setobj([...res.data.Task]);
  };

  const getRepoCourse = async () => {
    const response = await axios.get("http://localhost:4000/RepoCourse/show");
    setRepoCourse([...response.data]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(obj);
    let verify = true;
    obj.forEach((e) => {
      console.log("e", e);
      if (
        e.User == "" ||
        e.Deadline == "" ||
        e.Status == "" ||
        e.Course == ""
      ) {
        verify = false;
      }
    });
    if (verify) {
      console.log("23s");
      const res = await axios.put("http://localhost:4000/Task/Update", {
        obj,
        id: props.pre._id,
      });
      setobj([]);
      props.func();
    } else {
      alert("Empty Field");
    }
  };
  return (
    <div className="container" style={{ width: "100%", padding: 20 }}>
      <Card variant="outlined">
        <Box
          className="row  p-3"
          component="form"
          onSubmit={handleSubmit}
          sx={{ minWidth: 275 }}
        >
          <h2>Create Task</h2>
          <CardContent>
            <div className="col">
              <TextField
                className="mb-4"
                id="outlined-basic"
                label="Task Type"
                variant="outlined"
                value={props.pre.taskType}
                size="small"
                fullWidth
              />
            </div>
            {obj.length > 0 &&
              obj.map((oo, index) => {
                return (
                  <>
                    <div className="row my-4">
                      <div className="col-8">
                        <h3 style={{ textAlign: "start" }}>
                          <b>TASK {index + 1}</b>
                        </h3>
                      </div>
                      <div className="col-4">
                        {obj.length > 1 && (
                          <FormControl>
                            <Button
                              style={{
                                backgroundColor: "red",
                                borderRadius: "100px",
                              }}
                              variant="contained"
                              color="primary"
                              size="medium"
                              onClick={() => {
                                const clone = [...obj];
                                const a = clone.splice(index, 1);
                                console.log(
                                  "aaaaaaaaaaaaa",
                                  a,
                                  "cloneeeeeee",
                                  clone
                                );
                                setobj([...clone]);
                              }}
                            >
                              <CloseIcon />
                            </Button>
                          </FormControl>
                        )}
                      </div>
                    </div>
                    {props.pre.taskType == "Create Catalog Description" ||
                  props.pre.taskType == "Create CDF" ||
                  props.pre.taskType == "Create Syllabus" ? (
                    <div className="col">
                      <FormControl fullWidth size="small">
                        <InputLabel id="taskType">Assign Course</InputLabel>
                        <Select
                          className="mb-4"
                          labelId="courseAssign"
                          id="courseAssign"
                          value={obj[index].Course}
                          label="Assign Teacher"
                          onChange={(e) => {
                            const clone = [...obj];
                            clone[index].Course = e.target.value;
                            setobj([...clone]);
                          }}
                          autoWidth
                        >
                          {RepoCourse.map((a) => {
                            return (
                              <MenuItem value={a}>
                                {a.Code + "  " + a.Name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  ) : props.pre.taskType == "Create SOS" ? (
                    <div className="col">
                      <FormControl fullWidth size="small">
                        <InputLabel id="taskType">Assign Course</InputLabel>
                        <Select
                          className="mb-4"
                          labelId="courseAssign"
                          id="courseAssign"
                          value={obj[index].Program}
                          label="Assign Teacher"
                          autoWidth
                        >
                          <MenuItem value={props.pre.Program}>
                            {props.pre.Program}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  ) : props.pre.taskType == "Update SOS" ? (
                    <div>
                      <div className="col">
                        <FormControl fullWidth size="small">
                          <InputLabel id="taskType">Assign Course</InputLabel>
                          <Select
                            className="mb-4"
                            labelId="courseAssign"
                            id="courseAssign"
                            value={obj[index].Program}
                            label="Assign Teacher"
                            autoWidth
                          >
                            <MenuItem value={props.pre.Program}>
                              {props.pre.Program}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  ) : props.pre.taskType == "Update CDF" ? (
                    <div>
                      <Autocomplete
                        className="mb-4"
                        multiple
                        id="tags-standard"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13]]}
                        //   onChange={}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Select CDF"
                            placeholder="Select CDF"
                          />
                        )}
                      />
                    </div>
                  ) : props.pre.taskType == "Update Syllabus" ? (
                    <div>
                      <Autocomplete
                        className="mb-4"
                        multiple
                        id="tags-standard"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13]]}
                        //   onChange={}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Select Syllabus"
                            placeholder="Select Syllabus"
                          />
                        )}
                      />
                    </div>
                  ) : props.pre.taskType == "Update Lab Manual" ? (
                    <div>
                      <Autocomplete
                        className="mb-4"
                        multiple
                        id="tags-standard"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13]]}
                        //   onChange={}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Select Lab Manual"
                            placeholder="Select Lab Manual"
                          />
                        )}
                      />
                    </div>
                  ) : (
                    ""
                  )}


                    <div className="col">
                      <FormControl fullWidth size="small">
                        <InputLabel id="taskType">Status</InputLabel>
                        <Select
                          className="mb-4"
                          labelId="taskType"
                          id="taskType"
                          label="Assign Teacher"
                          autoWidth
                          value={obj[index].Status}
                          onChange={(e) => {
                            const clone = [...obj];
                            clone[index].Status = e.target.value;
                            setobj([...clone]);
                          }}
                        >
                          <MenuItem value={oo.Course} selected hidden>
                            {oo.Status}
                          </MenuItem>
                          ;<MenuItem value={"Assigned"}>Assigned</MenuItem>
                          <MenuItem value={"Revision"}>Revision</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div>
                      <label>Deadline</label>
                      <input
                        className="mb-4"
                        // inputProps={{min = new Date.toISOString.slice(0,16)}}
                        value={oo.Deadline}
                        onChange={(e) => {
                          const clone = [...obj];
                          clone[index].Deadline = e.target.value;
                          setobj([...clone]);
                        }}
                        style={{ width: "100%" }}
                        type="datetime-local"
                        placeholder="Deadline"
                      ></input>
                    </div>
                  </>
                );
              })}
          </CardContent>
          <div className="col">
            <CardActions>
              <Stack>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => {
                    setobj([
                      ...obj,
                      {
                        taskType: props.pre.taskType,
                        User: "",
                        Deadline: "",
                        Status: "",
                        Course: "",
                      },
                    ]);
                  }}
                >
                  Add
                </Button>
              </Stack>
            </CardActions>
          </div>
          <div className="col">
            <CardActions>
              <Stack>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={() => {
                    TaskDetails;
                  }}
                >
                  Create Task
                </Button>
              </Stack>
            </CardActions>
          </div>
        </Box>
      </Card>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
