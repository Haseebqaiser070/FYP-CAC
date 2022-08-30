import React, { useState,useEffect } from "react";
import "../css/styles.css";
import Button from "@mui/material/Button";
import Popup from "../AuxillaryComponents/PopupFunction";
import { Box, Card, Modal } from "@mui/material";

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

export default function LabFolder() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  
  const [folders, setfolders] = useState("");

  useEffect(()=>{
    getLab()
  },[])
 
  const[Assignments1,setAssignments1]=useState([])
  const[Assignments2,setAssignments2]=useState([])
  
  const getLab = async () => {
    const res = await axios.get(
      "http://localhost:4000/Content/showLab"
    );
    setfolders(res.data);  
    var assignments1= [];
    var assignments2= [];  
    for (var i=1;i<=parseInt(res.data.Round1.Assignment)+parseInt(res.data.Round2.Assignment); i++) {
      if(i<=parseInt(res.data.Round1.Assignment)){
        assignments1.push(i);
      }
      else{
        assignments2.push(i);
      }
    }
    setAssignments1([...assignments1])
    setAssignments2([...assignments2])
  };

  return (
    <div class="container" style={{ height: 700, width: "100%", padding: 20 }}>
      <h1 style={{ marginBottom: 30 }}>Course Folder Maintainence</h1>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload ICEF</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload OBE</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>
          </form>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Best</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Average</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Worst</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Question Paper</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Solution</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="mb-3">
              <label class="form-label" for="customFile">
                <b>Upload Award List</b>
              </label>
              <input type="file" class="form-control" id="customFile" />
            </div>

            <div class="d-grid">
              <a class="btn btn-primary btn-block" href="login.html">
                SUBMIT
              </a>
            </div>
          </form>
        </Box>
      </Modal>

      <table class=" table  tablecourse">
        <tbody>
          <div className="row">
            <div className="col">
              <tr
                className="card p-4 m-2"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <th className="py-2">
                  <h2>Round 1</h2>
                  <h4
                    style={{ color: "red", textAlign: "center", marginTop: 20 }}
                  >
                    Deadline: 07/13/2022 04:38 PM
                  </h4>
                </th>                  
                {Assignments1.map((i)=>{return(
                     <td className="d-grid py-2 px-2">
                     <button
                       class="btn btn-block py-2 btn-primary"
                       id="assignmet1"
                       type="button"
                       onClick={handleOpen}
                     >
                       Assignment {i}
                     </button>
                   </td>)
                    })
                  }
              {folders!=""&&folders.Round1.MidorSessioanls=="Mid"?(
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="Mid"
                    type="button"
                    onClick={handleOpen}
                  >
                    Midterm Exam
                  </button>
                </td>):(<>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="Sessional1"
                    type="button"
                    onClick={handleOpen}
                  >
                    Sessional 1
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                <button
                  class="btn btn-block py-2 btn-primary"
                  id="Sessional2"
                  type="button"
                  onClick={handleOpen}
                >
                  Sessional 2
                </button>
              </td>
              </>)}
                <td className="d-grid py-4 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="quiz1"
                    type="button"
                    // onClick={handleOpen}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </div>
            <div className="col">
              <tr
                className="card m-2 p-4"
                style={{
                  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                }}
              >
                <th className="py-2">
                  <h2>Round 2</h2>
                  <h4
                    style={{ color: "red", textAlign: "center", marginTop: 20 }}
                  >
                    Deadline: 07/13/2022 04:38 PM
                  </h4>
                </th>                    
                  
                {Assignments2.map((i)=>{return(
                     <td className="d-grid py-2 px-2">
                     <button
                       class="btn btn-block py-2 btn-primary"
                       id="assignmet2"
                       type="button"
                       onClick={handleOpen}
                     >
                       Assignment {i}
                     </button>
                   </td>)
                    })
                  }

                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen}
                  >
                    Terminal Exam
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen1}
                  >
                    ICEF
                  </button>
                </td>
                <td className="d-grid py-2 px-2">
                  <button
                    class="btn py-2  btn-block btn-primary"
                    id="quiz1"
                    type="button"
                    onClick={handleOpen2}
                  >
                    OBE
                  </button>
                </td>
                <td className="d-grid py-4 px-2">
                  <button
                    class="btn btn-block py-2 btn-primary"
                    id="quiz1"
                    type="button"
                    // onClick={handleOpen}
                  >
                    Submit
                  </button>
                </td>
              </tr>
            </div>
          </div>
        </tbody>
      </table>
    </div>
  );
}
